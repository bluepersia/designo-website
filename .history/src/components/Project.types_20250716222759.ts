import type {IProjectData} from "../types/IProjectData";

 export interface IProject 
{
    new(parent: Element, data:IProjectData) : IProject;

    data: IProjectData;

    getScopedHtml : () => string;

}
