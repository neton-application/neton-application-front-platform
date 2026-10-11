"use client";
import * as React from "react";
import { ResourcePage } from "@neton/application-front-resource";
import { useT } from "@neton/application-front-runtime/i18n";
export default function Page() {
  const t = useT("platform");
  const status = [{ label: t("common.status.enabled"), value: 1 }, { label: t("common.status.disabled"), value: 0 }];
  return <ResourcePage config={{
  resourceKey: "platform-client-api", eyebrow: t("clientApi.eyebrow"), title: t("clientApi.title"), description: t("clientApi.description"),
  endpoint: "/platform/client-api", permissions: { page: "platform:client-api:query", create: "platform:client-api:create", update: "platform:client-api:update", delete: "platform:client-api:delete" },
  detailFields: [{ key: "id", label: t("clientApi.field.id"), format: "mono" }, { key: "clientId", label: t("common.field.clientId"), format: "mono" }, { key: "apiId", label: "API ID", format: "mono" }, { key: "customPrice", label: t("clientApi.field.customPrice"), format: "money" }, { key: "status", label: t("common.field.status"), format: "status" }, { key: "createdAt", label: t("common.field.createdAt"), format: "date" }],
  fields: [{ key: "clientId", label: t("common.field.clientId"), type: "number", required: true, format: "mono" }, { key: "apiId", label: "API ID", type: "number", required: true, format: "mono" }, { key: "customPrice", label: t("clientApi.field.customPriceCents"), type: "number", defaultValue: 0, format: "money" }, { key: "status", label: t("common.field.status"), type: "select", defaultValue: 1, format: "status", options: status }, { key: "createdAt", label: t("common.field.createdAt"), format: "date" }, { key: "clientId", label: t("common.field.clientId"), filter: true, table: false }, { key: "apiId", label: "API ID", filter: true, table: false }, { key: "status", label: t("common.field.status"), filter: true, table: false, type: "select", options: status }]
}} />; }
