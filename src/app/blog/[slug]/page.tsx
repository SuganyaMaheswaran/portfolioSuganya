import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Blog - Suganya Maheswaran',
  description: 'Read my thoughts on software engineering and systems thinking.',
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const categoryLabels: Record<string, string> = {
    technical: 'Technical',
    'systems-thinking': 'Systems Thinking',
    'problem-solving': 'Problem Solving',
  };

  const categoryColors: Record<string, string> = {
    technical: 'bg-blue-100 text-blue-800',
    'systems-thinking': 'bg-purple-100 text-purple-800',
    'problem-solving': 'bg-green-100 text-green-800',
  };

  return (
    <main>
      {/* Navigation */}
      <div className="mb-12">
        <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          ← Back to blog
        </Link>
      </div>

      {/* Article */}
      <article className="max-w-2xl">
        {/* Header */}
        <header className="mb-12 pb-12 border-b border-gray-200">
          <div className="mb-4">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                categoryColors[post.category] || categoryColors['technical']
              }`}
            >
              {categoryLabels[post.category]}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

          <div className="flex items-center gap-6 text-sm text-gray-600">
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
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-20">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('#')) {
              const level = paragraph.match(/^#+/)?.[0].length || 1;
              const text = paragraph.replace(/^#+\s/, '');
              const Tag = `h${Math.min(level + 1, 6)}` as keyof JSX.IntrinsicElements;
              return (
                <div key={idx} className={`my-${level === 1 ? 8 : level === 2 ? 6 : 4}`}>
                  <Tag className={`font-bold text-gray-900 ${
                    level === 1 ? 'text-3xl' :
                    level === 2 ? 'text-2xl' :
                    'text-xl'
                  } mb-4`}>
                    {text}
                  </Tag>
                </div>
              );
            }

            if (paragraph.startsWith('-')) {
              return (
                <ul key={idx} className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                  {paragraph.split('\n').map((item, itemIdx) => (
                    <li key={itemIdx} className="ml-4">
                      {item.replace(/^-\s/, '')}
                    </li>
                  ))}
                </ul>
              );
            }

            if (paragraph.startsWith('1.') || /^\d+\./.test(paragraph)) {
              return (
                <ol key={idx} className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
                  {paragraph.split('\n').map((item, itemIdx) => (
                    <li key={itemIdx} className="ml-4">
                      {item.replace(/^\d+\.\s/, '')}
                    </li>
                  ))}
                </ol>
              );
            }

            return (
              <p key={idx} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>

      {/* Navigation to other posts */}
      <div className="border-t border-gray-200 pt-12">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">More Articles</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts
            .filter((p) => p.slug !== post.slug)
            .slice(0, 2)
            .map((otherPost) => (
              <Link key={otherPost.id} href={`/blog/${otherPost.slug}`}>
                <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors cursor-pointer">
                  <h4 className="font-semibold text-gray-900 mb-2">{otherPost.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{otherPost.excerpt}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(otherPost.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-200">
        <nav className="flex flex-wrap gap-6 text-gray-700 mb-8">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="/blog" className="hover:text-gray-900 transition-colors">
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
