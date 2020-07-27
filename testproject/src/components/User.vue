<template>
    <v-container style="background-color: lightskyblue">
        <v-layout row wrap>
            <h2>{{name}}</h2>
            <v-btn large @click="nameChange()">NameChange</v-btn>
        </v-layout>

        <br /><hr><br />

        <v-layout row wrap>
            <v-flex xs12 sm6>
                <select-user
                    :userID="user.userID"
                    :userRealCash="user.userRealCash"
                    :userBonusCash="user.userBonusCash"
                ></select-user>
            </v-flex>

            <v-flex xs12 sm6>
                <update-user
                    :parentUser="user"
                    @UpdateUser="UpdateUser"
                ></update-user>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import UpdateUser from "./UpdateUser";
    import SelectUser from "./SelectUser";

    export default {
        components: {SelectUser, UpdateUser},
        data () {
            return {
                name: 'User',
                user: {
                    userID: "bigone",
                    userRealCash: 1000,
                    userBonusCash: 100,
                }
            }
        },
        methods: {
            nameChange() {
                this.name = "UserPage";
            },
            UpdateUser(updateUser) {
                this.user.userID = updateUser.userID;
                this.user.userRealCash = updateUser.userRealCash;
                this.user.userBonusCash = updateUser.userBonusCash;
            },
        }
    }
</script>