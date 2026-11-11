# SIS 虚拟办公室接入（测试版，只开放给我）：Claude Code 执行指令

> 用法：在 SIS 主程序的仓库开 Claude Code，从「指令」开始整段复制贴上。这一份就是全部，不用再贴别的补充。

---

## 指令

把「SIS 虚拟办公室」接进 SIS（sistudio.app），先做**测试版，只有我的账号能用**。办公室的前端已经写好，你要做的是：
1. 把它放进 SIS。
2. 设好只有我能进的门槛。
3. 把办公室用到的接口和资料字段做齐。

**开始前先做这一步，不要猜：** 看懂这个仓库的框架、登录方式（cookie 还是 token）、有没有 CSRF、API 前缀，并确认之前做好的这些东西都在：
- 用户的 `job`、`job_other`、`show_in_ranking` 字段。
- `job_logs` 表。
- 排行接口。

用 5 行以内告诉我你的理解和打算怎么做，等我确认后再动手。

### 背景（你需要知道的）

- 办公室是**一个独立的 HTML 文件**，放在公开的 GitHub 仓库 `Madgan/Mad`（默认分支），路径 `sis-office/3d.html`。
  - 文件里所有 JS 和 CSS 都是内嵌的。
  - 会从 `cdnjs.cloudflare.com` 载入 three.js，从 Google Fonts 载入字体。
- 办公室通过一个配置对象切换模式：
  - 有 `window.SIS_OFFICE_CONFIG = {live: true, ...}` 时，接 SIS 真实资料。
  - 没有时，用内置的示例资料（现在给别人看的预览就是这个模式）。
- **跟账号同步的资料**（换手机打开都一样）：
  - 名字、职业。
  - 形象（捏好的人物）。
  - 等级（经验值）。
  - 每日任务进度、签到天数、新手教程看过没有、房间提示看过没有、发帖数。
  - 排行开关、同行接单排行（含过去两个月）、接单钟记录。
- **每台手机各自保存的**：画质设定（每台手机性能不同，这是故意的）。
- **还是示例资料的部分（这次不用做）**：同行圈、询价、项目进度、发票与账目、数据大屏上方的数字。

### 1. 把办公室放到 `/office`

- 把 `sis-office/3d.html` 复制进 SIS 仓库，由 SIS 在 `https://sistudio.app/office` 提供这个页面。
- **必须跟 SIS 的 API 同一个网域**，这样登录 cookie 才会带上。不要放到别的网域或 CDN。
- **不要修改办公室文件本身。** 配置由服务器在送出页面时插入（第 3 点），以后办公室更新时，直接覆盖这个文件就行。
- 在 README 或注释里写清楚以后怎么更新：从 `Madgan/Mad` 默认分支的 `sis-office/3d.html` 复制过来覆盖。

### 2. 门槛：只有我能进

- 新增环境变量 `OFFICE_BETA_USER_IDS`，内容是用逗号分隔的用户 ID，先只放我的 ID。告诉我怎么查到自己的用户 ID。
- `/office` 的规则：
  - 没登录：跳到登录页，登录后回到 `/office`。
  - 已登录但不在名单里：回 **404**。不要回 403，不要让人知道这个页面存在。
  - 在名单里：正常显示。
- 门槛**必须在服务器端判断**，不能只在前端藏起来。
- 测试期间，SIS 的选单或任何页面都**不要放 `/office` 的入口**，我会直接输入网址打开。
- 不要把我的 email 或 ID 写进代码，只放在环境变量里。

### 3. 插入配置

送出 `/office` 页面时，在办公室文件里**第一个 `<script` 标签之前**插入：

```html
<script>
window.SIS_OFFICE_CONFIG = {
  live: true,
  apiBase: '/api',            // 改成 SIS 实际的 API 前缀
  loginUrl: '/login',         // 改成 SIS 实际的登录页
  headers: { 'X-CSRF-Token': '每次送出页面时产生的 token' },  // SIS 没有 CSRF 就写 {}
  paths: { me: '/me', ranking: '/ranking', jobLogs: '/job-logs' }  // SIS 实际路径不同就改这里
};
</script>
```

- `paths` 里的三个路径会接在 `apiBase` 后面。如果 SIS 现有的接口路径不一样，**改配置就好，不要为了配合办公室去改现有接口的路径**。
- 如果 SIS 有 CSP（内容安全政策），只针对 `/office` 这个页面放行：
  - 内嵌 script 和 style。可以用 nonce，给办公室文件里的 `<script>` 加 nonce。
  - `cdnjs.cloudflare.com` 的 script。
  - `fonts.googleapis.com` 的 style 和 `fonts.gstatic.com` 的字体。

