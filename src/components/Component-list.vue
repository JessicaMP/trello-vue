<template>
  <div>
    <li>{{ li.name }}</li>
  </div>
</template>

<script>

export default {
  name: 'ComponentList',
	props: {
    li: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      tarjet: "",
      newList: [{ name: "hi", tarjet: null }]
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
    }
  }
}
</script>

<style lang="css" scoped>

.list {
  border: none;
  width: 80%;
}
</style>