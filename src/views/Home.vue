<template>
	<div>
		<Scheduler/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Scheduler from '@/components/Scheduler.vue'; // @ is an alias to /src

export default Vue.extend({
	name: 'Home',
	components: {
		Scheduler
	}
});
</script>
