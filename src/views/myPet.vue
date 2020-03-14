<template>
  <div class="mypet">
    <PetProfile />
  </div>
</template>

<script>
// @ is an alias to /src
import PetProfile from "@/components/PetProfile.vue";

export default {
  name: "myPet",
  components: {
    PetProfile
  }
};
</script>