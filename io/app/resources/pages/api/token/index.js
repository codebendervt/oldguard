// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {CreateToken} from'./init'

export default async (req, res) => {


    try {
    
     
    const token = CreateToken(req.body)
    res.json(token)

    } catch (err) {

        //console.log(err)
        res.json({msg:err, status:"error"})
    }


}