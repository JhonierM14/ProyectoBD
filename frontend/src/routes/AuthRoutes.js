import { Home } from '../pages';
import Login from '../pages/Home/Login/Login';
import Registro from '../pages/Home/Registro/Registro';
<<<<<<< HEAD
=======
import RegistroEst from '../pages/Home/RegistroEst/RegistroEst';
>>>>>>> 024d2a78575af5775bfcc56d9a8835f72e5b45c4

const AuthRoutes = [
    { path: '/', element: <Home/>},
    { path: '/login', element: <Login /> },
    { path: '/registro', element: <Registro /> },
    { path: '/registroEst', element: <RegistroEst /> },
];

export default AuthRoutes;
