<template>
  <header class="w-full bg-bgDarlElt z-50 py-3 lg:py-6 shadow-md sticky top-0">
        <div class="max-w-7xl mx-auto px-4">
            <router-link :to="{ name: 'home' }">
                <span class="font-bold text-xl">Where is the world?</span>
            </router-link>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderComponent',
});
</script>