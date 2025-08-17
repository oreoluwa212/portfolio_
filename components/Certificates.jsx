import React from "react";
import Image from "next/image";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import Hoc from "./Hoc";

// Mock certificate images - replace with actual certificate images
const certificates = [
    {
        id: 1,
        title: "React Developer Certification",
        issuer: "Meta",
        date: "2023",
        image: "/web1.png", // Using existing image as placeholder
        verificationLink: "https://coursera.org/verify/cert123",
        description: "Advanced React concepts including hooks, context, and performance optimization"
    },
    {
        id: 2,
        title: "Full Stack Web Development",
        issuer: "ALX Africa",
        date: "2023",
        image: "/web2.png", // Using existing image as placeholder
        verificationLink: "https://alx.com/verify/cert456",
        description: "Comprehensive training in modern web technologies and software engineering practices"
    },
    {
        id: 3,
        title: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        date: "2022",
        image: "/web3.png", // Using existing image as placeholder
        verificationLink: "https://freecodecamp.org/verify/cert789",
        description: "Problem-solving with JavaScript, algorithms, and data structure fundamentals"
    },
    {
        id: 4,
        title: "UX Design Professional Certificate",
        issuer: "Google",
        date: "2022",
        image: "/web4.png", // Using existing image as placeholder
        verificationLink: "https://coursera.org/verify/cert101",
        description: "User experience design, wireframing, prototyping, and usability testing"
    }
];

const Certificates = () => {
    return (
        <section id="certificates" className="py-10 lg:py-16">
            <Hoc>
                <p className="smallHeading">certifications</p>
            </Hoc>

            <Hoc>
                <h3 className="heading">professional certificates</h3>
            </Hoc>

            <Hoc>
                <p className="xl:mt-16 mt-10">
                    I am committed to continuous learning and professional development. Here are some of the certifications I have earned to enhance my skills and stay current with industry trends.
                    <FaCertificate className="inline ml-2" />
                </p>
            </Hoc>

            <div className="grid xl:grid-cols-2 grid-cols-1 gap-8 mt-8">
                {certificates.map((cert) => (
                    <Hoc key={cert.id}>
                        <div className="shadow-md shadow-slate-800 h-full flex flex-col rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="relative h-48 w-full">
                                <Image
                                    className="object-cover"
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                />
                                <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm">
                                    {cert.date}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col justify-between grow">
                                <div>
                                    <h4 className="font-bold tracking-wide text-lg mb-2">{cert.title}</h4>
                                    <p className="text-teal-600 dark:text-teal-400 font-semibold mb-2">{cert.issuer}</p>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">{cert.description}</p>
                                </div>
                                <div className="mt-auto">
                                    <a
                                        href={cert.verificationLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-200 transition-colors duration-200"
                                    >
                                        <span className="mr-2">Verify Certificate</span>
                                        <FaExternalLinkAlt className="text-sm" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Hoc>
                ))}
            </div>
        </section>
    );
};

export default Certificates;