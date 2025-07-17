import type IProjectData from "../types/IProjectData";

export default interface IProject 
{
    data: IProjectData;

    getScopedHtml : () => string;

}