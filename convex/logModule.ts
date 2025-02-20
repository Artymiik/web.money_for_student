import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createLog = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const log = await ctx.db.insert("logs", {
      status: args.status,
      host: args.host,
      country: args.country,
      countryCode: args.countryCode,
      region: args.region,
      regionName: args.regionName,
      city: args.city,
      zipcode: args.zipcode,
      latitude: args.latitude,
      longitude: args.longitude,
      query: args.query,
      timestamp: new Date().toISOString(),
    });

    return log;
  },
});
