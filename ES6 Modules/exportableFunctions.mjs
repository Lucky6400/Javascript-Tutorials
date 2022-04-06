export default function lucky() {
    console.log("Let's Party");
};

export function games() {
    console.log("March of Heroes");
};

export class Android{
    constructor(games,apps){
        this.games = games;
        this.apps = apps;
    }
    favGame(){
        return this.games;
    }
    favApp(){
        return this.apps;
    }
}
 export let myDevice = new Android("WCC2","Cxxdroid");
 console.log(`My favourite game is ${myDevice.favGame()} and favourite app is ${myDevice.favApp()}`);