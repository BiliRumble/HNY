<template>
	<div class="date">
		<table>
			<tbody>
				<tr class="countdown">
					<td>{{ countdown.days }}天</td>
					<td>{{ countdown.hours }}时</td>
					<td>{{ countdown.minutes }}分</td>
					<td>{{ countdown.seconds }}秒</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const target = new Date('2025-01-29 00:00:00').getTime();
const countdown = ref({
	days: 0,
	hours: 0,
	minutes: 0,
	seconds: 0,
});

const updateCountdown = () => {
	const now = new Date().getTime();
	const distance = target - now;

	countdown.value.days = Math.floor(distance / (1000 * 60 * 60 * 24));
	countdown.value.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	countdown.value.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	countdown.value.seconds = Math.floor((distance % (1000 * 60)) / 1000);

	if (distance < 0) {
		clearInterval(interval);
		location.href = 'https://b23.tv/BV1zZ4y1d7jH';
	}
};

let interval = setInterval(updateCountdown, 1000);

onMounted(() => {
	updateCountdown();
});

onUnmounted(() => {
	clearInterval(interval);
});
</script>

<style lang="scss" scoped>
.date {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	.countdown {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.75rem;
		font-weight: bold;
		text-shadow: 0 0 10px #686868;
		td {
			margin: 0 1rem;
		}
	}
}
</style>
