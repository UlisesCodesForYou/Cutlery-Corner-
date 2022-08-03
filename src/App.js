import {Route, Switch} from 'react-router-dom'


import BestSellers from "./pages/BestSellers";
import Brands from "./pages/Brands";
import KnivesAndAccessories from "./pages/KnivesAndAccessories";
import NewArrivals from "./pages/NewArrivals";
import SaleAndClearance from "./pages/SaleAndClearance";
import TopBrands from "./pages/TopBrands";
import HomePage from "./pages/HomePage";

import MainFooter from "./components/MainFooterContent";
import MainNavigation from "./components/SubNavBarContent";
import NavBarContent from "./components/NavBarContent";


function App() {
  return (
    <>
     <NavBarContent />
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
           <HomePage />
        </Route>
        <Route path='/top-brands'>
          <TopBrands />
        </Route>
        <Route path='/new-arrivals'>
          <NewArrivals />
        </Route>
        <Route path='/best-sellers'>
          <BestSellers />
        </Route>
        <Route path='/brands'>
          <Brands />
        </Route>
        <Route path='/knives-and-accessories'>
          <KnivesAndAccessories />
        </Route>
        <Route path='/sale-and-clearance'>
          <SaleAndClearance />
        </Route>
      </Switch>

      <MainFooter />



    </>
  );
}

export default App;

