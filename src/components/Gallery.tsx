import { useState, useCallback } from "react";
import { MdClose, MdArrowOutward, MdPictureAsPdf } from "react-icons/md";
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

interface PdfItem {
  type: "pdf";
  id: number;
  title: string;
  category: Category;
  tag: string;
  description: string;
  pdfUrl: string;
  previewNote?: string;
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

type GalleryItem = VisualItem | PdfItem | ConceptItem;

// Helper to generate product image items for a category
const makeProductImages = (
  folder: string,
  titlePrefix: string,
  tag: string,
  description: string,
  count: number,
  startId: number,
  ext: string = "jpg"
): VisualItem[] =>
  Array.from({ length: count }, (_, i) => ({
    type: "visual" as const,
    id: startId + i,
    title: `${titlePrefix} — ${i + 1}`,
    category: "products" as const,
    tag,
    image: `/images/Gallery/logos/products/${folder}/${i + 1}.${ext}`,
    description,
    span: i === 0 ? "wide" : "normal" as "wide" | "normal",
  }));

const items: GalleryItem[] = [

  // ── PRODUCTS: ISLAMIC ART (8 images) ─────────────────────────────────────
  ...makeProductImages(
    "islamic_art",
    "Islamic Wall Art",
    "CNC Laser Cut",
    "CNC laser-cut acrylic & MDF Islamic calligraphy wall art — available in multiple finishes and sizes.",
    8,
    100
  ),

  // ── PRODUCTS: MANDALA ART (8 images) ─────────────────────────────────────
  ...makeProductImages(
    "mandala",
    "Mandala Wall Art",
    "CNC Laser Cut",
    "Multi-layer mandala panels CNC-cut in wood — intricate geometric precision at scale.",
    8,
    200
  ),

  // ── PRODUCTS: BAR ACCESSORIES (8 images) ─────────────────────────────────
  ...makeProductImages(
    "bar_accessories",
    "Bar Accessories",
    "Product Design",
    "Decorative bar sets — CNC-cut wine holders, glass stands and bottle racks.",
    8,
    300
  ),

  // ── PRODUCTS: BOXES (8 images) ────────────────────────────────────────────
  ...makeProductImages(
    "boxes",
    "Wooden Box Collection",
    "Product Design",
    "Laser-engraved gift boxes in MDF and plywood — Eid Mubarak, floral and bespoke designs.",
    8,
    400
  ),

  // ── LOGOS / BRANDING ──────────────────────────────────────────────────────
  {
    type: "visual",
    id: 1,
    title: "Alnair Pharmaceutical",
    category: "designs",
    tag: "Logo Design",
    image: "/images/Gallery/logos/alnair.png",
    description: "Brand identity for a pharmaceutical company — clean, medical, and trustworthy.",
    span: "normal",
  },
  {
    type: "visual",
    id: 2,
    title: "BRYNQ",
    category: "designs",
    tag: "Logo Design",
    image: "/images/Gallery/logos/brynq.png",
    description: "Bold 3D embossed logo with a tactical, modern aesthetic — wall-mounted mockup.",
    span: "normal",
  },
  {
    type: "visual",
    id: 3,
    title: "Dechome",
    category: "designs",
    tag: "Logo Design",
    image: "/images/Gallery/logos/dechome.png",
    description: "Gold foil luxury real estate logo — premium feel on dark textured paper.",
    span: "normal",
  },
  {
    type: "visual",
    id: 4,
    title: "Fincare Marketing",
    category: "designs",
    tag: "Logo Design",
    image: "/images/Gallery/logos/fincare.png",
    description: "Financial services brand identity — shield, growth chart, and trust-first palette.",
    span: "normal",
  },
  {
    type: "visual",
    id: 5,
    title: "Sarsan Aviation Academy",
    category: "designs",
    tag: "Logo Design",
    image: "/images/Gallery/logos/sarsan_aviation.png",
    description: "Intricately detailed typographic logo — Arabic-inspired geometric letterforms for an aviation academy.",
    span: "normal",
  },
  {
    type: "visual",
    id: 6,
    title: "Sarsan Contracting",
    category: "designs",
    tag: "Logo Design",
    image: "/images/Gallery/logos/sarsan_contracting.png",
    description: "Geometric 3D 'S' monogram on a circular gradient — bold, structural, professional.",
    span: "normal",
  },
  {
    type: "visual",
    id: 7,
    title: "Siddhant Arts",
    category: "designs",
    tag: "Logo Design",
    image: "/images/Gallery/logos/siddhant_arts.png",
    description: "Watercolour-style logo for an arts studio — treble clef meets pen nib with botanical accents.",
    span: "wide",
  },
  {
    type: "visual",
    id: 8,
    title: "United Design Studio",
    category: "designs",
    tag: "Logo Design",
    image: "/images/Gallery/logos/uds.png",
    description: "Elegant silver-chrome emblem for an architecture & interior firm — regal and refined.",
    span: "normal",
  },
  {
    type: "visual",
    id: 9,
    title: "Urban Essentails",
    category: "designs",
    tag: "Logo Design",
    image: "/images/Gallery/logos/urban_essentails.png",
    description: "Teal and copper 3D monogram — rich, modern identity for a lifestyle brand.",
    span: "normal",
  },

  // ── PDF DOCUMENTS ─────────────────────────────────────────────────────────
  {
    type: "pdf",
    id: 20,
    title: "Zuaad Corporate Catalogue 2024",
    category: "products",
    tag: "Product Catalogue",
    description: "Full 41-page corporate gifting catalogue — 1000+ SKUs including hampers, wall décor, eco gifts, tech accessories, and branding techniques.",
    pdfUrl: "/Docs/Zuaad Portfolio 3mb.pdf",
    previewNote: "41 pages • Corporate Gifting • Wall Art • Tech Accessories",
  },
  {
    type: "pdf",
    id: 21,
    title: "Innovast — Idea Marketplace Business Plan",
    category: "concepts",
    tag: "Business Plan",
    description: "Complete business plan for Innovast — an AI-powered startup idea marketplace connecting innovators, investors and mentors with blockchain IPR protection.",
    pdfUrl: "/Docs/Innovast final.pdf",
    previewNote: "12 pages • AI Platform • Startup Ecosystem • $4.5T Market",
  },
  {
    type: "pdf",
    id: 22,
    title: "Sarsan Circular Energy Holdings",
    category: "concepts",
    tag: "Business Plan",
    description: "Strategic business plan for Sarsan Circular Energy Holdings — energy infrastructure, circular economy systems, and sustainable operations.",
    pdfUrl: "/Docs/SARSAN CIRCULAR ENERGY HOLDINGS.pdf",
    previewNote: "Business Plan • Energy • Circular Economy",
  },
  {
    type: "pdf",
    id: 23,
    title: "AEVA — Autonomous Economic Value Architecture",
    category: "concepts",
    tag: "Research Paper",
    description: "Full research draft on AEVA — autonomous economic value systems, decentralised networks, and next-generation platform architecture.",
    pdfUrl: "/Docs/AEVA final draft.pdf",
    previewNote: "Research Draft • Decentralised Systems • Future Tech",
  },

  // ── CONCEPT CARDS ─────────────────────────────────────────────────────────
  {
    type: "concept",
    id: 30,
    title: "Vibra — Social Commerce Network",
    category: "concepts",
    tag: "App Concept",
    description: "Platform blending social discovery with direct-to-consumer commerce — bridging creators, products, and communities.",
    icon: "◉",
  },
  {
    type: "concept",
    id: 31,
    title: "Innovast — Idea Marketplace",
    category: "concepts",
    tag: "Platform Concept",
    description: "AI-powered marketplace connecting innovators, investors and mentors. Blockchain IPR protection with micro-fee accessibility targeting the $4.5T startup ecosystem.",
    icon: "◎",
  },
];

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
      <div className="gallery-header">
        <h2>My <span>Creations</span></h2>
        <p className="gallery-sub">
          Logos, products, catalogues, research &amp; ideas I've brought to life
        </p>
      </div>

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

      <div className="gallery-masonry">
        {filtered.map((item) => {
          if (item.type === "visual") {
            return (
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
            );
          }

          if (item.type === "pdf") {
            return (
              <div key={item.id} className="gallery-card gallery-card--pdf">
                <div className="gallery-pdf-icon"><MdPictureAsPdf /></div>
                <span className="gallery-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.previewNote && (
                  <p className="gallery-pdf-meta">{item.previewNote}</p>
                )}
                <a
                  href={item.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gallery-pdf-link"
                  data-cursor="disable"
                  onClick={(e) => e.stopPropagation()}
                >
                  View PDF <MdArrowOutward />
                </a>
              </div>
            );
          }

          return (
            <div key={item.id} className="gallery-card gallery-card--concept">
              <div className="gallery-concept-icon">{item.icon}</div>
              <span className="gallery-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gallery-concept-link"
                  data-cursor="disable"
                >
                  View <MdArrowOutward />
                </a>
              )}
            </div>
          );
        })}
      </div>

      {lightbox && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
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
