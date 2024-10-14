import seedPad from './pad/examples/03-logins-layouts-wizards.example.pad.js';
import ElementRendererTests from './pad/ElementRenderer.tests.pad.js';

// testing
if (window.Cypress) {
  seedPad.padOptions = ElementRendererTests.padOptions;
  seedPad.pageRoutes.test = {
    children: ElementRendererTests.seedPadPageRoutesTestChildren
  };
}

const mainPad = seedPad;

export default mainPad;
