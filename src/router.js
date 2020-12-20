import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/pages/Home'
import Category from './components/pages/Category'
import Product from './components/pages/Product'
import Basket from './components/pages/Basket'
import Service from './components/pages/Service/Service'
import Guaranties from './components/pages/Service/Guaranties'
import Fitting from './components/pages/Service/Fitting'
import Hauling from './components/pages/Service/Hauling'
import Assemble from './components/pages/Service/Assemble'
import Delivery from './components/pages/Service/Delivery'
import About from './components/pages/About/About'
import Manufacturing from './components/pages/About/Manufacturing'
import Sales from './components/pages/About/Sales'
import Addresses from './components/pages/About/Addresses'
import Contacts from './components/pages/About/Contacts'
import Designers from './components/pages/About/Designers'
import Casing from './components/pages/Casing'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/catalog/:slug',
            name: 'catalog',
            component: Category,
            meta: {
                title: 'Category'
            }
        },
        {
            path: '/products/:slug',
            name: 'product',
            component: Product,
            meta: {
                title: 'Product'
            }
        },
        {
            path: '/basket',
            name: 'basket',
            component: Basket,
            meta: {
                title: 'Basket'
            }
        },
        {
            path: '/service',
            name: 'service',
            component: Service,
            meta: {
                title: 'Service'
            }
        },
        {
            path: '/service/guaranties',
            name: 'guaranties',
            component: Guaranties,
            meta: {
                title: 'Guaranties'
            }
        },
        {
            path: '/service/fitting',
            name: 'fitting',
            component: Fitting,
            meta: {
                title: 'Fitting'
            }
        },
        {
            path: '/service/hauling',
            name: 'hauling',
            component: Hauling,
            meta: {
                title: 'Hauling'
            }
        },
        {
            path: '/service/assemble',
            name: 'assemble',
            component: Assemble,
            meta: {
                title: 'Assemble'
            }
        },
        {
            path: '/service/delivery',
            name: 'delivery',
            component: Delivery,
            meta: {
                title: 'Delivery'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                title: 'About'
            }
        },
        {
            path: '/about/manufacturing',
            name: 'manufacturing',
            component: Manufacturing,
            meta: {
                title: 'Manufacturing'
            }
        },
        {
            path: '/about/sales',
            name: 'sales',
            component: Sales,
            meta: {
                title: 'Sales'
            }
        },
        {
            path: '/about/addresses',
            name: 'addresses',
            component: Addresses,
            meta: {
                title: 'Addresses'
            }
        },
        {
            path: '/about/contacts',
            name: 'contacts',
            component: Contacts,
            meta: {
                title: 'Contacts'
            }
        },
        {
            path: '/about/designers',
            name: 'designers',
            component: Designers,
            meta: {
                title: 'Designers'
            }
        },
        {
            path: '/casing',
            name: 'casing',
            component: Casing,
            meta: {
                title: 'Casing'
            }
        },
    ],
    scrollBehavior() {
        return {x: 0, y: 0}
    }
})

