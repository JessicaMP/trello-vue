<template>
  <v-subheader>
    <v-layout row justify-space-between>
      <v-flex xs4>
       <v-layout row justify-center>
        <v-list-tile color="white">
          <v-list-tile-avatar>
            <img color="white" :src="image" width="1px">
            <!-- <v-icon>icon_trello</v-icon> -->
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="text"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-text-field
          prepend-icon="search"
          append-icon="mic"
          label="Search"
          solo-inverted
          class="xs-1"
          flat
        ></v-text-field>
       </v-layout>
      </v-flex>
      <v-flex xs4 class="text-xs-center">
        <img :src="logo">
        <!-- <v-card color="pink darken-2">
          <v-card-media :src="logo" alt="Logo" height="30px" style="width:100px">
          </v-card-media>
        </v-card> -->
      </v-flex>
      <!-- <div>
        <v-btn flat icon color="white" dark>
            <v-icon dark>add</v-icon>
          </v-btn>
          <v-btn flat icon color="white" dark>
            <v-icon dark>error</v-icon>
          </v-btn>
          <v-btn flat icon color="white" dark>
            <v-icon dark>edit</v-icon>
          </v-btn>
      </div> -->
      <v-flex xs4>
        <v-layout row justify-end>
          <v-btn flat icon color="white" dark>
            <v-icon dark>add</v-icon>
          </v-btn>
          <v-btn flat icon color="white" dark>
            <v-icon dark>error</v-icon>
          </v-btn>
          <v-btn flat icon color="white" dark>
            <v-icon dark>edit</v-icon>
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-subheader>
</template>

<script>
import logo from '../../assets/images/trello-logo-white.svg'
import IconTrello from '../../assets/images/trello.svg'

export default {
  data() {
    return {
      logo: logo,
      text: 'Tableros',
      // icon: {
      //   icon_trello: IconTrello
      // }
      image: IconTrello
		}
  }
};
</script>

<style>
img {
  width: 50%;
}
</style>

