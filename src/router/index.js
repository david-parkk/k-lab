import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import CommuView from '../views/CommuView.vue'
import CategoryView from '../views/CategoryView.vue'
import ChallengeView from '../views/ChallengeView.vue'
import DangerCategoryView from '../views/DangerCategoryView.vue'
import PostView from '../views/PostView.vue'
import RankingView from '../views/RankingView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView

  },
  {
    path: '/community',
    name: 'community',
    component: CommuView
  },
  {
    path: '/category',
    name: 'category',
    component: CategoryView
  },
  {
    path: '/dangercategory',
    name: 'dangercategory',
    component: DangerCategoryView
  },
  {
    path: '/challenge',
    name: 'challenge',
    component: ChallengeView
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: RankingView
  },
  {
    path: '/community/post/:id',
    name: 'PostView',
    component: PostView,
    props: true
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
