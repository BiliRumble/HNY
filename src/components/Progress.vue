<template>
	<div class="progress">
		<h1 class="m-0 wide">
			温馨提示：<a href="https://b23.tv/BV1zZ4y1d7jH">那个男人</a>已经解冻了{{ progress }}%了
		</h1>
		<h1 class="m-0 phone">
			<a href="https://b23.tv/BV1zZ4y1d7jH">那个男人</a>已经解冻{{ progress }}%了
		</h1>
	</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const lastSpringFestival = new Date('2025-01-29').getTime();
const nextSpringFestival = new Date('2026-02-17').getTime();

const progress = ref(0);

// 每5分钟刷新一次
const updataProgress = () => {
	const now = new Date().getTime();
	const passedDays = Math.floor((now - lastSpringFestival) / (1000 * 60 * 60 * 24));
	const totalDays = Math.floor((nextSpringFestival - lastSpringFestival) / (1000 * 60 * 60 * 24));
	progress.value = Math.min(Math.max(Math.floor((passedDays / totalDays) * 100), 0), 100);
};

let interval = setInterval(updataProgress, 1000 * 60 * 5);

onMounted(() => {
	updataProgress();
});

onUnmounted(() => {
	clearInterval(interval);
});
</script>

<style lang="scss" scoped>
.progress {
	font-weight: bold;
	text-shadow: 0 0 10px #686868;
	.phone {
		display: none;
	}
	a {
		color: #fff;
		text-decoration: none;
	}
}

@media screen and (width <= 700px) {
	.progress > .wide {
		display: none !important;
	}
	.progress > .phone {
		display: block !important;
		font-size: 1.5rem;
		text-align: center;
	}
}
</style>
