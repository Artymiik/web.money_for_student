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
    zipcode: v.string(),
    latitude: v.string(),
    longitude: v.string(),
    query: v.string(),
    timestamp: v.string(),
  }),
});
