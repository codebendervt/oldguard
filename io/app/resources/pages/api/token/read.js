// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {ReadToken} from'./init'

export default async (req, res) => {


    try {
    
        
    var decoded = ReadToken(req.body);

    res.json(decoded)

    } catch (err) {

        //console.log(err)
        res.json({msg:err})
    }


}


