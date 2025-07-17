import Project from "./Project";
import type {IProjectData} from "../types/IProjectData";
import CardGrid from "./CardGrid";

export default class ProjectGrid extends CardGrid
{
    constructor (type:string, el:Element)
    {
        super ('projects', type, el);
    }

}
