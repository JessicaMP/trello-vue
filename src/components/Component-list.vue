<template>
  <v-card xs12 color="pink lighten-2 white--text">
    <v-layout row justify-space-between>
      <input type="text" class="edit" v-if='li === editing' v-model="li.name" @keyup.enter="doneEdit(li)" @blur="doneEdit(li)">
      <label m-1 class="editing" @dblclick="editTodo(li)">{{ li.name }}</label>
      <v-btn  flat icon color="white" @click="$emit('removeLi')"><v-icon>close</v-icon></v-btn>
    </v-layout>
  </v-card>
  
</template>

<script>
export default {
  name: "ComponentList",
  props: {
    li: {
      type: Object,
      required: true
    },
    index: {
      type: Number
    }
  },
  data() {
    return {
      tarjet: "",
      newList: [{ name: "hi", tarjet: null }],
      editing: {}
    };
  },
  methods: {
    addTarjet() {
      console.log(this.tarjet);
      if (this.tarjet.length > 0) {
        this.newList.push({
          name: this.tarjet
        });
        this.tarjet = "";
        console.log("list");
      }
    },
    doneEdit(li) {
      this.editing = {};
      if (li.name.trim() === "") {
        this.remove(tarjet);
      }
    },
    editTodo(li) {
      this.editing = li;
    }
  }
};
</script>

<style lang="css" scoped>
.list {
  border: none;
  width: 80%;
}

.listBox li button {
  background-color: transparent;
  border: 1px solid white;
  color: black;
  visibility: hidden;
  font-size: 20px;
  font-weight: bold;
}

.listBox li:hover > button {
  visibility: visible;
}

ul li {
  background-color: rgb(226, 228, 230);
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
}
</style>