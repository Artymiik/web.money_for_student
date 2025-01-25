import { ReactMutation } from "convex/react";
import axios from "axios";

export default async function useLogLocation(mutateLog: ReactMutation<any>) {
  const host = `${window.location.protocol}//${window.location.host}`;
  const api_key = import.meta.env.VITE_API_KEY_IP_1
    ? import.meta.env.VITE_API_KEY_IP_1
    : import.meta.env.VITE_API_KEY_IP_2;

  try {
    const response = await axios.get(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${api_key}`
    );

    mutateLog({
      status: "info",
      host: host,
      country: response.data.country_name,
      countryCode: response.data.country_code2,
      region: response.data.state_prov,
      regionName: response.data.country_name_official,
      city: response.data.city,
      zipcode: response.data.zipcode,
      latitude: response.data.latitude,
      longitude: response.data.longitude,
      query: response.data.ip,
    });
  } catch (error) {
    console.log(error);
  }
}
