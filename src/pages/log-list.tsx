"use client";
import * as React from "react";
import { ResourcePage } from "@neton/application-front-resource";
import { useT } from "@neton/application-front-runtime/i18n";
export default function Page() {
  const t = useT("platform");
  return <ResourcePage config={{
  resourceKey: "platform-log", eyebrow: t("log.eyebrow"), title: t("log.title"), description: t("log.description"),
  endpoint: "/platform/log", permissions: { page: "platform:log:query", delete: "platform:log:delete" },
  detailFields: [{ key: "id", label: t("log.field.id"), format: "mono" }, { key: "clientId", label: t("common.field.clientId"), format: "mono" }, { key: "apiId", label: "API ID", format: "mono" }, { key: "requestUrl", label: t("log.field.requestUrl") }, { key: "requestParams", label: t("log.field.requestParams") }, { key: "responseBody", label: t("log.field.responseBody") }, { key: "userIp", label: t("log.field.userIp"), format: "mono" }, { key: "duration", label: t("log.field.duration") }, { key: "resultCode", label: t("log.field.resultCode") }, { key: "createdAt", label: t("log.field.calledAt"), format: "date" }],
  fields: [{ key: "id", label: t("log.field.id"), format: "mono" }, { key: "clientId", label: t("common.field.clientId"), format: "mono" }, { key: "apiId", label: "API ID", format: "mono" }, { key: "requestUrl", label: t("log.field.requestUrl") }, { key: "duration", label: t("log.field.duration") }, { key: "resultCode", label: t("log.field.resultCode") }, { key: "createdAt", label: t("common.field.time"), format: "date" }, { key: "clientId", label: t("common.field.clientId"), filter: true, table: false }, { key: "apiId", label: "API ID", filter: true, table: false }, { key: "resultCode", label: t("log.field.resultCode"), filter: true, table: false }]
}} />; }
