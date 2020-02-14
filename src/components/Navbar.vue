<template>
    <nav>
        <v-app-bar
                app
                color="#FFF"
                dark
                flat
                tile
                style="border-bottom: 1px solid #D8D9D8"
        >
            <v-app-bar-nav-icon style="color: #282828" @click.stop="drawer = !drawer" />
            <v-toolbar-title style="color: #282828" class="text-uppercase headline">
                <span class="font-weight-light">Tik</span>
                <span>View</span>
            </v-toolbar-title>
            <v-spacer/>
            <v-toolbar-title style="color: #282828" class="text-uppercase headline">
                <router-link style="text-decoration: none; color: #282828" to="/coins"><span class="font-weight-bold">0<v-icon color="#282828" style="margin-top: -5px">mdi-star-four-points-outline</v-icon></span>
                </router-link>
            </v-toolbar-title>
            <button @click="signout" style="margin-left: 20px; background-color: #EF5350; padding: 5px 20px; border-radius: 2px; outline: 0" class="font-weight-light text-uppercase"><v-icon>mdi-location-exit</v-icon></button>
        </v-app-bar>

        <!--        :mini-variant.sync="mini"-->

        <v-navigation-drawer
                v-model="drawer"
                color="#FFF"
                app
                absolute
                temporary
        >
            <v-list>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon color="black" @click="drawer = false">mdi-close</v-icon>
                    </v-list-item-action>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="text-uppercase display-1">
                            <span class="font-weight-light">Tik</span>
                            <span>View</span>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list>
                <v-list-item to="/">
                    <v-list-item-content>
                        <v-list-item-title>
                            Home
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item to="/profile">
                    <v-list-item-content>
                        <v-list-item-title>
                            Profil
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item to="/coins">
                    <v-list-item-content>
                        <v-list-item-title>
                            Points
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider dark
                           class="my-4" />

            </v-list>
        </v-navigation-drawer>

    </nav>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "Navbar",
        data: () => ({
            drawer: false,
            dialog: false,
        }),
        methods: {
            signout: function () {
                firebase.auth().signOut().then(() => {
                    this.$router.replace('login')
                })
            }
        }

    }
</script>

<style scoped>

</style>
