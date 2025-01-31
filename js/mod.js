let modInfo = {
	name: "定义 熵 tree",
	id: "the entropy tree",
	author: "xiaosunmath",
	pointsName: "熵",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.4",
	name: "……",
}

let changelog = `
	<h1>Changelog:</h1><br>
	<h3>v0.4</h3><br>
		-添加2个升级<br>
		-添加一个可购买<br>
	<h3>v0.4-</h3><br>
		-添加8个升级<br>
		-添加1个新层级<br>
	<h3>v0.3.5.1</h3><br>
		-添加5个升级<br>
		-添加2个可购买<br>
	<h3>v0.3.5+</h3><br>
		-添加了成就+剧情<br>
	<h3>v0.3.5</h3><br>
		-添加7个升级<br>
	<h3>v0.3.4.1</h3><br>
		-添加6个升级<br>
	<h3>v0.3.4</h3><br>
		-添加3个升级<br>
		-连了一下线<br>
		-笑点解析：作者做这个花了1h40min<br>
	<h3>v0.3.3.2</h3><br>
		-添加5个升级<br>
	<h3>v0.3.3.1</h3><br>
		-添加6个升级<br>
	<h3>v0.3.3</h3><br>
		-添加9个升级<br>
		-添加2个新层<br>
		-笑点解析：这是作者花了1.5小时肝出来的<br>
	<h3>v0.3.2</h3><br>
		-添加2个升级<br>
	<h3>v0.3.1.4</h3><br>
		-添加4个升级<br>
	<h3>v0.3.1.3</h3><br>
		-添加一个升级<br>
	<h3>v0.3.1.2</h3><br>
		-添加2个升级<br>
	<h3>v0.3.1.1</h3><br>
		-添加2个升级<br>
	<h3>v0.3.1</h3><br>
		-添加3个升级<br>
		-添加一个里程碑<br>
	<h3>v0.3</h3><br>
		-添加一个新层级<br>
		-添加一个升级<br>
	<h3>v0.2.4</h3><br>
		-添加5个升级<br>
		-创死了几个升级<br>
		-添加一个可购买<br>
		-删掉一个可购买<br>
	<h3>v0.2.3</h3><br>
		-添加6个升级<br>
		-添加1个挑战<br>
		-添加一个可购买<br>
		-endgame 1e700熵<br>
	<h3>v0.2.2</h3><br>
		-添加2个升级<br>
		-添加一个挑战<br>
		-添加2个可购买<br>
	<h3>v0.2.1</h3><br>
		-我懒的用英文了。(I don't want to use English.)<br>
		-添加4个升级。<br>
		-删除"sb"升级。<br>
		-添加1个挑战。<br>
	<h3>v0.2</h3><br>
		-Added a layer.<br>
		-Added a upgrade.<br>
		-Added a sb upgrade.<br>
	<h3>v0.1.3</h3><br>
		-Added a upgrade.<br>
		-Added a milestone.<br>
	<h3>v0.1.2</h3><br>
		-Added a buyable.<br>
		-Added a upgrade.<br>
	<h3>v0.1.1</h3><br>
		-Added a buyable.<br>
		-Added two upgrades.<br>
		-Added two milestones.<br>
	<h3>v0.1</h3><br>
	    -Added a layer.<br>
	<h3>v0.0.1</h3><br>
	    -Added three upgrades.<br>
	<h3>v0.0</h3><br>
		- Added a layer.<br>
		- Added three upgrades.<br>
`

