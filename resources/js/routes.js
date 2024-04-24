import Addarticle from "./components/Addarticle.vue";
import Viewarticles from "./components/Viewarticles.vue";
import Viewcategories from "./components/Viewcategories.vue";
import Accueil from "./components/accueil.vue";
import Editarticle from "./components/articles/Editarticle.vue";
import Cart from "./components/cart/Cart.vue";
import HomeCart from "./components/cart/HomeCart.vue";
import Payment from "./components/cart/Payment.vue";
export const routes = [
    {
        name: "accueil",
        path: "/",
        component: Accueil,
    },

    {
        name: "Viewcategorie",
        path: "/listcategorie",
        component: Viewcategories,
    },

    {
        name: "Viewarticle",
        path: "/listart",
        component: Viewarticles,
    },

    {
        name: "Addarticle",
        path: "/addarticle",
        component: Addarticle,
    },

    {
        name: "editarticle",
        path: "/editarticle/:id",
        component: Editarticle,
    },
    { path: "/shopping", name: "HomeCart", component: HomeCart },
    { path: "/cart", name: "Cart", component: Cart },

    { path: "/payment", name: "Payment", component: Payment },
];
