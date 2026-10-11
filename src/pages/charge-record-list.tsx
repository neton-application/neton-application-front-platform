"use client";
import * as React from "react";
import { ResourcePage } from "@neton/application-front-resource";
import { useT } from "@neton/application-front-runtime/i18n";
export default function Page() {
  const t = useT("platform");
  return <ResourcePage config={{
  resourceKey: "platform-charge", eyebrow: t("chargeRecord.eyebrow"), title: t("chargeRecord.title"), description: t("chargeRecord.description"),
  endpoint: "/platform/charge-record", permissions: { page: "platform:charge-record:query", delete: "platform:charge-record:delete" },
  detailFields: [{ key: "id", label: t("chargeRecord.field.id"), format: "mono" }, { key: "clientId", label: t("common.field.clientId"), format: "mono" }, { key: "apiId", label: "API ID", format: "mono" }, { key: "orderId", label: t("chargeRecord.field.orderId"), format: "mono" }, { key: "apiCode", label: t("common.field.apiCode"), format: "mono" }, { key: "price", label: t("common.field.unitPrice"), format: "money" }, { key: "amount", label: t("common.field.quantity") }, { key: "status", label: t("common.field.status"), format: "status" }, { key: "createdAt", label: t("chargeRecord.field.chargedAt"), format: "date" }],
  fields: [{ key: "id", label: t("chargeRecord.field.id"), format: "mono" }, { key: "clientId", label: t("common.field.clientId"), format: "mono" }, { key: "apiId", label: "API ID", format: "mono" }, { key: "apiCode", label: t("common.field.apiCode"), format: "mono" }, { key: "price", label: t("common.field.unitPrice"), format: "money" }, { key: "amount", label: t("common.field.quantity") }, { key: "createdAt", label: t("common.field.time"), format: "date" }, { key: "clientId", label: t("common.field.clientId"), filter: true, table: false }, { key: "apiId", label: "API ID", filter: true, table: false }]
}} />; }
