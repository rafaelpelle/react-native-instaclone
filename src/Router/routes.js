import Feed from '../pages/Feed'
import Gallery from '../pages/Gallery'
import Friends from '../pages/Friends'

export const bottomNavigationRoutes = [
  { name: 'Feed', icon: 'home', component: Feed },
  { name: 'Gallery', icon: 'image', component: Gallery },
  { name: 'Friends', icon: 'person', component: Friends },
]
