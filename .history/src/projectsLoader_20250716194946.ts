export default async function loadProjects (type:string)
{
    const res = await fetch (`/data/projects/${type}.json`);

    return await res.json();
}
