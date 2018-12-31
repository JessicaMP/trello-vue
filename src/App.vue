<template lang='pug'>
  v-app.pink
    v-content
      v-container(fluid='', grid-list-xl='').pa-0
        ComponentHeader
        ComponentMain
</template>

<script>
import ComponentHeader from './components/Component-header.vue'
import ComponentMain from './components/Component-main.vue'

export default {
  components: {
		ComponentHeader,
    ComponentMain
	},
  layout: 'default'
};
</script>

<style>
/* body {
  font-family: "Roboto", sans-serif; */
/* } */
</style>


