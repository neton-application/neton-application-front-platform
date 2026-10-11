"use client";
import * as React from "react";
import { ResourcePage } from "@neton/application-front-resource";
import { useT } from "@neton/application-front-runtime/i18n";
export default function Page() {
  const t = useT("platform");
  const status = [{ label: t("common.status.enabled"), value: 1 }, { label: t("common.status.disabled"), value: 0 }];
  return <ResourcePage config={{
  resourceKey: "platform-api", eyebrow: t("api.eyebrow"), title: t("api.title"), description: t("api.description"),
  endpoint: "/platform/api", permissions: { page: "platform:api:query", create: "platform:api:create", update: "platform:api:update", delete: "platform:api:delete" },
  detailFields: [{ key: "id", label: "API ID", format: "mono" }, { key: "name", label: t("common.field.name") }, { key: "code", label: t("common.field.code"), format: "mono" }, { key: "description", label: t("common.field.description") }, { key: "price", label: t("common.field.unitPrice"), format: "money" }, { key: "status", label: t("common.field.status"), format: "status" }, { key: "createdAt", label: t("common.field.createdAt"), format: "date" }],
  fields: [{ key: "name", label: t("api.field.name"), required: true }, { key: "code", label: t("common.field.apiCode"), required: true, format: "mono" }, { key: "description", label: t("common.field.description"), type: "textarea", table: false }, { key: "price", label: t("api.field.unitPriceCents"), type: "number", defaultValue: 0, format: "money" }, { key: "status", label: t("common.field.status"), type: "select", defaultValue: 1, format: "status", options: status }, { key: "createdAt", label: t("common.field.createdAt"), format: "date" }, { key: "name", label: t("common.field.name"), filter: true, table: false }, { key: "code", label: t("common.field.code"), filter: true, table: false }, { key: "status", label: t("common.field.status"), filter: true, table: false, type: "select", options: status }]
}} />; }
