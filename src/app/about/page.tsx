export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-4 tracking-tight">
            关于
          </h1>
          <p className="text-slate-400 text-sm italic">About</p>
        </div>

        {/* Content */}
        <div className="prose-elegant">
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              只买书是什么？
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              只买书是一个乡村图书馆项目，致力于让阅读走进每一个乡村家庭。我们相信，书籍是连接知识与梦想的桥梁，每一本书都能为乡村的孩子们打开一扇通往更广阔世界的窗户。
            </p>
            <p className="text-slate-500 text-sm italic leading-relaxed">
              Zhimaishu is a rural library project dedicated to bringing reading to every village family. We believe that books are bridges connecting knowledge and dreams, and every book can open a window to a broader world for children in rural areas.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              我们的愿景
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              我们希望在乡村建立一个温暖的阅读空间，让邻里之间可以自由地分享书籍，交流阅读心得。通过共享阅读，我们不仅传递知识，更传递邻里之间的温情与信任。
            </p>
            <p className="text-slate-500 text-sm italic leading-relaxed">
              We hope to establish a warm reading space in the village where neighbors can freely share books and exchange reading experiences. Through shared reading, we not only pass on knowledge but also the warmth and trust between neighbors.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              如何参与
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              欢迎您捐赠闲置书籍，或成为我们的志愿者。每一份支持都将帮助更多乡村家庭获得阅读的机会。
            </p>
            <p className="text-slate-500 text-sm italic leading-relaxed">
              You are welcome to donate idle books or become our volunteer. Every support will help more rural families gain access to reading.
            </p>
          </section>

          <section className="bg-slate-50 rounded-xl p-8 text-center">
            <h2 className="text-lg font-semibold text-slate-800 mb-3">
              联系我们
            </h2>
            <p className="text-slate-500 text-sm mb-4">Contact Us</p>
            <a
              href="mailto:hello@zhimaishu.com"
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              hello@zhimaishu.com
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
