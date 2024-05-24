import express from 'express'
import {  inicio,seguridadSocial,noEncontrado,buscador} from '../controllers/appController.js'

const router =express.Router()

//Pagina de inicio
router.get('/',inicio)

//
router.get('/seguridadsocial/:id',seguridadSocial)

router.get('/404',noEncontrado)

router.post('/buscador',buscador)


export default router