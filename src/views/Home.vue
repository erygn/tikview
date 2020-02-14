<template>
  <div class="home">
    <v-container fluid style="align-items: center" class="my-5">
      <v-row align="center" style="justify-content: center">
        <div class="col-lg-6 col-sm-12 col-md-8">
          <v-row align="center" style="justify-content: center">
            <div class="col-sm-6 text-center">
              <h1 class="text--black display-2 font-weight-bold">Découvrir ! {{ accountValues.Pseudo}}</h1><br><br>
              <h3 style="margin-top: -20px">Cliquez sur le bouton ci-dessous pour regarder un TikTok aléatoirement et gragner des points</h3><br>
              <p>{{ info }}</p>
              <button @click="tikAleo" class="text-uppercase font-weight-light text--white button">TikTok Aléatoire <v-icon color="#FFF" style="margin-top: -3px; margin-left: 5px">mdi-eye</v-icon></button>
            </div>
          </v-row>
        </div>
      </v-row>
    </v-container>

    <v-container fluid style="align-items: center" class="my-5">
      <v-row align="center" style="justify-content: center">
        <div class="col-lg-6 col-sm-12 col-md-8">
          <v-row align="center" style="justify-content: center">
            <div class="col-sm-6 text-center">
              <h3 style="margin-top: -20px">Ajouter des TikTok</h3><br>
              <button @click="dialog = !dialog" class="text-uppercase font-weight-light text--white button">Ajouter <v-icon color="#FFF" style="margin-top: -3px; margin-left: 5px">mdi-plus</v-icon></button>
            </div>
          </v-row>
        </div>
      </v-row>
    </v-container>

    <v-container fluid style="justify-content: center">
      <v-row style="margin-top: 50px" justify="center">
        <v-col cols="12" class="text-center">
          <h1 class="text--black display-2 font-weight-bold">Les derniers TikTok</h1>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row style="margin-top: 50px">
        <v-img class="col-lg-4 col-sm-4 hover" style="background-size: cover" src="https://genesis-mc.fr/images/tik1.jpg"/>

        <v-img class="col-lg-4 col-sm-4 hover" style="background-size: cover" src="https://genesis-mc.fr/images/tik2.jpg"/>

        <v-img class="col-lg-4 col-sm-4 hover" style="background-size: cover" src="https://genesis-mc.fr/images/tik3.jpg"/>
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
          Ajouter un TikTok
          <v-spacer/>
          <v-btn @click="dialog = !dialog" text depressed><v-icon color="#FFF">mdi-close</v-icon></v-btn>
        </v-card-title>
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
                <v-list-item-title>Veuillez remplir les champs</v-list-item-title>
                <v-list-item-subtitle><v-text-field color="#003041" type="text" label="Lien vers le TikTok*" prepend-icon="mdi-link" v-model="link"/></v-list-item-subtitle>
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
                  @click="addTikTok"
                  :loading="isLoad"
          >Ajouter <v-icon>mdi-plus</v-icon></v-btn>
          <v-btn
                  style="margin-right: 5px"
                  text
                  color="#003041"
                  @click="dialog = false"
          >Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbarAdd" :timeout="3000" color="green">
      TikTok ajouté
      <v-btn
              color="white"
              text
              icon
              @click="snackbarAdd = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'
// import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      dialog: false,
      isLoad: false,
      errorMessage: false,
      link: null,
      snackbarAdd: false,

      accountValues: [],

      info: [],
    }
  },
  methods: {
    tikAleo: function () {
      // window.open('https://genesis-mc.fr',"nom_popup","menubar=no, status=no, scrollbars=no, menubar=no, width=1200, height=600")
      // window.open('https://genesis-mc.fr')
      const Http = new XMLHttpRequest();
      const url='https://vm.tiktok.com/qYHFMy/';
      Http.open("HEAD", url);
      Http.send();
      Http.onreadystatechange = name => {
        if (Http.status == 301) {
          alert('Code 200')
        }
        this.info = Http.getResponseHeader(name);
      }

      // https://vm.tiktok.com/qYHFMy/
      // https://api.coindesk.com/v1/bpi/currentprice.json
      // https://api.redirect-checker.net/?url=https://vm.tiktok.com/qYHFMy/

      // axios.head('https://vm.tiktok.com/qYHFMy/')
      // .then((response) => {
      //   alert(response)
      //   this.info = response
      // })
    },
    addTikTok: function () {
      if (this.link != null) {
        this.isLoad = true
        firebase.database().ref('TikTok/' + this.randomID()).set({
          Link: this.link,
          View: 0,
          Boost: 0,
          CreatorID: firebase.auth().currentUser.uid,
          CreatorName: this.accountValues.Pseudo,
          Signal: 0
        }).then(() => {
          this.isLoad = false
          this.snackbarAdd = true
        },
                (err) => {
          alert('Oops ' + err.message)
                })
      } else {
        this.errorMessage = 'Veuillez remplir les champs'
      }
    },
    randomID: function makeid() {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < 12; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
  },
  created() {
    firebase.database().ref('users/' + firebase.auth().currentUser.uid).on('value',  (snapshot) => {
      // alert(JSON.stringify(snapshot.val()))
      this.accountValues = snapshot.val();
    })
  }
}
</script>

<style scoped>
  @import "./../assets/styles.css";
  a {
    text-decoration: none;
  }

  .button {
    background-color: #EF5350;
    padding: 8px 23px;
    border-radius: 2px;
    outline: 0;
    margin-top: -60px;
    color: #FFF;
  }
  .button:hover {
    background-color: #404040;
  }
  .button:focus {
    background-color: #141414;
    outline: 0;
  }
</style>
