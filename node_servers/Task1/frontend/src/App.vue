<template>
	<div>
		<div class="bg-white pb-4 px-4 rounded-md w-full">
			<Header
				@logout-clicked="doLogout"
				@confirm-patch="applyChanged"
				@search="searchUpdate"
				:changed_ids="changed_ids"
				:title="$route.name"
			/>
			<router-view
				@login-submit="doLogin"
				@data-changed="markChanged"
				:changed_ids="changed_ids"
				:users="users"
				:table_show="['Username', 'Email', 'Birthdate']"
			/>
			<!-- <Pagination :pages="pages" /> TBA, not required + time's running out -->
		</div>
		<ErrorPopup v-if="error_popup" @click="error_popup = ''" :error_popup="error_popup" />
	</div>
</template>
<script>
import axiosbase from "axios";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import ErrorPopup from "./components/ErrorPopup";
import { isEmptyArray } from "../../custom";

const axios = axiosbase.create({
	withCredentials: true,
});
export default {
	name: "App",
	components: {
		Header,
		Pagination,
		ErrorPopup,
	},
	data() {
		return {
			pages: 6,
			users: [],
			changed_ids: new Set(),
			changed_users: {},
			searchvalue: "",
			error_popup: "",
		};
	},
	methods: {
		pushError(message) {
			console.error(message);
			this.error_popup = message;
		},
		async getUsers(query) {
			try {
				return (await axios.get("/api?q=" + (query ?? ""))).data;
			} catch (err) {
				this.pushError("Failed to retrieve Users: " + err.response.data.message);
				if (err.response.data.message === "unauthenticated") this.$router.push("/login");
			}
		},
		async patchUser(user) {
			try {
				return (await axios.patch("/api", { user })).data;
			} catch (err) {
				this.pushError("Failed to send patch request: " + err.response.data.message);
			}
		},
		async big_patchUser(users) {
			try {
				return (await axios.patch("/api/big", { users })).data;
			} catch (err) {
				this.pushError(
					`Failed to send (big) patch request: ${err.response.data.message}, Errors: ${err.response.data.errors}`
				);
				// Theres id and uid cause I make it so that
				// changed_users could  be stored in a different way, ie 'lala': {user} would still works
				// '{id}': {user} is not mandatory
				if (!isEmptyArray([err.response.data.updated])) {
					err.response.data.updated.forEach((id) => {
						this.changed_ids.delete(id);
					});
					err.response.data.updated_uid.forEach((uid) => {
						this.changed_users.delete(uid);
					});
				}
			}
		},
		async reloadUsers(query) {
			this.users = await this.getUsers(query);
			this.changed_ids.clear();
		},
		searchUpdate(value) {
			this.searchvalue = value;
			this.reloadUsers(value);
		},
		markChanged(user) {
			this.changed_ids.add(user.id);
			this.changed_users[user.id] = user;
		},
		async applyChanged() {
			this.error_popup = "";
			// this.changed_ids.forEach((id) => this.patchUser(this.changed_users[id])); // small patch loop, deprecated (missing on err updates)

			// big patch, like the task required, (payload of multiple records)
			if (await this.big_patchUser(this.changed_users)) this.reloadUsers(this.searchvalue);
		},
		async doLogin(data) {
			try {
				if ((await axios.post("/auth", { user: data })).data) {
					this.$router.push("/");
					this.reloadUsers(this.searchvalue);
					this.error_popup = "";
				}
			} catch (err) {
				this.pushError("Failed to send post request (Login): " + err.response.data.message);
			}
		},
		doLogout() {
			//use Promise style is more readable?, idk, last func so lets just make it different lmao
			axios
				.post("/auth/logout")
				.then(() => {
					this.$router.push("/login");
				})
				.catch((err) => {
					this.pushError("Failed to send post request (Logout)");
				});
		},
	},
	created() {
		setTimeout(() => {
			// Vue path on created/mounted/etcs is always '/' regardless of url, setTimeout makes it called after Vue setup the route path
			if (this.$route.path === "/") this.reloadUsers();
		}, 0);
	},
};
</script>