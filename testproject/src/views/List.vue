<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card
                        max-width="1000"
                        class="mx-auto"
                >
                    <v-toolbar
                            color="indigo"
                            dark
                    >
                        <v-app-bar-nav-icon></v-app-bar-nav-icon>

                        <v-toolbar-title>Inbox</v-toolbar-title>

                        <v-spacer></v-spacer>

                        <v-btn icon>
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>

                        <v-btn icon>
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-list>
                        <v-list-item
                                v-for="item in items"
                                :key="item.title"
                                @click=""
                        >
                            <v-list-item-icon>
                                <v-icon v-if="item.icon" color="pink">mdi-star</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title v-text="item.title"></v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-avatar>
                                <v-img :src="item.avatar"></v-img>
                            </v-list-item-avatar>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                items : null,
            }
        },
        created() {
            this.items = this.$store.state.items;
        }
    }
</script>