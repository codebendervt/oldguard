import notionSDK from 'services/notion'



export default async (req, res) => {

    try {

        const databaseId = req.query.id;


        //this works with pageIds as well
        const response = await notionSDK().blocks.children.list({
            block_id: databaseId,
          });

        res.json(response)
    } catch (e) {
        res.json({ message: e.message })
    }


}
