import fluidScale from 'fluid-scale';
import instantiateProjects from './projectsLoader';

fluidScale({json: 'web-design'});

const grid = document.querySelector ("[data-projects-grid");

if(!grid)
    return;

instantiateProjects ('web-design', grid);