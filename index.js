const { Client } = require('@notionhq/client');
require('dotenv').config();

console.log(process.env.NOTION_TOKEN);

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const database_id = process.env.NOTION_DATABASE_ID;

const getPages = async () => {
  const payload = {
    path: `databases/${database_id}/query`,
    method: 'POST'
  }
  const {results} = await notion.request(payload);
  const pages = results.map(page => {
    return {
      id: page.id,
      title: page.properties.Name.title[0].text.content,
      date: page.properties.Date.date.start,
      description: page.properties.Description.rich_text[0].text.content,
      tags: page.properties.Tags.multi_select.map(tag => tag.name)
    }
  });
  return pages;
}

;(async () => {
  const pages = await getPages();
  console.log(pages);
})()
