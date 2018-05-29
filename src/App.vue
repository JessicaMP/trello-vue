<template>
    <v-app class="pink">
      <v-content>
        <v-container fluid grid-list-xl>
          <ComponentHeader/>
          <ComponentMain/> 
        </v-container>
      </v-content> 
    </v-app>
</template>

<script>
import ComponentHeader from './components/Component-header.vue'
import ComponentMain from './components/Component-main.vue'

export default {
  components: {
		ComponentHeader,
    ComponentMain
	}
};
</script>

<style>
/* body {
  font-family: "Roboto", sans-serif; */
/* } */
</style>


