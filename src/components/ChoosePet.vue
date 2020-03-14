<template>
  <div>
    <h1 id="header">Choose a pet!</h1>
    <div class="animals">
      <div :class="selected == 'dog.png' ? 'selected' : ''">
        <a @click="selectAvatar('dog.png')">
          <img id="dogImg" src="/images/animals/dog.png" />
        </a>
      </div>
      <div :class="selected == 'cat.png' ? 'selected' : ''">
        <a @click="selectAvatar('cat.png')">
          <img id="catImg" src="/images/animals/cat.png" />
        </a>
      </div>
    </div>
    <div>
      <div id="nameContainer">
        <h1 id="name-header">Choose a name!</h1>
        <form v-on:submit.prevent="updateName">
          <input type="text" v-model="name" id="input" />
          <button type="submit" class="button">Submit Name</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  computed: {
    selected() {
      return this.$root.$data.avatarImg;
    }
  },
  methods: {
    selectAvatar(avatar) {
      this.$root.$data.avatarImg = avatar;
      this.$root.$data.avatarChosen = true;
    },
    updateName() {
      this.$root.$data.avatarName = this.name;
      alert("Name was saved succesfully!");
    }
  }
};
</script>

<style scoped>
#header {
  font-size: 30px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  text-align: center;
  color: rgb(95, 69, 39);
}
.animals {
  display: flex;
  justify-content: center;
}
#dogImg {
  padding: 15px;
  margin-right: 15px;
  width: 250px;
  height: auto;
}
#catImg {
  padding: 15px;
  margin-left: 15px;
  width: 320px;
  height: auto;
}
.selected {
  border-style: dashed;
  border-width: 2px;
  border-color: rgb(46, 46, 46);
}

.button {
  background-color: #008cba; /* Green */
  border: none;
  color: white;
  padding: 10px;
  margin: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
#nameContainer {
  text-align: center;
}
#name-header {
  font-size: 30px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  text-align: center;
  color: rgb(95, 69, 39);
}
#input {
  padding: 8px;
}
</style>