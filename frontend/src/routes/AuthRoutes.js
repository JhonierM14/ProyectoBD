import { Home } from '../pages';
import Login from '../pages/Home/Login/Login';
import Registro from '../pages/Home/Registro/Registro';
import RegistroEst from '../pages/Home/RegistroEst/RegistroEst';

const AuthRoutes = [
    { path: '/', element: <Home/>},
    { path: '/login', element: <Login /> },
    { path: '/registro', element: <Registro /> },
    { path: '/registroEst', element: <RegistroEst /> },
];

export default AuthRoutes;
