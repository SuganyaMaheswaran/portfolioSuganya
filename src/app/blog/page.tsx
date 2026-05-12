import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

export const metadata = {
  title: 'Blog - Suganya Maheswaran',
  description: 'My thoughts on software development, systems thinking, and problem-solving.',
};

export default function BlogPage() {
  const categoryColors: Record<string, string> = {
    technical: 'bg-blue-100 text-blue-800',
    'systems-thinking': 'bg-purple-100 text-purple-800',
    'problem-solving': 'bg-green-100 text-green-800',
  };

  return (
    <main>
      <div className="mb-12">
        <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 mb-6 inline-block">
          ← Back home
        </Link>
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Thoughts on software development, systems thinking, and the engineering problems that matter.
        </p>
      </div>

      {/* Blog Posts */}
      <div className="grid gap-8 mb-20">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <article className="group p-8 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-md transition-all duration-200 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600">{post.excerpt}</p>
                </div>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readTime} min read</span>
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    categoryColors[post.category] || categoryColors['technical']
                  }`}
                >
                  {post.category.replace('-', ' ').toUpperCase()}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="pt-8 border-t border-gray-200">
        <nav className="flex flex-wrap gap-6 text-gray-700 mb-8">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="/blog" className="hover:text-gray-900 transition-colors font-semibold">
            Blog
          </Link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
            GitHub
          </a>
          <a href="mailto:suganya@example.com" className="hover:text-gray-900 transition-colors">
            Email
          </a>
        </nav>
        <p className="text-sm text-gray-500">
          © 2024 Suganya Maheswaran. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
