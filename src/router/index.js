import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/HomeView';
import NavView from '@/views/NavView';
import CareerView from '@/views/CareerView';
import PartnersView from '@/views/PartnersView';
import AboutView from '@/views/AboutView';
import ClientsView from '@/views/ClientsView';
import NewsView from '@/views/NewsView';
import OurworkView from '@/views/OurworkView';
import EventsView from '@/views/EventsView';

Vue.use(Router);

export default new Router({
    //mode: 'history',
    //base : 'test',
    routes: [
        {
            path: '/',
            name: 'home-view',
            component: HomeView
        },
        {
            path: '/nav',
            name: 'nav-view',
            component: NavView
        },
        {
            path: '/ourwork',
            name: 'ourwork-view',
            component: OurworkView,
            children: [
                {
                    path: 'events',
                    name: 'ourwork-events',
                    component: EventsView
                }
            ]
        },
        {
            path: '/partners',
            name: 'partners-view',
            component: PartnersView
        },
        {
            path: '/news',
            name: 'news-view',
            component: NewsView
        },
        {
            path: '/clients',
            name: 'clients-view',
            component: ClientsView
        },
        {
            path: '/about',
            name: 'about-view',
            component: AboutView
        },
        {
            path: '/career',
            name: 'career-view',
            component: CareerView
        },
    ]
});
