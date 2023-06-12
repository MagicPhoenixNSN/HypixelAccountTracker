//const fetch = require('node-fetch');
//import fetch from "node-fetch";
//let API_FILE = require('./API_KEY.json');

//let API_KEY = API_FILE["API_KEY"];

let API_KEY = "abc419b9-d001-4274-8b18-791294b1543d"

console.log(API_KEY)

let LevelStatText = document.getElementById("LevelStat");
let RankStatText = document.getElementById("RankStat");
let playernameStatText = document.getElementById("PlayernameStat");
let UserIdStatText = document.getElementById("UserIdStat");
let DiscordStatText = document.getElementById("DiscordStat");
let GadgetStatText = document.getElementById("GadgetStat");
let ParticleStatText = document.getElementById("ParticleStat");
let PlayerNameULookedUpText = document.getElementById("PlayerNameULookedUp");

let BedwarsCoinStatText = document.getElementById("BedwarsCoinStat") ;
let BedwarsExperenceStatText = document.getElementById("BedwarsExperenceStat")
let BedsLostStatText = document.getElementById("BedsLostStat")
let BedsDestroyedStatText = document.getElementById("BedsDestroyedStat")
let GamesWonStatsText = document.getElementById("GamesWonStats")

const playerName = "im_a_squid_kid";
const playerUUID = "get my user id";

//fetch(`https://api.hypixel.net/player?key=${API_KEY}&name=${playerName}`)
 //   .then(response => response.json())
 //   .then(data => (
  //      console.log(data),
  //      stat = data["player"]["socialMedia"]["links"]["DISCORD"],
  //      stat2 = data["player"]["newPackageRank"],
   //     
        
  //      console.log(stat),
  //      console.log(stat2)
  //  ))
  //  .catch(error => console.log("Network Error", error))


function checkPlayerStats() {
    const textBox = document.getElementById("myInput").value;
    fetch(`https://api.hypixel.net/player?key=abc419b9-d001-4274-8b18-791294b1543d&name=${textBox}`)
        .then(response => response.json())
        .then(data => {
            PlayerNameULookedUpText.innerHTML = `${textBox}`
            playernameStatText.innerHTML = `Playername: ${textBox}`
            console.log(data)
            try {
             stat = data["player"]["socialMedia"]["links"]["DISCORD"],
             console.log(stat)
             DiscordStatText.innerHTML = `Discord: ${stat}`
           } catch(error) {
             console.log("No Discord")
           }
        
           try {
            stat2 = data["player"]["newPackageRank"],
            console.log(stat2)
            RankStatText.innerHTML = `Rank: ${stat2}`
           } catch(error) {
            console.log("This player doesn't have a rank")
           }
            
           try {
            stat3 = data["player"]["rank"],
            console.log(stat2)
           } catch(error) {
            console.log("This player doesn't have a rank")
           }

           try {
            stat4 = data["player"]["uuid"]
            console.log(stat4)
            UserIdStatText.innerHTML = `UserID: ${stat4}`
           } catch(error) {
            console.log("How TF do you not have user id?")
           }
             
           try {
            stat5 = data["player"]["currentGadget"]
            console.log(stat5)
            GadgetStatText.innerHTML = `Current-Gadget: ${stat5}`
           } catch(error){
            console.log("L user no gadget")
           }

           try {
            stat6 = data["player"]["particlePack"]
            console.log(stat6)
            ParticleStatText.innerHTML = `Particle: ${stat6}`
           } catch(error) {
            console.log("L user no Particle")
           }
   
            
            
        })
        .catch(error => console.log("Network Error", error))    
}
function checkPlayerStats2() {
    const textBox = document.getElementById("myInput").value;
    fetch(`https://api.hypixel.net/player?key=abc419b9-d001-4274-8b18-791294b1543d&name=${textBox}`)
        .then(response => response.json())
        .then(data => {

            try {
                stat6 = data["player"]["stats"]["Bedwars"]["coins"]
                console.log(stat6)
                BedwarsCoinStatText.innerHTML = `Coins: ${stat6}`
               } catch(error) {
                console.log("L user no coins")
               }
               try {
                stat7 = data["player"]["stats"]["Bedwars"]["Experience"]
                console.log(stat7)
                BedwarsExperenceStatText.innerHTML = `Experience: ${stat7}`
               } catch(error) {
                console.log("L user no coins")
               }
               try {
                stat8 = data["player"]["stats"]["Bedwars"]["beds_lost_bedwars"]
                console.log(stat8)
                BedsLostStatText.innerHTML = `Beds-Lost: ${stat8}`
               } catch(error) {
                console.log("L user no coins")
               }
               try {
                stat9 = data["player"]["stats"]["Bedwars"]["deaths_bedwars"]
                console.log(stat9)
                BedsDestroyedStatText.innerHTML = `Deaths: ${stat9}`
               } catch(error) {
                console.log("L user no coins")
               }
               try {
                stat10 = data["player"]["stats"]["Bedwars"]["wins_bedwars"]
                console.log(stat10)
                GamesWonStatsText.innerHTML = `Won Games: ${stat10}`
               } catch(error) {
                console.log("L user no coins")
               }
        
        
        })
        .catch(error => console.log("Network Error", error))}