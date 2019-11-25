<template>
    <div>
        Logged IN 
        <span v-if="loggedIn">Yes </span>
        <span v-else>No </span>

        <button @click="signOut">Sign out</button>
    </div>
</template>

<script>
    import * as firebase from 'firebase/app'
    import 'firebase/auth'

    export default {
        data() {
            return {
                loggedIn: false,
            }
        },
        methods: {
            async signOut() {
                try {
                    const data = await firebase.auth().signOut();
                    console.log(data);
                    
                    this.$router.replace({name: 'login'});
                } catch(error) {
                    console.log(error);
                }
            },

        },
        
    }
</script>

<style scoped>

</style>