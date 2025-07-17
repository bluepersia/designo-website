import fluidScale from 'fluid-scale';
import ProjectGrid from './components/ProjectGrid';

fluidScale({json: 'web-design'});

const grid = document.querySelector ("[data-projects-grid");

if(grid)
    new ProjectGrid ('web-design', grid);