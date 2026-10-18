/** 模块 `platform` 的 zh-CN 词条（命名空间 = 模块 id）。key 在各语言间必须一致，见 scripts/check-locales.mts。 */
const messages: Record<string, string> = {
  // 菜单
  "menu.platform/api/index": "API管理",
  "menu.platform/client/index": "客户端管理",
  "menu.platform/clientapi/index": "客户端API",
  "menu.platform/chargerecord/index": "计费记录",
  "menu.platform/log/index": "调用日志",
  "menu.platform/stat/index": "统计分析",

  // 通用
  "common.status.enabled": "启用",
  "common.status.disabled": "停用",
  "common.field.name": "名称",
  "common.field.code": "编码",
  "common.field.description": "说明",
  "common.field.unitPrice": "单价",
  "common.field.status": "状态",
  "common.field.createdAt": "创建时间",
  "common.field.time": "时间",
  "common.field.clientId": "客户端 ID",
  "common.field.apiCode": "API 编码",
  "common.field.quantity": "数量",

  // API 管理
  "api.eyebrow": "OPEN PLATFORM",
  "api.title": "API 管理",
  "api.description": "维护开放能力、稳定编码与调用单价。",
  "api.field.name": "API 名称",
  "api.field.unitPriceCents": "调用单价（分）",

  // 客户端管理
  "client.eyebrow": "OPEN PLATFORM",
  "client.title": "客户端管理",
  "client.description": "维护开放平台调用方、联系信息与访问凭证。密钥只显示脱敏值。",
  "client.field.name": "客户端名称",
  "client.field.contactName": "联系人",
  "client.field.contactMobile": "联系电话",

  // 客户端 API
  "clientApi.eyebrow": "ACCESS ENTITLEMENT",
  "clientApi.title": "客户端 API",
  "clientApi.description": "维护客户端可调用的 API 与客户专属价格。",
  "clientApi.field.id": "授权 ID",
  "clientApi.field.customPrice": "客户价",
  "clientApi.field.customPriceCents": "客户价（分）",

  // 计费记录
  "chargeRecord.eyebrow": "BILLING LEDGER",
  "chargeRecord.title": "计费记录",
  "chargeRecord.description": "审计每次开放 API 调用产生的计费明细。",
  "chargeRecord.field.id": "记录 ID",
  "chargeRecord.field.orderId": "业务订单",
  "chargeRecord.field.chargedAt": "计费时间",

  // 调用日志
  "log.eyebrow": "API OBSERVABILITY",
  "log.title": "调用日志",
  "log.description": "查看开放 API 的请求、响应、结果码与耗时。",
  "log.field.id": "日志 ID",
  "log.field.requestUrl": "请求地址",
  "log.field.requestParams": "请求参数",
  "log.field.responseBody": "响应内容",
  "log.field.userIp": "来源 IP",
  "log.field.duration": "耗时(ms)",
  "log.field.resultCode": "结果码",
  "log.field.calledAt": "调用时间",

  // 统计分析
  "stat.eyebrow": "USAGE ANALYTICS",
  "stat.title": "统计分析",
  "stat.description": "按客户端、API 与日期维护调用量和计费聚合。",
  "stat.field.id": "统计 ID",
  "stat.field.callCount": "调用次数",
  "stat.field.totalCharge": "计费总额",
  "stat.field.totalChargeCents": "计费总额（分）",
  "stat.field.statDate": "统计日期",
  // 目录菜单（按菜单路径），见壳的菜单翻译
  "menu./platform": "开放平台",
  // 业务错误机器码（后端 PlatformErrorCodes，spec application/platform-errors）
  "error.CLIENT_NOT_FOUND": "接入方不存在，可能已被删除",
  "error.CONTACT_MOBILE_INVALID": "联系人手机号格式不正确，请填写 11 位手机号",
  "error.CLIENT_NOT_BOUND": "当前账号还没有开通 API 接入",
  "error.LOG_NOT_FOUND": "调用日志不存在",
  "error.TIMESTAMP_INVALID": "timestamp 格式不正确，应为秒级时间戳",
  "error.TIMESTAMP_EXPIRED": "请求已过期，timestamp 与服务器时间相差超过 5 分钟",
  "error.APP_ID_INVALID": "appId 无效或已停用",
  "error.SIGNATURE_INVALID": "签名校验失败",
  "error.ORDER_ID_REQUIRED": "缺少 orderId",
  "error.ORDER_NOT_FOUND": "订单不存在",
  "error.CHARGE_SERVICE_UNAVAILABLE": "计费服务暂不可用，请稍后再试",
  "error.ORDER_QUERY_RATE_LIMITED": "订单查询过于频繁，请稍后再试",
  "error.ORDER_CREATE_RATE_LIMITED": "下单过于频繁，请稍后再试",
};

export default messages;
