import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                Zhimaishu Library
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-600"
              >
                Home
              </Link>
              <Link
                href="/catalog"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-600"
              >
                Catalog
              </Link>
            </div>
          </div>
          {/* Mobile menu button placeholder - for simplicity in this prototype we can stick to basic links, 
              but a real app would have a hamburger menu. 
              Let's add a simple mobile link group visible only on small screens. */}
          <div className="flex items-center sm:hidden space-x-4">
             <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300">Home</Link>
             <Link href="/catalog" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300">Catalog</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
