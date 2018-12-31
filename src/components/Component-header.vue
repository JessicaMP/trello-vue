<template lang='pug'>
  v-layout(row='', wrap='')
    v-flex.my-3(v-for='(bar, i) in bars', :key='i', xs12='', sm12='', md6='').pa-0
      v-toolbar(app fixed color='transparent', :dark='bar.dark').pl-3
        v-toolbar-side-icon.hidden-md-and-up(@click.stop="drawer = !drawer")
        v-layout(align-center justify-center row fill-height).hidden-md-and-up
          img(:src="logo").logo-trello.mr-5.pr-2
        v-layout(row wrap).hidden-sm-and-down.show-only-desktop
          v-btn(color="pink lighten-1").icon-home
            v-icon.pa-0 fas fa-home
          v-btn(color="pink lighten-1")
            v-icon fab fa-trello
            span.white--text.d-inline-block.pl-2 tableros
          v-text-field(
            solo
            hide-details
            append-icon="search"
            right).pink.lighten-1
          img(:src="logo").logo-trello
          v-spacer
          v-btn(color="pink lighten-1" icon='')
            v-icon add
          v-btn(color="pink lighten-1" icon='')
            v-icon error_outline
          v-btn(color="pink lighten-1" icon='')
            v-icon fas fa-bell
          v-btn(color="pink lighten-1" icon='').white--text JP
    v-navigation-drawer(v-model='drawer' absolute='' temporary='')
      v-list.pa-1
        v-list-tile()
          v-text-field(
            solo
            hide-details
            append-icon="search"
            right).pink.lighten-1
      v-list.pt-0(dense='')
        v-divider
        v-list-tile(v-for='item in items' :key='item.title' @click='').ml-2
          v-list-tile-action
            v-icon(color="pink lighten-1") {{ item.icon }}
          v-list-tile-content
            v-list-tile-title.pink--text {{ item.title }}
  </template>

<script lang="js">
import logo from '../../assets/images/trello-logo-white.svg'

export default {
  data() {
    return {
      logo: logo,
      text: 'Tableros',
      bars: [
        { 'class': 'elevation-0' }
      ],
      drawer: null,
      items: [
        { title: 'Home', icon: 'fas fa-home' },
        { title: 'Tableros', icon: 'fab fa-trello' },
        { title: 'Crear', icon: 'add' },
        { title: 'Información', icon: 'error_outline' },
        { title: 'Actualizaciones', icon: 'fas fa-bell' },
        { title: 'Perfil', icon: 'fas fa-user' }
      ]
    }
  },
  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    }
  },
  methods: {
    querySelections (v) {
      this.loading = true
      //Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style>
  .logo-trello {
    width: 100px;
  }

  .icon-home {
    padding: 0px 0px !important;
    min-width: auto !important;
  }

  .icon {
    color: white !important;
  }

  .show-only-desktop{
    display: contents !important;
  }
</style>

