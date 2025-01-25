import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  logs: defineTable({
    status: v.string(),
    host: v.string(),
    country: v.string(),
    countryCode: v.string(),
    region: v.string(),
    regionName: v.string(),
    city: v.string(),
    zip: v.string(),
    lat: v.number(),
    lon: v.number(),
    query: v.string(),
    timestamp: v.string(),
  }),
});
