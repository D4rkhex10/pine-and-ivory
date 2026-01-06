import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const articles = [
  {
    category: "Civic",
    date: "Apr 8, 2024",
    title: "Interior Inspirations for Every Stylish Home: Design Tips & Ideas",
    author: "Robert Kehoe",
    image: "https://ext.same-assets.com/2282551275/1249753280.png",
    excerpt: "Discover the latest trends in interior design and get inspired by creative ideas for every room in your home.",
    content:
      "From timeless palettes to modern spatial strategies, this guide explores practical ways to elevate every room using proportion, light, and texture.",
  },
  {
    category: "Housing",
    date: "Mar 15, 2024",
    title: "Innovative Ideas for Stylish Home Interiors That Inspire Creativity",
    author: "Willie Hall",
    image: "https://ext.same-assets.com/2282551275/2208456549.png",
    excerpt: "Explore innovative approaches to home interior design that blend functionality with artistic expression.",
    content:
      "Creative workflows combine modular furniture, adaptive lighting, and curated materials to support flexible living and working.",
  },
  {
    category: "Buildings",
    date: "Feb 28, 2024",
    title: "Creating Harmony in Every Room Design Through Style and Balance",
    author: "Clifford Seth",
    image: "https://ext.same-assets.com/2282551275/906248868.png",
    excerpt: "Learn how to achieve perfect balance in your interior spaces through thoughtful design principles.",
    content:
      "Balance emerges from visual weight, circulation, and rhythm. This article outlines simple checks to ensure harmony across your rooms.",
  },
  {
    category: "Design",
    date: "Feb 14, 2024",
    title: "The Psychology of Color in Interior Design",
    author: "Robert Kehoe",
    image: "https://ext.same-assets.com/2282551275/1249753280.png",
    excerpt: "Understanding how colors affect mood and behavior in different spaces.",
    content:
      "Color sets mood and behavior. We break down palettes that relax, energize, and focus — and how to apply them room by room.",
  },
  {
    category: "Tips",
    date: "Jan 30, 2024",
    title: "Maximizing Small Spaces: Smart Design Solutions",
    author: "Willie Hall",
    image: "https://ext.same-assets.com/2282551275/2208456549.png",
    excerpt: "Creative strategies for making the most of compact living areas without sacrificing style.",
    content:
      "Small spaces benefit from vertical storage, zoning, and multi‑purpose pieces — practical tactics with premium outcomes.",
  },
  {
    category: "Trends",
    date: "Jan 15, 2024",
    title: "Sustainable Interior Design: Eco-Friendly Choices for Modern Homes",
    author: "Clifford Seth",
    image: "https://ext.same-assets.com/2282551275/906248868.png",
    excerpt: "Explore sustainable materials and practices for environmentally conscious interior design.",
    content:
      "Sustainability balances lifecycle, sourcing, and maintenance. We highlight durable, responsible options that still feel luxurious.",
  },
];

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function generateStaticParams() {
  return articles.map((a) => ({ slug: slugify(a.title) }));
}

export default function BlogPostPage(props: unknown) {
  const { params } = props as { params: { slug: string } };
  const article = articles.find((a) => slugify(a.title) === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4 bg-[#212121]">
        <div className="container mx-auto max-w-7xl">
          <p className="text-[#D4B896] text-sm tracking-[0.2em] uppercase mb-4">Article</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 md:mb-8 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-white/80">
            <span>{article.author}</span>
            <span className="text-white/50">{article.date}</span>
            <span className="text-[#D4B896] uppercase text-xs tracking-wide">{article.category}</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#F5F5F0]">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-sm overflow-hidden bg-white">
            <img src={article.image} alt={article.title} className="w-full h-auto object-cover" />
          </div>
          <div className="mt-10 space-y-6">
            <p className="text-gray-800 leading-relaxed">{article.content}</p>
            <p className="text-gray-800 leading-relaxed">{article.excerpt}</p>
          </div>
          <div className="mt-12">
            <Link className="inline-flex items-center gap-2 text-[#D4B896] hover:text-[#E5D4BA] transition-colors" href="/blog">
              Back to Blog
              <ArrowRight className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
