"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { FaBehance } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  behance?: string;
  figma?: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "UI/UX Design for EcoPick Platform",
    description: "Responsible for designing the UI and UX for a waste recycling application, focusing on an intuitive user flow waste collection.",
    tech: ["Figma"],
    image: "/projects/ecopick.png",
  },
  {
    id: 1,
    title: "Aldy's Kitchen - F&B App prototype",
    description: "Developed a high-fidelity prototype for a restaurant mobile app, This was commissioned work for the culinary industry.",
    tech: ["Figma"],
    image: "/projects/Aldy.png",
  },
  {
    id: 1,
    title: "Team Yhoiki - Official Website Design ",
    description: "Responsible for the visual layout and interface design for team Yhoiki's website, establishing their digital brand identity.",
    tech: ["Figma"],
    image: "/projects/yhoiki.png",
  },
];

export default function ProjectDetails() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleProject = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-black text-white">
      <Navbar />
      <Contact />
      <div className="container mx-auto px-6">
        {/* Judul Section */}
        <h1 className="text-4xl font-semibold text-center mb-16">
          All Projects
        </h1>

        {/* List Project */}
        <div className="flex flex-col space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-center gap-10 cursor-pointer transition-all duration-500 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              onClick={() => toggleProject(project.id)}
            >
              {/* Gambar */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-2xl shadow-lg w-full max-w-[400px] md:max-w-[450px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Konten */}
              <div className="w-full md:w-1/2">
                {/* Judul */}
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openId === project.id
                      ? "max-h-[600px] opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-300 mb-6">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Tech Stack:</h4>
                    <ul className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <li
                          key={i}
                          className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-4">
                    {/* Behance CTA */}
                    {project.behance && project.behance.trim() !== "" && (
                      <a
                        href={project.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                      >
                        <FaBehance className="text-xl" />
                        View Behance
                      </a>
                    )}

                    {/* Figma CTA */}
                    {project.figma && project.figma.trim() !== "" && (
                      <a
                        href={project.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
                      >
                        <SiFigma className="text-xl" />
                        View Figma
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer /> 
    </section>
  );
}
