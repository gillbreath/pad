<script setup>
import PadRenderer from '../PadRenderer.vue';
import mainPad from '../../../../main.pad.js';

const props = defineProps({
  options: Object
});

const siteName = props.options.siteName || mainPad.padOptions.appName;

const logoTextOptions = props.options.siteNameImageSrc
  ? {
      elementType: 'img',
      class: 'logo text',
      alt: siteName + ' logo',
      src: props.options.siteNameImageSrc
    }
  : {
      elementType: 'span',
      class: 'logo text',
      innerHtml: siteName || 'PAD Header'
    };
const headerPad = [
  {
    elementType: 'div',
    class: 'pre-fab-header',
    children: [
      {
        elementType: 'a',
        class: 'home-links',
        href: '/',
        children: [
          {
            elementType: 'img',
            class: 'logo picture',
            alt: props.options.logoPictureAltText || siteName + ' logo picture',
            src: props.options.siteLogoImageSrc || '/src/assets/Gillbreath-Pad-Mascot.jpg'
          },
          logoTextOptions
        ]
      },
      {
        elementType: 'nav',
        children: [
          {
            elementType: 'preFabLinkList',
            options: {
              collection: props.options.navLinks
            }
          }
        ]
      }
    ]
  }
];
</script>

<template>
  <PadRenderer :elements-array="headerPad" />
</template>

<style>
.pre-fab-header {
  display: flex;
  justify-content: space-between;
}
</style>
