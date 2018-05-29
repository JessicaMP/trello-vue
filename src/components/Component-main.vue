<template>
  <div>
    <div class="addList">
      <v-btn color="pink lighten-4" @click="ok = !ok">Añadir una</v-btn>
      <div class='addCard' v-show="ok">
        <input type="text" @keyup.enter="addBox" v-model.trim="val" placeholder="Añadir una tarjeta">
        <div class="box-buttons">
          <button @click="addBox">Guardar</button>
          <button @click="ok = !ok">Close</button>  
        </div>
      </div>
    </div>
      <ComponentCard v-for="(card, index) in cards" :key="index" :card="card" @remove="remove(index)"/>
  </div>
</template>

<script>
import ComponentCard from './Component-card.vue'

export default {
  components: {
		ComponentCard
	},
  data() {
    return {
      props: {
        cards: { default: [] }
      },
      cards: [],
      val: "",
      ok: false
    }
  },
  methods: {
    addBox() {
      if (this.val.length > 0) {
        this.cards.push({
          name: this.val,
        });
        this.val = "";
      }
    },
    addTarjet() {
      if (this.tarjet.length > 0) {
        this.newList.push({
          name: this.tarjet
        });
        this.tarjet = "";
        console.log("list");
      } 
    },
    remove(index) {
      this.cards.splice(index, 1);
      console.log('remove');
    },
  }
};
</script>

<style lang="css" scoped>
.addList {
  display: inline-block;
}

.addList a, .addList div, .box-buttons {
  display: block;
}

.addList a {
   text-decoration: none;
   color: white;
   background-color: rgb(0,106,168);
   padding: 0.5rem;
   border-radius: 0.5rem;
}

.addCard {
  padding: 0.5rem;
  border: 1px solid gray;
  border-radius: 0.5rem;
  background-color: rgb(226,228,230);
}

.addCard input {
  padding: 0.3rem;
  border-radius: 0.3rem;
  border: 1px solid gray;
  box-shadow: 2px 2px gray;
  background-color: rgb(226,228,230);
}

input::placehoder {
  color: white;
}

.box-buttons {
  padding: 0.5rem 0 0;
}

.box-buttons button {
  border-radius: 0.3rem;
  padding: 0.2rem;
  color: white;
}

button:first-child {
  background-color: rgb(90,172,68);
}

button:nth-child(2) {
  background-color: black;
}

ul {
  box-sizing: border-box;
  width: 250px;
  margin: 0;
  border: 2px solid black;
  margin: 0.5rem;
  float: left;
  list-style: none;
  padding: 0.5rem;
}

.list {
  border: none;
  width: 80%;
}

</style>

