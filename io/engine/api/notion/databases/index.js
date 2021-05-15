import notionSDK from 'services/notion'



export default async (req, res) => {

    try {

        const response = await notionSDK().databases.list();
        res.json(response)
    } catch (e) {
        res.json({ message: e.message })
    }


}
