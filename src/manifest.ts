import { defineFrontModule } from "@neton/application-front-contract";
export default defineFrontModule({
  id: "platform", contractVersion: "1.0.0",
  pages: [
    { key: "platform/api/index", path: "/platform/api", entry: "api-list", rendering: "client" },
    { key: "platform/client/index", path: "/platform/client", entry: "client-list", rendering: "client" },
    { key: "platform/clientapi/index", path: "/platform/client-api", entry: "client-api-list", rendering: "client" },
    { key: "platform/chargerecord/index", path: "/platform/charge-record", entry: "charge-record-list", rendering: "client" },
    { key: "platform/log/index", path: "/platform/log", entry: "log-list", rendering: "client" },
    { key: "platform/stat/index", path: "/platform/stat", entry: "stat-list", rendering: "client" }
  ]
});
