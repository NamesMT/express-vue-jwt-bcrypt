<template>
	<div class="relative">
		<button @click="dotOpen = !dotOpen">
			<svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g opacity="0.4">
					<circle cx="2.19796" cy="1.80139" r="1.38611" fill="#222222" />
					<circle cx="11.9013" cy="1.80115" r="1.38611" fill="#222222" />
					<circle cx="7.04991" cy="1.80115" r="1.38611" fill="#222222" />
				</g>
			</svg>
		</button>
		<div v-if="dotOpen" @click="dotOpen = false" class="fixed inset-0 h-full w-full z-10"></div>
		<div v-if="dotOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
			<a
				@click="$emit('logout-clicked')"
				href="#"
				class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
			>
				Log out
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "DotDown",
	data() {
		return {
			dotOpen: false,
		};
	},
};
</script>