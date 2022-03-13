import { notion, database_id } from '../notion';

export default async function handler(req, res) {
  const { id: page_id } = req.query;
  const page = await notion.pages.retrieve({ page_id });
  return page;
}
