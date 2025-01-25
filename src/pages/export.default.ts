import { lazy } from "react";

const home = lazy(() => import("./home"));
const not_found = lazy(() => import("./404"));

export { home, not_found };
