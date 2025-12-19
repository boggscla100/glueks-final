import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import HoursView from '../views/HoursView.vue'
import StoryView from '../views/StoryView.vue'
import LiveEventsView from '../views/LiveEventsView.vue'

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/menu', name: 'menu', component: MenuView },
    { path: '/hours', name: 'hours', component: HoursView },
    { path: '/our-story', name: 'story', component: StoryView },
    { path: '/live-events', name: 'events', component: LiveEventsView },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router