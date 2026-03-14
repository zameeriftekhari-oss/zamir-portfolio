import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">Behind the Design</h3>
        <p
          className="para"
          style={{
            fontSize: "16px",
            fontFamily: "'Playfair Display', Georgia, serif",
            lineHeight: "1.8"
          }}
        >
          I’m a visual designer passionate about turning ideas into thoughtful digital experiences and compelling visual identities. My work blends creativity with functionality, focusing on designs that are clean, intuitive, and meaningful. I enjoy exploring branding, digital interfaces, and visual storytelling to create work that not only looks good but communicates clearly and leaves a lasting impression.
        </p>
      </div>
    </div>
  );
};

export default About;