<template>
    <v-container>
        <h2>{{name}}</h2>

        <v-btn large @click="nameChange()">NameChange</v-btn>

        <hr>

        <v-layout row wrap>
            <v-flex xs12 sm6>
                <select-user></select-user>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <insert-user></insert-user>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import InsertUser from "./InsertUser";
    import SelectUser from "./SelectUser";

    export default {

        components: {SelectUser, InsertUser},
        comments: {
            InsertUser
            ,SelectUser
        },
        data () {
            return {
                name: 'User',
            }
        },
        methods: {
            nameChange() {
                this.name = "UserPage"
            }
        }
    }
</script>