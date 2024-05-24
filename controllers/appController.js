import { Sequelize } from 'sequelize'
import {Companyseguros, Paciente,Campaign} from '../models/index.js'

const inicio = async (req, res )=>{

    const [campaign,companyseguro,paciente] = await Promise.all([
        Campaign.findAll(),
        Companyseguros.findAll(),
        Paciente.findAll({
            limit:3,
            where:{
                campaignid:2
            },
            include:[
                {
                    model:Campaign,as:'campaign'
                }
            ],
            order:[
                ['createdAt','DESC']
            ]
        })
    ])

    // console.log(companyseguro)
    res.render('inicio',{
        pagina:'Inicio',
        campaign,
        companyseguro,
        paciente

    })
    }

const seguridadSocial=(req,res) =>{

}

const noEncontrado=(req,res)=>{
    res.render('404',{
        pagina:"no encontrado"
    })

}

const buscador=(req,res)=>{

}

export{
    inicio,
    seguridadSocial,
    noEncontrado,
    buscador
}
