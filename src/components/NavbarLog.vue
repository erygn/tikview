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
            <button @click="dialog = !dialog" style="background-color: #EF5350; padding: 5px 20px; border-radius: 2px; outline: 0" class="font-weight-light text-uppercase">Connexion</button>
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

                <v-divider dark
                           class="my-4" />

            </v-list>
        </v-navigation-drawer>

        <v-dialog
                v-model="dialog"
                width="600px"
                content-class="dialogBorder"
        >
            <v-card>
                <v-card-title class="font-weight-light" style="background-color: #282828; color: #FFF">
                    Accès TikView
                    <v-spacer/>
                    <v-btn @click="dialog = !dialog" text depressed><v-icon color="#FFF">mdi-close</v-icon></v-btn>
                </v-card-title>
                <v-tabs :grow="true"
                        background-color="transparent"
                        color="#003041"
                >
                    <v-tabs-slider></v-tabs-slider>

                    <v-tab>
                        Connexion
                    </v-tab>
                    <v-tab>
                        Rejoindre
                    </v-tab>

                    <v-tab-item>
                        <v-container>
                            <v-row class="mx-2">
                                <v-col
                                        class="align-center justify-space-between"
                                        cols="12"
                                >
                                    <v-row
                                            align="center"
                                            class="mr-0"
                                    >
                                        <v-list-item-subtitle><v-text-field color="#003041" type="text" label="Email*" prepend-icon="mdi-mail" v-model="email"/></v-list-item-subtitle>
                                        <v-list-item-subtitle><v-text-field color="#003041" type="password" label="Mot de passe*" prepend-icon="mdi-lock" v-model="password"/></v-list-item-subtitle>
                                        <v-list-item-subtitle style="color: #E53935" v-if="errorMessageL">{{ errorMessageL }}</v-list-item-subtitle>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-container>
                        <v-card-actions>
                            <v-spacer />
                            <v-btn
                                    width="150"
                                    height="35"
                                    style="color: #FFF; background-color: #EF5350; border-radius: 2px; outline: 0" class="font-weight-light text-uppercase"
                                    @click="login"
                                    :loading="isLoad"
                            >Connexion</v-btn>
                            <v-btn
                                    style="margin-right: 5px"
                                    text
                                    color="#003041"
                                    @click="dialog = false"
                            >Fermer</v-btn>
                        </v-card-actions>
                    </v-tab-item>
                    <v-tab-item>
                        <v-container>
                            <v-row class="mx-2">
                                <v-col
                                        class="align-center justify-space-between"
                                        cols="12"
                                >
                                    <v-row
                                            align="center"
                                            class="mr-0"
                                    >
                                        <v-list-item-subtitle><v-text-field color="#003041" type="text" label="Pseudo*" prepend-icon="mdi-account" v-model="pseudo"/></v-list-item-subtitle>
                                        <v-list-item-subtitle><v-text-field color="#003041" type="text" label="Email*" prepend-icon="mdi-mail" v-model="email"/></v-list-item-subtitle>
                                        <v-list-item-subtitle><v-text-field color="#003041" type="password" label="Mot de passe*" prepend-icon="mdi-lock" v-model="password"/></v-list-item-subtitle>
                                        <v-list-item-subtitle><v-text-field color="#003041" type="password" label="Confirmation mot de passe*" prepend-icon="mdi-lock" v-model="passwordConf"/></v-list-item-subtitle>
                                        <v-list-item-subtitle style="color: #E53935" v-if="errorMessage">{{ errorMessage }}</v-list-item-subtitle>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-container>
                        <v-card-actions>
                            <v-spacer />
                            <v-btn
                                    width="150"
                                    height="35"
                                    style="color: #FFF; background-color: #1976d2; border-radius: 2px; outline: 0" class="font-weight-light text-uppercase"
                                    @click="register"
                                    :loading="isLoad"
                            >Rejoindre</v-btn>
                            <v-btn
                                    style="margin-right: 5px"
                                    text
                                    color="#003041"
                                    @click="dialog = false"
                            >Fermer</v-btn>
                        </v-card-actions>
                    </v-tab-item>
                </v-tabs>
            </v-card>
        </v-dialog>

    </nav>
</template>

<script>
    import firebase from "firebase";

    export default {
        name: "Navbar",
        data: () => ({
            drawer: false,
            dialog: false,

            isLoad: false,
            pseudo: null,
            email: null,
            password: null,
            passwordConf: null,

            errorMessage: null,
            errorMessageL: null
        }),
        methods: {
            login: function() {
                if (this.email != null && this.password != null) {
                    this.isLoad = true
                    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                        () => {
                            this.isLoad = false
                            this.$router.replace('/')
                        },
                        (err) => {
                            this.isLoad = false
                            this.errorMessageL = 'Oops. ' + err.message;
                        }
                    );
                } else {
                    this.isLoad = false
                    this.errorMessageL = 'Veuillez remplir tous les champs';
                }
            },
            register: function () {
                if (this.pseudo != null && this.email != null && this.password != null && this.passwordConf != null) {
                    if (this.password == this.passwordConf) {
                        this.isLoad = true
                        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                            (userCredential) => {
                                firebase.database().ref('users' + '/' + userCredential.user.uid).set({
                                    Pseudo: this.pseudo,
                                    Mail: this.email,
                                    NombreTik: 0,
                                    NombreVue: 0,
                                    Points: 0,
                                    Description: 'Nouveau',
                                    Grade: 1,
                                }).then(() => {
                                        this.isLoad = false
                                        this.$router.replace('/')
                                    },
                                    (err2) => {
                                        this.isLoad = false
                                        this.errorMessage = 'Oops. ' + err2.message;
                                    })
                            },
                            (err) => {
                                this.isLoad = false
                                this.errorMessage = err.message;
                            }
                        );
                    } else {
                        this.isLoad = false
                        this.errorMessage = 'Les mots de passe ne correspondent pas';
                    }
                } else {
                    this.isLoad = false
                    this.errorMessage = 'Veuillez completer tous les champs';
                }
            }
        }
    }
</script>

<style scoped>

</style>
