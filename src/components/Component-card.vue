<template>
	<ul>
    <li class="title">
      <input type="text" class="edit" v-if='card === editing' v-model="card.name" @keyup.enter="doneEdit(card)" @blur="doneEdit(card)">
      <label class="notView editing" @dblclick="editTodo(card)">{{ card.name }}</label>
      <button @click="$emit('remove')">X</button>
    </li>
    <ul class="listBox">
      <ComponentList class="list" v-for="(li, index) in newList" :key="index" :li="li" @removeLi="newList.splice(index, 1)"/>
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
    },
    index: {
      type: Number
    },
    cards: {
      type: Array
    }
  },
  data() {
    return {
      tarjet: "",
      newList: [{ name: "" }],
      editing: {}
    };
  },
  methods: {
   addTarjet() {
      if (this.tarjet.length > 0) {
        this.newList.push({
          name: this.tarjet
        });
        this.tarjet = "";
        console.log("list");
      } 
    },
    doneEdit(card) {
      this.editing = {};
      if (card.name.trim() === '') {
        this.remove(tarjet)
      }
    },
    editTodo(card) {
      this.editing = card
    }
  }
};
</script>

<style lang="css" scoped>
ul {
  box-sizing: border-box;
  width: 250px;
  margin: 0;
  border: none;
  margin: 0.5rem;
  float: left;
  list-style: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
}
 

.list {
  border: none;
  width: 80%;
}

.listBox {
  width: 100%;
  margin: 0.5rem 0;
  padding: 0;
}

.title {
  font-weight: bold;
  text-transform: uppercase;
}
</style>

