import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainHead from "../components/headers/MainHead";
import CustomHomePage from "../components/Home/CustomHomePage";
import CompanyReview from "../components/companyreview/CompanyReview"
import FindSalaries from "../components/findsalaries/FindSalaries"
import SavedJobs from "../components/savedjobs/SavedJobs"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <>
        <MainHead />
        <Switch>
          <Route component={CustomHomePage} path="/" exact={true} />
          <Route component={CompanyReview} path="/companyreview" />
          <Route component={FindSalaries} path="/salaries" />
          <Route component={SavedJobs} path="/saved"/>
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default AppRouter;
