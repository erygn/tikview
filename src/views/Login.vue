<template>
    <div>
        <v-container fluid style="align-items: center" class="my-5">
<!--            <video autoplay muted loop id="bgvid">-->
<!--                <source src="https://mybrowin.fr/img/Shut.mp4" type="video/mp4">-->
<!--            </video>-->
            <v-row align="center" style="justify-content: center;">
                <div class="col-lg-6 col-sm-12 col-md-8">
                    <v-row align="center" style="justify-content: center">
                        <div class="col-sm-6">
                            <h1 class="text--black text-uppercase display-3 font-weight-bold">TikView</h1><br>
                            <p class="caption">Vous souhaitez:</p>
                            <h3 style="margin-top: -20px">Faire grandir votre communauté</h3>
                            <p class="font-weight-light">Partager vos TikTok et faite grandir votre communauté<br>Partagez sans limite vos exploits, mais découvrez également de nouveaux créateurs automatiquement</p>
                            <br>
                            <p class="caption">Vous souhaitez:</p>
                            <h3 style="margin-top: -20px">Être récompensé en regardant des TikTok</h3>
                            <p class="font-weight-light">Regardez les TikTok de la communauté et recevez des récompenses</p>

                            <p class="font-weight-light">Envie de commencer ?</p>
                            <button @click="dialog = !dialog" class="text-uppercase font-weight-light text--white button">C'est parti !</button>
                        </div>
                        <div class="col-sm-6">
                            <v-img aspect-ratio="0.8" contain src="https://genesis-mc.fr/images/tikt.png" />
                        </div>
                    </v-row>
                </div>
            </v-row>
        </v-container>

        <v-container fluid>
            <v-row style="margin-top: 50px">
                <v-img class="col-lg-4 col-sm-4 hover" style="background-size: cover" src="https://genesis-mc.fr/images/tik1.jpg">
                    <a class="font-weight-light copyRight" href="https://www.pinterest.fr/pin/593912269596001125/" target="_blank">Credits</a>
                </v-img>

                <v-img class="col-lg-4 col-sm-4 hover" style="background-size: cover" src="https://genesis-mc.fr/images/tik2.jpg">
                    <a class="font-weight-light copyRight" href="https://twitter.com/colliscool/status/683149575352238081" target="_blank">Credits</a>
                </v-img>

                <v-img class="col-lg-4 col-sm-4 hover" style="background-size: cover" src="https://genesis-mc.fr/images/tik3.jpg">
                    <a class="font-weight-light copyRight" href="https://4hatsandfrugal.com/2013/08/who-i-really-am.html" target="_blank">Credits</a>
                </v-img>
            </v-row>
        </v-container>

        <v-container fluid style="justify-content: center">
            <v-row style="margin-top: 50px" justify="center">
                <v-col cols="12" class="text-center">
                    <h1 class="text--black display-2 font-weight-bold">Rejoignez TikView</h1>
                </v-col>
            </v-row>
        </v-container>

        <v-container fluid style="align-items: center" class="my-5">
            <v-row align="center" style="justify-content: center">
                <div class="col-lg-6 col-sm-12 col-md-8">
                    <v-card
                            style="border-radius: 8px; padding: 18px; box-shadow: 0px 0px 25px -3px rgba(0,0,0,0.13)"
                    >
                        <v-card-title class="font-weight-light headline" style="justify-content: center">Partagez vos TikTok</v-card-title>
                        <v-card-text class="text--primary">
                            <div>Envie d'un coup de pouce ? Utilisez TikView pour faire décrouvrir aux utilisateurs vos TikTok.</div>

                            <div>Vous aimez bien découvrir de nouveau TikTok ? Alors rekoins la communauté et découvre de nouveaux TikTok</div>
                        </v-card-text>
                    </v-card>
                </div>
            </v-row>
        </v-container>

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


        <v-divider dark class="my-12"/>

    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "Login",
        data() {
            return {
                isLoad: false,
                dialog: false,
                show3: false,

                pseudo: null,
                email: null,
                password: null,
                passwordConf: null,

                errorMessage: null,
                errorMessageL: null
            }
        },
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
    @import "./../assets/styles.css";
    a {
        text-decoration: none;
    }
    .button {
        padding: 8px 25px;
        border-radius: 2px;
        outline: 0;
        margin-top: -60px;
        background-color: #282828;
        color: #FFF;
    }
    .button:hover {
        background-color: #404040;
    }
    .button:focus {
        background-color: #141414;
        outline: 0;
    }

    .hover {
        transition: opacity .4s ease-in-out;
    }
    .hover:not(.on-hover) {
        opacity: 1;
    }
    .hover:hover {
        opacity: 0.8;
    }

    .copyRight {
        opacity: 0;
    }
    .hover:hover .copyRight {
        opacity: 1;
    }
</style>
