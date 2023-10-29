import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark'
import html from 'remark-html'
const postsDirectory = path.join(process.cwd(), 'blogposts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };
    return blogPost;
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}


export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString()
  const blogPostWithHtml: BlogPost & {contentHtml: string} = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml
  }
  return blogPostWithHtml;
}