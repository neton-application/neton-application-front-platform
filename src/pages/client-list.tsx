"use client";
import * as React from "react";
import { ResourcePage } from "@neton/application-front-resource";
const status = [{ label: "启用", value: 1 }, { label: "停用", value: 0 }];
export default function Page() { return <ResourcePage config={{
  resourceKey: "platform-client", eyebrow: "OPEN PLATFORM", title: "客户端管理", description: "维护开放平台调用方、联系信息与访问凭证。密钥只显示脱敏值。",
  endpoint: "/platform/client", permissions: { page: "platform:client:query", create: "platform:client:create", update: "platform:client:update", delete: "platform:client:delete" },
  mapSave: (record) => {
    if (!record.id) return record;
    const { appSecret: _maskedSecret, ...profile } = record;
    return profile;
  },
  detailFields: [{ key: "id", label: "客户端 ID", format: "mono" }, { key: "name", label: "名称" }, { key: "appId", label: "App ID", format: "mono" }, { key: "appSecret", label: "App Secret", format: "mono" }, { key: "contactName", label: "联系人" }, { key: "contactMobile", label: "联系电话" }, { key: "remark", label: "说明" }, { key: "status", label: "状态", format: "status" }, { key: "createdAt", label: "创建时间", format: "date" }],
  fields: [{ key: "name", label: "客户端名称", required: true }, { key: "appId", label: "App ID", required: true, format: "mono" }, { key: "appSecret", label: "App Secret", required: true, format: "mono", table: false }, { key: "contactName", label: "联系人" }, { key: "contactMobile", label: "联系电话" }, { key: "remark", label: "说明", type: "textarea", table: false }, { key: "status", label: "状态", type: "select", defaultValue: 1, format: "status", options: status }, { key: "createdAt", label: "创建时间", format: "date" }, { key: "name", label: "名称", filter: true, table: false }, { key: "appId", label: "App ID", filter: true, table: false }, { key: "status", label: "状态", filter: true, table: false, type: "select", options: status }]
}} />; }
