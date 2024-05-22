import express from 'express'
import {body} from 'express-validator'
import {admin,crear,guardar,agregarImagen,almacenarImagen ,editar,guardarCambios,eliminar} from '../controllers/pacientesController.js'
import protegerRuta from '../middleware/protegerRuta.js';
import upload from '../middleware/subirImagen.js';

const router = express.Router();

router.get('/mis-pacientes',protegerRuta, admin)

router.get('/pacientes/crear',protegerRuta,crear)


router.post('/pacientes/crear',protegerRuta,
    body('nombre').notEmpty().withMessage('El Nombre es obligatorio'),
    body('datomedico').notEmpty().withMessage('El datos medico es obligatorio'),
    body('correo').notEmpty().withMessage('El Correo es obligatorio'),
    body('lat').notEmpty().withMessage('Ubica la direccion del paciente en el mapa'),
guardar
)

router.get('/pacientes/agregar-imagen/:id',protegerRuta,agregarImagen)
router.post('/pacientes/agregar-imagen/:id',
 protegerRuta,
    upload.single('imagen'),
    almacenarImagen
)

router.get('/pacientes/editar/:id',protegerRuta,editar)
router.post('/pacientes/editar/:id',protegerRuta,
    body('nombre').notEmpty().withMessage('El Nombre es obligatorio'),
    body('datomedico').notEmpty().withMessage('El datos medico es obligatorio'),
    body('correo').notEmpty().withMessage('El Correo es obligatorio'),
    body('lat').notEmpty().withMessage('Ubica la direccion del paciente en el mapa'),
guardarCambios
)

router.post('/pacientes/eliminar/:id',
    protegerRuta,
    eliminar
)
export default router