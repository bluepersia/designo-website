// postcss.config.js
import cssnano from 'cssnano';

export default {
  plugins: [
    cssnano({
      preset: ['default', {
        mergeLonghand: true,
        discardEmpty: false,  
      }]
    })
  ]
};
