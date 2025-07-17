
import fluidScale from 'fluid-scale';


export default class Page 
{
    constructor (id:string)
    {
        fluidScale({json: id});   
    }
}