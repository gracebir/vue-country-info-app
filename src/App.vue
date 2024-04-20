<template>
 <div class="bg-bgDark min-h-screen text-textDark font-nunito">
    <Header/>
    <main class="max-w-7xl mx-auto py-4 lg:py-6 px-4 lg:px-0">
      <router-view />
    </main>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue'
export default defineComponent({
  components:{
    Header
  }
});
</script>