let winText = `恭喜！你>暂时<通关了这个史`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if(hasUpgrade("p",11)) gain = gain.mul(upgradeEffect("p",11))
	if(hasUpgrade("p",13)) gain = gain.mul(upgradeEffect("p",13))
	if(hasUpgrade("p",21)) gain = gain.mul(3)
	if(hasUpgrade("c",11)) gain = gain.mul(upgradeEffect("c",11))
	gain = gain.mul(buyableEffect("c",12))
	if(hasUpgrade("u",11)) gain = gain.mul(10)
	//if(hasUpgrade("u",23)) gain = gain.mul(1e20)

	if(hasUpgrade("u",11)) gain = gain.pow(1.02)
	if(hasUpgrade("u",12)) gain = gain.pow(1.1)
	if(hasUpgrade("u",21) && !hasUpgrade("e",22)) gain = gain.pow(upgradeEffect("u",21))
	if(inChallenge("u",11)) gain = gain.pow(0.5)
	if(hasChallenge("u",11)) gain = gain.pow(1.4514)
	if(inChallenge("u",13)) gain = gain.pow(0.25)
	gain = gain.pow(player.u.temeffect)
	if(!inChallenge("u",22)){
		gain = gain.mul(player.e.ele.add(1).pow(50))
		gain = gain.mul(player.e.lele.add(1).pow(25))
		gain = gain.mul(player.e.llele.add(1).pow(17))
		gain = gain.mul(player.e.lllele.add(1).pow(10))
	}
	if(hasUpgrade("p",31)) gain = gain.mul(player.e.protoneff)
	if(hasUpgrade("q",11)) gain = gain.mul(upgradeEffect("q",11))
	if(hasUpgrade("q",14)) gain = gain.mul(upgradeEffect("q",14))
	if(hasUpgrade("q",21)) gain = gain.mul(upgradeEffect("q",21))
	if(hasUpgrade("q",25)) gain = gain.mul(upgradeEffect("q",25))
	if(hasUpgrade("q",32)) gain = gain.mul(upgradeEffect("q",32))

	if(getClickableState("q",51) == 1) gain = gain.mul(1e10)
	if(getClickableState("q",71) == 1) gain = gain.mul(clickableEffect("q",71))
	if(getClickableState("q",81) == 1) gain = gain.mul(clickableEffect("q",81))
	if(getClickableState("q",102) == 1) gain = gain.mul(clickableEffect("q",102))
	
	if(hasUpgrade("uc",12)) gain = gain.mul(upgradeEffect("uc",12))
	
	let sc1pow = new Decimal(2)
	let sc1start = new Decimal("1.79e308")
	if(getClickableState("q",101) == 1) sc1pow = sc1pow.mul(one.sub(clickableEffect("q",101).div(100)))
	if(gain.max(sc1start) == gain && inChallenge("u",22)) gain = gain.div(sc1start).root(sc1pow).mul(sc1start)
	let sc2pow = new Decimal(5)
	let sc2start = new Decimal("1e1100")
	if(gain.min(sc2start) == sc2start && inChallenge("u",22)) gain = gain.div(sc2start).root(sc2pow).mul(sc2start)
	let scpow = new Decimal(3)
	let scstart = new Decimal("1e18000")
	if(gain.min(scstart) == scstart) gain = gain.div(scstart).root(scpow).mul(scstart)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function(){
		if(inChallenge("u",22))
			return "你的熵获得超过1.79e308时，超出1.79e308的部分被平方根"
	},
	function(){
		if(inChallenge("u",22))
			return "你的熵获得超过1e1100时，超出1e1100的部分被5次根"
	},
	function(){
		if(player.points.gte("1e18000"))
			return "熵的数量超过了1e18000，超出部分被3次根"
	},
	"endgame：购买b层升级13"
]

// Determines when the game "ends"
function isEndgame() {
	//return player.points.gte(new Decimal("1e1200")) && inChallenge("u",22)
	return hasUpgrade("b",13)
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}

//快捷调用+提高运算速度
var zero = new Decimal(0)
var one = new Decimal(1)
var two = new Decimal(2)
var three = new Decimal(3)
var four = new Decimal(4)
var five = new Decimal(5)
var six = new Decimal(6)
var seven = new Decimal(7)
var eight = new Decimal(8)
var nine = new Decimal(9)
var ten = new Decimal(10)
//快捷定义
function n(num){
    return new Decimal(num)
}
//检测旁边的升级是否被购买
function checkAroundUpg(UPGlayer,place){
    place = Number(place)
    return hasUpgrade(UPGlayer,place-1)||hasUpgrade(UPGlayer,place+1)||hasUpgrade(UPGlayer,place-10)||hasUpgrade(UPGlayer,place+10)
}
//指数软上限
function powsoftcap(num,start,power){
	if(num.gt(start)){
		num = num.root(power).mul(start.pow(one.sub(one.div(power))))
	}
    return num
}
//e后数字开根
function expRoot(num,root){
    return ten.pow(num.log10().root(root))
}
//e后数字乘方
function expPow(num,pow){
    return ten.pow(num.log10().pow(pow))
}
//e后数字指数软上限
function expRootSoftcap(num,start,power){
    if(num.lte(start)) return num;
    num = num.log10();start = start.log10()
    return ten.pow(num.root(power).mul(start.pow(one.sub(one.div(power)))))
}
//修改class属性
function setClass(id,toClass = []){
    var classes = ""
    for(i in toClass) classes += " "+toClass[i]
    if(classes != "") classes = classes.substr(1)
    document.getElementById(id).className = classes
}
//快速创建sub元素
function quickSUB(str){
    return `<sub>${str}</sub>`
}
//快速创建sup元素
function quickSUP(str){
    return `<sup>${str}</sup>`
}
//快速给文字上色
function quickColor(str,color){
    return `<text style='color:${color}'>${str}</text>`
}