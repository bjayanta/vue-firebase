<template>
    <div>
        <div class="error">{{ error.message }}</div>
        <form @submit.prevent="pressed">
            Register

            <div class="email">
                <input type="email" v-model="email" placeholder="Email address">
            </div>

            <div class="password">
                <input type="password" v-model="password" placeholder="Password">
            </div>

            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
    import * as firebase from 'firebase/app'
    import 'firebase/auth'

    export default {
        data() {
            return {
                email: '',
                password: '',
                error: ''
            }
        },
        methods: {
            async pressed() {
                try {
                    const user = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
                    console.log(user);

                    this.$router.replace({name: "secret"});
                } catch(error) {
                    console.log(error);
                }
                
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>