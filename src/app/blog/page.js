import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import Header from '@/components/header/Header';
import styles from './Blog.module.css';

// The main Blog page component
export default async function BlogPage() {
  // Fetch the list of blog posts
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const { data } = matter(fileContents);
    const slug = filename.replace('.md', '');

    return {
      slug,
      title: data.title,
			date: data.date,
    };
  });

  return (
		<>
		<Header pageName="BLOG" />
    <div className={styles["list-container"]}>
			{posts.map((post) => (
					<Link key={post.slug} href={`/blog/${post.slug}`} className={styles["list-item"]}>
						{`${post.title} - ${post.date}`}
					</Link>
			))}
    </div>
		</>
  );
}

