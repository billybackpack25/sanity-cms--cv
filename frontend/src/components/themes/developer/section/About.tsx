import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section py-12 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          Hi, I&apos;m a passionate developer with experience in building modern
          web applications. I enjoy solving complex problems, learning new
          technologies, and collaborating with others to create impactful
          solutions.
        </p>
        <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <li>JavaScript/TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>UI/UX</li>
          <li>APIs</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
