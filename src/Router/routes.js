import Feed from '../pages/Feed'
import Friends from '../pages/Friends'

export const bottomNavigationRoutes = [
  { name: 'Feed', icon: 'home', component: Feed },
  { name: 'Friends', icon: 'person', component: Friends },
  { name: 'Settings', icon: 'settings', component: Feed },
]
