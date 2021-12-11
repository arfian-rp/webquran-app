<script setup>
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";

const router = useRouter();
const quran = reactive({
  surat: [],
});

function getData() {
  axios
    .get("surah")
    .then(({ data }) => {
      quran.surat = data.data;
    })
    .catch(() => {
      router.push({ name: "E404" });
    });
}

await getData();
</script>

<template>
  <div class="quran">
    <Navbar :addBack="false" />
    <ul class="list-group mt-5">
      <router-link v-for="(e, i) in quran.surat" :key="i" :to="{ name: 'Surat', params: { noSurat: e.number } }" class="list-group-item cell">
        <div class="no">{{ ++i }}.</div>
        <div class="content">
          <div class="arab">
            {{ e.name?.short }}
          </div>
          <div class="latin">
            {{ e.name?.transliteration?.id }}
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
