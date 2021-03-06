import { Route, Switch, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import React from "react";
import Header from "./components/Header";
import { routes } from "./constants";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <Route
            exact
            key={route.id}
            path={route.path}
            render={(props) => (
              <>
                <Header routes={routes} {...props} />
                <ScrollToTop>
                  <route.component />
                </ScrollToTop>
              </>
            )}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}
