import { ReactMutation } from "convex/react";
import axios from "axios";

export default async function useLogLocation(mutateLog: ReactMutation<any>) {
  const host = `${window.location.protocol}//${window.location.host}`;

  try {
    const response = await axios.get("http://ip-api.com/json");

    mutateLog({
      status: "info",
      host: host,
      country: response.data.country,
      countryCode: response.data.countryCode,
      region: response.data.region,
      regionName: response.data.regionName,
      city: response.data.city,
      zip: response.data.zip,
      lat: response.data.lat,
      lon: response.data.lon,
      query: response.data.query,
    });
  } catch (error) {
    console.log(error);
  }
}
