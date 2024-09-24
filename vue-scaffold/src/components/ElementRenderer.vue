<script setup>
import PadRenderer from './PadRenderer.vue';
import LoopKey from '../loopKey.js';

const props = defineProps({
  singleElement: Object,
  elementsArray: Array
});
if (props.elementsArray) {
  props.elementsArray.forEach((e) => {
    e.loopKey = LoopKey();
  });
}
</script>

<template>
  <template v-for="eachEl in props.elementsArray || [props.singleElement]" :key="eachEl.loopKey">
    <a v-if="eachEl.elementType === 'a'" :class="eachEl.class" :href="eachEl.href">
      {{ eachEl.innerHtml }}
      <PadRenderer v-if="eachEl.children" :elements-array="eachEl.children" />
    </a>
    <div v-if="eachEl.elementType === 'div'" :class="eachEl.class">
      {{ eachEl.innerHtml }}
      <PadRenderer v-if="eachEl.children" :elements-array="eachEl.children" />
    </div>
    <header v-if="eachEl.elementType === 'header'">
      <PadRenderer v-if="eachEl.children" :elements-array="eachEl.children" />
    </header>
    <h1 v-if="eachEl.elementType === 'h1'" :class="eachEl.class">
      {{ eachEl.innerHtml }}
      <PadRenderer v-if="eachEl.children" :elements-array="eachEl.children" />
    </h1>
    <h2 v-if="eachEl.elementType === 'h2'" :class="eachEl.class">
      {{ eachEl.innerHtml }}
      <PadRenderer v-if="eachEl.children" :elements-array="eachEl.children" />
    </h2>
    <img
      v-if="eachEl.elementType === 'img'"
      :alt="eachEl.alt"
      :class="eachEl.class"
      :src="eachEl.src"
    />
    <li v-if="eachEl.elementType === 'li'">
      {{ eachEl.innerHtml }}
      <PadRenderer v-if="eachEl.children" :elements-array="eachEl.children" />
    </li>
    <main v-if="eachEl.elementType === 'main'">
      <PadRenderer v-if="eachEl.children" :elements-array="eachEl.children" />
    </main>
    <nav v-if="eachEl.elementType === 'nav'">
      <PadRenderer v-if="eachEl.children" :elements-array="eachEl.children" />
    </nav>
    <p v-if="eachEl.elementType === 'p'">
      {{ eachEl.innerHtml }}
      <PadRenderer v-if="eachEl.children" :elements-array="eachEl.children" />
    </p>
    <section v-if="eachEl.elementType === 'section'" :class="eachEl.class" :id="eachEl.id">
      <PadRenderer v-if="eachEl.children" :elements-array="eachEl.children" />
    </section>
    <span v-if="eachEl.elementType === 'span'">
      {{ eachEl.innerHtml }}
      <PadRenderer v-if="eachEl.children" :elements-array="eachEl.children" />
    </span>
    <ul v-if="eachEl.elementType === 'ul'">
      {{
        eachEl.innerHtml
      }}
      <PadRenderer v-if="eachEl.children" :elements-array="eachEl.children" />
    </ul>
  </template>
</template>
