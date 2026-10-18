"use client";
import * as React from "react";
import { ResourcePage } from "@neton/application-front-resource";
import { useT } from "@neton/application-front-runtime/i18n";
export default function Page() {
  const t = useT("platform");
  return <ResourcePage config={{
  resourceKey: "platform-stat", errorNamespace: "platform", eyebrow: t("stat.eyebrow"), title: t("stat.title"), description: t("stat.description"),
  endpoint: "/platform/stat", permissions: { page: "platform:stat:query", create: "platform:stat:create", update: "platform:stat:update", delete: "platform:stat:delete" },
  detailFields: [{ key: "id", label: t("stat.field.id"), format: "mono" }, { key: "clientId", label: t("common.field.clientId"), format: "mono" }, { key: "apiId", label: "API ID", format: "mono" }, { key: "callCount", label: t("stat.field.callCount") }, { key: "totalCharge", label: t("stat.field.totalCharge"), format: "money" }, { key: "statDate", label: t("stat.field.statDate") }],
  fields: [{ key: "clientId", label: t("common.field.clientId"), type: "number", required: true, format: "mono" }, { key: "apiId", label: "API ID", type: "number", required: true, format: "mono" }, { key: "callCount", label: t("stat.field.callCount"), type: "number", defaultValue: 0 }, { key: "totalCharge", label: t("stat.field.totalChargeCents"), type: "number", defaultValue: 0, format: "money" }, { key: "statDate", label: t("stat.field.statDate"), required: true }, { key: "clientId", label: t("common.field.clientId"), filter: true, table: false }, { key: "apiId", label: "API ID", filter: true, table: false }, { key: "statDate", label: t("stat.field.statDate"), filter: true, table: false }]
}} />; }
