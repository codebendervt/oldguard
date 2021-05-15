import notionSDK from 'services/notion'



export default async (req, res) => {

    try {
        
        const databaseId = req.query.id;
        const type = `${req.query.type}_id`;
   
        const secondary = JSON.parse(req.body);
        //console.log(secondary)

        const response = await notionSDK().pages.create({
            parent: {
                [type]: databaseId
            },
            ...secondary
        });
        res.json(response)
    } catch (e) {
        res.json({ message: e.message })
    }


}
