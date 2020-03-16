<template>
  <div class="play">
    <ToysList :toys="toys" />
  </div>
</template>

<script>
// @ is an alias to /src
import ToysList from "@/components/ToysList.vue";

export default {
  name: "Play",
  components: {
    ToysList
  },
  computed: {
    toys() {
      return this.$root.$data.toys;
    }
  }
};
</script>