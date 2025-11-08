import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
import Contestant from "../pages/Contestant";
import VoteContestant from "../pages/VoteContestant";
const Home = lazy(() => import("../pages/Home"));
const Register = lazy(() => import("../pages/Register"));
const Main = lazy(() => import("../layouts/Main"));

// const repoName = import.meta.env.VITE_REPO_NAME || "";

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      
      ],
    },
      {
          path: "register",
          element: <Register></Register>,
        },
    {
      path: 'contestant',
      element: <Contestant/>
    },
    {
      path: '/contestant/vote',
      element: <VoteContestant/>
    },
  ],
  // { basename: `${repoName}` }
);