### 4. 资料库要新增的字段

在用户表（或 profile 表）加：

| 字段 | 类型 | 用途 |
|---|---|---|
| `office_avatar` | JSON，可空 | 形象 |
| `office_xp` | 整数，默认 0 | 经验值 |
| `office_xp_day` | 日期，可空 | 今天是哪一天（算每日上限用） |
| `office_xp_day_gain` | 整数，默认 0 | 今天已经加了多少经验值 |
| `office_state` | JSON，可空 | 每日任务、签到天数等进度 |

`job`、`job_other`、`show_in_ranking` 和 `job_logs` 表之前已经做好，沿用。

### 5. 接口规格（办公室就是照这个写的）

所有请求都会带 `credentials: 'include'`。有 body 的请求是 JSON，并会带上第 3 点 `headers` 里的内容。

| 用途 | 请求 | 成功回传 |
|---|---|---|
| 我的资料 | `GET {apiBase}{me}` | `{ name, job, job_other, show_in_ranking, avatar, xp, office_state }` |
| 改资料 | `PATCH {apiBase}{me}`，body 只带要改的字段（见下面） | 更新后的完整资料，格式同上 |
| 同行排行 | `GET {apiBase}{ranking}?month=YYYY-MM` | `[{ name, studio, job, jobs, is_me }]` |
| 我的接单记录 | `GET {apiBase}{jobLogs}?month=YYYY-MM` | `[{ id, project, amount, client, created_at }]` |
| 敲接单钟 | `POST {apiBase}{jobLogs}`，body `{ project, amount, client }` | `201`，`{ id, project, amount, client, created_at }` |

**`PATCH me` 是部分更新：** body 只带要改的字段，没带的不要动。办公室会送这几种：

| body | 规则 |
|---|---|
| `{ job, job_other }` | 沿用之前的职业验证规则：6 个 key，选 `other` 时 `job_other` 必填。 |
| `{ show_in_ranking }` | 布尔值。 |
| `{ avatar }` | 存进 `office_avatar`，整个覆盖。见下面「形象」。 |
| `{ xp }` | 存进 `office_xp`。见下面「等级」。 |
| `{ office_state }` | 存进 `office_state`，整个覆盖。见下面「进度」。 |

**形象 `avatar`：**
- 必须是 JSON 物件，大小不超过 2 KB。
- 只保留这些 key：`gender`、`skin`、`hair`、`hairColor`、`top`、`topColor`、`bottom`、`bottomColor`、`shoes`、`hat`、`hatColor`、`glasses`、`watch`。其他 key 丢掉。
- 值只能是 20 字以内的字串，或 0 到 50 的整数。不合格回 400。
- 没存过时 `GET me` 回 `avatar: null`。
- 后端不用懂每个值代表什么，办公室读进来时会再检查一次，不认得的值会换回默认。

**等级 `xp`：**
- 必须是整数。等级由办公室自己换算（每 100 XP 升一级），后端只存数字。
- **只能增加：** 比现在小的值直接忽略，回传现在的资料，不报错。
- **同一天（马来西亚时间）最多增加 400：** 超过就回 400，不更新。用 `office_xp_day` 和 `office_xp_day_gain` 记录，换日时归零。
- 这两条规则是为了防止有人改前端刷等级。等级只用来解锁衣服，风险低，不用做更复杂的验证。

**进度 `office_state`：**
- 必须是 JSON 物件，大小不超过 4 KB，否则回 400。内容由办公室自己定义，后端照存照回，不用解析。
- 没存过时 `GET me` 回 `office_state: null`。

**排行：**
- 只回传 `show_in_ranking = true` 的人，最多 20 名，按 `jobs` 从多到少排序。
- `is_me`：这一行是不是请求的人自己。
- `studio`：工作室名称。SIS 没有这个字段就回空字串 `""`。
- **绝对不能带 `amount`、`client` 或任何金额。**
- `month` 可以是过去的月份（办公室会查本月和前两个月）。上榜开关以现在为准：关掉开关的人，过去的月份也不能出现，所以不要存每个月的排行快照。

**接单记录：**
- 只回传请求者自己的。
- `created_at` 用 ISO 8601 格式，例如 `2026-11-11T04:00:00Z`。`client` 可以是 `null`。
- 金额和客户名称只有本人看得到。

**月份和日期按马来西亚时间（UTC+8）切。** 例如 11 月 1 日早上 7 点登记的接单要算在 11 月，不能因为 UTC 还是 10 月 31 日就算进 10 月。排行、接单记录、经验值每日上限，都照这个规则。

