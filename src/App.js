import {Route, Switch} from 'react-router-dom'
import {createServer} from "miragejs";
import classes from './index.module.css'
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
import knives from './knives.json';


createServer({
    routes() {
        this.namespace = "api"

        this.get("/homepage", () => {
            return knives.homepage
        })

        this.get("/top-brands", () => {
            return knives.topBrands
        })
    },
})


function App() {
    return (
        <>
            <div className={classes.navigation}>
                <NavBarContent/>
                <SubNavBarContent/>
            </div>

            <Switch>

                <Route path='/' exact>
                    <HomePage/>
                </Route>

                <div className={classes.container}>
                    <Route path='/contact-us'>
                        <ContactUs/>
                    </Route>
                    <Route path='/track-your-order'>
                        <TrackYourOrder/>
                    </Route>

                    <Route path='/top-brands'>
                        <TopBrands/>
                    </Route>
                    <Route path='/new-arrivals'>
                        <NewArrivals/>
                    </Route>
                    <Route path='/best-sellers'>
                        <BestSellers/>
                    </Route>
                    <Route path='/brands'>
                        <Brands/>
                    </Route>
                    <Route path='/knives-and-accessories'>
                        <KnivesAndAccessories/>
                    </Route>
                    <Route path='/sale-and-clearance'>
                        <SaleAndClearance/>
                    </Route>

                    <Route path='/free-shipping-and-returns-info'>
                        <FreeShippingInfo/>
                    </Route>
                    <Route path='/knife-servicing-info'>
                        <KnifeServicing/>
                    </Route>
                    <Route path='/create-an-account'>
                        <CreateAccount/>
                    </Route>
                    <Route path='/expert-advice'>
                        <ExpertAdvice/>
                    </Route>
                    <Route path='/follow-Us'>
                        <FollowUs/>
                    </Route>
                    <Route path='/help'>
                        <HelpInfo/>
                    </Route>
                    <Route path='/policies'>
                        <Policies/>
                    </Route>

                </div>
            </Switch>

            <MainFooter/>

        </>
    );
}

export default App;

