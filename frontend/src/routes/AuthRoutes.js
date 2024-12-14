import { Home } from '../pages';
import Login from '../pages/Home/Login/Login';
import Registro from '../pages/Home/Registro/Registro';

const AuthRoutes = [
    { path: '/', element: <Home/>},
    { path: '/login', element: <Login /> },
    { path: '/registro', element: <Registro /> },
];

export default AuthRoutes;
