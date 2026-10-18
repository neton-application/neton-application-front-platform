"use client";
import * as React from "react";
import { ResourcePage } from "@neton/application-front-resource";
import { useT } from "@neton/application-front-runtime/i18n";
export default function Page() {
  const t = useT("platform");
  const status = [{ label: t("common.status.enabled"), value: 1 }, { label: t("common.status.disabled"), value: 0 }];
  return <ResourcePage config={{
  resourceKey: "platform-client", errorNamespace: "platform", eyebrow: t("client.eyebrow"), title: t("client.title"), description: t("client.description"),
  endpoint: "/platform/client", permissions: { page: "platform:client:query", create: "platform:client:create", update: "platform:client:update", delete: "platform:client:delete" },
  mapSave: (record) => {
    if (!record.id) return record;
    const { appSecret: _maskedSecret, ...profile } = record;
    return profile;
  },
  detailFields: [{ key: "id", label: t("common.field.clientId"), format: "mono" }, { key: "name", label: t("common.field.name") }, { key: "appId", label: "App ID", format: "mono" }, { key: "appSecret", label: "App Secret", format: "mono" }, { key: "contactName", label: t("client.field.contactName") }, { key: "contactMobile", label: t("client.field.contactMobile") }, { key: "remark", label: t("common.field.description") }, { key: "status", label: t("common.field.status"), format: "status" }, { key: "createdAt", label: t("common.field.createdAt"), format: "date" }],
  fields: [{ key: "name", label: t("client.field.name"), required: true }, { key: "appId", label: "App ID", required: true, format: "mono" }, { key: "appSecret", label: "App Secret", required: true, format: "mono", table: false }, { key: "contactName", label: t("client.field.contactName") }, { key: "contactMobile", label: t("client.field.contactMobile") }, { key: "remark", label: t("common.field.description"), type: "textarea", table: false }, { key: "status", label: t("common.field.status"), type: "select", defaultValue: 1, format: "status", options: status }, { key: "createdAt", label: t("common.field.createdAt"), format: "date" }, { key: "name", label: t("common.field.name"), filter: true, table: false }, { key: "appId", label: "App ID", filter: true, table: false }, { key: "status", label: t("common.field.status"), filter: true, table: false, type: "select", options: status }]
}} />; }
