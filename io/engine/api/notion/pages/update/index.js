import notionSDK from 'services/notion'



export default async (req, res) => {

    try {
        let secondary = null
  
        const databaseId = req.query.id;
        try{
            secondary = JSON.parse(req.body)
        }catch{
            secondary = req.body
        }
        const response = await notionSDK().pages.update({
            page_id: databaseId,
            ...secondary
          });

        res.json(response)
    } catch (e) {
        res.json({ message: e.message })
    }


}