**回传格式：** 直接回物件或阵列可以，包一层 `{ data: ... }` 也可以，列表包成 `{ items: [...] }` 也可以，办公室三种都认得。

**错误码：** 办公室会这样处理，请照这个意思回传：
- `401`（没登录或登录过期）：办公室显示「请先登录 SIS」。
- `403`：办公室显示「测试版还没开放给这个账号」。
- 其他错误：办公室显示一行提示，里面有出错的接口路径。

### 6. 办公室会怎么呼叫（方便你对照）

- **打开时：**
  1. `GET me`。
  2. 把账号资料和这台手机的资料合并：
     - 等级取比较高的。
     - 同一天的任务进度合并，任何一台手机做过就算做过。
     - 签到天数取最新的。
  3. 如果合并后有不同，送 `PATCH me`：
     - 账号里还没有形象，而这台手机有：上传形象。
     - 这台手机的等级比账号高：上传 `xp`。
     - 进度合并后跟账号不一样：上传 `office_state`。
  4. `GET job-logs` 三次（本月、上月、前月）。
- **使用中：**
  - 拿到经验值：1.5 秒后送 `PATCH me {xp}`。
  - 进度变了：2 秒后送 `PATCH me {office_state}`。
  - 在衣帽间保存：马上送 `PATCH me {avatar}`。
  - 离开页面或切换 App：还没送出的会马上送出（用 `keepalive`）。
- **改职业、切换排行开关、敲接单钟、看排行：** 每次操作送一个请求。

### 7. 不要做的事

- 不要动同行圈、询价、项目、发票这些（还是示例资料）。
- 不要修改办公室的 HTML 文件内容（配置用插入的方式）。
- 不要改现有接口的路径或回传格式，路径不同就用 `paths` 配合。
- 不要在 log 里记录接单金额或客户名称。

### 验收（逐项测试，结果告诉我）

**门槛：**
- [ ] 我登录后打开 `https://sistudio.app/office`：
  - [ ] 左上角显示我在 SIS 的名字、职业，以及绿色的「测试版」标签。
  - [ ] 点左上角进个人资料，显示「已连接 SIS · 我的名字」。
- [ ] 用另一个账号打开 `/office`，回 404。
- [ ] 没登录时打开 `/office`，会跳到登录页，登录后回到办公室。
- [ ] 办公室开着时登出 SIS，再操作，会跳出「请先登录 SIS」。

**职业和排行：**
- [ ] 在办公室改职业，SIS 个人资料页也变了；反过来在 SIS 改，重新打开办公室，私人办公室的摆设也跟着换。
- [ ] 排行开关在办公室和 SIS 个人资料页两边同步。
- [ ] 在办公室敲接单钟，`job_logs` 多一笔，`created_at` 正确；打开排行开关时，排行的单数加 1。
- [ ] 数据大屏的排行切换「本月 / 上月 / 前月」，各自打到 `?month=YYYY-MM`，结果正确。
- [ ] 在浏览器开发者工具看排行接口的原始回传，没有 `amount`、`client`。

**换手机（用手机 A 和手机 B，或手机和电脑）：**
- [ ] 在 A 捏好形象，资料库 `office_avatar` 有值；B 打开时不会出现捏人画面，人物跟 A 一样。
- [ ] 在 B 的衣帽间换衣服，回到 A 重新打开也是新的。
- [ ] 在 A 去前台签到（+20 XP），资料库 `office_xp` 增加；B 打开时等级一样。
- [ ] 在 A 签到后，B 打开时找前台 Lisa，她说「今天已经签到了」，签到天数一样，也不会再跳出新手教程。
- [ ] 在 A 做完一个任务后马上关掉页面（不等），B 打开时任务也是完成的。

**后端规则：**
- [ ] 直接送一个比现在小的 `xp`，值不变；同一天送超过 +400，回 400，值不变。
- [ ] 送超过 2 KB 或有奇怪 key 的 `avatar`，回 400，或丢掉多余的 key；`office_state` 超过 4 KB，回 400。

**手机：**
- [ ] iPhone Safari 和 Android Chrome 各一，打开都正常。

### 做完回报

1. 改了哪些文件，新增了哪些字段（附 migration）。
2. `OFFICE_BETA_USER_IDS` 怎么设，我的用户 ID 怎么查。
3. 最后用的 `apiBase`、`loginUrl`、`paths` 是什么。
4. 以后办公室更新时，具体要做哪几步。
5. 验收清单每一项的结果；没通过的，写原因。
