const { Client } = require('@notionhq/client');
require('dotenv').config();

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const database_id = process.env.NOTION_DATABASE_ID;
