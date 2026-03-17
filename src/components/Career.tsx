import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Professional journey <span>&</span>
          <br /> leadership
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Zuaad Pvt Ltd */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Designer & Strategist</h4>
                <h5>Zuaad Pvt Ltd</h5>
              </div>
              <h3>2018 — Present</h3>
            </div>
            <p>
              Led design and product strategy for a design-to-manufacturing company focused on
              wall décor, corporate gifting, and customized consumer products.
              Built a portfolio of 1,000+ SKUs while leading product strategy,
              manufacturing workflows, and multi-channel e-commerce operations
              across website, Amazon, and Flipkart. Delivered projects for
              enterprise clients including Bajaj Finserv, Infosys, Capgemini,
              and Atlas Copco while managing cross-functional teams across
              design, production, and vendor ecosystems.
            </p>
          </div>

          {/* Sarsan Creations */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Head of Corporate Gifting & Operations</h4>
                <h5>Sarsan Creations</h5>
              </div>
              <h3>2021 — 2023</h3>
            </div>
            <p>
              Led corporate gifting strategy and operational delivery for
              enterprise clients, translating complex client requirements into
              scalable customized product solutions. Managed vendor networks,
              production timelines, quality control, and client relationships
              while implementing structured workflows that significantly
              improved turnaround efficiency for high-volume custom orders.
            </p>
          </div>

          {/* Zuaad Tech */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Designer & Strategist</h4>
                <h5>Zuaad Tech</h5>
              </div>
              <h3>Parallel Venture</h3>
            </div>
            <p>
              Led a digital services team delivering 200+
              websites and digital products for startups and SMEs. Led
              multidisciplinary teams of designers and developers while managing
              product delivery, client acquisition, UX strategy, and digital
              branding initiatives across multiple industries.
            </p>
          </div>

          {/* Samsung / Sales */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sales Executive — Consumer & B2B Electronics</h4>
                <h5>Samsung | Reliance Digital</h5>
              </div>
              <h3>Early Career</h3>
            </div>
            <p>
              Developed strong commercial and negotiation skills through
              frontline sales across consumer electronics, UPS systems, and
              inverter solutions. Built experience in customer engagement,
              solution-based selling, and channel sales operations in a
              high-volume retail and B2B environment.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
