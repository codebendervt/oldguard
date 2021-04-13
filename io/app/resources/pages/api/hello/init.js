var faunadb = require('faunadb'),
  query = faunadb.query

const create = async (data,col="theplug") => {

    return await faunaSDK.query(
        q.Create(
            q.Collection(col),
            data
        )
    )
}

const read = async (id,col="theplug") => {

    return await faunaSDK.query(
        q.Get(
            q.Ref(
                q.Collection(col), id)
        )

    )
}

const update = async (data, id,col="theplug") => {

    return await faunaSDK.query(
        q.Update(
            q.Ref(q.Collection(col), id),
            data
        )
    )
}

const remove = async (id,col="theplug") => {

    return await faunaSDK.query(
        q.Delete(q.Ref(q.Collection(col), id))
      )
}

const findById = async (id, index ="identity") =>{

    return await faunaSDK.query(
        q.Get(q.Match(q.Index(index), id))
      )
}

  
const faunaSDK = new faunadb.Client({ secret: process.env.FAUNA_SECRET })

const q = query;

export {create, update, read, remove,findById}