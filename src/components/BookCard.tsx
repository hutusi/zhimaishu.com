import type { Book } from "@/lib/books";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const isAvailable = book.status === "available";

  return (
    <article className="group bg-white rounded-xl elegant-shadow hover:elegant-shadow-hover transition-all duration-300 overflow-hidden">
      <div className="aspect-[3/4] bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50/30 flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
        <div className="text-center relative z-10">
          <div className="w-16 h-20 mx-auto mb-4 bg-gradient-to-br from-slate-700 to-slate-800 rounded-sm shadow-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-amber-100/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6zm0 2h12v16H6V4zm2 2v2h8V6H8zm0 4v2h8v-2H8zm0 4v2h5v-2H8z"/>
            </svg>
          </div>
          <p className="text-slate-600 font-medium text-sm line-clamp-2 px-2">
            {book.title}
          </p>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg text-slate-800 mb-1 line-clamp-1 group-hover:text-slate-900 transition-colors">
          {book.title}
        </h3>
        <p className="text-slate-400 text-sm mb-2 line-clamp-1 italic">
          {book.titleEn}
        </p>
        <p className="text-slate-500 text-sm mb-3">
          {book.author}
          <span className="text-slate-300 mx-1">/</span>
          <span className="text-slate-400 text-xs">{book.authorEn}</span>
        </p>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {book.description}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-stone-100">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-medium tracking-wide ${
              isAvailable
                ? "text-emerald-600"
                : "text-slate-400"
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${isAvailable ? "bg-emerald-500" : "bg-slate-300"}`} />
            {isAvailable ? "可借阅" : "已借出"}
          </span>
          <span className="text-xs text-slate-300 italic">
            {isAvailable ? "Available" : "Borrowed"}
          </span>
        </div>
      </div>
    </article>
  );
}
