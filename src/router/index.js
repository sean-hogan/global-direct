import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { fb } from '../firebase'
import { publicPath } from '../../vue.config.js'


const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/courses',
        name: 'CourseCatalog',
        // route level code-splitting
        // this generates a separate chunk (course-catalog.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "course-catalog" */ '../views/CourseCatalog.vue')
    },
    {
        path: '/faq',
        name: 'FAQ',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "faq" */ '../views/FAQ.vue')
    },
    {
        path: '/request-information',
        name: 'RequestInformation',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "request-information" */ '../views/RequestInformation.vue')
    },
    {
        path: '/calendar',
        name: 'Calendar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "calendar" */ '../views/Calendar.vue')
    },
    {
        path: '/get-started',
        name: 'GetStarted',
        component: () =>
            import ('../views/GetStarted.vue')
    },
    {
        path: '/confirmation',
        name: 'Confirmation',
        component: () =>
            import ('../views/Confirmation.vue')
    },
    {
        path: '/rfi-confirmation',
        name: 'RFIConfirmation',
        component: () =>
            import ('../views/RFIConfirmation.vue')
    },
    {
        path: '/courses/:id',
        name: 'CourseTemplate',
        component: () =>
            import ('../views/CourseTemplate.vue'),
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () =>
            import ('../views/Admin.vue'),
        meta: { requiresAuth: true },
        children: [{
                path: '',
                redirect: '/admin/admin-dashboard',
            },
            {
                path: 'admin-dashboard',
                name: 'AdminDashboard',
                component: () =>
                    import ('../components/AdminDashboard.vue')
            },
            {
                path: 'catalog-edit',
                name: 'CatalogEdit',
                component: () =>
                    import ('../components/CatalogEdit.vue')
            },
            {
                path: 'enrollment-edit',
                name: 'EnrollmentEdit',
                component: () =>
                    import ('../components/EnrollmentEdit.vue')
            },
        ]
    }




]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    base: publicPath,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            document.body.setAttribute("tabindex", "-1");
            document.getElementById(to.hash.substring(1)).focus();
            console.log(to);
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 50,
            }
        } else {
            //reset focus
            document.body.setAttribute("tabindex", "-1");
            document.body.focus();
            document.body.removeAttribute("tabindex");
            //scroll to top
            return { left: 0, top: 0 }
        }
    }

})

router.beforeEach((to, from, next) => {
    //check for auth if trying to access locked page
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (fb.auth().currentUser) {
            next();
        } else {
            alert('You must be logged in to see this page');
            next({
                path: '/',
            });
        }
    } else {
        next();
    }
});

export default router