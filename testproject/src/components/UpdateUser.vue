<template>
    <v-container style="background-color: darkseagreen">
        <h2>{{name}}</h2>

        <v-text-field label="userID" v-model="updateUser.userID"></v-text-field>

        <v-text-field type="number" prefix="$" label="userRealCash" v-model.number="updateUser.userRealCash" ></v-text-field>

        <v-text-field type="number" prefix="$" label="userBonusCash" v-model.number="updateUser.userBonusCash" ></v-text-field>

        <v-btn large @click="Save()">Save</v-btn>
    </v-container>
</template>

<script>
    import { eventBus } from "@/utils/eventBus";

    export default {
        props : {
            parentUser : {
                type : Object
            }
        },
        data () {
            return {
                name : "UpdateUser",
                updateUser : {
                    userID : "",
                    userRealCash : 0,
                    userBonusCash : 0
                },
            }
        },
        created() {
            this.updateUser.userID = this.parentUser.userID;
            this.updateUser.userRealCash = this.parentUser.userRealCash;
            this.updateUser.userBonusCash = this.parentUser.userBonusCash;
        },
        methods: {
            Save() {
                this.$emit('UpdateUser', this.updateUser);

                //eventBus.$emit("updateEmit", new Date());
                eventBus.updateEmit(new Date());
            }
        }
    }
</script>