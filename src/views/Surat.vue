<script setup>
import axios from "axios";
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";

const router = useRouter();
const route = useRoute();
const { noSurat } = route.params;
const surat = reactive({
  name: {},
  tafsir: {},
  preBismillah: null,
  ayat: [],
});

function getData() {
  axios
    .get(`surah/${noSurat}`)
    .then(({ data }) => {
      surat.name = data.data.name;
      surat.tafsir = data.data.tafsir;
      surat.preBismillah = data.data.preBismillah;
      surat.ayat = data.data.verses;
    })
    .catch(() => {
      router.push({ name: "E404" });
    });
}

await getData();
</script>

<template>
  <div class="surat">
    <Navbar :changeBrand="surat.name?.transliteration?.id" />
    <ul class="list-group mt-4">
      <li class="list-group-item">
        <div class="arab">
          {{ surat.preBismillah?.text?.arab }}
        </div>
        <div class="latin">
          {{ surat.preBismillah?.translation?.id }}
        </div>
      </li>
      <router-link v-for="(e, i) in surat.ayat" :key="i" :to="{ name: 'Ayat', params: { noSurat, noAyat: e.number.inSurah } }" class="list-group-item cell">
        <div class="no">{{ ++i }}</div>
        <div class="content">
          <div class="arab">
            {{ e?.text?.arab }}
          </div>
          <div class="latin">
            {{ e?.translation?.id }}
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
