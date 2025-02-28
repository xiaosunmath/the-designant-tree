let modInfo = {
	name: "设计蚂蚁！",
	id: "the designant tree",
	author: "xiaosunmath",
	pointsName: "设计点",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.4.0.2",
	name: "the periodic table",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.4.0.2</h3><br>
		-添加5个升级<br>
	<h3>v0.4.0.1</h3><br>
		-添加5个升级<br>
	<h3>v0.4</h3><br>
		-添加一个新层级<br>
		-添加5个里程碑<br>
		-添加2个升级<br>
	<h3>v0.3.1</h3><br>
		-添加了16+3个升级<br>
		-添加了1个挑战<br>
	<h3>v0.3</h3><br>
		-添加一个新层<br>
		-添加1+4个升级<br>
		-添加一个挑战<br>
	<h3>v0.2.2</h3><br>
		-添加4个升级<br>
		-添加一个可购买<br>
	<h3>v0.2.1</h3><br>
		-添加5个升级<br>
		-添加一个可购买<br>
		-添加一个里程碑<br>
	<h3>v0.2</h3><br>
		-添加4个里程碑<br>
		-添加一个层级<br>
	<h3>v0.1</h3><br>
		-添加一个层级.<br>
		-添加9个升级.<br>`

let winText = `我不知道，但是微分版本号`

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
	gain = gain.mul(tmp.d.designpowereffect)
	if(hasUpgrade("d",12)) gain = gain.mul(upgradeEffect("d",12))
	if(hasUpgrade("d",14)) gain = gain.mul(upgradeEffect("d",14))
	gain = gain.mul(tmp.g.gameeffect)
	if(hasMilestone("g",1)) gain = gain.mul(tmp["g"].milestones[1].effect)
	gain = gain.mul(tmp.d.companypowereffect)
	gain = gain.mul(tmp.e.employee_effect)
	if(getGridData("e",104)) gain = gain.mul(10000)

	if(getClickableState('g',31)) gain = gain.pow(1.05)
	if(getGridData("e",403)) gain = gain.pow(1.04)
	
	if(hasUpgrade("c",11)) gain = gain.mul(100)
	
	if(hasUpgrade("c",23)) gain = gain.mul(upgradeEffect("c",23))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = ["endgame:设计蚂蚁（划掉）<br>获得最后一个成就"
]//还是懒得改

// Determines when the game "ends"
function isEndgame() {
	//return player.points.gte(new Decimal("e280000000"))
	//return hasUpgrade("e",14)
	//return player.l.points.gte(1)
	//return getGridData("e",44)
	return hasAchievement("a",35) //八个牙路，懒得改了
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