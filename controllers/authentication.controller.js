const userModel = require('../models/users.model')
const createAccessToken = require('../config/token')

const searchByLogin = (request, response) => {
    try{
        const {login, mdp} = request.body
        userModel.searchByLogin(login, async (err, result) => {
            if(err) response.status(403).send({error:'Forbidden', message:err})
            else{
                if(mdp == result[0].mdp){
                    const token = await createAccessToken(result[0])
                    response.json({token})
                    
                }else{
                    response.status(403).send({error:'Forbidden'})                    
                }
            }
        })
    }catch (e) {
        console.error(e)

    }   
}
module.exports = {
    searchByLogin
}