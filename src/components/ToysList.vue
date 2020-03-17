<template>
  <div>
    <div v-if="$root.$data.avatarChosen == false || $root.$data.avatarName == ''" class="error">
      <h1>No pet has been chosen</h1>
    </div>
    <div v-if="$root.$data.avatarChosen == true && $root.$data.avatarName != ''">
      <div id="pet-holder">
        <div id="profile">
          <img :src="'/images/animals/' + avatarImage" />
          <h2 id="pet-name">{{ name }}</h2>
        </div>
      </div>
      <div id="message">
        <h1>{{ desc }}</h1>
        <h2>Click on a toy to play!</h2>
      </div>
      <div class="toys">
        <div class="toy" v-for="toy in toys" :key="toy.id">
          <div>
            <a @click="play(toy)">
              <img class="image" :src="'/images/toys/'+toy.image" />
            </a>
          </div>
          <div class="info">
            <h2>{{ toy.name }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToysList",
  props: {
    toys: Array
  },
  computed: {
    name() {
      return this.$root.$data.avatarName;
    },
    avatarImage() {
      return this.$root.$data.avatarImg;
    },
    desc() {
      return this.$root.$data.toyDesc;
    }
  },
  methods: {
    play(toy) {
      if (
        this.$root.$data.hunger - toy.hungerLost < 0 &&
        this.$root.$data.thirst - toy.thirstLost < 0
      ) {
        this.$root.$data.toyDesc =
          "Not enough energy for " +
          toy.name +
          ". Need " +
          toy.hungerLost +
          "hunger and " +
          toy.thirstLost +
          " thirst.";
      } else if (this.$root.$data.hunger - toy.hungerLost < 0) {
        this.$root.$data.toyDesc =
          "Not enough energy for " +
          toy.name +
          ". Need " +
          toy.hungerLost +
          "hunger.";
      } else if (this.$root.$data.thirst - toy.thirstLost < 0) {
        this.$root.$data.toyDesc =
          "Not enough energy for " +
          toy.name +
          ". Need " +
          toy.thirstLost +
          "thirst.";
      } else {
        this.$root.$data.hunger -= toy.hungerLost;
        this.$root.$data.thirst -= toy.thirstLost;
        this.$root.$data.petCash += toy.reward;
        this.$root.$data.toyDesc = toy.desc;
      }
      alert(this.$root.$data.toyDesc);
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
.selected {
  border-style: dashed;
  border-width: 2px;
  border-color: rgb(46, 46, 46);
}
#pet-holder {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
}
#profile {
  padding: 15px;
  margin-right: 15px;
  width: 250px;
  height: auto;
}
#pet-name {
  text-align: center;
  padding: 10px;
  color: #fff;
  font-weight: bold;
  background-color: #eb7d46;
}
#profile img {
  width: 100%;
  height: auto;
}
#message {
  text-align: center;
  font-family: "Comic Sans MS", cursive, sans-serif;
  color: rgb(75, 43, 14);
  margin: 10px;
}
.toys {
  display: flex;
  justify-content: center;
  font-family: "Comic Sans MS", cursive, sans-serif;
}
.toy {
  margin: 10px 20px;
}
.image {
  width: 200px;
  height: auto;
}
.info {
  text-align: center;
}
</style>