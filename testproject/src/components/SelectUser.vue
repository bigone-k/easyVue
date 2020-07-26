<template>
    <v-container style="background-color: cornsilk">
        <h2>{{name}}</h2>

        <v-card
                class="mx-auto"
                max-width="400"
                tile
        >
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>userID</v-list-item-title>
                    <v-list-item-subtitle>{{userID}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>userRealCash</v-list-item-title>
                    <v-list-item-subtitle>${{userRealCash}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>userBonusCash</v-list-item-title>
                    <v-list-item-subtitle>${{userBonusCash}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        props: {
            userID: {
                type: String
            },
            userRealCash : {
                type: Number
            },
            userBonusCash : {
                type: Number
            },
        },
        data () {
            return {
                name : "SelectUser",
            }
        },
    }
</script>