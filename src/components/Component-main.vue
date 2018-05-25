<template>
    <div>
			<div class="addList">
        <input type="text" @keyup.enter="addBox" v-model.trim="val">
        <!-- <button @click="addBox">add</button> -->
			</div>
			<ul v-for="(a, index) in abc" :key="index">
					<li>{{ a.name }}</li>
					<!-- <label for=""></label> -->
					<input type="text" placeholder="Añadir una tarjeta" v-model.trim="tarjet" @keyup.enter="addTarjet">
			</ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      props: {
        abc: { default: [] }
      },
      name: "example",
			abc: [{ name: "hi" }],
      val: "",
      tarjet: ""
    };
  },
  methods: {
    addBox() {
      if (this.val.length > 0) {
        this.abc.push({
          name: this.val
        });
        this.val = "";
        console.log("card");
      }
    },
    addTarjet(a) {
			for(let i = 0; i < this.abc.length; i ++)
			return this.abc.push()
		}
	},
	render(createElement) {
			return createElement('li', 
			[createElement('p', {class: {'myClass': true}}), this.tarjet])
	}
};
</script>

<style lang="css" scoped>
.addList {
	display: inline-block;
}

ul {
  box-sizing: border-box;
  width: 250px;
  /* box-shadow: 2px solid black; */
  margin: 0;
  border: 2px solid black;
  margin: 0.5rem;
	float: left;
}
</style>

