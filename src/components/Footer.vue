<template>
    <v-footer
            color="#303030"
            padless
    >
        <v-row
                justify="center"
                no-gutters
        >
            <v-col cols="8" class="white--text">
                <v-row style="margin-top: 40px">
                    <v-col class="text-right" cols="12" sm="4">
                        <h2 class="font-weight-bold text-uppercase">TikView</h2>
                        <p class="font-weight-light caption">Site de partage de TikTok non affilié à la société TikTok</p>
                    </v-col>
                    <v-col cols="12" sm="4" class="font-weight-bold caption text-center">
                        <router-link style="text-decoration: none; color: #FFF" to="/">Accueil</router-link>
                    </v-col>
                    <v-col class="font-weight-light caption" cols="12" sm="4">
                        <a target="_blank" style="text-decoration: none" href="mailto:contact@genesis-mc.fr" class="font-weight-bold">Nous contacter</a>
                        <p>Idée et design par <a target="_blank" style="text-decoration: none" href="https://genesis-mc.fr">Genesis</a></p>
                    </v-col>
                </v-row>
            </v-col>
            <v-col
                    class="py-4 text-center white--text font-weight-light"
                    style="background-color: #282828"
                    cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>TikView</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>
