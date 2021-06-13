<template>
	<form @submit.prevent="$emit('login-submit', data)">
		<div class="mb-4">
			<label class="block font-light mb-2" for="email">Email</label>
			<input
				class="w-full border-gray-500 border p-4 font-light focus:outline-none focus:ring-1"
				type="text"
				name="email"
				placeholder="Email"
				v-model="data.email"
			/>
		</div>
		<div class="mb-4">
			<label class="block font-light mb-2" for="password">Password</label>
			<input
				class="w-full border-gray-500 border p-4 font-light focus:outline-none focus:ring-1"
				type="password"
				name="password"
				placeholder="Password"
				v-model="data.password"
			/>
		</div>

		<div class="">
			<button class="bg-indigo-600 hover:bg-blue-700 text-white font-light py-2 px-6 rounded" type="submit">
				LOGIN
			</button>
		</div>
	</form>
</template>

<script>
export default {
	name: "Login",
	data() {
		return {
			data: {
				email: "",
				password: "",
			},
		};
	},
};
</script>