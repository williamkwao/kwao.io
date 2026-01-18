import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  featuredpost: boolean;
  featuredimage: string;
  tags: string[];
  content: string;
  htmlContent: string;
  readingTime: string;
}

export interface PostSummary {
  slug: string;
  title: string;
  date: string;
  description: string;
  featuredpost: boolean;
  featuredimage: string;
  readingTime: string;
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}

export async function getAllPosts(): Promise<PostSummary[]> {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(
    fileNames
      .filter((name) => name.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        const stats = readingTime(content);

        return {
          slug,
          title: data.title || '',
          date: data.date ? new Date(data.date).toISOString() : '',
          description: data.description || '',
          featuredpost: data.featuredpost || false,
          featuredimage: data.featuredimage || '',
          readingTime: stats.text,
        };
      })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);
  const htmlContent = await markdownToHtml(content);

  return {
    slug,
    title: data.title || '',
    date: data.date ? new Date(data.date).toISOString() : '',
    description: data.description || '',
    featuredpost: data.featuredpost || false,
    featuredimage: data.featuredimage || '',
    tags: data.tags || [],
    content,
    htmlContent,
    readingTime: stats.text,
  };
}

export async function getAllSlugs(): Promise<string[]> {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''));
}
