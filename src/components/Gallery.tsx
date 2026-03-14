import { useState, useCallback } from "react";
import { MdClose, MdArrowOutward } from "react-icons/md";
import "./styles/Gallery.css";

type Category = "all" | "products" | "designs" | "concepts";

interface VisualItem {
  type: "visual";
  id: number;
  title: string;
  category: Exclude<Category, "all" | "concepts">;
  tag: string;
  image: string;
  description?: string;
  span?: "wide" | "tall" | "normal";
}

interface ConceptItem {
  type: "concept";
  id: number;
  title: string;
  category: "concepts";
  tag: string;
  description: string;
  icon: string;
  link?: string;
}

type GalleryItem = VisualItem | ConceptItem;

// ─── REPLACE THESE WITH YOUR REAL CONTENT ───────────────────────────────────
// For visual items: add image paths under /public/images/gallery/
// For concept items: just update title, description, icon
const items: GalleryItem[] = [
  {
    type: "visual",
    id: 1,
    title: "Zuaad Wall Décor Collection",
    category: "products",
    tag: "Product Design",
    image: "/images/zuaad.png",
    description: "1000+ SKU product line — CNC laser-cut wall décor shipped across India via Amazon & Flipkart.",
    span: "wide",
  },
  {
    type: "visual",
    id: 2,
    title: "Enterprise Corporate Gifting",
    category: "products",
    tag: "Manufacturing",
    image: "/images/corporate.png",
    description: "Custom gifting solutions delivered to Bajaj Finserv, Infosys, Capgemini & Atlas Copco.",
    span: "tall",
  },
  {
    type: "visual",
    id: 3,
    title: "Zuaad Tech — Digital Products",
    category: "designs",
    tag: "UI / Branding",
    image: "/images/zuaadtech.png",
    description: "200+ websites, digital products and branding identities built for startups and SMEs.",
    span: "normal",
  },
  {
    type: "visual",
    id: 4,
    title: "Innovast Platform",
    category: "designs",
    tag: "Product Concept",
    image: "/images/innovast.png",
    description: "Idea-to-startup ecosystem with investor matching and idea collaboration features.",
    span: "normal",
  },
  {
    type: "visual",
    id: 5,
    title: "Future Technology Research",
    category: "designs",
    tag: "Research",
    image: "/images/future.png",
    description: "Explorations into AEVA, Vibra, decentralised platforms and future network architecture.",
    span: "wide",
  },
  // ── CONCEPT CARDS ── add as many as you like ──────────────────────────────
  {
    type: "concept",
    id: 6,
    title: "AEVA — Autonomous Economic Value Architecture",
    category: "concepts",
    tag: "Research Paper",
    description:
      "A framework exploring autonomous economic agents and decentralised value exchange in next-generation digital economies.",
    icon: "◈",
  },
  {
    type: "concept",
    id: 7,
    title: "Vibra — Social Commerce Network",
    category: "concepts",
    tag: "App Idea",
    description:
      "A platform blending social discovery with direct-to-consumer commerce — bridging creators, products, and communities.",
    icon: "◉",
  },
  {
    type: "concept",
    id: 8,
    title: "Innovast — Idea Validation Engine",
    category: "concepts",
    tag: "Business Concept",
    description:
      "Structured methodology for taking raw business ideas through validation, market sizing, and early-stage investor matching.",
    icon: "◎",
  },
  // ── ADD MORE ITEMS ABOVE THIS LINE ───────────────────────────────────────
];
// ─────────────────────────────────────────────────────────────────────────────

const FILTERS: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Products", value: "products" },
  { label: "Designs", value: "designs" },
  { label: "Concepts", value: "concepts" },
];

const Gallery = () => {
  const [active, setActive] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<VisualItem | null>(null);

  const filtered = items.filter(
    (item) => active === "all" || item.category === active
  );

  const openLightbox = useCallback((item: GalleryItem) => {
    if (item.type === "visual") setLightbox(item as VisualItem);
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <div className="gallery-section section-container" id="creations">
      {/* Header */}
      <div className="gallery-header">
        <h2>
          My <span>Creations</span>
        </h2>
        <p className="gallery-sub">
          Products, designs, concepts &amp; ideas I've brought to life
        </p>
      </div>

      {/* Filter bar */}
      <div className="gallery-filters">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={`gallery-filter-btn${active === f.value ? " active" : ""}`}
            onClick={() => setActive(f.value)}
            data-cursor="disable"
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="gallery-masonry">
        {filtered.map((item) =>
          item.type === "visual" ? (
            <div
              key={item.id}
              className={`gallery-card gallery-card--visual gallery-card--${item.span ?? "normal"}`}
              onClick={() => openLightbox(item)}
              data-cursor="disable"
            >
              <div className="gallery-card-img">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="gallery-card-overlay">
                <span className="gallery-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                {item.description && <p>{item.description}</p>}
                <span className="gallery-expand-hint">Click to expand</span>
              </div>
            </div>
          ) : (
            <div
              key={item.id}
              className="gallery-card gallery-card--concept"
            >
              <div className="gallery-concept-icon">{item.icon}</div>
              <span className="gallery-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  className="gallery-concept-link"
                  data-cursor="disable"
                >
                  View <MdArrowOutward />
                </a>
              )}
            </div>
          )
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
        >
          <button
            className="gallery-lightbox-close"
            onClick={closeLightbox}
            data-cursor="disable"
            aria-label="Close"
          >
            <MdClose />
          </button>
          <div
            className="gallery-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightbox.image} alt={lightbox.title} />
            <div className="gallery-lightbox-info">
              <span className="gallery-tag">{lightbox.tag}</span>
              <h3>{lightbox.title}</h3>
              {lightbox.description && <p>{lightbox.description}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
