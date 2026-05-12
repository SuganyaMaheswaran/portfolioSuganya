import Link from 'next/link';
import MapExplorer from '@/components/MapExplorer';

export const metadata = {
  title: 'Exploration Map - Suganya Maheswaran',
  description: 'Explore the geographic journey of my professional experience.',
};

export default function MapPage() {
  return (
    <main>
      {/* Back navigation */}
      <div className="mb-8">
        <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          ← Back home
        </Link>
      </div>

      {/* Map Explorer */}
  <div className="h-[80vh] w-full">
  <MapExplorer />
</div>
      {/* Footer */}
      <footer className="mt-32 pt-8 border-t border-gray-200">
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
