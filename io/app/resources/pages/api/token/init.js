var jwt = require('jsonwebtoken');
let key = 'shhhhh'

//process.env.HASH  it is safer to use a env to set key
export const CreateToken = (data) => {
    let token =jwt.sign({issuer:"sauveur",expiresIn: "30d",data:data}, `${key}`);

    return {token:token}
}

export const ReadToken = (body) =>{
    return  jwt.verify(body.token,`${key}`);

}

// export {ReadToken,CreateToken}