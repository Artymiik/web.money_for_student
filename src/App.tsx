import { createBrowserRouter } from "react-router-dom";
import * as pages from '@/pages/export.default';
import { Suspense } from "react";
import Skeleton from "./components/ui/Skeleton";

const App = createBrowserRouter([
  {
    path: "/web.money_for_student/",
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Skeleton />}>
            <pages.home />
          </Suspense>
        )
      }
    ]
  }
])

export default App;
