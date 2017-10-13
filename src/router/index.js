import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/HomeView';
import NavView from '@/views/NavView';
import CareerView from '@/views/CareerView';
import PartnersView from '@/views/PartnersView';
import AboutView from '@/views/AboutView';
import ClientsView from '@/views/ClientsView';
import NewsView from '@/views/NewsView';
import NewsListView from '@/views/NewsListView';
import NewsDetailView from '@/views/NewsDetailView';
import OurworkView from '@/views/OurworkView';
import OurworkNavView from '@/views/OurworkNavView';
import EventsView from '@/views/EventsView';
import EventsInfoView from '@/views/EventsInfoView';
import EventsListView from '@/views/EventsListView';
import EventsDetailView from '@/views/EventsDetailView';
import IconicView from '@/views/IconicView';
import IconicListView from '@/views/IconicListView';
import IconicDetailView from '@/views/IconicDetailView';
import IconicDetailViewA from '@/views/IconicDetailViewA';
import IconicDetailViewB from '@/views/IconicDetailViewB';
import IconicDetailViewC from '@/views/IconicDetailViewC';
import IconicDetailViewD from '@/views/IconicDetailViewD';
import IconicDetailViewE from '@/views/IconicDetailViewE';
import IconicDetailViewF from '@/views/IconicDetailViewF';
import IconicDetailViewG from '@/views/IconicDetailViewG';
import IconicDetailViewH from '@/views/IconicDetailViewH';
import IconicDetailViewI from '@/views/IconicDetailViewI';
import IconicDetailViewJ from '@/views/IconicDetailViewJ';
import LiveView from '@/views/LiveView';
import LiveInfoView from '@/views/LiveInfoView';
import LiveNavView from '@/views/LiveNavView';
import RocksView from '@/views/RocksView';
import SifsView from '@/views/SifsView';
import SifsListView from '@/views/SifsListView';
import SifsDetailView from '@/views/SifsDetailView';
import RecreationView from '@/views/RecreationView';
import RecreationInfoView from '@/views/RecreationInfoView';
import RecreationDetailView from '@/views/RecreationDetailView';

Vue.use(Router);

export default new Router({
    //mode: 'history',
    //base : 'test',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/nav',
            name: 'nav',
            component: NavView
        },
        {
            path: '/ourwork',
            component: OurworkView,
            children: [
                {
                    path: '/',
                    name: 'ourwork-nav',
                    component: OurworkNavView
                },
                {
                    path: 'events',
                    component: EventsView,
                    children : [
                        {
                            path: '/',
                            name: 'events-info',
                            component: EventsInfoView
                        },
                        {
                            path: 'list',
                            name: 'events-list',
                            component: EventsListView
                        },
                        {
                            path: 'detail/:id',
                            name: 'events-detail',
                            component: EventsDetailView
                        },
                        {
                            path: 'iconic',
                            component: IconicView,
                            children : [
                                {
                                    path: '/',
                                    name: 'iconic-list',
                                    component: IconicListView
                                },
                                // {
                                //     path: 'detail/:id',
                                //     name: 'iconic-detail',
                                //     component: IconicDetailView
                                // },
                                {
                                    path: 'detail-a',
                                    name: 'iconic-detail-a',
                                    component: IconicDetailViewA
                                },
                                {
                                    path: 'detail-b',
                                    name: 'iconic-detail-b',
                                    component: IconicDetailViewB
                                },
                                {
                                    path: 'detail-c',
                                    name: 'iconic-detail-c',
                                    component: IconicDetailViewC
                                },
                                {
                                    path: 'detail-d',
                                    name: 'iconic-detail-d',
                                    component: IconicDetailViewD
                                },
                                {
                                    path: 'detail-e',
                                    name: 'iconic-detail-e',
                                    component: IconicDetailViewE
                                },
                                {
                                    path: 'detail-f',
                                    name: 'iconic-detail-f',
                                    component: IconicDetailViewF
                                },
                                {
                                    path: 'detail-g',
                                    name: 'iconic-detail-g',
                                    component: IconicDetailViewG
                                },
                                {
                                    path: 'detail-h',
                                    name: 'iconic-detail-h',
                                    component: IconicDetailViewH
                                },
                                {
                                    path: 'detail-i',
                                    name: 'iconic-detail-i',
                                    component: IconicDetailViewI
                                },
                                {
                                    path: 'detail-j',
                                    name: 'iconic-detail-j',
                                    component: IconicDetailViewJ
                                },
                            ]
                        },
                    ]
                },
                {
                    path: 'live',
                    component: LiveView,
                    children : [
                        {
                            path: '/',
                            name: 'live-info',
                            component: LiveInfoView
                        },
                        {
                            path: 'nav',
                            name: 'live-nav',
                            component: LiveNavView
                        },
                        {
                            path: 'rocks',
                            name: 'live-rocks',
                            component: RocksView
                        },
                        {
                            path: 'sifs',
                            component: SifsView,
                            children : [
                                {
                                    path: '/',
                                    name: 'sifs-list',
                                    component: SifsListView
                                },
                                {
                                    path: 'detail/:id',
                                    name: 'sifs-detail',
                                    component: SifsDetailView
                                }
                            ]
                        }
                    ]
                },
                {
                    path: 'recreation',
                    component: RecreationView,
                    children : [
                        {
                            path: '/',
                            name: 'recreation-info',
                            component: RecreationInfoView
                        },
                        {
                            path: 'detail',
                            name: 'recreation-detail',
                            component: RecreationDetailView
                        }
                    ]
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
            component: NewsView,
            children : [
                {
                    path: '/',
                    name: 'news-list',
                    component: NewsListView
                },
                {
                    path: 'detail/:id',
                    name: 'news-detail',
                    component: NewsDetailView
                }
            ]
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
