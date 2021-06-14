<template>
	<div class="flex justify-between w-full pt-6">
		<p class="ml-3 font-bold">{{ title }}</p>
		<DotDown @logout-clicked="$emit('logout-clicked')" />
	</div>
	<div class="w-full flex justify-end px-2 mt-2">
		<SearchBar @search="$emit('search', $event)" />
	</div>
	<button @click="$emit('confirm-patch')" v-if="changed_ids.size" class="bg-indigo-200 px-5 fixed rounded-t-lg">
		Changes detected for user(s) with id: {{ [...changed_ids] }}, click to update!
	</button>
</template>

<script>
import SearchBar from "./SearchBar";
import DotDown from "./DotDown";

export default {
	name: "Header",
	emits: ["search", "confirm-patch", "logout-clicked"],
	data() {
		return {
			dotOpen: false,
		};
	},
	props: {
		title: String,
		changed_ids: Set,
	},
	components: {
		SearchBar,
		DotDown,
	},
};
</script>