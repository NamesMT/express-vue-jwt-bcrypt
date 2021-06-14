<template>
		<table class="table-auto border-collapse w-full">
			<thead>
				<tr class="rounded-lg text-sm font-medium text-gray-700 text-left" style="font-size: 0.9674rem">
					<th class="px-4 py-2 bg-gray-200" style="background-color: #f8f8f8">Title</th>
					<th class="px-4 py-2" style="background-color: #f8f8f8">Author</th>
					<th class="px-4 py-2" style="background-color: #f8f8f8">Views</th>
				</tr>
			</thead>
			<tbody class="text-sm font-normal text-gray-700">
				<tr class="hover:bg-gray-100 border-b border-gray-200 py-10">
					<td class="px-4 py-4">Intro to CSS</td>
					<td class="px-4 py-4">Adam</td>
					<td class="px-4 py-4">858</td>
				</tr>
				<tr class="hover:bg-gray-100 border-b border-gray-200 py-4">
					<td class="px-4 py-4 flex items-center">
						A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design
					</td>
					<td class="px-4 py-4">Adam</td>
					<td class="px-4 py-4">112</td>
				</tr>
				<tr class="hover:bg-gray-100 border-gray-200">
					<td class="px-4 py-4">Intro to JavaScript</td>
					<td class="px-4 py-4">Chris</td>
					<td class="px-4 py-4">1,280</td>
				</tr>
			</tbody>
		</table>
</template>

<script>
export default {
	name: "Body",
};
</script>