//pages
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
// layout
import { HeaderOnly } from '~/Components/Layout'
export const publicRoutes = [
     {
          path: '/',
          component: Home
     },
     {
          path: '/following',
          component: Following
     },
     {
          path: '/profile',
          component: Profile
     },
     {
          path: '/upload',
          component: Upload,
          layout: HeaderOnly
     }
]  // kh cần đăng nhập để xem
