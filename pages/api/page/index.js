import { notion, database_id } from '../notion';

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
      date: page.properties.Date.date?.start,
      description: page.properties.Description.rich_text[0]?.text.content,
      tags: page.properties.Tags.select?.name
    }
  });
  return pages;
}

export default async function handler(req, res) {
  const pages = await getPages();
  res.status(200).json(pages);
}
