<template>
  <div>
    <div v-if="$root.$data.avatarChosen == false || $root.$data.avatarName == ''" class="error">
      <h1>No pet has been chosen</h1>
    </div>
    <div v-if="$root.$data.avatarChosen == true && $root.$data.avatarName != ''" id="pet-holder">
      <div id="profile">
        <img :src="'/images/animals/' + avatarImage" />
        <h2 id="pet-name">{{ name }}</h2>
      </div>
      <div id="shop">
        <button class="button1" @click="buyHunger()">$5 for 10 Hunger</button>
        <button class="button2" @click="buyThirst()">$5 for 10 Thirst</button>
      </div>
      <div id="stats">
        <h2 id="hunger">Hunger: {{hunger}}</h2>
        <h2 id="thirst">Thirst: {{thirst}}</h2>
        <h2 id="pet-cash">Pet Cash: ${{petCash}}</h2>
      </div>
      <div id="actions"></div>
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
    },
    hunger() {
      if (this.$root.$data.hunger < 10) {
        return this.$root.$data.avatarName + " is starving!";
      } else {
        return this.$root.$data.hunger + " / " + this.$root.$data.maxHunger;
      }
    },
    thirst() {
      if (this.$root.$data.thirst < 10) {
        return this.$root.$data.avatarName + " is super thirsty!!";
      } else {
        return this.$root.$data.thirst + " / " + this.$root.$data.maxThirst;
      }
    },
    petCash() {
      return this.$root.$data.petCash;
    }
  },
  methods: {
    buyHunger() {
      if (this.$root.$data.petCash >= 5) {
        if (this.$root.$data.hunger == this.$root.$data.maxHunger) {
          alert("Hunger is full");
        } else if (this.$root.$data.hunger + 10 > this.$root.$data.maxHunger) {
          this.$root.$data.hunger = this.$root.$data.maxHunger;
          this.$root.$data.petCash -= 5;
        } else {
          this.$root.$data.hunger += 10;
          this.$root.$data.petCash -= 5;
        }
      } else {
        alert("Not enough Pet Cash");
      }
    },
    buyThirst() {
      if (this.$root.$data.petCash >= 5) {
        if (this.$root.$data.thirst == this.$root.$data.maxThirst) {
          alert("Thirst is quenched");
        } else if (this.$root.$data.thirst + 10 > this.$root.$data.maxThirst) {
          this.$root.$data.thirst = this.$root.$data.maxThirst;
          this.$root.$data.petCash -= 5;
        } else {
          this.$root.$data.thirst += 10;
          this.$root.$data.petCash -= 5;
        }
      } else {
        alert("Not enough Pet Cash");
      }
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
#shop {
  margin-bottom: 15px;
}
.button1 {
  background-color: #eb9839;
  border: none;
  color: white;
  padding: 10px;
  margin: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
}
.button2 {
  background-color: #008cba;
  border: none;
  color: white;
  padding: 10px;
  margin: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
}
#stats {
  padding: 10px 5px;
  justify-content: space-evenly;
  color: #fff;
  background-color: #5c311c;
  width: 100%;
  display: flex;
}
#thirst {
  color: #0087ca;
}
#pet-cash {
  color: rgb(91, 224, 30);
}
</style>