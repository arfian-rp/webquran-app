<script setup>
const props = defineProps({
  addBack: {
    type: Boolean,
    default: true,
  },
  changeBrand: {
    type: String,
    default: "Web Quran",
  },
});
</script>

<template>
  <nav class="navbar navbar-light bg-light border-bottom fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <i v-if="props.addBack" @click="$router.go(-1)" class="back bi bi-backspace"></i>
        {{ props.changeBrand }}
      </router-link>
    </div>
  </nav>
</template>

<style>
.navbar-brand {
  font-size: 1.5rem;
}
</style>
