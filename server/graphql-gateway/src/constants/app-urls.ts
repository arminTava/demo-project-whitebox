import * as dotenv from "dotenv";
dotenv.config();
export const APPURLS = [
  // { name: "core", url: "http://localhost:4001/graphql" },
  { name: "tracking", url: process.env.TRACKING_URL }, // https://dev.status.installion.eu/graphql 172.31.78.138/graphql process.env.TRACKING_URL
  { name: "zoho", url: process.env.ZOHO_URL },
];
