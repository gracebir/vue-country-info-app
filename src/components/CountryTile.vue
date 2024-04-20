<template>
 <div class="bg-bgDarlElt rounded-md shadow w-full">
        <router-link to="/">
            <div class="h-[150px]">
                <img class="w-full h-full rounded-t-md" :src="flag" :alt="name">
            </div>
        </router-link>
        <div class="px-4 py-6 flex flex-col gap-3">
            <h1 class="font-bold text-xl">{{ name }}</h1>
            <div class="flex flex-col gap-2">
                <p>
                    <span class="font-semibold">Population: </span> {{ population }}
                </p>
                <p>
                    <span class="font-semibold">Region: </span> {{ region }}
                </p>
                <p>
                    <span class="font-semibold">Capital: </span> {{ capital }}
                </p>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CountryTile',
  props: {
    name: {type: String, required: true},
    flag: {type: String, required: true},
    population: {type: String, required: true},
    region: {type: String, required: true},
    capital: {type: String, required: true}
  },
});
</script>
