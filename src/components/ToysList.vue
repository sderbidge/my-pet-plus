<template>
  <div>
    <div v-for="toy in toys" :key="toy.id">
      <div class="image">
        <img :src="'/images/toys/'+toy.image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToysList",
  props: {
    toys: Array
  }
};
</script>