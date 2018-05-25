<template>
    <div>
      <ComponentHeader/>
			<ComponentMain/>  
    </div>
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


