import express from 'express';
import {formularioLogin,autenticar,formularioRegistro,
    registrar,confirmar,formularioOlvidePassword,comprobarToken,
    nuevoPassword, resetPassword } from '../controllers/usuarioController.js'
 
const router = express.Router();

//Routing
router.get('/login',formularioLogin);
router.post('/login',autenticar);

router.get('/registro', formularioRegistro)
router.post('/registro', registrar)

router.get('/confirmar/:token', confirmar )

router.get('/olvide-password', formularioOlvidePassword)
router.post('/olvide-password', resetPassword)

//Almacena el nuevo password
router.get('/Olvide-password/:token', comprobarToken);
router.post('/Olvide-password/:token', nuevoPassword);


export default router;