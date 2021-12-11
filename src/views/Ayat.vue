<script setup>
import axios from "axios";
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";

const route = useRoute();
const router = useRouter();
const { noSurat, noAyat } = route.params;
const ayat = reactive({
  ayat: {},
});

function getData() {
  axios
    .get(`surah/${noSurat}/${noAyat}`)
    .then(({ data }) => {
      ayat.ayat = data.data;
    })
    .catch(() => {
      router.push({ name: "E404" });
    });
}

await getData();
</script>

<template>
  <div class="ayat">
    <Navbar :changeBrand="`[QS. ${noSurat} : ${noAyat}]`" />
    <ul class="list-group mt-5">
      <li class="list-group-item">
        <div class="arab">
          {{ ayat.ayat?.text?.arab }}
        </div>
      </li>
      <li class="list-group-item">
        <audio controls :src="ayat.ayat?.audio?.primary"></audio>
      </li>
      <li class="list-group-item">
        <div class="latin">{{ ayat.ayat?.text?.transliteration?.en }}</div>
      </li>
      <li class="list-group-item">
        <div class="latin">{{ ayat.ayat?.translation?.id }}</div>
      </li>
      <li class="list-group-item">
        <div class="latin">{{ ayat.ayat?.translation?.en }}</div>
      </li>
      <li class="list-group-item">
        <div class="latin">{{ ayat.ayat?.tafsir?.id?.long }}</div>
      </li>
    </ul>
  </div>
</template>
