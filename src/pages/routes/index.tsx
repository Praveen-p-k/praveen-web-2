import {
  Outlet,
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  ABOUT,
  CONTACT_ME,
  DASHBOARD,
  HEADER,
  PROJECTS_DONE,
  TECH_STACKS,
} from "../../helpers/constants";
import Dashboard from "../dashboard";
import ProjectsDone from "../projects";
import TechStacks from "../tech-stacks";
import About from "../about";
import ContactMe from "../contact";
import Header from "../../components/header";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path={HEADER} element={
        <>
        <Header />
        <Outlet />
        </>
    }>
      <Route index path={DASHBOARD} element={<Dashboard />} />
      <Route path={PROJECTS_DONE} element={<ProjectsDone />} />
      <Route path={TECH_STACKS} element={<TechStacks />} />
      <Route path={ABOUT} element={<About />} />
      <Route path={CONTACT_ME} element={<ContactMe />} />
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
