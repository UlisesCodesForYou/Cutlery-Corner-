import {Route, Switch} from 'react-router-dom'


import BestSellers from "./pages/BestSellers";
import Brands from "./pages/Brands";
import KnivesAndAccessories from "./pages/KnivesAndAccessories";
import NewArrivals from "./pages/NewArrivals";
import SaleAndClearance from "./pages/SaleAndClearance";
import TopBrands from "./pages/TopBrands";
import HomePage from "./pages/HomePage";

import MainFooter from "./components/MainFooterContent";
import NavBarContent from "./components/NavBarContent";
import ContactUs from "./pages/ContactUs";
import TrackYourOrder from "./pages/TrackYourOrder";
import SubNavBarContent from "./components/SubNavBarContent";
import FreeShippingInfo from "./pages/FreeShipping";
import KnifeServicing from "./pages/KnifeServicing";
import CreateAccount from "./pages/CreateAccount";
import ExpertAdvice from "./pages/ExpertAdvice";
import FollowUs from "./pages/FollowUs";
import HelpInfo from "./pages/HelpInfo";
import Policies from "./pages/Policies";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
     <NavBarContent />
        <Switch>
            <Route path='/contact-us'>
                <ContactUs />
            </Route>
            <Route path='/track-your-order' >
                <TrackYourOrder />
            </Route>

        </Switch>

      <SubNavBarContent />
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
            <Route path='*' exact>
                <NotFound />
            </Route>
        </Switch>

      <MainFooter />
        <Switch>
            <Route path='/Free-Shipping-And-Returns-Info'>
                <FreeShippingInfo />
            </Route>
            <Route path='/Knife-Servicing-Info'>
                <KnifeServicing />
            </Route>
            <Route path='/Create-An-Account'>
                <CreateAccount />
            </Route>
            <Route path='/Expert-Advice'>
                <ExpertAdvice />
            </Route>
            <Route path='/Follow-Us'>
                <FollowUs />
            </Route>
            <Route path='/Help'>
                <HelpInfo />
            </Route>
            <Route path='/Policies'>
                <Policies />
            </Route>
        </Switch>



    </>
  );
}

export default App;

