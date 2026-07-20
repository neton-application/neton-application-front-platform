"use client";
import * as React from "react";
import { ResourcePage } from "@neton/application-front-resource";
export default function Page() { return <ResourcePage config={{
  resourceKey: "platform-log", eyebrow: "API OBSERVABILITY", title: "调用日志", description: "查看开放 API 的请求、响应、结果码与耗时。",
  endpoint: "/platform/log", permissions: { page: "platform:log:page", delete: "platform:log:delete" },
  detailFields: [{ key: "id", label: "日志 ID", format: "mono" }, { key: "clientId", label: "客户端 ID", format: "mono" }, { key: "apiId", label: "API ID", format: "mono" }, { key: "requestUrl", label: "请求地址" }, { key: "requestParams", label: "请求参数" }, { key: "responseBody", label: "响应内容" }, { key: "userIp", label: "来源 IP", format: "mono" }, { key: "duration", label: "耗时(ms)" }, { key: "resultCode", label: "结果码" }, { key: "createdAt", label: "调用时间", format: "date" }],
  fields: [{ key: "id", label: "日志 ID", format: "mono" }, { key: "clientId", label: "客户端 ID", format: "mono" }, { key: "apiId", label: "API ID", format: "mono" }, { key: "requestUrl", label: "请求地址" }, { key: "duration", label: "耗时(ms)" }, { key: "resultCode", label: "结果码" }, { key: "createdAt", label: "时间", format: "date" }, { key: "clientId", label: "客户端 ID", filter: true, table: false }, { key: "apiId", label: "API ID", filter: true, table: false }, { key: "resultCode", label: "结果码", filter: true, table: false }]
}} />; }
