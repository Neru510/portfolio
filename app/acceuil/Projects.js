import { projects } from "@/data/projects";
import ProjectPreview from "@/app/components/ProjectPreview";

export default function Projects () {
    return (
        <section className="py-8 px-4 scroll-mt-20" id="projets">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#D49C6A] drop-shadow-[0_2px_16px_rgba(212,156,106,0.25)] tracking-widest mb-8 text-center">
                Projets
            </h1>
            <div className="flex flex-wrap gap-8 justify-center items-start">
                {projects.map((project, idx) => (
                    <ProjectPreview
                        key={project.id || idx}
                        nom={project.title}
                        desc={project.description}
                        logo={project.images.logo}
                        skills_overview={project.skills_overview}
                        link={`/projets/${project.id}`}
                        img={project.images.preuves[0]}
                    />
                ))}
            </div>
        </section>
    );
}

