import Seguridadsocial from "./Seguridadsocial.js";
import Companyseguros from "./Companyseguros.js";
import Titularseguridadsocial from "./titularseguridadsocial.js";
import Usuario from './Usuario.js'
import Paciente from "./Paciente.js";
import Campaign from "./Campaign.js";

Paciente.belongsTo(Seguridadsocial,{foreignKey: 'seguridadsocialid'})
Paciente.belongsTo(Companyseguros,{foreignKey: 'companysegurosid'})
Paciente.belongsTo(Titularseguridadsocial,{foreignKey: 'titularseguridadsocialid'})
Paciente.belongsTo(Usuario,{foreignKey:'usuarioid'})
Paciente.belongsTo(Campaign,{foreignKey:'campaignid'})

export{
    Companyseguros,
    Paciente,
    Titularseguridadsocial,
    Seguridadsocial,
    Usuario,
    Campaign
}