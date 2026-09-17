"use client";
import * as React from "react";
import { ResourcePage } from "@neton/application-front-resource";
const status = [{ label: "启用", value: 1 }, { label: "停用", value: 0 }];
export default function Page() { return <ResourcePage config={{
  resourceKey: "platform-api", eyebrow: "OPEN PLATFORM", title: "API 管理", description: "维护开放能力、稳定编码与调用单价。",
  endpoint: "/platform/api", permissions: { page: "platform:api:query", create: "platform:api:create", update: "platform:api:update", delete: "platform:api:delete" },
  detailFields: [{ key: "id", label: "API ID", format: "mono" }, { key: "name", label: "名称" }, { key: "code", label: "编码", format: "mono" }, { key: "description", label: "说明" }, { key: "price", label: "单价", format: "money" }, { key: "status", label: "状态", format: "status" }, { key: "createdAt", label: "创建时间", format: "date" }],
  fields: [{ key: "name", label: "API 名称", required: true }, { key: "code", label: "API 编码", required: true, format: "mono" }, { key: "description", label: "说明", type: "textarea", table: false }, { key: "price", label: "调用单价（分）", type: "number", defaultValue: 0, format: "money" }, { key: "status", label: "状态", type: "select", defaultValue: 1, format: "status", options: status }, { key: "createdAt", label: "创建时间", format: "date" }, { key: "name", label: "名称", filter: true, table: false }, { key: "code", label: "编码", filter: true, table: false }, { key: "status", label: "状态", filter: true, table: false, type: "select", options: status }]
}} />; }
