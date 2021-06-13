<template>
	<div class="absolute top-0 inset-x-0 text-center h-auto">
		<p class="py-1 px-4 bg-red-300 rounded-b-md shadow-xl">
			{{ error_popup }}
		</p>
	</div>
</template>

<script>
export default {
	name: "ErrorPopup",
	props: {
		error_popup: String,
	},
};
</script>