import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const articles = [
    {
      category: "Civic",
      date: "Apr 8, 2024",
      title: "Interior Inspirations for Every Stylish Home: Design Tips & Ideas",
      author: "Robert Kehoe",
      image: "https://ext.same-assets.com/2282551275/1249753280.png",
      excerpt: "Discover the latest trends in interior design and get inspired by creative ideas for every room in your home.",
    },
    {
      category: "Housing",
      date: "Mar 15, 2024",
      title: "Innovative Ideas for Stylish Home Interiors That Inspire Creativity",
      author: "Willie Hall",
      image: "https://ext.same-assets.com/2282551275/2208456549.png",
      excerpt: "Explore innovative approaches to home interior design that blend functionality with artistic expression.",
    },
    {
      category: "Buildings",
      date: "Feb 28, 2024",
      title: "Creating Harmony in Every Room Design Through Style and Balance",
      author: "Clifford Seth",
      image: "https://ext.same-assets.com/2282551275/906248868.png",
      excerpt: "Learn how to achieve perfect balance in your interior spaces through thoughtful design principles.",
    },
    {
      category: "Design",
      date: "Feb 14, 2024",
      title: "The Psychology of Color in Interior Design",
      author: "Robert Kehoe",
      image: "https://ext.same-assets.com/2282551275/1249753280.png",
      excerpt: "Understanding how colors affect mood and behavior in different spaces.",
    },
    {
      category: "Tips",
      date: "Jan 30, 2024",
      title: "Maximizing Small Spaces: Smart Design Solutions",
      author: "Willie Hall",
      image: "https://ext.same-assets.com/2282551275/2208456549.png",
      excerpt: "Creative strategies for making the most of compact living areas without sacrificing style.",
    },
    {
      category: "Trends",
      date: "Jan 15, 2024",
      title: "Sustainable Interior Design: Eco-Friendly Choices for Modern Homes",
      author: "Clifford Seth",
      image: "https://ext.same-assets.com/2282551275/906248868.png",
      excerpt: "Explore sustainable materials and practices for environmentally conscious interior design.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4 bg-[#212121]">
        <div className="container mx-auto max-w-7xl">
          <p className="text-[#D4B896] text-sm tracking-[0.2em] uppercase mb-4">
            Blog & Insights
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 md:mb-8 leading-tight">
            DESIGN
            <br />
            INSPIRATION
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-3xl leading-relaxed">
            Stay updated with the latest trends, tips, and insights from our
            interior design experts.
          </p>
        </div>
      </section>

      {/* Top Images (Service-style) */}
      <section className="py-12 px-4 bg-[#F5F5F0]">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
          <div className="rounded-sm overflow-hidden bg-gray-200">
            <img src="/services/corporate.jpg" alt="Interior detail" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-sm overflow-hidden bg-gray-200">
            <img src="/services/furniture.jpg" alt="Furniture showcase" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Overview (Service-style) */}
      <section className="py-24 px-4 bg-[#F5F5F0]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-black tracking-wide mb-6">BLOG & INSIGHTS</h2>
          <p className="text-gray-800 leading-relaxed mb-12">
            Explore design stories, practical tips, and trends curated by our team. From planning functional layouts to choosing materials and lighting,
            we share guidance that reflects the same rigor and taste in our service pages — so your spaces feel considered, cohesive, and timeless.
          </p>
          <div className="space-y-10">
            <div>
              <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wide mb-2">Design Principles</h3>
              <p className="text-gray-800 leading-relaxed">
                Balanced layouts, thoughtful lighting, and a refined palette are the foundation of elevated interiors. We discuss practical frameworks and
                examples to make decisions with clarity and confidence.
              </p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-black uppercase tracking-wide mb-2">Materials & Texture</h3>
              <p className="text-gray-800 leading-relaxed">
                From woods and stones to textiles and metals, materials set tone and longevity. Learn how to combine textures for warmth, durability, and visual rhythm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-4 bg-[#F5F5F0]">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white rounded-sm overflow-hidden grid lg:grid-cols-2 border border-[#D4B896]/30">
            <div className="aspect-video lg:aspect-auto">
              <Link href={`/blog/${slugify(articles[0].title)}`}>
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-[#D4B896] uppercase tracking-wide font-medium">
                  {articles[0].category}
                </span>
                <span className="text-xs text-gray-600">{articles[0].date}</span>
              </div>
              <Link href={`/blog/${slugify(articles[0].title)}`} className="text-3xl font-serif text-black mb-4 leading-tight hover:underline">
                {articles[0].title}
              </Link>
              <p className="text-gray-800 mb-6 leading-relaxed">
                {articles[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <span className="text-gray-800">{articles[0].author}</span>
                </div>
                <Link href={`/blog/${slugify(articles[0].title)}`} className="inline-flex items-center gap-2 text-[#D4B896] hover:text-[#E5D4BA] transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-28 md:py-32 px-4 bg-[#F5F5F0]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-serif text-black mb-12">Recent Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <Link
                key={index}
                href={`/blog/${slugify(article.title)}`}
                className="bg-white rounded-sm overflow-hidden group hover:shadow-xl transition-shadow fade"
                data-fade
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
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                      <span className="text-sm text-gray-600">{article.author}</span>
                    </div>
                    <span className="p-2 rounded-full hover:bg-[#D4B896] hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 bg-[#2d2d2d]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Get the latest design tips and inspiration delivered to your inbox.
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
      </section>

      <Footer />
    </main>
  );
}
