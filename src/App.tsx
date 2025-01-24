import { createBrowserRouter } from "react-router-dom";
import * as pages from '@/pages/export.default';

const App = createBrowserRouter([
  {
    path: "/web.money_for_student/",
    children: [
      {
        path: "",
        element: (
          <pages.home />
        )
      }
    ]
  }
])

export default App;
