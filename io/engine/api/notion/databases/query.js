import notionSDK from 'services/notion'



export default async (req, res) => {

    try {

        const databaseId =  req.query.id;
        const filter =  req.body || undefined;

        console.log(filter)
        const response = await notionSDK().databases.query({
            database_id: databaseId,
            ...filter});

        res.json(response)
    } catch (e) {
        res.json({ message: e.message })
    }


}
