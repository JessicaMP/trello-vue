<template>
  <v-layout row justify-center>
    <v-flex xs1>
      <v-card color="pink darken-2 white--text">
         <v-card-media :src="trello" alt="Logo">  </v-card-media>
        <v-card-text>Tableros</v-card-text>
      </v-card>
    </v-flex>
     <v-flex xs1>
       <v-card color="pink darken-2">
        <v-card-media :src="logo" alt="Logo" height="30px" width="100px">
       </v-card-media>
       </v-card>
      </v-flex>
  </v-layout>
</template>

<script>
import logo from '../../assets/images/trello-logo-white.svg'
import trello from '../../assets/images/trello.png'

export default {
  data() {
    return {
      logo: logo,
      trello: trello
		}
  }
};
</script>

<style>
img {
  width: 50%;
}
</style>

