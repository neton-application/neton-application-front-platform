"use client";
import * as React from "react";
import { ResourcePage } from "@neton/application-front-resource";
const status = [{ label: "启用", value: 1 }, { label: "停用", value: 0 }];
export default function Page() { return <ResourcePage config={{
  resourceKey: "platform-client-api", eyebrow: "ACCESS ENTITLEMENT", title: "客户端 API", description: "维护客户端可调用的 API 与客户专属价格。",
  endpoint: "/platform/client-api", permissions: { page: "platform:client-api:query", create: "platform:client-api:create", update: "platform:client-api:update", delete: "platform:client-api:delete" },
  detailFields: [{ key: "id", label: "授权 ID", format: "mono" }, { key: "clientId", label: "客户端 ID", format: "mono" }, { key: "apiId", label: "API ID", format: "mono" }, { key: "customPrice", label: "客户价", format: "money" }, { key: "status", label: "状态", format: "status" }, { key: "createdAt", label: "创建时间", format: "date" }],
  fields: [{ key: "clientId", label: "客户端 ID", type: "number", required: true, format: "mono" }, { key: "apiId", label: "API ID", type: "number", required: true, format: "mono" }, { key: "customPrice", label: "客户价（分）", type: "number", defaultValue: 0, format: "money" }, { key: "status", label: "状态", type: "select", defaultValue: 1, format: "status", options: status }, { key: "createdAt", label: "创建时间", format: "date" }, { key: "clientId", label: "客户端 ID", filter: true, table: false }, { key: "apiId", label: "API ID", filter: true, table: false }, { key: "status", label: "状态", filter: true, table: false, type: "select", options: status }]
}} />; }
