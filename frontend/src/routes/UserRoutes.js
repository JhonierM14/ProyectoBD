import UserType from '../pages/Home/TipoUsuario/UserType';
import DatosUsuario from '../pages/DatosUsuario';
import Historial from '../pages/Historial';
import CreacionClase from '../pages/CreacionClases';
import { Reportes } from '../pages';
import { CrearPreguntas } from '../pages';

const UserRoutes = [
    { path: '/tipousuario', element: <UserType/>},
    { path: '/datosusuario', element: <DatosUsuario /> },
    { path: '/:nombreUsuario/cursos/:nombreCurso/historial', element: <Historial /> },
    { path: '/:nombreUsuario/cursos/:nombreCurso/creacionclase', element: < CreacionClase/>},
    { path: '/:nombreUsuario/cursos/:nombreCurso/', element: < Reportes/>},
    { path: '/:nombreUsuario/cursos/:nombreCurso/', element: < CrearPreguntas/>}
];

export default UserRoutes;