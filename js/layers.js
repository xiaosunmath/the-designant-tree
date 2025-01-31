addLayer("a", {
    infoboxes:{
        introBox:{
            title:"💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩",
            body(){
                return "💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩<br>💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩<br>💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩<br>💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩<br>💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩<br>💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩<br>💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩<br>💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩<br>💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩<br>💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩<br>😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭"
            }
        },
        fuckBox:{
            title:"你跌来了",
            body(){
                return "看到这里没笑的就是神人，我要傻掉你😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>😡<br>"
            }
        },
    },
    name: "成就",
    symbol: "成<br>就<br>🤣🤣🤣🤣🤣🤣🤣🤣🤣",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFF00",
    resource: "成就",
    tabFormat: {
        "成就🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣": {
            content: [ ["infobox","introBox"],"main-display","prestige-button","achievements"],},
        "抽象大帝发力了": {
            content: [ ["infobox","fuckBox"]],
        },
    },
    achievements: {
        11:{
            name: "第一个💩",
            done() {return player.p.points.gte(1)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "获得你第一个粒子", 
            textStyle: {'color': '#00FFFF'},
        },
        12:{
            name: "千倍之💩",
            done() {return player.p.points.gte(1000)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "获得你第一千个粒子", 
            textStyle: {'color': '#88DD44'},
        },
        13:{
            name: "💩之恒星",
            done() {return player.c.points.gte(1)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "获得你第一个天体", 
            textStyle: {'color': '#FFFF00'},
        },
        14:{
            name: "💩中的生命",
            done() {return getBuyableAmount("c",12).gte(1)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "获得你第一个生命", 
            textStyle: {'color': '#FFFF00'},
        },
        15:{
            name: "💩膨胀了",
            done() {return hasUpgrade("c",14)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "获得第4个天体升级", 
            textStyle: {'color': '#FFFF00'},
        },
        21:{
            name: "💩之极致",
            done() {return player.u.points.gte(1)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "获得一个宇宙(第2行)", 
            textStyle: {'color': '#999999'},
        },
        22:{
            name: "越来越💩",
            done() {return hasUpgrade("u",22)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "解锁宇宙力量", 
            textStyle: {'color': '#999999'},
        },
        23:{
            name: "💩之合成",
            done() {return player.e.points.gte(1)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "解锁元素合成器", 
            textStyle: {'color': '#DD55DD'},
        },
        24:{
            name: "💩之增重",
            done() {return player.c.mass.gte(1)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "解锁恒星质量", 
            textStyle: {'color': '#DD55DD'},
        },
        25:{
            name: "💩爆炸了",
            done() {return hasUpgrade("e",24)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "解锁元素裂变", 
            textStyle: {'color': '#DD55DD'},
        },
        31:{
            name: "加热你的💩",
            done() {return hasUpgrade("e",33)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "解锁宇宙微波辐射温度", 
            textStyle: {'color': '#999999'},
        },
        32:{
            name: "💩的裂变",
            done() {return hasUpgrade("u",42)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "解锁挑战“强制裂变”", 
            textStyle: {'color': '#999999'},
        },
        33:{
            name: "💩的微观",
            done() {return player.q.points.gte(1)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "获得第一个夸克", 
            textStyle: {'color': '#CC00CC'},
        },
        34:{
            name: "什么？💩的裂变增强升级",
            done() {return hasUpgrade("uc",11)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "获得uc层的升级", 
            textStyle: {'color': '#FFFFFF'},
        },
        35:{
            name: "💩的多样化",
            done() {return hasUpgrade("q",31)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "获得能获取奇夸克和粲夸克的能力", 
            textStyle: {'color': '#CC00CC'},
        },
        41:{
            name: "💩之策略",
            done() {return hasUpgrade("q",33)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "解锁夸克研究树", 
            textStyle: {'color': '#CC00CC'},
        },
        42:{
            name: "完整的💩策略",
            done() {return getClickableState("q",111)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "可以购买完整的夸克研究树", 
            textStyle: {'color': '#CC00CC'},
        },
        43:{
            name: "6倍💩",
            done() {return hasUpgrade("q",35)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "可以获得顶夸克和底夸克", 
            textStyle: {'color': '#CC00CC'},
        },
        44:{
            name: "💩之削弱",
            done() {return hasUpgrade("q",45)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "削弱夸克的软上限", 
            textStyle: {'color': '#CC00CC'},
        },
        45:{
            name: "💩没有无限膨胀😭😭😭",
            done() {return getBuyableAmount("q",21).gte(150) && getBuyableAmount("q",22).gte(20)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "遇到两个夸克购买项的折算<br>奖励：解锁一个粒子升级", 
            textStyle: {'color': '#CC00CC'},
        },
        51:{
            name: "💩打破了警察",
            done() {return player.e.points.gte(111)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "获得111个元素合成器<br>奖励：解锁新的粒子升级(需要进入挑战)", 
            textStyle: {'color': '#CC00CC'},
        },
        52:{
            name: "💩的发电",
            done() {return hasUpgrade("p",54)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "解锁电能", 
            textStyle: {'color': '#6666DD'},
        },
    },
    row: "side",
    
    layerShown(){return true}
})
addLayer("sb", {
    infoboxes:{
        startBox:{
            title:"开始❌❌❌❌❌❌❌",
            body(){
                return "你这个，来到宇宙后让宇宙开始变的混乱"
            }
        },
        parBox:{
            title:"粒子",
            body(){
                return "你让一个粒子脱离了秩序，罪大恶极"
            },
            unlocked(){
                return player.p.points.gte(1)
            }
        },
        celBox:{
            title:"天体",
            body(){
                return "你撼动了一个天体，这引起了注视"
            },
            unlocked(){
                return player.c.points.gte(1)
            }
        },
        uniBox:{
            title:"宇宙",
            body(){
                return "你击破了一个宇宙，多元宇宙之神非常愤怒😡😡😡😡😡😡"
            },
            unlocked(){
                return player.u.points.gte(1)
            }
        },
        eleBox:{
            title:"元素",
            body(){
                return "你获得了操控元素的力量"
            },
            unlocked(){
                return player.e.points.gte(1)
            }
        },
        chalBox:{
            title:"挑战",
            body(){
                return "你被多元宇宙之神压制了，但是你能找到出路"
            },
            unlocked(){
                return hasUpgrade("u",42)
            }
        },
        quarkBox:{
            title:"夸克",
            body(){
                return "你转身向微观进军，效果甚佳"
            },
            unlocked(){
                return player.q.points.gte(1) || hasAchievement("a",33)
            }
        },
    },
    name: "剧情",
    symbol: "剧情😡😡😡😡😡😡😡😡😡",
    position: 1,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFFFF",
    resource: "剧情",
    tabFormat: {
        "剧情😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡😡": {
            content: [ ["infobox","startBox"],
            ["infobox","parBox"],
            ["infobox","celBox"],
            ["infobox","uniBox"],
            ["infobox","eleBox"],
            ["infobox","chalBox"],
            ["infobox","quarkBox"],],},
    },
    row: "side",
    
    layerShown(){return true}
})
addLayer("shift", {
    infoboxes:{
        shitBox:{
            title:"啊，你看到这里了",
            body(){
                return "1️⃣1️⃣4️⃣5️⃣1️⃣4️⃣"
            }
        },
    },
    name: "屎",
    symbol: "屎💩💩💩💩💩💩",
    position: 2,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#665522",
    resource: "屎",
    tabFormat: {
        "md💩💩💩💩💩💩💩💩💩💩💩💩💩💩": {
            content: [ ["infobox","shitBox"]],},
    },
    row: "side",
    
    layerShown(){return true}
})
addLayer("p", {
    infoboxes:{
        introBox:{
            title:"一个介绍",
            body(){
                return "哦，我的上帝啊<br>这是我的第一个作品，同时也会成为我的主线<br>如果在某些地方平衡和屎一样，请联系作者QQ3988009796<br>如果做的大粪，不要骂行吗qwq"
            }
        },
    },
    name: "粒子",
    symbol: "p",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        pts: new Decimal(0),
    }},
    color: "#00FFFF",
    requires: new Decimal(10),
    resource: "粒子",
    baseResource: "熵",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.5,
    gainMult() {
        mult = new Decimal(1)
        if(hasUpgrade("p",12)) mult = mult.mul(upgradeEffect("p",12))
        if(hasUpgrade("u",11)) mult = mult.mul(10)
        if(inChallenge("u",22)) mult = mult.div("1e500")
        if(hasUpgrade("p",33)) mult = mult.mul("1e485")
        if(getClickableState("q",61) == 1) mult = mult.mul(1e5)
        return mult
    },
    gainExp() {
        exp = new Decimal(1)
        if(hasUpgrade("p",23)) exp = exp.add(0.2)
        if(hasUpgrade("u",13)) exp = exp.add(0.1)
        if(hasUpgrade("u",15)) exp = exp.add(0.2)
        if(hasUpgrade("p",34)) exp = exp.add(0.12)
        if(inChallenge("u",21)) exp = exp.div(10)
        return exp
    },
    update(diff){
        if(inChallenge("u",22)) player.p.pts = player.points
        else player.p.pts = player.p.pts.sub(player.p.pts)
    },
    upgrades: {
        11: {
            title:"描述描述描述",
            description(){
                let disp = "基于粒子增加熵获得<br>当前：x" + format(upgradeEffect("p",11))
                if(upgradeEffect("p",11).gte(1e8)) disp += "<br>(软上限)"
                if(upgradeEffect("p",11).gte(1e35)) disp += "<br>(软上限)"
                return disp
            },
            cost: new Decimal(1),
            effect(){
                let effe = player.p.points.add(1).root(2)
                if(effe.gte(1e8)) effe = effe.div(1e8).root(5).mul(1e8)
                if(effe.gte(1e35)) effe = effe.div(1e35).log(2).mul(1e35)
                return effe
            },
        },
        12: {
            title:"炸弹炸弹炸弹",
            description(){return "你的宇宙被核弹入侵了，基于熵增加粒子获得<br>当前：x" + format(upgradeEffect("p",12))},
            cost: new Decimal(5),
            effect(){return player.points.add(5).log(5)},
        },
        13: {
            title:"核弹你的宇宙",
            description(){return "核弹正在暴走，把宇宙打成了大便，基于熵增加熵获得<br>当前：x" + format(upgradeEffect("p",13))},
            cost: new Decimal(10),
            effect(){return player.points.add(2).log(2)},
        },
        14: {
            title:"禁言天神-666大黑",
            description(){return "基于666大黑奴 役的群里一次禁言的时间给夸克一个加成(最多29天23小时59分)<br>当前：x" + format(upgradeEffect("p",14))},
            cost: new Decimal(1e27),
            effect(){
                let effe = new Decimal(600)
                if(hasUpgrade("p",24)) effe = effe.pow(upgradeEffect("p",24))
                return effe.min(2591940)
            },
            unlocked(){
                return hasUpgrade("uc",12)
            }
        },
        21: {
            title:"反物质反物质反物质反物质反物质",
            description(){return "反物质开始爆炸，基于粒子增加粒子乘数<br>当前：x" + format(upgradeEffect("p",21))},
            cost: new Decimal(50),
            effect(){return player.p.points.add(10).log(10)},
        },
        22: {
            title:"核弹使用了进化，变成了氢弹",
            description(){return "熵获取×3<br>"},
            cost: new Decimal(100),
        },
        23: {
            title:"反物质打破了无限，超越了e1000",
            description(){return "粒子获取指数+0.2<br>"},
            cost: new Decimal(200),
        },
        24: {
            title:"再度刷屏",
            description(){return "获得点击Q群管家刷屏的力量，指数倍增禁言时长<br>当前：^" + format(upgradeEffect("p",24))},
            cost: new Decimal(1e33),
            effect(){return player.points.add(1).log(10).add(1).root(10)},
            unlocked(){
                return hasUpgrade("p",14)
            }
        },
        31: {
            title:"重新开始？",
            description(){return "给质子一个效果……<br>"},
            cost: new Decimal(1e7),currencyDisplayName:"熵",currencyInternalName:"pts",currencyLayer:"p",
            unlocked(){
                return inChallenge("u",22) || hasUpgrade("p",31)
            }
        },
        32: {
            title:"层级",
            description(){return "解锁一个新层级<br>"},
            cost: new Decimal(1e20),currencyDisplayName:"熵",currencyInternalName:"pts",currencyLayer:"p",
            unlocked(){
                return inChallenge("u",22) || hasUpgrade("p",32)
            }
        },
        33: {
            title:"如何获得粒子，首先要获得粒子",
            description(){return "粒子获得乘以1e485(指数前)，并且解锁一些夸克升级<br>"},
            cost: new Decimal(20000),currencyDisplayName:"夸克",currencyInternalName:"points",currencyLayer:"q",
            unlocked(){
                return (inChallenge("u",22) || hasUpgrade("p",33)) && hasUpgrade("uc",11)
            }
        },
        34: {
            title:"我要天体😭😭😭",
            description(){return "粒子指数+0.12<br>"},
            cost: new Decimal("1e265"),currencyDisplayName:"夸克",currencyInternalName:"points",currencyLayer:"q",
            unlocked(){
                return (inChallenge("u",22) || hasUpgrade("p",34)) && hasAchievement("a",45)
            }
        },
        41: {
            title:"更多的效果",
            description(){return "给中子一个效果<br>"},
            cost: new Decimal("1e1800"),currencyDisplayName:"熵",currencyInternalName:"pts",currencyLayer:"p",
            unlocked(){
                return (inChallenge("u",22) || hasUpgrade("p",41)) && hasAchievement("a",51)
            }
        },
        42: {
            title:"温度倍增",
            description(){return "将宇宙温度获得翻倍<br>"},
            cost: new Decimal("1e1835"),currencyDisplayName:"熵",currencyInternalName:"pts",currencyLayer:"p",
            unlocked(){
                return (inChallenge("u",22) || hasUpgrade("p",42)) && hasAchievement("a",51)
            }
        },
        43: {
            title:"温度倍增2",
            description(){return "将宇宙温度获得x2<br>"},
            cost: new Decimal("1e2075"),currencyDisplayName:"熵",currencyInternalName:"pts",currencyLayer:"p",
            unlocked(){
                return (inChallenge("u",22) || hasUpgrade("p",43)) && hasAchievement("a",51)
            }
        },
        44: {
            title:"温度倍增+++",
            description(){return "将宇宙温度获得x3<br>"},
            cost: new Decimal("1e2320"),currencyDisplayName:"熵",currencyInternalName:"pts",currencyLayer:"p",
            unlocked(){
                return (inChallenge("u",22) || hasUpgrade("p",44)) && hasAchievement("a",51)
            }
        },
        51: {
            title:"温度倍增↩️",
            description(){return "基于宇宙温度倍增宇宙温度<br>当前：x" + format(upgradeEffect("p",51))},
            cost: new Decimal("1e2645"),currencyDisplayName:"熵",currencyInternalName:"pts",currencyLayer:"p",
            effect(){
                return player.u.temperature.add(1).log(2)
            },
            unlocked(){
                return (inChallenge("u",22) || hasUpgrade("p",51)) && hasAchievement("a",51)
            }
        },
        52: {
            title:"温度倍增a",
            description(){return "基于熵倍增宇宙温度<br>当前：x" + format(upgradeEffect("p",52))},
            cost: new Decimal("1e3235"),currencyDisplayName:"熵",currencyInternalName:"pts",currencyLayer:"p",
            effect(){
                return player.points.add(1).log(10).div(500).add(1)
            },
            unlocked(){
                return (inChallenge("u",22) || hasUpgrade("p",52)) && hasAchievement("a",51)
            }
        },
        53: {
            title:"温度倍增b",
            description(){return "基于天体质量倍增宇宙温度<br>当前：x" + format(upgradeEffect("p",53))},
            cost: new Decimal("1e3935"),currencyDisplayName:"熵",currencyInternalName:"pts",currencyLayer:"p",
            effect(){
                return player.c.mass.add(1).log(10).div(2).add(1)
            },
            unlocked(){
                return (inChallenge("u",22) || hasUpgrade("p",53)) && hasAchievement("a",51)
            }
        },
        54: {
            title:"效果无限",
            description(){return "给电子一个效果，并且解锁电池，在挑战外也可以获得质子，中子，电子"},
            cost: new Decimal("1e4880"),currencyDisplayName:"熵",currencyInternalName:"pts",currencyLayer:"p",
            unlocked(){
                return (inChallenge("u",22) || hasUpgrade("p",54)) && hasAchievement("a",51)
            }
        },
    },
    doReset(resettingLayer){
        if(layers[resettingLayer].row > layers[this.layer].row){
            let kept = ["unlocked","auto"]
            if(resettingLayer == "e" && hasMilestone("e",0)){
                kept.push("upgrades")
            }
            if(resettingLayer == "u" && hasMilestone("u",0)){
                kept.push("upgrades")
            }
            layerDataReset(this.layer,kept)
        }
    },
    passiveGeneration(){
        if(hasMilestone("c",0)) return 1
        else return 0
    },
    row: 0,
    
    hotkeys: [
        {key: "p", description: "P: 进行粒子重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})
addLayer("c", {
    infoboxes:{
        introBox:{
            title:"请输入文本",
            body(){
                return "请输入文本请输入文本请输入文本请输入文本请输入文本请输入文本<br>"
            },
        },
    },
    name: "天体",
    symbol: "c",
    position: 1,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        mass: new Decimal(0),
        masseff: new Decimal(0),
    }},
    color: "#FFFF00",
    requires: new Decimal(1000),
    resource: "天体",
    baseResource: "粒子",
    baseAmount() {return player.p.points}, 
    type: "normal",
    exponent: 0.5,
    branches(){return ["p"]},
    gainMult() {
        mult = new Decimal(1)
        mult = mult.mul(buyableEffect("c",11))
        if(hasUpgrade("u",11)) mult = mult.mul(10)
        if(inChallenge("u",22)) mult = mult.div("1e500")
        return mult
    },
    gainExp() {
        exp = new Decimal(1)
        if(hasUpgrade("u",13)) exp = exp.add(0.1)
        if(hasUpgrade("u",15)) exp = exp.add(0.2)
        if(inChallenge("u",12)) exp = exp.div(5)
        return exp
    },
    massgain(){
        let gain = new Decimal(0)
        if(hasUpgrade("e",14)) gain = gain.add(1)
        if(hasUpgrade("u",21) && hasUpgrade("e",22)) gain = gain.mul(upgradeEffect("u",21))
        if(hasUpgrade("e",23)) gain = gain.mul(upgradeEffect("e",23))
        if(hasUpgrade("e",31)) gain = gain.mul(upgradeEffect("e",31))
        return gain
    },
    update(diff){
        if(hasMilestone("c",1)) layers.c.buyables[11].buyMax()
        if(hasMilestone("c",2)) layers.c.buyables[12].buyMax()
        player.c.mass=player.c.mass.add(tmp.c.massgain.mul(diff))
        player.c.masseff = player.c.mass.root(2).div(10).add(1)
        if(player.c.masseff.gte(2.5)) player.c.masseff = player.c.masseff.sub(1.5).log(10).add(2.5)
    },
    tabFormat: {
        "主界面": {
            content: [ ["infobox","introBox"],"main-display","prestige-button","milestones","buyables","upgrades"],},
        "恒星质量": {
            content: [ ["infobox","introBox"],
               "main-display","prestige-button",["display-text",
                function() {return '你有' + format(player.c.mass) + '恒星质量,将天体层级的两个购买项效果在软上限后变为原来的' + format(player.c.masseff) + '次方'},
               {"color": "#FFFFFF", "font-size": "20px" }]],
            unlocked(){return hasUpgrade('e',14)}
        },
    },
    upgrades: {
        11: {
            title:"宇宙宇宙宇宙",
            description(){
                let disp = "反物质开始复制器，引力开启了挂壁模式，所以有天体。基于天体增加熵乘数<br>当前：x" + format(upgradeEffect("c",11))
                if(upgradeEffect("c",11).gte(1e15)) disp += "<br>(软上限)"
                if(upgradeEffect("c",11).gte(1e130)) disp += "<br>(软上限)"
                return disp
            },
            cost: new Decimal(0),
            effect(){
                let effe = player.c.points.add(1).pow(1.2)
                if(hasUpgrade("c",13)) effe = effe.pow(2)
                if(effe.gte(1e15)) effe = effe.div(1e15).root(5).mul(1e15)
                if(effe.gte(1e130)) effe = effe.div(1e130).log(2).mul(1e130)
                return effe
            },
        },
        12: {
            title:"反物质开始永恒，超过了e100000",
            description(){return "增加第一个可购买效果/骷髅<br>"},
            cost: new Decimal(10000),
        },
        13: {
            title:"氢弹进行了进化，变成了5阶核弹",
            description(){return "增加我不会起名字了效果/骷髅<br>"},
            cost: new Decimal(1e17),
        },
        14: {
            title:"这是一个膨胀，因为反物质在光暗树膨胀期",
            description(){return "第一个可购买的数量被第二个可购买乘亿下<br>"},
            cost: new Decimal(1e27),
        },
    },
    milestones: {
        0: {
            requirementDescription: "100000天体",
            effectDescription: "每秒获得100%的粒子和天体",
            done() { return player.c.points.gte(100000) }
        },
        1: {
            requirementDescription: "1e12天体",
            effectDescription: "自动购买最大星系并且购买星系不消耗天体",
            done() { return player.c.points.gte(1e12) }
        },
        2: {
            requirementDescription: "1e36天体",
            effectDescription: "自动购买最大生命并且购买生命不消耗天体<br>哦不，核弹已经进化到114514阶了，并且反物质也进入了毁灭现实",
            done() { return player.c.points.gte(1e36) }
        },
    },
    buyables: {
        11: {
            title: "星系",
            cost(x) { return new Decimal(10).mul(x.add(1).pow(3)) },
            display() { 
                let disp = "增加天体获得<br>当前：x" + format(buyableEffect("c",11))
                if(buyableEffect("c",11).gte(1e30)) disp = disp + "（受nb的软上限限制）"
                disp = disp + "<br>价格：" + format(this.cost()) + "<br>数量：" + format(getBuyableAmount("c",11))
                if(hasUpgrade("c",14)) disp = disp + "x" + format(getBuyableAmount("c",12).add(1))
                return disp
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            buyMax() {
                if (!this.canAfford()) return;
                let tempBuy = player.c.points.max(1).div(10).root(3)
                let target = tempBuy.plus(1).floor();
                player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
            },
            effect(){
                let effe = getBuyableAmount("c",11)
                if(hasUpgrade("c",14)) effe = effe.mul(getBuyableAmount("c",12).add(1))
                effe = effe.add(1)
                if(hasUpgrade("c",12)) effe = effe.pow(1.2)
                if(effe.gte(1e30)) effe = effe.div(1e30).log(2).pow(5).mul(1e30)
                effe = effe.pow(player.c.masseff)
                return effe
            },
        },
        12: {
            title: "生命",
            cost(x) { return new Decimal(1e15).mul(x.add(1).pow(4)) },
            display() { 
                let disp = "增加熵获得<br>当前：x" + format(buyableEffect("c",12))
                if(buyableEffect("c",12).gte(1e50)) disp = disp + "（受nb的软上限限制）"
                disp = disp + "<br>价格：" + format(this.cost()) + "<br>数量：" + format(getBuyableAmount("c",12))
                return disp
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            buyMax() {
                if (!this.canAfford()) return;
                let tempBuy = player.c.points.max(1).div(1e15).root(4)
                let target = tempBuy.plus(1).floor();
                player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
            },
            effect(){
                effe = getBuyableAmount("c",12).add(1).pow(5)
                if(effe.gte(1e50)) effe = effe.div(1e50).log(2).pow(5).mul(1e50)
                effe = effe.pow(player.c.masseff)
                return effe
            },
        },
    },
    doReset(resettingLayer){
        if(layers[resettingLayer].row > layers[this.layer].row){
            let kept = ["unlocked","auto"]
            if(resettingLayer == "e" && hasMilestone("e",0)){
                kept.push("upgrades")
                kept.push("milestones")
            }
            if(resettingLayer == "u" && hasMilestone("u",0)){
                kept.push("upgrades")
                kept.push("milestones")
            }
            if(resettingLayer == "e" && hasUpgrade("e",21)){
                kept.push("mass")
            }
            if(resettingLayer == "u" && hasUpgrade("e",21)){
                kept.push("mass")
            }
            layerDataReset(this.layer,kept)
        }
    },
    row: 0, 
    passiveGeneration(){
        if(hasMilestone("c",0)) return 1
        else return 0
    },
    hotkeys: [
        {key: "c", description: "C: 进行天体重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){
        if(hasUpgrade("p",23) || hasAchievement("a",13)) return true
        else return false
    }
})
addLayer("q", {
    infoboxes:{
        introBox:{
            title:"夸克",
            body(){
                return "这个层级的颜色……不会"
            }
        },
    },
    name: "夸克",
    symbol: "q",
    position: 2,
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
		upquark: new Decimal(0),
        downquark: new Decimal(0),
        up_quark_energy: new Decimal(0),
        down_quark_energy: new Decimal(0),
        squark: new Decimal(0), //懒的打全名了,奇夸克
        cquark: new Decimal(0), //懒的打全名了,粲夸克
        bquark: n(0), //底夸克
        tquark: n(0), //顶夸克
        quarkpts: new Decimal(0), //夸克研究点数
        totalquarkpts: new Decimal(0), //总夸克研究点数
    }},
    color: "#CC00CC",
    requires(){
        if(inChallenge("u",22)) return n(1e20)
        if(hasUpgrade("uc",14) && !inChallenge("u",22)) return n("1e10400")
    },
    resource: "夸克",
    baseResource: "熵",
    baseAmount() {return player.points},
    type: "normal",
    exponent(){
        if(inChallenge("u",22)) return 0.1
        if(hasUpgrade("uc",14) && !inChallenge("u",22)) return 0.04
    },
    softcap: new Decimal("1e100"),
    softcapPower(){
        if(hasUpgrade("q",45)) return n(0.2)
        else return n(0.1)
    },
    branches(){return ["c","e"]},
    gainMult() {
        mult = new Decimal(1)
        if(hasUpgrade("q",15)) mult = mult.mul(100)
        if(hasUpgrade("p",14)) mult = mult.mul(upgradeEffect("p",14))
        if(getClickableState("q",62) == 1) mult = mult.mul(100)
        if(getClickableState("q",72) == 1) mult = mult.mul(clickableEffect("q",72))
        if(getClickableState("q",82) == 1) mult = mult.mul(clickableEffect("q",82))
        mult = mult.mul(buyableEffect("q",21))
        if(hasUpgrade("p",41)) mult = mult.mul(player.e.neutroneff)
        return mult
    },
    gainExp() {
        exp = new Decimal(1)
        if(getClickableState("q",103) == 1) exp = exp.add(0.2)
        return exp
    },
    up_quark_energy_gain(){
        let gain = player.q.upquark.pow(2)
        if(getClickableState("q",91) == 1) gain = gain.pow(2)
        if(hasUpgrade("q",44)) gain = gain.pow(2.5)
        return gain
    },
    down_quark_energy_gain(){
        let gain = player.q.downquark.pow(2)
        if(getClickableState("q",91) == 1) gain = gain.pow(2)
        if(hasUpgrade("q",44)) gain = gain.pow(2.5)
        return gain
    },
    update(diff){
        player.q.up_quark_energy = player.q.up_quark_energy.add(tmp.q.up_quark_energy_gain.mul(diff))
        player.q.down_quark_energy = player.q.down_quark_energy.add(tmp.q.down_quark_energy_gain.mul(diff))
        if(hasUpgrade("q",22)){
            player.q.upquark = player.q.points.mul(2).max(player.q.upquark)
            player.q.downquark = player.q.points.mul(2).max(player.q.downquark)
        }
        if(hasUpgrade("q",34)){
            player.q.squark = player.q.squark.add(player.q.points.div(10000))
            player.q.cquark = player.q.cquark.add(player.q.points.div(1e8))
        }
        
    },
    tabFormat: {
        "主界面": {
            content: [ ["infobox","introBox"],"main-display","prestige-button",
            ["display-text",
                function() {
                    if(player.q.points.gte(1e100))return '夸克获得超过1e100后被严重软上限！！！'
                },
               {"color": "#FFFFFF", "font-size": "40px"}],
            ["display-text",
                function() {return '你有' + format(player.q.upquark) + '上夸克'},
               {"color": "#FFFFFF", "font-size": "20px" }],
            ["display-text",
                function() {return '你有' + format(player.q.up_quark_energy) + '上夸克能量'},
               {"color": "#FFFFFF", "font-size": "20px" }],
            ["display-text",
                function() {return '你有' + format(player.q.downquark) + '下夸克'},
               {"color": "#FFFFFF", "font-size": "20px" }],
            ["display-text",
                function() {return '你有' + format(player.q.down_quark_energy) + '下夸克能量'},
               {"color": "#FFFFFF", "font-size": "20px" }],
            ["row",[["clickable",11],["clickable",12]]],
            ["row",[["clickable",21],["clickable",22]]],
            ["row",[["clickable",31],["clickable",32]]],]
        },
        "升级":{
            content:[ ["infobox","introBox"],"main-display","prestige-button",
            ["row",[["upgrade",11],["upgrade",12],["upgrade",13],["upgrade",14],["upgrade",15]]],
            ["row",[["upgrade",21],["upgrade",22],["upgrade",23],["upgrade",24],["upgrade",25]]],
            ["row",[["upgrade",31],["upgrade",32],["upgrade",33],["upgrade",34],["upgrade",35]]],
            ["row",[["upgrade",41],["upgrade",42],["upgrade",43],["upgrade",44],["upgrade",45]]],]
        },
        "夸克统计": {
            content: [
            ["display-text",
                function() {return '你有' + format(player.q.upquark) + '上夸克'},
               {"color": "#FFFFFF", "font-size": "20px"}],
            ["display-text",
                function() {return '你有' + format(player.q.downquark) + '下夸克'},
               {"color": "#FFFFFF", "font-size": "20px"}],
            ["display-text",
                function() {
                    if(hasUpgrade("q",24)) return '你有' + format(player.q.squark) + '奇夸克'
                },
               {"color": "#FFFFFF", "font-size": "20px"}],
            ["display-text",
                function() {
                    if(hasUpgrade("q",31)) return '你有' + format(player.q.cquark) + '粲夸克'
                },
               {"color": "#FFFFFF", "font-size": "20px"}],
            ["display-text",
                function() {
                    if(hasUpgrade("q",35)) return '你有' + format(player.q.bquark) + '底夸克'
                },
               {"color": "#FFFFFF", "font-size": "20px"}],
            ["display-text",
                function() {
                    if(hasUpgrade("q",35)) return '你有' + format(player.q.tquark) + '顶夸克'
                },
               {"color": "#FFFFFF", "font-size": "20px"}],
            ],},
        "夸克研究树": {
            content: [
            ["display-text",
                function() {return '你有' + format(player.q.quarkpts) + '夸克研究点数'},
               {"color": "#FFFFFF", "font-size": "15px"}],
            ["display-text",
                function() {return '太难写了qwq'},
               {"color": "#FFFFFF", "font-size": "15px"}],
            ["row",[["buyable",11],["buyable",12]]],
            ["row",[["clickable",41]]],"blank","blank",
            ["row",[["clickable",51]]],"blank",
            ["row",[["clickable",61],["clickable",62]]],"blank",
            ["row",[["clickable",71],["clickable",72]]],"blank",
            ["row",[["clickable",81],["clickable",82]]],"blank",
            ["row",[["clickable",91]]],"blank",
            ["row",[["clickable",101],["clickable",102],["clickable",103]]],"blank",
            ["row",[["clickable",111]]],"blank",
            ["row",[["clickable",121]]]
            ],
            unlocked(){
                return hasUpgrade("q",33)
            }
        },
        "底夸克&顶夸克":{
            content: [
                ["display-text",
                    function() {
                        if(hasUpgrade("q",35)) return '你有' + format(player.q.bquark) + '底夸克'
                    },
                   {"color": "#FFFFFF", "font-size": "30px"}],
                ["display-text",
                    function() {
                        if(hasUpgrade("q",35)) return '你有' + format(player.q.tquark) + '顶夸克'
                    },
                   {"color": "#FFFFFF", "font-size": "30px"}],"blank",
                ["row",[["clickable",33],["clickable",34]]],"blank","blank",
                ["row",[["buyable",21],["buyable",22]]],
            ],
            unlocked(){
                return hasUpgrade("q",35)
            }
        }
    },
    upgrades: {
        11: {
            title:"夸克能量有效果了",
            description(){return "让上夸克能量倍增熵获取<br>当前：x" + format(upgradeEffect("q",11))},
            cost: new Decimal(500),currencyDisplayName:"上夸克能量",currencyInternalName:"up_quark_energy",currencyLayer:"q",
            effect(){
                return player.q.up_quark_energy.add(1).log(1.5).add(1)
            },
        },
        12: {
            title:"上天的第一步",
            description(){return "让上夸克能量倍增下夸克能量获取<br>当前：x" + format(upgradeEffect("q",12))},
            cost: new Decimal(20000),currencyDisplayName:"上夸克能量",currencyInternalName:"up_quark_energy",currencyLayer:"q",
            effect(){
                return player.q.up_quark_energy.add(1).log(2).add(1)
            },
        },
        13: {
            title:"上天的第二步",
            description(){return "让下夸克能量倍增上夸克能量获取<br>当前：x" + format(upgradeEffect("q",13))},
            cost: new Decimal(100000),currencyDisplayName:"下夸克能量",currencyInternalName:"down_quark_energy",currencyLayer:"q",
            effect(){
                return player.q.down_quark_energy.add(1).log(2).add(1)
            },
        },
        14: {
            title:"上不了一点天",
            description(){return "让下夸克能量倍增熵获取<br>当前：x" + format(upgradeEffect("q",14))},
            cost: new Decimal(200000),currencyDisplayName:"下夸克能量",currencyInternalName:"down_quark_energy",currencyLayer:"q",
            effect(){
                return player.q.down_quark_energy.add(1).log(1.1).add(1)
            },
        },
        15: {
            title:"逃离点击",
            description(){return "让夸克获得变为原来的100倍"},
            cost: new Decimal(100),
        },
        21: {
            title:"更多",
            description(){return "基于夸克数量倍增熵获取<br>当前：x" + format(upgradeEffect("q",21))},
            cost: new Decimal(10000),
            effect(){
                return player.q.points.add(1).root(1.5)
            },
        },
        22: {
            title:"二次逃离点击",
            description(){return "将上夸克和下夸克数量锁定在夸克数量的200%"},
            cost: new Decimal(500000),
            unlocked(){
                return hasUpgrade("p",33)
            },
        },
        23: {
            title:"第三次逃离点击",
            description(){return "每秒获得1000%的夸克"},
            cost: new Decimal(3000000),
            unlocked(){
                return hasUpgrade("p",33)
            },
        },
        24: {
            title:"更多类型",
            description(){return "允许使用你的上夸克能量和下夸克能量加速夸克以对撞奇夸克（胡说八道ing）"},
            cost: new Decimal(50000000),
            unlocked(){
                return hasUpgrade("p",33)
            },
        },
        25: {
            title:"奇夸克没有效果怎么行",
            description(){
                let disp = "基于奇夸克数量倍增熵<br>当前：x" + format(upgradeEffect("q",25))
                if(this.effect().gte(1e160)) disp = disp + "(软上限)"
                return disp
            },
            cost: new Decimal(30000),currencyDisplayName:"奇夸克",currencyInternalName:"squark",currencyLayer:"q",
            effect(){
                let effe = player.q.squark.add(1).pow(1.5)
                if(effe.gte(1e160)) effe = effe.div(1e160).pow(0.2).mul(1e160)
                return effe
            },
            unlocked(){
                return hasUpgrade("p",33)
            },
        },
        31: {
            title:"更多类型2",
            description(){return "允许使用你的上夸克能量和下夸克能量加速夸克以对撞粲夸克"},
            cost: new Decimal("1e14"),
            unlocked(){
                return hasUpgrade("p",24)
            },
        },
        32: {
            title:"写升级里确实方便（划掉）",
            description(){
                let disp = "基于粲夸克倍增熵<br>当前：x" + format(upgradeEffect("q",32))
                if(this.effect().gte(1e130)) disp = disp + "(软上限)"
                return disp
            },
            cost: new Decimal("2e7"),currencyDisplayName:"粲夸克",currencyInternalName:"cquark",currencyLayer:"q",
            effect(){
                let effe = player.q.cquark.add(1).pow(1.3)
                if(effe.gte(1e130)) effe = effe.div(1e130).pow(0.2).mul(1e130)
                return effe
            },
            unlocked(){
                return hasUpgrade("p",24)
            },
        },
        33: {
            title:"……",
            description(){return "解锁夸克研究树"},
            cost: new Decimal("1e16"),
            unlocked(){
                return hasUpgrade("p",24)
            },
        },
        34: {
            title:"你成功被这个为了平衡的软上限卡住了",
            description(){return "先给QoL，每tick获得100%将要获得的奇夸克和粲夸克"},
            cost: new Decimal("1e103"),
            unlocked(){
                return player.q.points.gte(1e100)
            },
        },
        35: {
            title:"6种",
            description(){return "解锁更多种类的夸克,并且解锁一行升级"},
            cost: new Decimal("1e103"),
            unlocked(){
                return hasUpgrade("q",34)
            },
        },
        41: {
            title:"底数增强",
            description(){return "让夸克倍增的底数x10"},
            cost: new Decimal("1e7"),currencyDisplayName:"顶夸克",currencyInternalName:"tquark",currencyLayer:"q",
            unlocked(){
                return hasUpgrade("q",35)
            },
        },
        42: {
            title:"基数降低",
            description(){return "让夸克倍增的价格基数/2"},
            cost: new Decimal("2e16"),currencyDisplayName:"底夸克",currencyInternalName:"bquark",currencyLayer:"q",
            unlocked(){
                return hasUpgrade("q",41)
            },
        },
        43: {
            title:"升级再加强",
            description(){return "增强升级“熵加成”的效果"},
            cost: new Decimal("1e14"),currencyDisplayName:"顶夸克",currencyInternalName:"tquark",currencyLayer:"q",
            unlocked(){
                return hasUpgrade("q",42)
            },
        },
        44: {
            title:"公式再改进",
            description(){return "再次改进上夸克能量和下夸克能量的获得"},
            cost: new Decimal("1e33"),currencyDisplayName:"底夸克",currencyInternalName:"bquark",currencyLayer:"q",
            unlocked(){
                return hasUpgrade("q",43)
            },
        },
        45: {
            title:"什么时候才能完成挑战？",
            description(){return "削弱夸克的软上限"},
            cost: new Decimal("1e132"),
            unlocked(){
                return hasUpgrade("q",44)
            },
        },
    },
    buyables: {
        11: {
            title: "夸克研究",
            cost(x) {
                let bas = new Decimal(100)
                return new Decimal(1e16).mul(bas.pow(x))
            },
            display() { 
                let disp = "获得1研究点<br>总计：+" + format(buyableEffect("q",11))
                disp = disp + "<br>价格：" + format(this.cost()) + "<br>数量：" + format(getBuyableAmount("q",11))
                return disp
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.q.quarkpts = player.q.quarkpts.add(1)
                player.q.totalquarkpts = player.q.totalquarkpts.add(1)
            },
            effect(){
                return getBuyableAmount("q",11)
            },
            style: {'height':'100px'},
        },
        12: {
            title: "熵研究",
            cost(x) {
                let bas = new Decimal(1e10)
                return new Decimal("1e400").mul(bas.pow(x))
            },
            display() { 
                let disp = "获得1研究点<br>总计：+" + format(buyableEffect("q",12))
                disp = disp + "<br>价格：" + format(this.cost()) + "<br>数量：" + format(getBuyableAmount("q",12))
                return disp
            },
            canAfford() { return player.p.pts.gte(this.cost()) },
            buy() {
                player.p.pts = player.p.pts.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.q.quarkpts = player.q.quarkpts.add(1)
                player.q.totalquarkpts = player.q.totalquarkpts.add(1)
            },
            effect(){
                return getBuyableAmount("q",12)
            },
            unlocked(){
                return getClickableState("q",121) == 1
            },
            style: {'height':'100px'},
        },
        21: {
            title: "夸克倍增",
            cost(x) {
                let bas = new Decimal(10)
                if(hasUpgrade("q",42)) bas = bas.div(2)
                let scal1 = 3
                if(getBuyableAmount("q",21).gte(150)) x = x.sub(149).pow(scal1).add(149)
                return new Decimal(1).mul(bas.pow(x))
            },
            display() { 
                let disp = "基于底夸克倍增夸克<br>当前：x" + format(buyableEffect("q",21))
                disp = disp + "<br>价格：" + format(this.cost())
                if(getBuyableAmount("q",21).gte(150)) disp = disp + "(折算)"
                disp = disp + "<br>数量：" + format(getBuyableAmount("q",21))
                return disp
            },
            canAfford() { return player.q.bquark.gte(this.cost()) },
            buy() {
                player.q.bquark = player.q.bquark.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(){
                let bas = player.q.bquark.add(1).log(1.5).add(1)
                if(hasUpgrade("q",41)) bas = bas.mul(10)
                return bas.pow(getBuyableAmount("q",21))
            },
        },
        22: {
            title: "自倍增",
            cost(x) {
                let bas = new Decimal(5)
                let scal1 = 2
                if(getBuyableAmount("q",22).gte(20)) x = x.sub(19).pow(scal1).add(19)
                return new Decimal(1).mul(bas.pow(x.pow(1.5)))
            },
            display() { 
                let disp = "基于顶夸克倍增底夸克和顶夸克<br>当前：x" + format(buyableEffect("q",22))
                disp = disp + "<br>价格：" + format(this.cost())
                if(getBuyableAmount("q",22).gte(20)) disp = disp + "(折算)"
                disp = disp + "<br>数量：" + format(getBuyableAmount("q",22))
                return disp
            },
            canAfford() { return player.q.tquark.gte(this.cost()) },
            buy() {
                player.q.tquark = player.q.tquark.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(){
                let bas = player.q.tquark.add(1).log(10).add(1)
                return bas.pow(getBuyableAmount("q",22))
            },
        },
    },
    clickables:{
        11: {
            title: "转换上夸克",
            display(){return "将你1夸克转化为1上夸克"},
            onClick(){
                player.q.points = player.q.points.sub(1)
                player.q.upquark = player.q.upquark.add(1)
            },
            canClick(){
                return player.q.points.gte(1)
            },
        },
        12: {
            title: "转换下夸克",
            display(){return "将你1夸克转化为1下夸克"},
            onClick(){
                player.q.points = player.q.points.sub(1)
                player.q.downquark = player.q.downquark.add(1)
            },
            canClick(){
                return player.q.points.gte(1)
            },
        },
        21: {
            title: "百分比转换上夸克",
            display(){return "将你10%夸克转化为上夸克"},
            onClick(){
                player.q.upquark = player.q.upquark.add(player.q.points.mul(0.1))
                player.q.points = player.q.points.sub(player.q.points.mul(0.1))
            },
            canClick(){
                return player.q.points.gte(1)
            },
        },
        22: {
            title: "百分比转换下夸克",
            display(){return "将你10%夸克转化为下夸克"},
            onClick(){
                player.q.downquark = player.q.downquark.add(player.q.points.mul(0.1))
                player.q.points = player.q.points.sub(player.q.points.mul(0.1))
            },
            canClick(){
                return player.q.points.gte(1)
            },
        },
        31: {
            title: "对撞奇夸克",
            display(){return "将你50%的夸克对撞成为奇夸克"},
            onClick(){
                player.q.squark = player.q.squark.add(player.q.points.div(10000))
                player.q.points = player.q.points.mul(0.5)
            },
            canClick(){
                return player.q.points.gte(20000)
            },
            unlocked(){
                return hasUpgrade("q",24)
            }
        },
        32: {
            title: "对撞粲夸克",
            display(){return "将你50%的夸克对撞成为奇夸克"},
            onClick(){
                player.q.cquark = player.q.cquark.add(player.q.points.div(1e8))
                player.q.points = player.q.points.mul(0.5)
            },
            canClick(){
                return player.q.points.gte(2e8)
            },
            unlocked(){
                return hasUpgrade("q",31)
            }
        },
        33: {
            title: "底夸克",
            display(){return "利用你的夸克寻找底夸克"},
            onClick(){
                player.q.bquark = player.q.bquark.add(player.q.points.div(1e100).pow(0.9).mul(buyableEffect("q",22)))
            },
            canClick(){
                return player.q.points.gte(1e100)
            },
            unlocked(){
                return hasUpgrade("q",35)
            }
        },
        34: {
            title: "顶夸克",
            display(){return "利用你的夸克寻找顶夸克"},
            onClick(){
                player.q.tquark = player.q.tquark.add(player.q.points.div(1e100).pow(0.2).mul(buyableEffect("q",22)))
            },
            canClick(){
                return player.q.points.gte(1e100)
            },
            unlocked(){
                return hasUpgrade("q",35)
            }
        },
        41: {
            title: "洗点",
            display(){return "重置你的夸克研究"},
            onClick(){
                for (let i in layers.q.clickables)
                    if (!["11","12","21","22","31","32","41"].includes(i))
                        setClickableState("q",i,0)
                player.q.quarkpts = player.q.totalquarkpts
            },
            canClick(){
                return true
            },
        },
        51: {
            title:"开始的时候简单一点",
            display(){return "将熵获得x1e10<br>价格：1夸克研究点"},
            canClick(){
                return player.q.quarkpts.gte(1) && getClickableState(this.layer,this.id) != 1
            },
            onClick(){
                player.q.quarkpts = player.q.quarkpts.sub(1)
                setClickableState(this.layer, this.id,1)
            },
            style() { 
                if(getClickableState(this.layer,this.id)==1) return {'background-color' : "#77BF5F"}
                else{
                    if(layers.q.clickables[this.id].canClick()) return {'background-color' : "#cc00cc"}
                    else return {'background-color' : "#BF8F8F"}
                }
            },
        },
        61: {
            title:"粒子加成",
            display(){return "将粒子获得x1e5<br>价格：1夸克研究点"},
            canClick(){
                let canc = player.q.quarkpts.gte(1) && getClickableState(this.layer,this.id) != 1 && getClickableState("q",51) == 1
                if(getClickableState("q",111) != 1) canc = canc && getClickableState("q",62) == 0
                return canc
            },
            onClick(){
                player.q.quarkpts = player.q.quarkpts.sub(1)
                setClickableState(this.layer, this.id,1)
            },
            style() { 
                if(getClickableState(this.layer,this.id)==1) return {'background-color' : "#77BF5F"}
                else{
                    if(layers.q.clickables[this.id].canClick()) return {'background-color' : "#cc00cc"}
                    else return {'background-color' : "#BF8F8F"}
                }
            },
            branches(){return ["51"]}
        },
        62: {
            title:"夸克加成",
            display(){return "将夸克获得x1e2<br>价格：1夸克研究点"},
            canClick(){
                let canc = player.q.quarkpts.gte(1) && getClickableState(this.layer,this.id) != 1 && getClickableState("q",51) == 1
                if(getClickableState("q",111) != 1) canc = canc && getClickableState("q",61) == 0
                return canc
            },
            onClick(){
                player.q.quarkpts = player.q.quarkpts.sub(1)
                setClickableState(this.layer, this.id,1)
            },
            style() { 
                if(getClickableState(this.layer,this.id)==1) return {'background-color' : "#77BF5F"}
                else{
                    if(layers.q.clickables[this.id].canClick()) return {'background-color' : "#cc00cc"}
                    else return {'background-color' : "#BF8F8F"}
                }
            },
            branches(){return ["51"]}
        },
        71: {
            title:"熵加成",
            display(){return "基于夸克进一步倍增熵<br>价格：2夸克研究点<br>效果：x" + format(this.effect())},
            effect(){
                let effe = player.q.points.add(1).root(3)
                if(hasUpgrade("q",43)) effe = effe.pow(3)
                return effe
            },
            canClick(){
                let canc = player.q.quarkpts.gte(2) && getClickableState(this.layer,this.id) != 1 && getClickableState("q",61) == 1
                return canc
            },
            onClick(){
                player.q.quarkpts = player.q.quarkpts.sub(2)
                setClickableState(this.layer, this.id,1)
            },
            style() { 
                if(getClickableState(this.layer,this.id)==1) return {'background-color' : "#77BF5F"}
                else{
                    if(layers.q.clickables[this.id].canClick()) return {'background-color' : "#cc00cc"}
                    else return {'background-color' : "#BF8F8F"}
                }
            },
            branches(){return ["61"]}
        },
        72: {
            title:"夸克加成",
            display(){return "基于粒子倍增夸克<br>价格：2夸克研究点<br>效果：x" + format(this.effect())},
            effect(){
                return player.p.points.add(1).log(10).mul(5).add(1)
            },
            canClick(){
                let canc = player.q.quarkpts.gte(2) && getClickableState(this.layer,this.id) != 1 && getClickableState("q",62) == 1
                return canc
            },
            onClick(){
                player.q.quarkpts = player.q.quarkpts.sub(2)
                setClickableState(this.layer, this.id,1)
            },
            style() { 
                if(getClickableState(this.layer,this.id)==1) return {'background-color' : "#77BF5F"}
                else{
                    if(layers.q.clickables[this.id].canClick()) return {'background-color' : "#cc00cc"}
                    else return {'background-color' : "#BF8F8F"}
                }
            },
            branches(){return ["62"]}
        },
        81: {
            title:"上夸克能量",
            display(){return "基于上夸克能量进一步倍增熵<br>价格：2夸克研究点<br>效果：x" + format(this.effect())},
            effect(){
                return player.q.up_quark_energy.add(1).root(4)
            },
            canClick(){
                let canc = player.q.quarkpts.gte(2) && getClickableState(this.layer,this.id) != 1 && getClickableState("q",71) == 1
                return canc
            },
            onClick(){
                player.q.quarkpts = player.q.quarkpts.sub(2)
                setClickableState(this.layer, this.id,1)
            },
            style() { 
                if(getClickableState(this.layer,this.id)==1) return {'background-color' : "#77BF5F"}
                else{
                    if(layers.q.clickables[this.id].canClick()) return {'background-color' : "#cc00cc"}
                    else return {'background-color' : "#BF8F8F"}
                }
            },
            branches(){return ["71"]}
        },
        82: {
            title:"下夸克能量",
            display(){return "基于下夸克能量倍增夸克<br>价格：2夸克研究点<br>效果：x" + format(this.effect())},
            effect(){
                return player.q.down_quark_energy.add(1).log(2).mul(3).add(1)
            },
            canClick(){
                let canc = player.q.quarkpts.gte(2) && getClickableState(this.layer,this.id) != 1 && getClickableState("q",72) == 1
                return canc
            },
            onClick(){
                player.q.quarkpts = player.q.quarkpts.sub(2)
                setClickableState(this.layer, this.id,1)
            },
            style() { 
                if(getClickableState(this.layer,this.id)==1) return {'background-color' : "#77BF5F"}
                else{
                    if(layers.q.clickables[this.id].canClick()) return {'background-color' : "#cc00cc"}
                    else return {'background-color' : "#BF8F8F"}
                }
            },
            branches(){return ["72"]}
        },
        91: {
            title:"公式改进",
            display(){return "让上夸克能量和下夸克能量的获得公式更好<br>价格：2夸克研究点"},
            canClick(){
                let canc = player.q.quarkpts.gte(2) && getClickableState(this.layer,this.id) != 1 && (getClickableState("q",81) == 1 || getClickableState("q",82) == 1)
                return canc
            },
            onClick(){
                player.q.quarkpts = player.q.quarkpts.sub(2)
                setClickableState(this.layer, this.id,1)
            },
            style() { 
                if(getClickableState(this.layer,this.id)==1) return {'background-color' : "#77BF5F"}
                else{
                    if(layers.q.clickables[this.id].canClick()) return {'background-color' : "#cc00cc"}
                    else return {'background-color' : "#BF8F8F"}
                }
            },
            branches(){return ["81","82"]}
        },
        101: {
            title:"软上限弱化",
            display(){return "基于夸克弱化熵的软上限(最多50%)(懒的改了)<br>价格：8夸克研究点<br>当前效果：弱化" + format(clickableEffect("q",101)) + "%"},
            effect(){
                return player.q.points.add(1).log(10).div(2).add(1).min(50)
            },
            canClick(){
                let canc = player.q.quarkpts.gte(8) && getClickableState(this.layer,this.id) != 1 && getClickableState("q",91) == 1
                if(getClickableState("q",111) != 1) canc = canc && !getClickableState("q",102) == 1 && !getClickableState("q",103) == 1
                return canc
            },
            onClick(){
                player.q.quarkpts = player.q.quarkpts.sub(8)
                setClickableState(this.layer, this.id,1)
            },
            style() { 
                if(getClickableState(this.layer,this.id)==1) return {'background-color' : "#77BF5F"}
                else{
                    if(layers.q.clickables[this.id].canClick()) return {'background-color' : "#cc00cc"}
                    else return {'background-color' : "#BF8F8F"}
                }
            },
            unlocked(){
                return hasUpgrade("uc",13)
            },
            branches(){return ["91"]}
        },
        102: {
            title:"强力增长",
            display(){return "基于总夸克研究点倍增熵<br>价格：8夸克研究点<br>当前效果：x" + format(clickableEffect("q",102))},
            effect(){
                let bas = five
                return bas.pow(player.q.totalquarkpts)
            },
            canClick(){
                let canc = player.q.quarkpts.gte(8) && getClickableState(this.layer,this.id) != 1 && getClickableState("q",91) == 1
                if(getClickableState("q",111) != 1) canc = canc && !getClickableState("q",101) == 1 && !getClickableState("q",103) == 1
                return canc
            },
            onClick(){
                player.q.quarkpts = player.q.quarkpts.sub(8)
                setClickableState(this.layer, this.id,1)
            },
            style() { 
                if(getClickableState(this.layer,this.id)==1) return {'background-color' : "#77BF5F"}
                else{
                    if(layers.q.clickables[this.id].canClick()) return {'background-color' : "#cc00cc"}
                    else return {'background-color' : "#BF8F8F"}
                }
            },
            unlocked(){
                return hasUpgrade("uc",13)
            },
            branches(){return ["91"]}
        },
        103: {
            title:"指数",
            display(){return "让夸克获得指数+0.2<br>价格：8夸克研究点<br>"},
            effect(){
                let bas = three
                return bas.pow(player.q.totalquarkpts)
            },
            canClick(){
                let canc = player.q.quarkpts.gte(8) && getClickableState(this.layer,this.id) != 1 && getClickableState("q",91) == 1
                if(getClickableState("q",111) != 1) canc = canc && !getClickableState("q",101) == 1 && !getClickableState("q",102) == 1
                return canc
            },
            onClick(){
                player.q.quarkpts = player.q.quarkpts.sub(8)
                setClickableState(this.layer, this.id,1)
            },
            style() { 
                if(getClickableState(this.layer,this.id)==1) return {'background-color' : "#77BF5F"}
                else{
                    if(layers.q.clickables[this.id].canClick()) return {'background-color' : "#cc00cc"}
                    else return {'background-color' : "#BF8F8F"}
                }
            },
            unlocked(){
                return hasUpgrade("uc",13)
            },
            branches(){return ["91"]}
        },
        111: {
            title:"购买所有",
            display(){return "可以同时购买这个树的所有升级(绝对不是作者不想做了<br>价格：14夸克研究点<br>"},
            canClick(){
                let canc = player.q.quarkpts.gte(14) && getClickableState(this.layer,this.id) != 1 && (getClickableState("q",101) == 1 || getClickableState("q",102) == 1 || getClickableState("q",103) == 1)
                return canc
            },
            onClick(){
                player.q.quarkpts = player.q.quarkpts.sub(14)
                setClickableState(this.layer, this.id,1)
            },
            style() { 
                if(getClickableState(this.layer,this.id)==1) return {'background-color' : "#77BF5F"}
                else{
                    if(layers.q.clickables[this.id].canClick()) return {'background-color' : "#cc00cc"}
                    else return {'background-color' : "#BF8F8F"}
                }
            },
            unlocked(){
                return hasUpgrade("uc",13)
            },
            branches(){return ["101","102","103"]}
        },
        121: {
            title:"最便宜的一次",
            display(){return "可以使用熵购买夸克研究点<br>价格：1夸克研究点<br>"},
            canClick(){
                let canc = player.q.quarkpts.gte(1) && getClickableState(this.layer,this.id) != 1 && getClickableState("q",111) == 1
                return canc
            },
            onClick(){
                player.q.quarkpts = player.q.quarkpts.sub(1)
                setClickableState(this.layer, this.id,1)
            },
            style() { 
                if(getClickableState(this.layer,this.id)==1) return {'background-color' : "#77BF5F"}
                else{
                    if(layers.q.clickables[this.id].canClick()) return {'background-color' : "#cc00cc"}
                    else return {'background-color' : "#BF8F8F"}
                }
            },
            unlocked(){
                return hasUpgrade("uc",13)
            },
            branches(){return ["111"]}
        },
    },

    passiveGeneration(){
        if(hasUpgrade("q",23)) return 10
        else return 0
    },
    doReset(resettingLayer){
        if(layers[resettingLayer].row > layers[this.layer].row){
            let kept = ["unlocked","auto"]
            if((resettingLayer == "u" || resettingLayer == "e") && hasUpgrade("uc",14)){
                kept.push("upgrades")
            }
            layerDataReset(this.layer,kept)
        }
    },
    row: 0,
    hotkeys: [
        {key: "q", description: "Q: 进行夸克重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){
        if(hasUpgrade("p",32) && (inChallenge("u",22) || hasUpgrade("uc",14))) return true
        else return false
    }
})
addLayer("u", {
    infoboxes:{
        introBox:{
            title:"宇宙",
            body(){
                return "哦，我的上帝啊<br>宇宙不小心热寂了"
            }
        },
    },
    name: "宇宙",
    symbol: "u",
    position: 0,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        uni: new Decimal(0),
        temperature: new Decimal(3),
        temeffect: new Decimal(1),
        layerceff: new Decimal(0),
    }},
    color: "#999999",
    requires: new Decimal(1e120),
    resource: "宇宙",
    baseResource: "熵",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.004,
    softcap: new Decimal("1e880"), 
    softcapPower: new Decimal(0.2), 
    branches(){return ["p","c"]},
    unigain(){
        let gain = new Decimal(0)
        if(hasChallenge("u",12)) gain = gain.add(1)
        if(hasUpgrade("u",24)) gain = gain.mul(upgradeEffect("u",24))
        gain = gain.mul(buyableEffect("u",11))
        gain = gain.mul(buyableEffect("u",12))
        gain = gain.mul(buyableEffect("u",13))
        if(hasUpgrade("u",34)) gain = gain.mul(upgradeEffect("u",34))
        if(hasUpgrade("e",13)) gain = gain.mul(upgradeEffect("e",13))
        gain = gain.pow(player.u.temeffect)
        return gain
    },
    update(diff){
        player.u.uni = player.u.uni.add(tmp.u.unigain.mul(diff))
        player.u.temeffect = player.u.temperature.sub(3).add(1).log(5).add(1)
        player.u.layerceff = player.c.points.div(10).add(1).log(10).div(10000).add(3)
        if(hasUpgrade("p",42)) player.u.layerceff = player.u.layerceff.mul(2)
        if(hasUpgrade("p",43)) player.u.layerceff = player.u.layerceff.mul(2)
        if(hasUpgrade("p",44)) player.u.layerceff = player.u.layerceff.mul(3)
        if(hasUpgrade("p",51)) player.u.layerceff = player.u.layerceff.mul(upgradeEffect("p",51))
        if(hasUpgrade("p",52)) player.u.layerceff = player.u.layerceff.mul(upgradeEffect("p",52))
        if(hasUpgrade("p",53)) player.u.layerceff = player.u.layerceff.mul(upgradeEffect("p",53))
    },
    gainMult() {
        mult = new Decimal(1)
        if(hasUpgrade("e",13)) mult = mult.mul(upgradeEffect("e",13))
        return mult
    },
    gainExp() {
        exp = new Decimal(1)
        if(hasChallenge("u",21)) exp = exp.add(challengeEffect("u",21))
        if(hasUpgrade("u",31)) exp = exp.add(upgradeEffect("u",31))
        if(hasUpgrade("u",32)) exp = exp.add(upgradeEffect("u",32))
        if(hasUpgrade("u",33)) exp = exp.add(upgradeEffect("u",33))
        return exp
    },
    tabFormat: {
        "面": {
            content: [ ["infobox","introBox"],"main-display","prestige-button",
            ["display-text",
                function() {return '当一次重置获得的宇宙数量超过1e880时，超出部分将被5次根'},
               {"color": "#FFFFFF", "font-size": "20px" }],
               "milestones","upgrades"],},
        "令人嗝屁的界面": {
            content: [ ["infobox","introBox"],"main-display","challenges"],
            unlocked(){return hasUpgrade('u',14)}
        },
        "宇宙之力量": {
            content: [["display-text",
                function() {return '你有' + format(player.u.uni) + '宇宙力量'},
               {"color": "#FFFFFF", "font-size": "20px" }],
                "buyables"],
            unlocked(){return hasChallenge("u",12)}
        },
        "温度": {
            content: [["display-text",
                function() {return '宇宙的微波背景辐射温度为' + format(player.u.temperature) + '开尔文,将宇宙力量和熵提高到' + format(player.u.temeffect) + "次方"},
               {"color": "#FFFFFF", "font-size": "20px" }],
               "clickables"],
            unlocked(){return hasUpgrade("e",33)}
        },
    },
    
    
    upgrades: {
        11: {
            title:"描述描述你的宇宙被毁灭了",
            description(){return "你的宇宙被10^1145141919810个核弹炸死了，并且被10^9*10^15反物质炸的死的不能再死了，而且被K9e15攻击的恐怖鳗鱼打成了。所以宇宙要进行复仇，使你的熵，粒子，天体数量x10,并且使你的熵^1.02(下一个升级在3宇宙)<br>"},
            cost: new Decimal(0),
            unlocked(){
                if(player.u.points.gte(1)) return true
                else return false
            }
        },
        12: {
            title:"你的宇宙觉得自己屌爆了",
            description(){return "宇宙被作者制裁了，所以只能让你的熵^1.1(下一个升级在10宇宙)<br>"},
            cost: new Decimal(0),
            unlocked(){
                if(player.u.points.gte(3)) return true
                else return false
            }
        },
        13: {
            title:"QoL:世界遗忘我",
            description(){return "你的宇宙觉得还是太慢了，于是粒子和天体的指数+0.1(下一个20)<br>"},
            cost: new Decimal(0),
            unlocked(){
                if(player.u.points.gte(10)) return true
                else return false
            }
        },
        14: {
            title:"宇宙决定气炸玩家",
            description(){return "解锁挑战(下一个30)<br>"},
            cost: new Decimal(0),
            unlocked(){
                if(player.u.points.gte(20)) return true
                else return false
            }
        },
        15: {
            title:"宇宙认为你太nb了",
            description(){return "使粒子和天体的指数+0.2(50)<br>"},
            cost: new Decimal(0),
            unlocked(){
                if(player.u.points.gte(30)) return true
                else return false
            }
        },
        21: {
            title:"宇宙太fvv了",
            description(){
                if(!hasUpgrade("e",22)) return "使你的宇宙将熵提高<br>当前效果：^" + format(upgradeEffect("u",21))
                else return "使你的宇宙倍增恒星质量和超重元素获取<br>当前效果：x" + format(upgradeEffect("u",21))
            },
            cost: new Decimal(0),
            effect(){
                if(!hasUpgrade("e",22)){
                    let effe = player.u.points.log(10).div(10).add(1)
                    if(effe.gte(2)) effe = effe.sub(1).log(10).add(2)
                    if(effe.gte(3)) effe = effe.sub(2).root(2).add(2)
                    return effe
                }
                else{
                    let effe = player.u.points.log(10).pow(5)
                    return effe
                }
                
            },
            unlocked(){
                if(player.u.points.gte(50)) return true
                else return false
            },
        },
        22: {
            title:"作者使用多元宇宙进行了加强",
            description(){return "解锁第二个挑战"},
            cost: new Decimal(0),
            unlocked(){
                if(player.u.points.gte(50)) return true
                else return false
            },
        },
        23: {
            title:"宇宙的智商跌破-250^2",
            description(){return "让宇宙IQ倍减价格基数-1"},
            cost: new Decimal(2e7),currencyDisplayName:"宇宙力量",currencyInternalName:"uni",currencyLayer:"u",
            unlocked(){
                if(hasChallenge("u",12)) return true
                else return false
            },
        },
        24: {
            title:"宇宙协同",
            description(){return "基于你的宇宙增加宇宙力量获取<br>当前:x" + format(upgradeEffect("u",24))},
            cost: new Decimal(5e16),currencyDisplayName:"宇宙力量",currencyInternalName:"uni",currencyLayer:"u",
            effect(){
                return player.u.points.add(1).log(2).pow(2)
            },
            unlocked(){
                if(hasUpgrade("u",23)) return true
                else return false
            },
        },
        25: {
            title:"作者这个终于按QoL了，不得给多亿点",
            description(){return "每秒获得10000%的宇宙"},
            cost: new Decimal(1e27),currencyDisplayName:"宇宙力量",currencyInternalName:"uni",currencyLayer:"u",
            unlocked(){
                if(hasUpgrade("u",24)) return true
                else return false
            },
        },
        26: {
            title:"r",
            description(){return "解锁挑战3"},
            cost: new Decimal(100000),
            unlocked(){
                if(hasUpgrade("u",25)) return true
                else return false
            },
        },
        31: {
            title:"粒子宇宙",
            description(){return "基于粒子数量增加宇宙的指数<br>当前：+" + format(upgradeEffect("u",31))},
            cost: new Decimal(1e8),
            effect(){
                return player.p.points.add(1).log(10).root(2).div(30)
            },
            unlocked(){
                if(hasChallenge("u",21)) return true
                else return false
            },
        },
        32: {
            title:"天体宇宙",
            description(){return "基于天体数量增加宇宙的指数<br>当前：+" + format(upgradeEffect("u",32))},
            cost: new Decimal(1e12),
            effect(){
                return player.c.points.add(1).log(10).root(2).div(30)
            },
            unlocked(){
                if(hasUpgrade("u",31)) return true
                else return false
            },
        },
        33: {
            title:"宇宙自增",
            description(){return "基于宇宙数量增加宇宙的指数<br>当前：+" + format(upgradeEffect("u",33))},
            cost: new Decimal(1e15),
            effect(){
                return player.u.points.add(1).log(10).root(3).div(3)
            },
            unlocked(){
                if(hasUpgrade("u",32)) return true
                else return false
            },
        },
        34: {
            title:"宇宙力量倍增",
            description(){return "基于宇宙数量乘以宇宙力量<br>当前：×" + format(upgradeEffect("u",34))},
            cost: new Decimal(1e18),
            effect(){
                return player.u.points.add(1).root(3)
            },
            unlocked(){
                if(hasUpgrade("u",33)) return true
                else return false
            },
        },
        35: {
            title:"之力量",
            description(){return "解锁一个新的可购买,并且解锁一个新层级"},
            cost: new Decimal(1e23),
            unlocked(){
                if(hasUpgrade("u",34)) return true
                else return false
            },
        },
        41: {
            title:"力量",
            description(){return "让宇宙力量倍增超重元素获得<br>当前：x" + format(upgradeEffect("u",41))},
            cost: new Decimal("1e2500"),currencyDisplayName:"宇宙力量",currencyInternalName:"uni",currencyLayer:"u",
            effect(){
                return player.u.uni.add(1).log(10).pow(2)
            },
            unlocked(){
                if(hasUpgrade("e",33)) return true
                else return false
            },
        },
        42: {
            title:"解锁挑战4",
            description(){return "挑战那里空着一块很难看是吧，现在补上"},
            cost: new Decimal("1e950"),
            unlocked(){
                if(hasUpgrade("u",41)) return true
                else return false
            },
        },
        91: {
            title:"描述描述描述描述描述描述描述描述",
            description(){return "为什么我不用里程碑呢，当然是因为占空间小啊<br>"},
            cost: new Decimal("(e^114514) 1"),
        },
        92: {
            title:"只是一个为了庆祝的升级",
            description(){return "layer.js突破1000行<br>版本v0.3.2"},
            cost: new Decimal("(e^69420) 1"),
        },
        201: {
            title:"只有挂壁才能买到这个升级",
            description(){return "我是最强黑客，我是最强黑客！"},
            cost: new Decimal("(e^1.79e308) 1"),
        },
    },
    milestones: {
        0:{
            requirementDescription: "5宇宙",
            effectDescription: "宇宙重置不重置第一行升级",
            done() { return player.u.points.gte(5) }
        }
    },
    buyables: {
        11: {
            title: "宇宙IQ倍减",
            cost(x) { 
                let bas = new Decimal(10)
                let scal1 = new Decimal(2)
                if(hasUpgrade("u",23)) bas = bas.sub(1)
                if(getBuyableAmount("u",11).gte(300)) x = x.sub(300).pow(scal1).add(300)
                return new Decimal(10).mul(bas.pow(x.pow(1.1)))
            },
            display() { 
                let disp = "增加宇宙力量获得<br>当前：x" + format(buyableEffect("u",11))
                disp = disp + "<br>价格：" + format(this.cost())
                if(getBuyableAmount("u",11).gte(300) > 0) disp = disp + "（折算）"
                disp = disp + "<br>数量：" + format(getBuyableAmount("u",11))
                return disp
            },
            canAfford() { return player[this.layer].uni.gte(this.cost()) },
            buy() {
                player[this.layer].uni = player[this.layer].uni.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            /*buyMax() {
                if (!this.canAfford()) return;
                let tempBuy = player.u.uni.max(1).div(10).log(10).root(1.1)
                let target = tempBuy.plus(1).floor();
                player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
            },*/
            effect(){
                let baseeff = new Decimal(15)
                let effe = baseeff.pow(getBuyableAmount("u",11))
                return effe
            },
        },
        12: {
            title: "宇宙IQ自我倍减",
            cost(x) { 
                let bas = new Decimal(10)
                let scal1 = new Decimal(2)
                if(getBuyableAmount("u",12).gte(300)) x = x.sub(300).pow(scal1).add(300)
                return new Decimal(1e33).mul(bas.pow(x.pow(1.05)))
            },
            display() { 
                let disp = "基于宇宙力量增加宇宙力量获得<br>当前：x" + format(buyableEffect("u",12))
                //if(buyableEffect("c",11) > 1e30) disp = disp + "（受nb的软上限限制）"
                disp = disp + "<br>价格：" + format(this.cost())
                if(getBuyableAmount("u",12).gte(300)) disp = disp + "（折算）"
                disp = disp + "<br>数量：" + format(getBuyableAmount("u",12))
                //if(hasUpgrade("u",14)) disp = disp + "x" + format(getBuyableAmount("c",12))
                return disp
            },
            canAfford() { return player[this.layer].uni.gte(this.cost()) },
            buy() {
                player[this.layer].uni = player[this.layer].uni.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            /*buyMax() {
                if (!this.canAfford()) return;
                let tempBuy = player.u.uni.max(1).div(10).log(10).root(1.05)
                let target = tempBuy.plus(1).floor();
                player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
            },*/
            effect(){
                let baseeff = new Decimal(player.u.uni.log(10).root(3))
                let effe = baseeff.pow(getBuyableAmount("u",12))
                return effe
            },
        },
        13: {
            title: "宇宙IQ炸死倍减",
            cost(x) { 
                let bas = new Decimal(100)
                let scal1 = new Decimal(2)
                if(getBuyableAmount("u",13).gte(300)) x = x.sub(300).pow(scal1).add(300)
                return new Decimal("1e600").mul(bas.pow(x.pow(1.1)))
            },
            display() { 
                let disp = "基于宇宙增加宇宙力量获得<br>当前：x" + format(buyableEffect("u",13))
                //if(buyableEffect("c",11) > 1e30) disp = disp + "（受nb的软上限限制）"
                disp = disp + "<br>价格：" + format(this.cost())
                if(getBuyableAmount("u",13).gte(300)) disp = disp + "（折算）"
                disp = disp + "<br>数量：" + format(getBuyableAmount("u",13))
                //if(hasUpgrade("u",14)) disp = disp + "x" + format(getBuyableAmount("c",12))
                return disp
            },
            canAfford() { return player[this.layer].uni.gte(this.cost()) },
            buy() {
                player[this.layer].uni = player[this.layer].uni.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            /*buyMax() {
                if (!this.canAfford()) return;
                let tempBuy = player.u.uni.max(1).div(10).log(10).root(1.05)
                let target = tempBuy.plus(1).floor();
                player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
            },*/
            effect(){
                let baseeff = new Decimal(player.u.points.log(10))
                let effe = baseeff.pow(getBuyableAmount("u",13))
                return effe
            },
            unlocked(){
                if(hasUpgrade("u",35)) return true
                else return false
            }
        },
    },
    clickables:{
        11:{
            title: "天体加热",
            display(){return "使你的天体用来提升宇宙温度"},
            onClick(){
                player.u.temperature = player.u.layerceff.max(player.u.temperature)
            },
            canClick(){
                return player.c.points.gte(1)
            },
        },
    },
    challenges: {
        11: {
            name: "宇宙太膨胀了，作者压制一下",
            challengeDescription: "宇宙：什么智障玩意，给你一个^0.5",
            goalDescription: "目标：e1145141919810/e1145141919794熵",
            canComplete: function() {return player.points.gte(1e16)},
            rewardDescription: "作者炸了，使你的熵获取^1.4514"
        },
        12: {
            name: "作者使用了更nb的力量压制宇宙",
            challengeDescription: "天体指数/5",
            goalDescription: "目标：1e48熵",
            canComplete: function() {return player.points.gte(1e48)},
            rewardDescription: "宇宙表示已老实求放过，解锁宇宙力量",
            unlocked(){
                if(hasUpgrade("u",22)) return true
                else return false
            },
        },
        21: {
            name: "只是一个挑战",
            challengeDescription: "熵^0.25,粒子指数/10",
            goalDescription: "目标：9999999999999999999999999999999999熵（不信可以自己数）",
            canComplete: function() {return player.points.gte(1e35)},
            rewardDescription() {
                return "宇宙力量好像没用，让它加成一下宇宙的指数<br>当前：+" + format(challengeEffect("u",21))
            },
            rewardEffect(){
                return player.u.uni.log(10).root(2).div(10)
            },
            unlocked(){
                if(hasUpgrade("u",26)) return true
                else return false
            },
        },
        22: {
            name: "强制裂变",
            challengeDescription: "使你的所有元素强制裂变为质子，中子和电子。且你的粒子天体获得/1e500",
            goalDescription: "目标：K9e15攻击力",
            canComplete: function() {return player.points.gte("(e^1.79e308) 1")},
            rewardDescription: "我闲的蛋疼做这个玩意",
            unlocked(){
                if(hasUpgrade("u",42)) return true
                else return false
            },
        },
    },
    passiveGeneration(){
        if(hasUpgrade("u",25)) return 100
        else return 0
    },
    row: 1,
    hotkeys: [
        {key: "u", description: "U: 进行宇宙被核弹炸死重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){
        if(player.u.points > 0) return true
        if(hasUpgrade("c",14)) return true
        else return false
    }
})
addLayer("e", {
    name: "元素合成器",
    symbol: "e",
    position: 1,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        ele: new Decimal(0),
        lele: new Decimal(0),
        llele: new Decimal(0),
        lllele: new Decimal(0),
        proton: new Decimal(0),
        neutron: new Decimal(0),
        electron: new Decimal(0),
        protoneff: new Decimal(0),
        neutroneff: new Decimal(0),
        electroneff: new Decimal(0),
    }},
    color: "#DD55DD",
    requires: new Decimal("1e525"),
    resource: "元素合成器",
    baseResource: "天体",
    baseAmount() {return player.c.points},
    type: "static",
    exponent: 1,
    branches(){return ["u","c"]},
    autoPrestige(){
        if(hasMilestone("e",1)) return true
        else return false
    },
    resetsNothing(){
        if(hasMilestone("e",1)) return true
        else return false
    },
    gainMult() {
        mult = new Decimal(1)
        return mult
    },
    gainExp() {
        exp = new Decimal(0.02)
        if(player.e.points.gte(5)) exp = exp.sub(0.005)
        if(player.e.points.gte(32)) exp = exp.sub(0.003)
        if(player.e.points.gte(60)) exp = exp.sub(0.002)
        if(player.e.points.gte(110)) exp = exp.sub(0.005)
        return exp
    },
    elegain(){
        let gain = player.e.points.pow(3).div(100)
        let bas = new Decimal(2)
        if(hasUpgrade("uc",13)) bas = bas.add(1)
        if(hasUpgrade("b",12)) bas = bas.add(upgradeEffect("b",12))
        if(hasUpgrade("e",15)) gain = bas.pow(player.e.points.div(2))
        if(hasUpgrade("e",11)) gain = gain.mul(upgradeEffect("e",11))
        if(hasUpgrade("e",12)) gain = gain.mul(upgradeEffect("e",12))
        if(hasUpgrade("u",21) && hasUpgrade("e",22)) gain = gain.mul(upgradeEffect("u",21))
        if(hasUpgrade("e",25)) gain = gain.mul(upgradeEffect("e",25))
        if(hasUpgrade("u",41)) gain = gain.mul(upgradeEffect("u",41))
        if(hasUpgrade("uc",11)) gain = gain.mul(upgradeEffect("uc",11))
        if(player.b.c11time != 0) gain = gain.mul(player.b.c11eff)
        return gain
    },
    update(diff){
        player.e.ele=player.e.ele.add(tmp.e.elegain.mul(diff))
        if(hasUpgrade("e",32)) layers.e.clickables[21].onHold()
        if(inChallenge("u",22) || hasUpgrade("p",54)){
            player.e.proton = player.e.proton.add(player.e.ele.mul(118))
            player.e.neutron = player.e.neutron.add(player.e.ele.mul(179))
            player.e.electron = player.e.electron.add(player.e.ele.mul(118))
            //你不要管为什么这个乘数这么诡异，按118号元素算的
            if(!hasUpgrade("p",54)){
                player.e.ele = player.e.ele.sub(player.e.ele)
                player.e.lele = player.e.lele.sub(player.e.lele)
                player.e.llele = player.e.llele.sub(player.e.llele)
                player.e.lllele = player.e.lllele.sub(player.e.lllele)
            }
            
        }
        if(!inChallenge("u",22) && !hasUpgrade("p",54)){
            player.e.proton = player.e.proton.sub(player.e.proton)
            player.e.neutron = player.e.neutron.sub(player.e.neutron)
            player.e.electron = player.e.electron.sub(player.e.electron)
        }
        player.e.protoneff = player.e.proton.div(1e50).add(1).pow(2)
        if(player.e.protoneff.sub(1e10) > 0 && !hasUpgrade("uc",13)) player.e.protoneff = player.e.protoneff.div(1e10).log(1.1).mul(1e10)
        player.e.neutroneff = player.e.neutron.add(1)
        
        player.e.electroneff = player.e.electron.add(1).log(10)
        if(hasUpgrade("b",11)) player.e.electroneff = player.e.electroneff.mul(upgradeEffect("b",11))
    },
    tabFormat: {
        "主界面": {
            content: [ ["infobox","introBox"],"main-display","prestige-button",
            ["display-text",function() {return '你有' + format(player.e.ele) + '超重元素,增益熵获取×' + format(player.e.ele.add(1).pow(50)) + '（在指数之后）'},
               {"color": "#FFFFFF", "font-size": "20px" }],
            ["display-text",function() {return '你的元素合成器在5，32，60将受到软上限'},
                {"color": "#FFFFFF", "font-size": "50px" }],
            ["display-text",function() {
                if(player.e.points.gte(110))
                    return '你的元素合成器被警察逮捕了，受到超级严重的软上限'
            },
                {"color": "#FFFFFF", "font-size": "110px" }],
               "upgrades","milestones"],
        },
        "元素": {
            content: [["infobox","introBox"],"main-display",
            ["display-text",function() {return '你有' + format(player.e.ele) + '超重元素,增益熵获取×' + format(player.e.ele.add(1).pow(50)) + '（在指数之后）'},
                {"color": "#FFFFFF", "font-size": "20px" }],
            ["display-text",function() {return '你有' + format(player.e.lele) + '重元素,增益熵获取×' + format(player.e.lele.add(1).pow(25)) + '（在指数之后）'},
                {"color": "#FFFFFF", "font-size": "20px" }],
            ["display-text",function() {return '你有' + format(player.e.llele) + '元素,增益熵获取×' + format(player.e.llele.add(1).pow(17)) + '（在指数之后）'},
                {"color": "#FFFFFF", "font-size": "20px" }],
            ["display-text",function() {return '你有' + format(player.e.lllele) + '轻元素,增益熵获取×' + format(player.e.lllele.add(1).pow(10)) + '（在指数之后）'},
                {"color": "#FFFFFF", "font-size": "20px" }],
            "clickables"
               ],
            unlocked(){
                return hasUpgrade("e",24)
            }
        },
        "原子拆分": {
            content: [["infobox","introBox"],"main-display",
            ["display-text",function() {
                let disp = '你有' + format(player.e.proton) + '质子'
                if(hasUpgrade("p",31)) disp = disp + ",增益熵获取x" + format(player.e.protoneff)
                if(player.e.protoneff.gte(1e10) && !hasUpgrade("uc",13)) disp = disp + "(防止挂机的软上限)"
                return disp
            },
                {"color": "#FFFFFF", "font-size": "20px" }],
            ["display-text",function() {
                let disp = '你有' + format(player.e.neutron) + '中子'
                if(hasUpgrade("p",41)) disp = disp + ",增益夸克获得x" + format(player.e.neutroneff)
                return disp
            },
                {"color": "#FFFFFF", "font-size": "20px" }],
            ["display-text",function() {
                let disp = '你有' + format(player.e.electron) + '电子'
                if(hasUpgrade("p",54)) disp = disp + ",使你的电池容量为" + format(player.e.electroneff)
                return disp
            },
                {"color": "#FFFFFF", "font-size": "20px" }],
            ],
            unlocked(){
                return inChallenge("u",22) || hasUpgrade("p",54)
            }
        }
    },
    upgrades: {
        11: {
            title:"效率",
            description(){return "基于你的宇宙倍增超重元素获取<br>当前:x" + format(upgradeEffect("e",11))},
            cost: new Decimal(30),currencyDisplayName:"超重元素",currencyInternalName:"ele",currencyLayer:"e",
            effect(){
                return player.u.points.add(1).log(10).div(10)
            },
            unlocked(){
                if(player.e.points.gte(1)) return true
                else return false
            },
        },
        12: {
            title:"继续加速",
            description(){return "基于宇宙力量倍增超重元素获得<br>当前：x" + format(upgradeEffect("e",12))},
            cost: new Decimal(1000),currencyDisplayName:"超重元素",currencyInternalName:"ele",currencyLayer:"e",
            effect(){
                return player.u.uni.add(1).log(10).div(100)
            },
            unlocked(){
                if(hasUpgrade("e",11)) return true
                else return false
            },
        },
        13: {
            title:"反增益",
            description(){return "基于超重元素倍增宇宙和宇宙力量获得<br>当前：x" + format(upgradeEffect("e",13))},
            cost: new Decimal(15000),currencyDisplayName:"超重元素",currencyInternalName:"ele",currencyLayer:"e",
            effect(){
                return player.e.ele.add(1)
            },
            unlocked(){
                if(hasUpgrade("e",12)) return true
                else return false
            },
        },
        14: {
            title:"质量",
            description(){return "在天体层级解锁恒星质量"},
            cost: new Decimal(100000),currencyDisplayName:"超重元素",currencyInternalName:"ele",currencyLayer:"e",
            unlocked(){
                if(hasUpgrade("e",13)) return true
                else return false
            },
        },
        15: {
            title:"公式加强",
            description(){return "改变超重元素的获得公式"},
            cost: new Decimal(3000000),currencyDisplayName:"超重元素",currencyInternalName:"ele",currencyLayer:"e",
            unlocked(){
                if(hasUpgrade("e",14)) return true
                else return false
            },
        },
        21: {
            title:"恒星质量很强，让我们保留它",
            description(){return "在第二行重置时保留恒星质量"},
            cost: new Decimal(150000000),currencyDisplayName:"超重元素",currencyInternalName:"ele",currencyLayer:"e",
            unlocked(){
                if(hasUpgrade("e",15)) return true
                else return false
            },
        },
        22: {
            title:"《boost or nerf》",
            description(){return "让u层升级21从加成熵变为加成恒星质量获取"},
            cost: new Decimal(1e10),currencyDisplayName:"超重元素",currencyInternalName:"ele",currencyLayer:"e",
            unlocked(){
                if(hasUpgrade("e",21)) return true
                else return false
            },
        },
        23: {
            title:"额，我也不知道为什么这么写",
            description(){return "让超重元素倍增恒星质量获取<br>当前: x" + format(upgradeEffect("e",23))},
            cost: new Decimal(1e24),currencyDisplayName:"超重元素",currencyInternalName:"ele",currencyLayer:"e",
            effect(){
                return player.e.ele.add(1).log(10).add(1).pow(2)
            },
            unlocked(){
                if(hasUpgrade("e",22)) return true
                else return false
            },
        },
        24: {
            title:"裂变开始",
            description(){return "解锁元素裂变"},
            cost: new Decimal(3e26),currencyDisplayName:"超重元素",currencyInternalName:"ele",currencyLayer:"e",
            unlocked(){
                if(hasUpgrade("e",23)) return true
                else return false
            },
        },
        25: {
            title:"加速合成",
            description(){return "让重元素*元素*轻元素倍增超重元素获取<br>当前：x" + format(upgradeEffect("e",25))},
            cost: new Decimal(5e28),currencyDisplayName:"超重元素",currencyInternalName:"ele",currencyLayer:"e",
            effect(){
                return player.e.lele.mul(player.e.llele.mul(player.e.lllele)).add(1).root(8)
            },
            unlocked(){
                if(hasUpgrade("e",24)) return true
                else return false
            },
        },
        31: {
            title:"质量",
            description(){return "让粒子倍增恒星质量获取<br>当前：x" + format(upgradeEffect("e",31))},
            cost: new Decimal(1e40),currencyDisplayName:"超重元素",currencyInternalName:"ele",currencyLayer:"e",
            effect(){
                return player.p.points.add(1).log(1.01).add(1)
            },
            unlocked(){
                if(hasUpgrade("e",25)) return true
                else return false
            },
        },
        32: {
            title:"拉屎",
            description(){return "自动点击最后一个可点击，且不消耗任何东西"},
            cost: new Decimal(1e45),currencyDisplayName:"超重元素",currencyInternalName:"ele",currencyLayer:"e",
            unlocked(){
                if(hasUpgrade("e",31)) return true
                else return false
            },
        },
        33: {
            title:"其实我在很早就有这个想法了",
            description(){return "解锁宇宙微波辐射温度"},
            cost: new Decimal(110),
            unlocked(){
                if(hasUpgrade("e",32)) return true
                else return false
            },
        },
    },
    milestones: {
        0: {
            requirementDescription: "10元素合成器",
            effectDescription: "在元素重置时保留第一行的升级和里程碑",
            done() { return player.e.points.gte(10) }
        },
        1: {
            requirementDescription: "100元素合成器",
            effectDescription: "你可以自动购买元素合成器且元素合成不重置任何东西",
            done() { return player.e.points.gte(100) }
        },
    },
    clickables: {
        11: {
            title: "核裂变1",
            display(){return "将你10%超重元素转化为重元素"},
            onClick(){
                player.e.lele = player.e.lele.add(player.e.ele.root(1.5))
                if(!hasUpgrade("e",32)) player.e.ele = player.e.ele.sub(player.e.ele.mul(0.1))
            },
            canClick(){
                return player.e.ele.gte(1)
            },
        },
        12: {
            title: "核裂变2",
            display(){return "将你10%重元素转化为元素"},
            onClick(){
                player.e.llele = player.e.llele.add(player.e.lele.root(1.3))
                if(!hasUpgrade("e",32)) player.e.lele = player.e.lele.sub(player.e.lele.mul(0.1))
            },
            canClick(){
                return player.e.lele.gte(1)
            },
        },
        13: {
            title: "核裂变3",
            display(){return "将你10%元素转化为轻元素"},
            onClick(){
                player.e.lllele = player.e.lllele.add(player.e.llele.root(1.2))
                if(!hasUpgrade("e",32)) player.e.llele = player.e.llele.sub(player.e.llele.mul(0.1))
            },
            canClick(){
                return player.e.llele.gte(1)
            },
        },
        21: {
            title: "总裂变",
            display(){return "同时进行上面的3个裂变"},
            onClick(){
                player.e.lele = player.e.lele.add(player.e.ele.root(1.5))
                if(!hasUpgrade("e",32)) player.e.ele = player.e.ele.sub(player.e.ele.mul(0.1))
                player.e.llele = player.e.llele.add(player.e.lele.root(1.3))
                if(!hasUpgrade("e",32)) player.e.lele = player.e.lele.sub(player.e.lele.mul(0.1))
                player.e.lllele = player.e.lllele.add(player.e.llele.root(1.2))
                if(!hasUpgrade("e",32)) player.e.llele = player.e.llele.sub(player.e.llele.mul(0.1))
            },
            onHold(){
                player.e.lele = player.e.lele.add(player.e.ele.root(1.5))
                if(!hasUpgrade("e",32)) player.e.ele = player.e.ele.sub(player.e.ele.mul(0.1))
                player.e.llele = player.e.llele.add(player.e.lele.root(1.3))
                if(!hasUpgrade("e",32)) player.e.lele = player.e.lele.sub(player.e.lele.mul(0.1))
                player.e.lllele = player.e.lllele.add(player.e.llele.root(1.2))
                if(!hasUpgrade("e",32)) player.e.llele = player.e.llele.sub(player.e.llele.mul(0.1))
            },
            canClick(){
                return player.e.llele.gte(1)
            },
        },
    },
    
    /*passiveGeneration(){
        if(hasMilestone("c",0)) return 1
        else return 0
    },*/
    row: 1,
    
    hotkeys: [
        {key: "e", description: "E: 进行天体合成重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("u",35)}
})
addLayer("uc", {
    infoboxes:{
        introBox:{
            title:"一个介绍",
            body(){
                return "这是为了u层挑战4专门准备的升级层，本层级的升级必须在uc4里购买<br>还有，千万千万不要手欠用控制台重置，否则相当于硬重置<br>(tips:本层级的每一个升级都会解锁一些升级)"
            }
        },
    },
    name: "walalalalala",
    symbol: "uc",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFFFF",
    requires: new Decimal("1"),
    resource: "walalalalala",
    baseResource: "熵",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0,
    branches(){return ["u"]},
    gainMult() {
        mult = new Decimal(1)
        return mult
    },
    gainExp() {
        exp = new Decimal(1)
        return exp
    },
    tabFormat: {
        "面": {
            content: [ ["infobox","introBox"],"main-display","upgrades"]},
    },
    upgrades: {
        11: {
            title:"升级1",
            description(){return "使熵倍增超重元素获得<br>当前：x" + format(upgradeEffect("uc",11))},
            cost: new Decimal(1e28),currencyDisplayName:"熵",currencyInternalName:"pts",currencyLayer:"p",
            effect(){
                return player.points.add(1).log(10).add(1).pow(3)
            },
        },
        12: {
            title:"升级2",
            description(){return "基于宇宙力量倍增熵获取(在uc4中被削弱)<br>当前：x" + format(upgradeEffect("uc",12))},
            cost: new Decimal(1e60),currencyDisplayName:"熵",currencyInternalName:"pts",currencyLayer:"p",
            effect(){
                if(inChallenge("u",22)) return player.u.uni.add(1).log(10).add(1).root(2)
                else return player.u.uni.add(1).log(10).add(1).pow(200)
            },
        },
        13: {
            title:"升级3",
            description(){return "元素合成器效果底数+1,并且干掉质子效果的软上限"},
            cost: new Decimal(1e200),currencyDisplayName:"熵",currencyInternalName:"pts",currencyLayer:"p",
        },
        14: {
            title:"升级4",
            description(){return "在重置时保留夸克升级,并且在挑战外夸克层级依旧生效,但是获得降低(建议120个元素合成器再进挑战)"},
            cost: new Decimal("1e1790"),currencyDisplayName:"熵",currencyInternalName:"pts",currencyLayer:"p",
        },
    },
    row: 999,
    
    hotkeys: [
        {key: "", description: "", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("u",42)}
})
addLayer("b", {
    infoboxes:{
        introBox:{
            title:"电能",
            body(){
                return "本层级不重置任何东西"
            }
        },
    },
    name: "电源",
    symbol: "b",
    position: 2,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        electricity: n(0),
        electricity_cap: n(0),
        c11time: n(0),//点击项11的剩余时间
        c11eff: n(1),//点击项11的效果
        c11push: n(0),//点击项11内的电能
    }},
    color: "#6666DD",
    requires: new Decimal("1e23700"),
    resource: "电源",
    baseResource: "熵",
    baseAmount() {return player.points},
    type: "static",
    exponent: 0,
    branches(){return ["e"]},
    resetsNothing(){
        return true
    },
    gainMult() {
        mult = new Decimal(1)
        return mult
    },
    gainExp() {
        exp = new Decimal(0.002)
        exp = exp.div(player.b.points.mul(2).add(1))
        return exp
    },
    electricity_gain(){
        let gain = player.b.points.pow(2)
        if(hasUpgrade("b",11)) gain = gain.mul(upgradeEffect("b",11))
        return gain
    },
    update(diff){
        if(hasUpgrade("p",54)){
            player.b.electricity_cap = player.e.electroneff
        }
        player.b.electricity = player.b.electricity.add(tmp.b.electricity_gain.mul(diff))
        player.b.electricity = player.b.electricity.min(player.b.electricity_cap)

        player.b.c11time = player.b.c11time.sub(diff).max(0)
        if(player.b.c11time == 0){
            player.b.c11eff = one
            player.b.c11push = zero
        }
    },
    tabFormat: {
        "主界面": {
            content: [ ["infobox","introBox"],"main-display","prestige-button","blank",
            ["display-text",function() {return '你每秒产生' + format(tmp.b.electricity_gain) + '电能'},
                {"color": "#FFFFFF", "font-size": "20px" }],
            ["display-text",function() {return '你有' + format(player.b.electricity) + '电能'},
                {"color": "#FFFFFF", "font-size": "20px" }],
            ["display-text",function() {return '你的电能上限为' + format(player.b.electricity_cap)},
                {"color": "#FFFFFF", "font-size": "20px" }],
            "blank",
            ["row",[["clickable",11]]],
            ]
        },
        "升级": {
            content: [ ["infobox","introBox"],"main-display","blank",
            ["row",[["upgrade",11],["upgrade",12],["upgrade",13]]],
            ]
        },
        "里程碑": {
            content: [ ["infobox","introBox"],"main-display","blank",
            "milestones"
            ]
        },
    },
    upgrades: {
        11: {
            title:"effect",
            description(){return "基于电源倍增电能获得和上限<br>当前：x" + format(upgradeEffect("b",11))},
            cost: new Decimal(3),
            effect(){
                let bas = three
                return bas.pow(player.b.points)
            },
            unlocked(){
                return hasMilestone("b",0)
            }
        },
        12: {
            title:"底数，底数！",
            description(){return "基于电源增加元素合成器底数<br>当前：+" + format(upgradeEffect("b",12))},
            cost: new Decimal(5),
            effect(){
                return player.b.points.div(5).root(3)
            },
            unlocked(){
                return hasMilestone("b",0)
            }
        },
        13: {
            title:"- -）",
            description(){return "木有"},
            cost: new Decimal(4222222),currencyDisplayName:"电能",currencyInternalName:"electricity",currencyLayer:"b",
            unlocked(){
                return hasMilestone("b",0)
            }
        },
    },
    milestones: {
        0:{
            requirementDescription: "3电源",
            effectDescription: "解锁一些电源升级",
            done() { return player.b.points.gte(3) }
        }
    },
    clickables: {
        11: {
            title: "释放电能",
            display(){return "释放你50%的电能来获取短时对超重元素提升<br>当前：x" + format(player.b.c11eff) + "<br>剩余时间：" + format(player.b.c11time) + "s"},
            onClick(){
                c11time = player.b.electricity.div(2).add(1).log(2)
                player.b.c11push = player.b.electricity.div(2)
                player.b.electricity = player.b.electricity.div(2)
                player.b.c11eff = player.b.c11push.add(1).pow(6.4)
                player.b.c11time = player.b.c11push.add(1).log(2)
            },
            canClick(){
                return player.b.electricity.gte(0)
            },
        },
    },
    
    row: 1,
    
    hotkeys: [
        {key: "b", description: "b", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("p",54)}
})