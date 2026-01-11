import Link from "next/link";
import { getBooks } from "@/lib/books";
import BookCard from "@/components/BookCard";

export default function HomePage() {
  const books = getBooks();
  const availableCount = books.filter((b) => b.status === "available").length;
  const featuredBooks = books.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-700 to-amber-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            知买书
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-4">
            社区图书馆
          </p>
          <p className="text-lg text-amber-200 mb-8 max-w-2xl mx-auto">
            欢迎来到知买书，一个为邻里打造的共享图书馆。在这里，每一本书都承载着知识与温暖，等待与你相遇。
          </p>
          <p className="text-amber-200 mb-8 max-w-2xl mx-auto">
            Welcome to Zhimaishu, a community library built for neighbors. Here, every book carries knowledge and warmth, waiting to meet you.
          </p>
          <Link
            href="/catalog"
            className="inline-block bg-white text-amber-800 px-8 py-3 rounded-lg font-semibold hover:bg-amber-100 transition-colors"
          >
            浏览书目 Browse Catalog
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            我们的使命 Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">共享阅读</h3>
              <p className="text-gray-600">
                让好书在邻里间流动，共享知识的力量
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Share good books among neighbors
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">连接社区</h3>
              <p className="text-gray-600">
                以书为媒，搭建邻里交流的桥梁
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Build bridges between neighbors through books
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">培养习惯</h3>
              <p className="text-gray-600">
                在社区中培养阅读的良好习惯
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Cultivate reading habits in the community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-amber-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-800">{books.length}</div>
              <div className="text-gray-600">藏书总量</div>
              <div className="text-gray-500 text-sm">Total Books</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">{availableCount}</div>
              <div className="text-gray-600">可借阅</div>
              <div className="text-gray-500 text-sm">Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-800">{books.length - availableCount}</div>
              <div className="text-gray-600">借阅中</div>
              <div className="text-gray-500 text-sm">Borrowed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-800">∞</div>
              <div className="text-gray-600">分享的快乐</div>
              <div className="text-gray-500 text-sm">Joy of Sharing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            精选书籍 Featured Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/catalog"
              className="inline-block bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              查看全部书籍 View All Books
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
