<template>
  <div class="py-10 lg:py-14 flex flex-col gap-14 px-4 lg:px-0">
    <!-- header -->
    <div>
      <router-link to="/">
        <div class="max-w-40 bg-bgDarlElt px-2 py-2 flex justify-center rounded-md shadow-lg">
          <div class="flex gap-1 items-center">
            <ArrowLeftIcon style="height: 15px; width: 40px" />
            <span class="font-bold text-base lg:text-lg">Back</span>
          </div>
        </div>
      </router-link>
    </div>
    <!-- country detail -->
    <div class="h-[60vh] flex justify-center items-center" v-if="isLoading">
      <h1 class="tex-center">Loading....</h1>
    </div>
    <div v-if="!isLoading" class="grid md:grid-cols-1 gap-4 lg:grid-cols-2">
      <div class="">
        <div class="w-full lg:w-[600px] lg:h-[400px] h-[250px]">
          <img class="w-full h-full" :src="country?.flags.png" alt="country detail" />
        </div>
      </div>
      <div class="flex flex-col gap-8 justify-between py-6 px-0 lg:px-10">
        <h1 class="text-xl lg:text-3xl font-bold">{{ country?.name }}</h1>
        <div class="grid grid-cols-1 gap-8 lg:gap-3 lg:grid-cols-2">
          <div class="flex flex-col gap-2">
            <p>
              <span class="font-semibold text-gray-100">Native Name: </span>{{ country?.nativeName }}
            </p>
            <p>
              <span class="font-semibold text-gray-100">Population: </span>
              {{ country?.population }}
            </p>
            <p>
              <span class="font-semibold text-gray-100">Region: </span>{{ country?.region }}
            </p>
            <p>
              <span class="font-semibold text-gray-100">Sub Region: </span>{{ country?.subregion }}
            </p>
            <p>
              <span class="font-semibold text-gray-100">Capital: </span>{{ country?.capital }}
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <p>
              <span class="font-semibold text-gray-100">Top Level Domain:
              </span>
              <span v-for="domain of country?.topLevelDomain" :key="domain">{{
                domain
              }}</span>
            </p>
            <p>
              <span class="font-semibold text-gray-100">Currencies: </span>
              <span class="space-x-2" v-for="currency of country?.currencies" :key="currency.code">
                {{ currency.name }}
              </span>
            </p>
            <div class="flex flex-row">
              <span class="font-semibold text-gray-100">Languages: </span>
              <div class="flex flex-wrap ml-2">
                <span v-for="(language, i) of country?.languages" :key="language.iso639_1">
                  {{ language.name }}
                  <span v-if="country?.languages.length !== i + 1">, </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-2 items-center">
          <h3 class="text-base lg:text-lg font-semibold">Border Countries:</h3>
          <div class="flex flex-wrap gap-3 ">
            <span class="bg-bgDarlElt px-6 py-2 shadow-md rounded-md" v-for="border of country?.borders"
              :key="border">{{ border }}</span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { ArrowLeftIcon } from "@heroicons/vue/outline";
import { useRoute } from "vue-router";
import axios from "axios";

export default defineComponent({
  name: "CountryDetails",
  components: {
    ArrowLeftIcon,

  },
  setup() {
    type tCountries = {
      id: string;
      name: string;
      nativeName: string;
      languages: Array<{ name: string; iso639_1: string }>;
      currencies: Array<{ code: string; name: string }>;
      borders: Array<string>;
      subregion: string;
      region: string;
      capital: string;
      topLevelDomain: Array<string>;
      flags: {
        png: string;
        svg: string;
      };
      population: number;
    };
    const name = "This is the name of the most common country";
    const country = ref<tCountries>();
    const route = useRoute();
    const isLoading = ref<boolean>(false)

    async function getCountry() {
      try {
        isLoading.value = true
        const response = await axios.get(
          `https://restcountries.com/v2/capital/${route.params.capital}`
        );
        const data = await response.data[0];
        country.value = data;
      } catch (error) {
        console.error(error)
      }
      finally {
        isLoading.value = false
      }
    }

    function formatNumber(number: number) {
      return number.toLocaleString("en-US", { maximumFractionDigits: 0 });
    }

    onMounted(() => {
      getCountry();
    });

    return {
      name,
      country,
      formatNumber,
      isLoading
    };
  },
});
</script>