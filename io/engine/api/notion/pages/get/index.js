import notionSDK from 'services/notion'



export default async (req, res) => {

    try {

        const databaseId = req.query.id;


        const response = await notionSDK().pages.retrieve({ page_id: databaseId });

        res.json(response)
    } catch (e) {
        res.json({ message: e.message })
    }


}
