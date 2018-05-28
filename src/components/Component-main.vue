<template>
  <div>
    <div class="addList">
      <a href="#" type="button" v-on:click="ok = !ok">Añadir una tarjeta</a>
      <div class='addCard' v-show="ok">
        <input type="text" @keyup.enter="addBox" v-model.trim="val" placeholder="Añadir una tarjeta">
        <div class="box-buttons">
          <button>Guardar</button>
          <button>Close</button>  
        </div>
      </div>
    </div>
      <ComponentCard v-for="(card, index) in cards" :key="index" :card="card"/>
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
      name: "example",
			cards: [{ name: "Card", val: null }],
      val: "",
      newList: [{ name: "" }],
      ok: false
    }
  },
  methods: {
    addBox() {
      if (this.val.length > 0) {
        this.cards.push({
          name: this.val,
          // tarjet: null
        });
        this.val = "";
        console.log("card");
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
    toggle() {
      // if(this.exp === 'true') {
        
      // } else {
        
      // }
      return this.exp = !this.exp;
    }
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
   background-color: blue;
   padding: 0.5rem;
}

.addCard {
  padding: 0.5rem;
  border: 1px solid gray;
}

.box-buttons {
  padding: 0.5rem 0;
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

/* .addCard {
  display: none!important;
} */
</style>

