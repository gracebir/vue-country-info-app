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
  // rest of outline icons
}

declare module "@heroicons/vue/solid" {
  export { default as AcademicCapIcon } from "@heroicons/vue/solid/esm/AcademicCapIcon.js";
  // rest of solid icons
}
