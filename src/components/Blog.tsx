import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const articles = [
    {
      category: "Civic",
      date: "Apr 8, 2024",
      title: "Interior Inspirations for Every Stylish Home: Design Tips & Ideas",
      author: "Robert Kehoe",
      image: "https://ext.same-assets.com/2282551275/1249753280.png",
    },
    {
      category: "Housing",
      date: "Mar 15, 2024",
      title: "Innovative Ideas for Stylish Home Interiors That Inspire Creativity",
      author: "Willie Hall",
      image: "https://ext.same-assets.com/2282551275/2208456549.png",
    },
    {
      category: "Buildings",
      date: "Feb 28, 2024",
      title: "Creating Harmony in Every Room Design Through Style and Balance",
      author: "Clifford Seth",
      image: "https://ext.same-assets.com/2282551275/906248868.png",
    },
  ];

  const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return (
    <section className="py-24 px-4 bg-[#3a3a3a]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-[#D4B896] text-sm tracking-[0.2em] uppercase mb-4">
            Blog & Insights
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            WANT UPDATES FROM US
            <br />
            & ITS HERE
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={`/blog/${slugify(article.title)}`}
              className="bg-white rounded-sm overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-[#D4B896] uppercase tracking-wide font-medium">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                    <span className="text-sm text-gray-600">{article.author}</span>
                  </div>
                  <span
                    className="p-2 rounded-full hover:bg-[#D4B896] hover:text-white transition-colors"
                    aria-label="Read article"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Join Our Newsletter
          </h3>
          <p className="text-white/80 mb-8">
            Get design tips, project highlights, and insights directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D4B896]"
            />
            <button
              type="submit"
              className="bg-[#D4B896] hover:bg-[#E5D4BA] text-black px-8 py-4 rounded-sm font-medium tracking-wide transition-colors uppercase"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
