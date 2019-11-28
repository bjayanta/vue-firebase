<template>
    <div>
        Login
        <form @submit.prevent="pressed">
            <div class="email">
                <input type="email" v-model="email" placeholder="Email address">
            </div>

            <div class="password">
                <input type="password" v-model="password" placeholder="Password">
            </div>

            <button type="submit">Login</button>
        </form>

        <div class="error" v-if="error">{{ error.message }}</div>
        <span>
            Need an account? Click here to 
            <router-link to="/register">Retister</router-link>
        </span>
    </div>
</template>

<script>
    import * as firebase from 'firebase/app'
    import 'firebase/auth'

    export default {
        data() {
            return {
                email: 'bjayanta.neo@gmail.com',
                password: '123456',
                error: ''
            }
        },
        methods: {
            async pressed() {
                try {
                    const user = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
                    console.log(user);

                    this.$router.replace({'name': 'secret'});
                } catch (error) {
                    console.log(error);
                }
                
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>