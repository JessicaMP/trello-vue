<template>
  <v-layout row justify-center height="90px">
    <ComponentCard  d-inline-block v-for="(card, index) in cards" :key="index" :card="card" @remove="remove(index)"/>
    <v-btn d-inline-block round color="pink lighten-4 white--text" @click="ok = !ok">Añadir una tarjeta</v-btn>
    <v-card d-block v-show="ok">
      <input py-2 m-2type="text" @keyup.enter="addBox" v-model.trim="val" placeholder="Añadir una tarjeta">
      <v-card>
        <v-btn @click="addBox" color="pink darken-4"><v-icon color="white">save</v-icon></v-btn>
        <v-btn @click="ok = !ok" color="white"><v-icon color="pink darken-4">close</v-icon></v-btn>  
      </v-card>
    </v-card>
  </v-layout>
</template>

<script>
import ComponentCard from "./Component-card.vue"

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
    };
  },
  methods: {
    addBox() {
      if (this.val.length > 0) {
        this.cards.push({
          name: this.val
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
      console.log("remove");
    }
  }
};
</script>
<style>
input {
  width: 90%;
  padding: 0.5rem;
  margin: 0.5rem;
}
</style>
