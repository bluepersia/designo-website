
import type { IProjectData } from "../types/IProjectData";
import CardGrid from "./CardGrid";
import Project from "./Project";

export default class ProjectGrid extends CardGrid<Project, IProjectData>
{
    constructor (type:string, el:Element)
    {
        super ('projects', Project, type, el);
    }

}
