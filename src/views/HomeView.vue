<template>
  <div class="md:px-6 lg:px-4 flex flex-col gap-6 lg:gap-8">
    <!-- header -->
    <div class="flex flex-col lg:flex-row gap-8 justify-between">
      <div
        class="lg:max-w-[500px] flex items-center gap-3 w-full bg-bgDarlElt px-4 py-4 rounded-md"
      >
        <SearchIcon style="height: 20px" />
        <input
          @input="handleSearch"
          placeholder="Search for a country..."
          class="w-full placeholder:text-gray-300 outline-none bg-bgDarlElt"
          type="text"
        />
      </div>
      <div class="relative w-[200px]">
        <div
          @click="isOpen = !isOpen"
          class="w-full bg-bgDarlElt py-4 px-6 min-w-36 flex justify-between items-center gap-2 cursor-pointer rounded-md"
        >
          <span>{{ region }}</span>
          <ChevronDownIcon style="height: 20px" />
        </div>
        <div
          v-if="isOpen"
          class="flex flex-col w-full top-19 mt-2 absolute z-30 bg-bgDarlElt rounded-md right-0 px-2 py-2"
        >
          <div
            class="cursor-pointer py-2 px-4 rounded-md hover:bg-gray-700"
            @click="() => handleOptionChange(regionOption)"
            v-for="regionOption of regionOptions"
            :key="regionOption"
          >
            {{ regionOption }}
          </div>
        </div>
      </div>
    </div>

    <!-- loading  -->
    <div class="h-[60vh] flex justify-center items-center" v-if="isLoading">
      <h1 class="tex-center">Loading....</h1>
    
    </div>
    <!-- body list all countries -->
    <div
    v-if="!isLoading"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 px-10 lg:px-0"
    >
      <CountryTile
        v-for="country of countries"
        :key="country.name.common"
        :name="country.name.common"
        :population="country.population"
        :flag="country.flags.png"
        :region="country.region"
        :capital="country.capital?.join('')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import CountryTile from "@/components/CountryTile.vue";
import axiosClient from "@/axiosClient";

import debounce from "lodash/debounce";
import { SearchIcon, ChevronDownIcon } from "@heroicons/vue/outline";
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
  components: {
    CountryTile,
    SearchIcon,
    ChevronDownIcon,
  },
  setup() {
    type tCountries = {
      id: string;
      name: {
        common: string;
        official: string;
      };
      region: string;
      capital: Array<string>;
      flags: {
        png: string;
        svg: string;
        alt: string;
      };
      population: number;
    };

    const countries = ref<tCountries[]>([]);

    const region = ref<string>("Filter by Region");
    const isOpen = ref<boolean>(false);
    const searchText = ref<string>("");
    const url = ref<string>("/all");
    const isLoading = ref<boolean>(false)

    function handleOptionChange(country: string) {
      region.value = country;
      isOpen.value = false;
    }

    const handleSearch = debounce((event: InputEvent) => {
      const text = (event.target as HTMLInputElement).value;
      searchText.value = text;
    }, 300);
    const regionOptions = ["Africa", "America", "Asia", "Europe", "Oceania"];

    async function getAllCountries() {
      url.value =
        searchText.value.length > 3 ? `/name/${searchText.value}` : "/all";
      if (searchText.value.length > 3) {
        region.value = "Filter by Region";
        url.value = `/name/${searchText.value}`;
      } else {
        url.value = "/all";
      }

      if (region.value !== "Filter by Region") {
        searchText.value = "";
        url.value = `/region/${region.value.toLocaleLowerCase()}`;
      }

      try {
        isLoading.value = true
        const response = await axiosClient.get(url.value);
        const data: Array<tCountries> = await response.data;
        countries.value = data ? data : [];
      } catch (error) {
        console.log(error)
      } finally {
        isLoading.value = false
      }
    }

    watch(searchText, () => {
      getAllCountries();
    });

    watch(region, () => {
      getAllCountries();
    });

    onMounted(() => {
      getAllCountries();
    });

    return {
      countries,
      regionOptions,
      handleOptionChange,
      handleSearch,
      searchText,
      region,
      isOpen,
      isLoading
    };
  },
});
</script>
