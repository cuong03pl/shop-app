import DefaultLayout from "components/Layouts/DefaultLayout/DefaultLayout";
import { Route, Router, Routes } from "react-router-dom";
import { routes } from "routes/routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route, index) => {
          let Comp = route.component;
          let Layout = DefaultLayout;
          return (
            <Route
              key={index}
              path={route.path}
              element={<Layout>{Comp}</Layout>}
            ></Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
