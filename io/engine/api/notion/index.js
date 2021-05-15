import notionSDK from 'services/notion'



export default async (req, res) => {

    try {
        
        const listUsersResponse = await notionSDK().users.list();
        res.json({ message: "initialized notion",data:listUsersResponse })
    } catch {
        res.json({ message: "failed to start notion" })
    }


}
