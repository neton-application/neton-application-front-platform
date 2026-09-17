"use client";
import * as React from "react";
import { ResourcePage } from "@neton/application-front-resource";
export default function Page() { return <ResourcePage config={{
  resourceKey: "platform-stat", eyebrow: "USAGE ANALYTICS", title: "统计分析", description: "按客户端、API 与日期维护调用量和计费聚合。",
  endpoint: "/platform/stat", permissions: { page: "platform:stat:query", create: "platform:stat:create", update: "platform:stat:update", delete: "platform:stat:delete" },
  detailFields: [{ key: "id", label: "统计 ID", format: "mono" }, { key: "clientId", label: "客户端 ID", format: "mono" }, { key: "apiId", label: "API ID", format: "mono" }, { key: "callCount", label: "调用次数" }, { key: "totalCharge", label: "计费总额", format: "money" }, { key: "statDate", label: "统计日期" }],
  fields: [{ key: "clientId", label: "客户端 ID", type: "number", required: true, format: "mono" }, { key: "apiId", label: "API ID", type: "number", required: true, format: "mono" }, { key: "callCount", label: "调用次数", type: "number", defaultValue: 0 }, { key: "totalCharge", label: "计费总额（分）", type: "number", defaultValue: 0, format: "money" }, { key: "statDate", label: "统计日期", required: true }, { key: "clientId", label: "客户端 ID", filter: true, table: false }, { key: "apiId", label: "API ID", filter: true, table: false }, { key: "statDate", label: "统计日期", filter: true, table: false }]
}} />; }
