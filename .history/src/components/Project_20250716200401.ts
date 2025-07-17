import type IProjectData from "../types/IProjectData";

export default class Project 
{
    data:IProjectData;

    constructor (parent:Element, data : IProjectData)
    {
        this.data = data;

        parent.innerHTML = this.getScopedHtml ();
    }

    getScopedHtml ()
    {
        return ``
    }
}