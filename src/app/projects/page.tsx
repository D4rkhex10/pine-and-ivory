import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Modern Luxury Apartment",
      category: "Residential",
      image: "https://ext.same-assets.com/2282551275/3938713349.png",
      description: "A stunning transformation of a downtown apartment with contemporary finishes.",
    },
    {
      title: "Executive Office Suite",
      category: "Corporate",
      image: "https://ext.same-assets.com/2282551275/1368917107.png",
      description: "Sophisticated corporate interior designed for productivity and style.",
    },
    {
      title: "Coastal Villa Living Room",
      category: "Residential",
      image: "https://ext.same-assets.com/2282551275/3938713349.png",
      description: "Elegant coastal-inspired design with natural textures and light.",
    },
    {
      title: "Restaurant Interior",
      category: "Commercial",
      image: "https://ext.same-assets.com/2282551275/1368917107.png",
      description: "Warm and inviting dining space with custom furniture and lighting.",
    },
    {
      title: "Smart Home Integration",
      category: "Technology",
      image: "https://ext.same-assets.com/2282551275/3938713349.png",
      description: "Seamless integration of smart home technology in a modern residence.",
    },
    {
      title: "Boutique Hotel Lobby",
      category: "Hospitality",
      image: "https://ext.same-assets.com/2282551275/1368917107.png",
      description: "Luxurious hotel lobby design with statement pieces and elegant finishes.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4 bg-[#212121]">
        <div className="container mx-auto max-w-7xl">
          <p className="text-[#D4B896] text-sm tracking-[0.2em] uppercase mb-4">
            Our Work
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 md:mb-8 leading-tight">
            FEATURED
            <br />
            PROJECTS
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-3xl leading-relaxed">
            Explore our portfolio of completed projects that showcase our expertise
            in transforming spaces into inspiring environments.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-10 px-4 bg-[#2a2a2a] border-b border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-4 justify-center">
            {["All", "Residential", "Corporate", "Commercial", "Hospitality"].map((filter) => (
              <button
                key={filter}
                className="px-6 py-2 rounded-sm bg-[#2d2d2d] hover:bg-[#D4B896] text-white hover:text-black transition-colors font-medium"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-28 md:py-32 px-4 bg-[#2a2a2a]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer fade" data-fade>
                <div className="relative aspect-[4/3] bg-gray-200 rounded-sm overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-serif text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[#D4B896] text-sm uppercase tracking-wide">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-serif text-white group-hover:text-[#D4B896] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 md:py-32 px-4 bg-[#212121]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Let's work together to create something extraordinary.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#D4B896] hover:bg-[#E5D4BA] text-black px-8 py-4 rounded-sm font-medium tracking-wide transition-colors transform hover:scale-[1.02]"
          >
            GET IN TOUCH
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
