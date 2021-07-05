import VueRouter, { RouteConfig } from 'vue-router';
import Vue from 'vue';

import Home from '../views/Home.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            linkText: 'Home',
            title: 'Guide Vue - Home',
            metaTags: [
                {
                    name: 'description',
                    content:
                        'The home page of Open Slot guide vue web application.',
                },
                {
                    property: 'og:description',
                    content:
                        'The home page of Open Slot guide vue web application.',
                },
            ],
        },
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            linkText: 'About',
            title: 'Guide Vue - About',
            metaTags: [
                {
                    name: 'description',
                    content:
                        'The about page of Open Slot guide vue web application.',
                },
                {
                    property: 'og:description',
                    content:
                        'The about page of Open Slot guide vue web application.',
                },
            ],
        },
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.title);

    const nearestWithMeta = to.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.metaTags);

    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(
        el => {
            if (el.parentNode) {
                el.parentNode.removeChild(el);
            }
        }
    );

    if (!nearestWithMeta) return next();

    nearestWithMeta.meta.metaTags
        .map(tagDef => {
            const tag = document.createElement('meta');

            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key]);
            });

            tag.setAttribute('data-vue-router-controlled', '');

            return tag;
        })

        .forEach(tag => document.head.appendChild(tag));

    next();
});

export default router;
