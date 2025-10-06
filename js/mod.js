let modInfo = {
	name: "咕咕树",
	id: "A_Fucking_Stupid_Tree",
	author: "屑Q某和屑2某",
	pointsName: "小时",
	discordName: "",
	discordLink: "",
	initialStartPoints: new ExpantaNum (0), // Used for hard resets and new players
	
	offlineLimit: 10,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.01",
	name: "",
}

let changelog = `
	
		
`
let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new ExpantaNum(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints()) return new ExpantaNum(0)
	let gain = new ExpantaNum(0.5)
if(hasUpgrade("u",11))gain=gain.mul(upgradeEffect("u",11))
if(hasUpgrade("u",12))gain=gain.mul(upgradeEffect("u",12))
if(hasUpgrade("u",13))gain=gain.mul(upgradeEffect("u",13))
if(hasUpgrade("u",14))gain=gain.mul(upgradeEffect("u",14))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function(){return `下一次更新在5小时后,你的咕咕指数为${layers.u.guguexp().mul(10000).floor().div(10000)},影响更新点获取`}
]

// Determines when the game "ends"
function isEndgame() {
	return false
}



// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}