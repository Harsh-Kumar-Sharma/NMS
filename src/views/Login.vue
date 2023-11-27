<template>
    <div class="mt-40 ">
        <h1 class="text-2xl text-center mt-6 font-mono text-white">Login</h1>
        <p class="text-white text-center mt-4">Welcome to Network Monitoring Systems</p>
        <form @submit.prevent="submitForm" class="max-w-md mx-auto mt-6 p-6 bg-stone-800 rounded-md shadow-xl">
            <div class="mb-4">
                <label for="email" class="block text-white text-sm font-bold mb-2">Email</label>
                <input type="text" id="text" v-model="email" required
                    class="w-full px-3 py-2 border rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300" />
            </div>
            <div class="mb-4">
                <label for="password" class="block text-white text-sm font-bold mb-2">Password</label>
                <input type="password" id="password" v-model="password" required
                    class="w-full px-3 py-2 border rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300" />
            </div>
            <div class="mb-4">
                <input type="checkbox" id="remember" v-model="remember" class="mr-2 leading-tight" />
                <label for="remember" class="text-sm text-white">Remember me</label>
            </div>
            <button type="submit"
                class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green transition">Login</button>
        </form>
    </div>
</template>
  
<script>
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
            remember: false,
            loginStatus: false
        };
    },
    methods: {
        submitForm() {
            if (this.username === "admin" || this.password === "1234") {
                this.loginStatus = true;
            }
            else {
                alert(` Username and Password invalid`);
            }
        },
    },
    beforeRouteEnter(to, from, next) {
        // If the user is already authenticated, redirect them to the dashboard
        if (this.loginStatus) {
            next('/dashboard');
        } else {
            next();
        }
    },
};
</script>
  