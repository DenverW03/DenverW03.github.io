import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';

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
    };
  });

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

