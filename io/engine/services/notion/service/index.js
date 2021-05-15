const { Client } = require('@notionhq/client');


const notion = (key = process.env.NOTION_TOKEN ) => {

  // Initializing a client
  return new Client({
    auth: key,
  });

}


export default notion;