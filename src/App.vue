<template>
	<div>
		<component :is="component" />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class App extends Vue {
		component: any = null;

		importComponent(): void {
			import(
				/* webpackChunkName: "examples" */
				/* webpackMode: "lazy-once" */
				'./Test.vue'
			).then(comp => this.setContent(comp.default));
		}

		async setContent(component: any) {
			if (!component) {
				return;
			}

			this.component = component;

			console.log(component.options.data());
		}

		mounted() {
			this.importComponent();
		}
	}
</script>
