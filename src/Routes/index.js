//pages
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
//config route
import routesconfig from '~/config/routes';
// layout
import { HeaderOnly } from '~/Components/Layout';
import Search from '~/Components/Layout/Components/Search';
export const publicRoutes = [
    {
        path: routesconfig.home,
        component: Home,
    },
    {
        path: routesconfig.following,
        component: Following,
    },
    {
        path: routesconfig.profie,
        component: Profile,
    },
    {
        path: routesconfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routesconfig.search,
        component: Search,
        layout: null,
    },
]; // kh cần đăng nhập để xem
