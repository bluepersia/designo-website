import ProjectGrid from "../components/ProjectGrid";
import Page from "./Page";


export default class DesignPage extends Page 
{
    constructor (id:string)
    {
        super (id);

        const grid = document.querySelector ("[data-projects-grid") as HTMLUListElement;
        
        if (grid)
            new ProjectGrid (id, grid);
        
    }
}