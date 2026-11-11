# SIS 虚拟办公室接入（测试版，只开放给我）：Claude Code 执行指令

> 用法：在 SIS 主程序的仓库开 Claude Code，从「指令」开始整段复制贴上。

---

## 指令

把「SIS 虚拟办公室」接进 SIS（sistudio.app），先做**测试版，只有我的账号能用**。办公室的前端已经写好，你要做的是：放到 SIS 里、设好只有我能进的门槛、把办公室用到的接口对齐。

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
- 测试版里**接真实资料的部分**：名字、职业、形象（捏好的人物）、等级（经验值）、排行开关、同行接单排行（含过去两个月）、接单钟记录。
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

### 4. 接口规格（办公室就是照这个写的）

所有请求都会带 `credentials: 'include'`。有 body 的请求是 JSON，并会带上第 3 点 `headers` 里的内容。

| 用途 | 请求 | 成功回传 |
|---|---|---|
| 我的资料 | `GET {apiBase}{me}` | `{ name, job, job_other, show_in_ranking, avatar, xp }` |
| 改职业 | `PATCH {apiBase}{me}`，body `{ job, job_other }` | 同上（更新后的完整资料） |
| 改排行开关 | `PATCH {apiBase}{me}`，body `{ show_in_ranking }` | 同上 |
| 存形象 | `PATCH {apiBase}{me}`，body `{ avatar }` | 同上 |
| 存经验值 | `PATCH {apiBase}{me}`，body `{ xp }` | 同上 |
| 同行排行 | `GET {apiBase}{ranking}?month=YYYY-MM` | `[{ name, studio, job, jobs, is_me }]` |
| 我的接单记录 | `GET {apiBase}{jobLogs}?month=YYYY-MM` | `[{ id, project, amount, client, created_at }]` |
| 敲接单钟 | `POST {apiBase}{jobLogs}`，body `{ project, amount, client }` | `201`，`{ id, project, amount, client, created_at }` |

细节：

- **PATCH 是部分更新：** body 只带要改的字段，没带的不要动。职业的验证规则沿用之前做好的那套（6 个 key，选 `other` 时 `job_other` 必填）。
- **形象 `avatar`：** 见下面「形象存进账号」。
- **排行：**
  - 只回传 `show_in_ranking = true` 的人，最多 20 名，按 `jobs` 从多到少排序。
  - `is_me`：这一行是不是请求的人自己。
  - `studio`：工作室名称。SIS 没有这个字段就回空字串 `""`。
  - **绝对不能带 `amount`、`client` 或任何金额。**
  - `month` 可以是过去的月份（办公室会查本月和前两个月）。上榜开关以现在为准：关掉开关的人，过去的月份也不能出现。
- **接单记录：** 只回传请求者自己的。`created_at` 用 ISO 8601 格式，例如 `2026-11-11T04:00:00Z`。`client` 可以是 `null`。
- **月份按马来西亚时间（UTC+8）切。** 例如 11 月 1 日早上 7 点登记的接单要算在 11 月，不能因为 UTC 还是 10 月 31 日就算进 10 月。排行和接单记录都要照这个规则。
- **回传格式：** 直接回物件或阵列可以，包一层 `{ data: ... }` 也可以，列表包成 `{ items: [...] }` 也可以，办公室三种都认得。
- **错误码：** 办公室会这样处理，请照这个意思回传：
  - `401`（没登录或登录过期）：办公室显示「请先登录 SIS」。
  - `403`：办公室显示「测试版还没开放给这个账号」。
  - 其他错误：办公室显示一行提示，里面有出错的接口路径。

**形象存进账号（换手机不用重新捏）：**

- 用户表加 `office_avatar`（JSON，可以空）。`GET me` 回传成 `avatar`，没存过就回 `null`。
- `PATCH me` 收到 `avatar` 就整个覆盖。后端要检查：
  - 大小不超过 2 KB，必须是 JSON 物件。
  - 只保留这些 key：`gender`、`skin`、`hair`、`hairColor`、`top`、`topColor`、`bottom`、`bottomColor`、`shoes`、`hat`、`hatColor`、`glasses`、`watch`。其他 key 丢掉。
  - 值只能是 20 字以内的字串，或 0 到 50 的整数。不合格回 400。
