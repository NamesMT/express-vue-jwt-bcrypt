<template>
	<div class="overflow-x-auto mt-6">
		<table class="table-auto border-collapse w-full">
			<thead>
				<tr class="text-base font-medium text-gray-700 text-left">
					<th class="border border-gray-400 px-4 py-2 bg-gray-200" v-for="prop in table_show" :key="prop">
						{{ prop }}
					</th>
				</tr>
			</thead>
			<tbody class="text-sm font-normal text-gray-700">
				<tr
					@input="$emit('data-changed', user)"
					class="hover:bg-gray-100 border-b border-gray-200 py-10"
					v-for="user in users"
					:key="user.id"
					:data-id="user.id"
				>
					<td
						class="border border-gray-400 px-4 py-4"
						v-for="prop in table_show"
						:key="prop"
					>
						<input
							:class="{ 'bg-yellow-100 hover:bg-yellow-200': changed_ids.has(user.id) }"
							type="text"
							v-model="user[prop.toLowerCase()]"
						/>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: "Body",
	props: {
		users: Array,
		table_show: Array,
		changed_ids: Set,
	},
	data() {
		return {
			user: "MT",
		};
	},
	methods: {
		log(msg) {
			console.log(msg);
		},
	},
};
</script>

<style scoped>
table td {
	position: relative;
}

table td input {
	position: absolute;
	display: block;
	top: 0;
	left: 0;
	margin: 0;
	height: 100%;
	width: 100%;
	border: none;
	padding: 10px;
	box-sizing: border-box;
}
</style>