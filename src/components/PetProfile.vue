<template>
  <div>
    <div v-if="$root.$data.avatarChosen == false || $root.$data.avatarName == ''" class="error">
      <h1>No pet has been chosen</h1>
    </div>
    <div v-if="$root.$data.avatarChosen == true && $root.$data.avatarName != ''">
      <div id="profile">
        <h2>{{ name }}</h2>
        <img :src="'/images/animals/' + avatarImage" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$root.$data.avatarName;
    },
    avatarImage() {
      return this.$root.$data.avatarImg;
    }
  }
};
</script>

<style scoped>
.error {
  text-align: center;
  font-family: "Comic Sans MS", cursive, sans-serif;
  color: rgb(75, 43, 14);
}
</style>