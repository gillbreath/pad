import seedPad from './pad/blog.example.pad.js';
import ElementRendererTests from './pad/ElementRenderer.tests.pad.js';

// testing
if (window.Cypress) {
  seedPad.pageRoutes.test = {
    children: ElementRendererTests
  };
}

const mainPad = seedPad;

export default mainPad;
