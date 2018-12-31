<template lang="pug">
  input(solo-inverted type="text" class="input" :value="value" v-on="listeners")
</template>
<script>
export default {
	props: {
    value: {
      type: String,
      default: ''
		}
  },
  last: '',
	computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>
<style lang="css" scoped>
input {
  width: 90%;
  padding: 0.5rem;
  margin: 0.5rem;
}
</style>
