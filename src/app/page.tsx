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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-slate-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight">
              只买书
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 mb-3 font-light">
              乡村图书馆
            </p>
            <p className="text-lg text-stone-400 mb-8 leading-relaxed max-w-xl">
              欢迎来到只买书，一个为乡村打造的共享图书馆。在这里，每一本书都承载着知识与温暖，等待与你相遇。
            </p>
            <p className="text-stone-500 mb-10 italic text-sm leading-relaxed max-w-xl">
              Welcome to Zhimaishu, a rural library built for the village. Here, every book carries knowledge and warmth, waiting to meet you.
            </p>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 bg-white text-slate-800 px-7 py-3.5 rounded-lg font-medium hover:bg-stone-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              浏览书目
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">
              我们的使命
            </h2>
            <p className="text-slate-400 text-sm italic">Our Mission</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">共享阅读</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-2">
                让好书在邻里间流动，共享知识的力量
              </p>
              <p className="text-slate-400 text-xs italic">
                Share good books among neighbors
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">连接社区</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-2">
                以书为媒，搭建邻里交流的桥梁
              </p>
              <p className="text-slate-400 text-xs italic">
                Build bridges between neighbors through books
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">培养习惯</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-2">
                在社区中培养阅读的良好习惯
              </p>
              <p className="text-slate-400 text-xs italic">
                Cultivate reading habits in the community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-stone-200/60 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-semibold text-slate-800 mb-2">{books.length}</div>
              <div className="text-slate-500 text-sm">藏书总量</div>
              <div className="text-slate-400 text-xs italic mt-1">Total Books</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-semibold text-emerald-600 mb-2">{availableCount}</div>
              <div className="text-slate-500 text-sm">可借阅</div>
              <div className="text-slate-400 text-xs italic mt-1">Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-semibold text-slate-800 mb-2">{books.length - availableCount}</div>
              <div className="text-slate-500 text-sm">借阅中</div>
              <div className="text-slate-400 text-xs italic mt-1">Borrowed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-semibold text-amber-600 mb-2">&infin;</div>
              <div className="text-slate-500 text-sm">分享的快乐</div>
              <div className="text-slate-400 text-xs italic mt-1">Joy of Sharing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">
              精选书籍
            </h2>
            <p className="text-slate-400 text-sm italic">Featured Books</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 border border-slate-300 text-slate-600 px-7 py-3 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
            >
              查看全部书籍
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
