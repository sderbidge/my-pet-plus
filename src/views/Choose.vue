<template>
  <div class="home">
    <ChoosePet />
  </div>
</template>

<script>
// @ is an alias to /src
import ChoosePet from "@/components/ChoosePet.vue";

export default {
  name: "Choose",
  components: {
    ChoosePet
  }
};
</script>
