import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';
import Header from '@/components/header/Header';
import styles from './Article.module.css';

export default async function BlogPost({ params }) {
  const { slug } = params;

  // Fetch the blog post content based on the slug
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Parse the Markdown content and front matter
  const { data, content: markdownContent } = matter(fileContents);

  // Convert Markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(markdownContent);

  const content = processedContent.toString();

  return (
		<>
			<Header pageName={data.title} />
			<div className={styles["article-container"]}>
				<article className={styles.article}>
					<div dangerouslySetInnerHTML={{ __html: content }} />
				</article>
			</div>
		</>
  );
}

// Function to generate static paths
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

