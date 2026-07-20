"use client";
import * as React from "react";
import { ResourcePage } from "@neton/application-front-resource";
export default function Page() { return <ResourcePage config={{
  resourceKey: "platform-charge", eyebrow: "BILLING LEDGER", title: "计费记录", description: "审计每次开放 API 调用产生的计费明细。",
  endpoint: "/platform/charge-record", permissions: { page: "platform:charge-record:page", delete: "platform:charge:delete" },
  detailFields: [{ key: "id", label: "记录 ID", format: "mono" }, { key: "clientId", label: "客户端 ID", format: "mono" }, { key: "apiId", label: "API ID", format: "mono" }, { key: "orderId", label: "业务订单", format: "mono" }, { key: "apiCode", label: "API 编码", format: "mono" }, { key: "price", label: "单价", format: "money" }, { key: "amount", label: "数量" }, { key: "status", label: "状态", format: "status" }, { key: "createdAt", label: "计费时间", format: "date" }],
  fields: [{ key: "id", label: "记录 ID", format: "mono" }, { key: "clientId", label: "客户端 ID", format: "mono" }, { key: "apiId", label: "API ID", format: "mono" }, { key: "apiCode", label: "API 编码", format: "mono" }, { key: "price", label: "单价", format: "money" }, { key: "amount", label: "数量" }, { key: "createdAt", label: "时间", format: "date" }, { key: "clientId", label: "客户端 ID", filter: true, table: false }, { key: "apiId", label: "API ID", filter: true, table: false }]
}} />; }
