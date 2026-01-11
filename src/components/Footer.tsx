export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">知买书 Zhimaishu</h3>
            <p className="text-amber-200">
              社区图书馆，邻里共享阅读的快乐
            </p>
            <p className="text-amber-200 text-sm mt-2">
              A community library where neighbors share the joy of reading
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">联系我们 Contact</h3>
            <p className="text-amber-200">
              Email: hello@zhimaishu.com
            </p>
          </div>
        </div>
        <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-300">
          <p>&copy; {new Date().getFullYear()} 知买书 Zhimaishu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
