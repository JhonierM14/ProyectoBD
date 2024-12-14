import Asistencia from '../pages/Asistencia';
import CreacionClase from '../pages/CreacionClases';
import Reportes from '../pages/Reportes';
import InformePreguntas from '../pages/InformePreguntas/InformePreguntas';
import CrearPreguntas from '../pages/GestionClases/index';
import CursosProfesor from '../pages/Curso';
import GenerateQr from '../pages/CodigoQR';

const AdminRoutes = [
    { path: '/asistencia', element: <Asistencia /> },
    { path: '/creacionclase', element: <CreacionClase /> },
    { path: '/reportes', element: <Reportes /> },
    { path: '/informepreguntas', element: <InformePreguntas /> },
    { path: '/crearpreguntas', element: <CrearPreguntas /> },
    { path: '/codigoQR', element: <GenerateQr/> },
    { path: '/:nombreUsuario/cursos', element: <CursosProfesor /> },
];

export default AdminRoutes;
