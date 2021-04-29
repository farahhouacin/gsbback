var jsonwebtoken = require('jsonwebtoken')

const createAccessToken = (user) => {
    return new Promise((resolve, reject) => {
        if(user.id === undefined) reject('credentials not valid')
        else{
            const signedUser = {   // ON CREE NOTRE OBJET
                login: user.login,
                id: user.id
            }   // PPE EST LE SALT
            jsonwebtoken.sign(signedUser, "ppe", {expiresIn: '7d'}, (error, token) => {
                if(error) reject(error)
                else resolve(token)
            })
        }
    })
}
module.exports = createAccessToken