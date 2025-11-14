import paths from "./configs/path";
import DefaultLayout from "./layouts/DefaultLayout";
import UseState from "./pages/1.functionUpdater";
import UseMemo from "./pages/2.useMemo";
import UseContext from "./pages/3.useContext";
import CustomHook from "./pages/4.customHook";
import UseReducer from "./pages/5.useReducer";

const routes = [
    {
        layout: DefaultLayout,
        children: [
            { path: paths.useState, component: UseState },
            { path: paths.useMemo, component: UseMemo },
            { path: paths.useContext, component: UseContext },
            { path: paths.customHook, component: CustomHook },
            { path: paths.useReducer, component: UseReducer },
        ],
    },
];

export default routes;
