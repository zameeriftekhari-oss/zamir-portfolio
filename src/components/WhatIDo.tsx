import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* Strategy & Innovation */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>STRATEGY & INNOVATION</h3>
              <h4>Turning Ideas Into Scalable Ventures</h4>
              <p>
                I focus on identifying opportunities and transforming ideas into
                viable products, businesses, and platforms. From early concept
                development to market strategy, I design systems that combine
                creativity, technology, and commercial viability.
              </p>

              <h5>Focus Areas</h5>
              <div className="what-content-flex">
                <div className="what-tags">Product Strategy</div>
                <div className="what-tags">Innovation Systems</div>
                <div className="what-tags">Business Models</div>
                <div className="what-tags">Startup Platforms</div>
                <div className="what-tags">Idea Development</div>
                <div className="what-tags">Go-To-Market</div>
                <div className="what-tags">Platform Thinking</div>
                <div className="what-tags">Future Technologies</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* Design & Manufacturing */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DESIGN TO MANUFACTURING</h3>
              <h4>Building Real Products At Scale</h4>
              <p>
                With over a decade of hands-on experience in design-driven
                manufacturing, I specialize in translating creative concepts
                into production-ready products. My work bridges design,
                materials, fabrication technologies, and scalable manufacturing
                systems.
              </p>

              <h5>Expertise</h5>
              <div className="what-content-flex">
                <div className="what-tags">Product Design</div>
                <div className="what-tags">CNC Laser Cutting</div>
                <div className="what-tags">AutoCAD</div>
                <div className="what-tags">CorelDRAW</div>
                <div className="what-tags">Adobe Illustrator</div>
                <div className="what-tags">Manufacturing Systems</div>
                <div className="what-tags">SKU Scaling</div>
                <div className="what-tags">E-Commerce Products</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}