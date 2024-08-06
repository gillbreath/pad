<script setup>
import PadRenderer from '../PadRenderer.vue';

const props = defineProps({
  options: Object
});
const logoTextOptions = props.options.siteNameImageSrc
  ? {
      elementType: 'img',
      class: 'logo text',
      alt: props.options.siteName + ' logo',
      src: props.options.siteNameImageSrc
    }
  : {
      elementType: 'span',
      class: 'logo text',
      innerHtml: props.options.siteName || 'PAD Header'
    };
const headerPad = [
  {
    elementType: 'header',
    children: [
      {
        elementType: 'div',
        class: 'well',
        children: [
          {
            elementType: 'a',
            class: 'home-links',
            href: '/',
            children: [
              {
                elementType: 'img',
                class: 'logo picture',
                alt: props.options.siteName + ' logo picture',
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
                  linkList: props.options.navLinkList
                }
              }
            ]
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
