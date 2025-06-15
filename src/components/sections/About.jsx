import { RevealOnScroll } from "../RevealOnScroll";
export const About = () =>{
        const frontendSkills = [
            "React",
            "Tailwind",
            "Streamlit"
        ];
        const backendSkills = [
            "Python",
            "FastAPI",
            "Django",
            "Docker",
            "Pydantic",
            "MangoDB",
        ];
        const MLSkills = [
            "Pytorch",
            "Scikit-learn",
            "Pandas",
            "Hugging Face",
            "LangGraph / Agno"
        ]


    return (
        <section id="about" className="min-h-sceen flex items-center justify-center py-20">
           <RevealOnScroll>
           <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">About Me</h2>
           <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
                A passionate developer, with solid skills in building Scalable, efficient
                and AI enables application.
                I love to transform innovative and creative Ideas to valuable software product.

            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                    Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((skill,key) => (
                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            {skill}

                        </span>
                    ))}

                </div>

            </div>

            <div className="rounded-xl p6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                    Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                    {backendSkills.map((skill,key) => (
                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            {skill}

                        </span>
                    ))}

                </div>

            </div>

            <div className="rounded-xl p6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                    AI / ML
                </h3>
                <div className="flex flex-wrap gap-2">
                    {MLSkills.map((skill,key) => (
                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            {skill}

                        </span>
                    ))}

                </div>

            </div>
            </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">📚 Education</h3>
                    <ul className="list-inside mx-2 text-gray-300 space-y-2">
                        <li>
                            <strong>BS in Computer Science</strong> - Virtual University of Pakistan (2020 - 2024)
                        </li>

                    </ul>
                
                    <h4 className="text-lg font-bold mt-4 mb-4">📜 Courses & Certifications :</h4>
                    <ul className="list-disc leading-loose mx-2 list-inside text-gray-300 space-y-2 ">
                    <li>
                    Machine Learning Scientist with Python (DataCamp)
                    </li>
                    <li>
                    Python Developer track (Datacamp)
                    </li>
                    <li>
                    Participated in Google’s five days AI intensive course
                    </li>
                    </ul>
            </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 
                         🛠️ Work Experience</h3>
                         <div className="space-y-4 text-gray-300 mx-2">
                            <p className="leading-loose">
                        
                                I'm a fresh graduate, just beginning my career in the software industry.<br />
                                While pursuing my studies, I actively worked in a local business environment for a couple of years.<br /> This hands-on experience taught me how to handle real-world responsibilities, communicate effectively, stay consistent and take responsibility.
                            </p>

                         </div>
            </div>

           </div>
           </div>
                </RevealOnScroll>
        </section>
    )
}