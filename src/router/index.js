import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../pages/Index.vue'
import About from '../pages/About.vue'
import Login from '../pages/Login.vue'
import NotFound from '../pages/404.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/login', component: Login},
    {path: '/:pathMatch(.*)*', component: NotFound},

]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
