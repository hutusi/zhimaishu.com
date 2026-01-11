export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-stone-200/60 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-slate-800 mb-3 tracking-wide">
              只买书
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md">
              乡村图书馆，邻里共享阅读的快乐。让每一本书都能找到下一位读者。
            </p>
            <p className="text-slate-400 text-sm mt-2 italic">
              A rural library where neighbors share the joy of reading.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-800 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <a
              href="mailto:hello@zhimaishu.com"
              className="text-slate-500 hover:text-slate-700 transition-colors text-sm"
            >
              hello@zhimaishu.com
            </a>
          </div>
        </div>
        <div className="border-t border-stone-200/60 mt-10 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} 只买书 Zhimaishu
          </p>
        </div>
      </div>
    </footer>
  );
}
