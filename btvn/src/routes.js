import paths from "./configs/path";
import DefaultLayout from "./layouts/DefaultLayout";
import CountDown from "./pages/Countdown";
import Counter from "./pages/Counter";
import ShoppingCart from "./pages/ShoppingCart";

const routes = [
    {
        layout: DefaultLayout,
        children: [
            { path: paths.counter, component: Counter },
            { path: paths.countdown, component: CountDown },
            { path: paths.shoppingCart, component: ShoppingCart },
        ],
    },
];

export default routes;
