import Project from "@/app/components/Project";
import Navbar from "@/app/components/Navbar";

export default async function ProjectPage({ params }) {
    const { id } = await params; // params est une Promise
    console.log(id);

    return (
        <div>
            <Navbar />
            <Project nomProjet={id} />
        </div>
    )
}
