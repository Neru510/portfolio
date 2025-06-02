import Project from "@/app/components/Project";
import Navbar from "@/app/components/Navbar";

import {projects} from '@/data/projects';

export async function generateStaticParams() {
    return projects.map(proj => ({ id: proj.id }));
}

export default async function ProjectPage({ params }) {
    const { id } = await params;

    return (
        <div>
            <Navbar />
            <Project nomProjet={id} />
        </div>
    );
}