- 后端不用懂每个值代表什么，办公室读进来时会再检查一次，不认得的值会换回默认。
- 办公室的行为：
  - 第一次连上 SIS、账号里还没有形象时，会把这台手机上捏好的形象上传。
  - 之后每次在衣帽间保存都会更新。
  - 换手机打开时，直接用账号里的形象，不会再叫用户捏人。

**等级存进账号：**

- 用户表加 `office_xp`（整数，默认 0）。`GET me` 回传成 `xp`。等级由办公室自己换算（每 100 XP 升一级），后端只存数字。
- `PATCH me` 收到 `xp` 时，规则如下：
  - 必须是整数。
  - **只能增加，不能减少。** 比现在小的值直接忽略，回传现在的值，不报错。
  - **同一天（马来西亚时间）最多增加 400。** 超过就回 400，不更新。用 `office_xp_day`（日期）和 `office_xp_day_gain`（当天已加多少）两个字段记录。
- 这是为了防止有人改前端刷等级。等级只用来解锁衣服，风险很低，这两条规则就够了。
- 办公室的行为：
  - 打开时取账号和这台手机里较高的那个值；如果手机比较高（连上 SIS 之前玩过），会上传。
  - 之后每次拿到经验值，1.5 秒后把最新总数送上来。

办公室打开时会依序呼叫：`GET me` → `GET job-logs` 三次（本月、上月、前月）。

### 5. 不要做的事

- 不要动同行圈、询价、项目、发票这些（还是示例资料）。
- 不要修改办公室的 HTML 文件内容（配置用插入的方式）。
- 不要改现有接口的路径或回传格式，路径不同就用 `paths` 配合。
- 不要在 log 里记录接单金额或客户名称。

### 验收（逐项测试，结果告诉我）

- [ ] 我登录后打开 `https://sistudio.app/office`：
  - [ ] 左上角显示我在 SIS 的名字、职业，以及绿色的「测试版」标签。
  - [ ] 点左上角进个人资料，显示「已连接 SIS · 我的名字」。
- [ ] 用另一个账号打开 `/office`，回 404。
- [ ] 没登录时打开 `/office`，会跳到登录页，登录后回到办公室。
- [ ] 在办公室改职业，SIS 个人资料页也变了；反过来在 SIS 改，重新打开办公室，私人办公室的摆设也跟着换。
- [ ] 排行开关在办公室和 SIS 个人资料页两边同步。
- [ ] 在手机 A 做任务拿经验值（例如去前台签到），资料库的 `office_xp` 跟着增加；换手机 B 打开，等级一样。
- [ ] 用工具直接送一个比现在小的 `xp`，值不变；同一天送超过 +400，回 400。
- [ ] 在手机 A 捏好形象，换手机 B（或电脑）打开 `/office`，不会出现捏人画面，人物跟手机 A 一样；在 B 的衣帽间换衣服，回到 A 重新打开也是新的。
- [ ] 在办公室敲接单钟，`job_logs` 多一笔，`created_at` 正确；打开排行开关时，排行的单数加 1。
- [ ] 数据大屏的排行切换「本月 / 上月 / 前月」，各自打到 `?month=YYYY-MM`，结果正确。
- [ ] 在浏览器开发者工具看排行接口的原始回传，没有 `amount`、`client`。
- [ ] 办公室开着时登出 SIS，再操作（例如切换排行开关），会跳出「请先登录 SIS」。
- [ ] 手机（iPhone Safari 和 Android Chrome 各一）打开都正常。

### 做完回报

1. 改了哪些文件。
2. `OFFICE_BETA_USER_IDS` 怎么设，我的用户 ID 怎么查。
3. 最后用的 `apiBase`、`loginUrl`、`paths` 是什么。
4. 以后办公室更新时，具体要做哪几步。
5. 验收清单每一项的结果；没通过的，写原因。
