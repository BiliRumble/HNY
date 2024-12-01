<template>
	<div class="wrap">
		<div class="body">
			<div class="title">
				<Progress class="m-0" />
			</div>
			<Date class="m-0" />
		</div>
	</div>
</template>

<script setup lang="ts">
import Date from '@/components/Date.vue';
import Progress from '@/components/Progress.vue';
</script>

<style lang="scss" scoped>
.wrap {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	.body {
		padding: 50px;
		background: rgb(255 255 255 / 50%);
		backdrop-filter: blur(10px);
		border-radius: 10px;
		box-shadow: 0 0 10px rgb(0 0 0 / 10%);
	}
}
</style>
