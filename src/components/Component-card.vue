<template>
	<ul>
    <li>{{ card.name }}</li>
    <ul>
      <ComponentList class="list" v-for="(li, index) in newList" :key="index" :li="li"/>
      <InputList v-model.trim="tarjet" placeholder="New list" @keyup.enter="addTarjet"/>
    </ul>
	</ul>
</template>

<script>
import ComponentList from './Component-list.vue'
import InputList from './Input-List.vue'

export default {
  name: 'ComponentCard',
  components:{
    ComponentList,
    InputList
  },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      cards: [{ name: "Card", tarjet: null }],
      val: "",
      tarjet: "",
      newList: [{ name: "" }]
    };
  },
  methods: {
   addTarjet() {
      console.log(this.tarjet);
      if (this.tarjet.length > 0) {
        this.newList.push({
          name: this.tarjet
          // val: null,
        });
        this.tarjet = "";
        console.log("list");
      } 
    }
  }
};
</script>

<style lang="css" scoped>
ul {
  box-sizing: border-box;
  width: 250px;
  /* box-shadow: 2px solid black; */
  margin: 0;
  border: none;
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

