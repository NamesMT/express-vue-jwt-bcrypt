import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login'
import Table from '../views/Table'

const routes = [
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/',
		name: 'Users Table',
		component: Table
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router