import type IProjectData from "./types/IProjectData";

export default async function loadProjects (type:string) : Promise<IProjectData>
{
    const res = await fetch (`/data/projects/${type}.json`);

    return await res.json();
}
