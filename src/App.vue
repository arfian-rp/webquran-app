<script setup></script>

<template>
  <Suspense>
    <template #default>
      <router-view />
    </template>
    <template #fallback>
      <div class="p-5">
        <h1>Loading...</h1>
      </div>
    </template>
  </Suspense>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@700&display=swap");

* {
  padding: 0;
  margin: 0;
}
.back {
  margin-right: 1rem;
}
.arab {
  font-size: 2.5rem;
  padding: 1rem;
  font-family: "Scheherazade New", serif;
  margin-right: 2rem;
}
.latin {
  font-size: 20px;
  padding: 1rem;
  font-family: serif;
}
.cell {
  display: flex;
  justify-content: space-between;
  .no {
    margin-left: 2rem;
    margin-right: 1rem;
    font-size: 1.5rem;
    align-self: center;
  }
}
</style>
