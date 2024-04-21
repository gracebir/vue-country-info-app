/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "@heroicons/vue/*" {
  const content: any;
  export default content;
}

declare module "@heroicons/vue/outline" {
  export { default as SearchCircleIcon } from "@heroicons/vue/outline/esm/SearchCircleIcon.js"
  export { default as SearchIcon } from "@heroicons/vue/outline/esm/SearchIcon.js"
  export { default as ChevronDownIcon } from "@heroicons/vue/outline/esm/ChevronDownIcon.js"
  export { default as ChevronLeftIcon } from "@heroicons/vue/outline/esm/ChevronLeftIcon.js"
  export { default as ArrowDownIcon } from "@heroicons/vue/solid/esm/ArrowDownIcon.js"
  export { default as ArrowLeftIcon } from "@heroicons/vue/solid/esm/ArrowLeftIcon.js"
  export { default as ArrowNarrowDownIcon } from "@heroicons/vue/solid/esm/ArrowNarrowDownIcon.js"
  export { default as ArrowNarrowLeftIcon } from "@heroicons/vue/solid/esm/ArrowNarrowLeftIcon.js"
  export { default as ArrowNarrowRightIcon } from "@heroicons/vue/solid/esm/ArrowNarrowRightIcon.js"
  // rest of outline icons
}

declare module "@heroicons/vue/solid" {
  export { default as AcademicCapIcon } from "@heroicons/vue/solid/esm/AcademicCapIcon.js";
  // rest of solid icons
}
