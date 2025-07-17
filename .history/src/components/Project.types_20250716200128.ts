import type IProjectData from "../types/IProjectData";

export default interface IProject 
{
    new(data:IProjectData) : IProject;
    
    data: IProjectData;

    getScopedHtml : () => string;

}