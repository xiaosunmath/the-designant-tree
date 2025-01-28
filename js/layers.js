addLayer("a", {
    name: "成就",
    symbol: "A",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFF00",
    resource: "成就",
    achievements: {
        11:{
            name: "设计的开始",
            done() {return player.d.points.gte(1)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "获得一个设计者", 
            textStyle: {'color': '#999999'},
        },
        12:{
            name: "游戏设计",
            done() {return player.g.points.gte(1)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "设计一个游戏", 
            textStyle: {'color': '#DD4444'},
        },
    },
    row: "side",
    
    layerShown(){return true}
})
addLayer("d", {
    infoboxes:{
        introBox:{
            title:"设计者",
            body(){
                return "你开始了设计蚂蚁，现在你需要雇佣更多的设计者来接近蚂蚁"
            }
        },
        companyBox:{
            title:"公司",
            body(){
                return "你开始成立公司，公司会帮助你更好的开发游戏"
            }
        },
    },
    name: "designer",
    symbol: "D",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        designpower: new Decimal(0),
        companypower: new Decimal(0),
    }},
    color: "#999999",
    requires: new Decimal(10),
    resource: "设计者",
    baseResource: "设计点",
    baseAmount() {return player.points},
    type: "static",
    exponent: 1,
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() {
        let exp = new Decimal(0.45)
        if(hasUpgrade("g",12)) exp = exp.mul(2)
        return exp
    },
    designpowergain(){
        let bas = n(1.45)
        if(hasUpgrade("d",21)) bas = bas.add(upgradeEffect("d",21))
        if(hasUpgrade("d",22)) bas = bas.add(upgradeEffect("d",22))
        let gain = bas.pow(player.d.points)
        if(hasUpgrade("d",11)) gain = gain.mul(upgradeEffect("d",11))
        gain = gain.mul(tmp.g.gameeffect)

        if(gain.gte(1e60)) gain = gain.div(1e60).root(3).mul(1e60)
        if(player.d.points.gte(1)) return gain
        else return zero
    },
    designpowereffect(){
        let effe = n(1.7)
        if(hasUpgrade("d",23)) effe = n(1.08)
        if(hasUpgrade("d",24)) effe = effe.sub(1).div(player.d.designpower.add(1).log(10).pow(1.75).add(1)).add(1)
        effe = effe.max(1.00000001)
        return player.d.designpower.add(1).log(effe).add(1)
        
    },
    companypowergain(){
        let gain = player.d.points.mul(player.points.add(1).log(10).add(1).pow(3))
        if(hasUpgrade("g",14)) gain = gain.mul(upgradeEffect("g",14))
        gain = gain.mul(buyableEffect("d",11))
        return gain
    },
    companypowereffect(){
        let effe = player.d.companypower.add(1).root(3)
        return effe
    },
    effectDescription(){
        let disp = "每秒产生 <h3 style='color:gray;text-shadow:0px 0px 5px;'>" 
        + format(tmp.d.designpowergain) + "</h3> 设计力量"
        if(tmp.d.designpowergain.gte(1e60)) disp = disp + "(软上限)"
        return disp
    },
    autoPrestige(){
        return hasMilestone("g",2)
    },
    canBuyMax(){
        return hasUpgrade("g",13)
    },
    resetsNothing(){
        return hasMilestone("g",3)
    },
    tabFormat: {
        "main": {
            content: [ ["infobox","introBox"],
            "main-display","prestige-button","blank",
            ["display-text",
                function() {
                    return '你有 ' + "<h3 style='color:gray;text-shadow:0px 0px 5px;'>" 
                    + format(player.d.designpower) + 
                    "</h3> 设计力量,将设计点获得x <h3 style='color:gray;text-shadow:0px 0px 5px;'>"
                     + format(tmp.d.designpowereffect) + "</h3>"
                },
               {"color": "#FFFFFF", "font-size": "20px" }],"blank",
               "upgrades"],
        },
        "company": {
            content: [ ["infobox","companyBox"],
            "main-display","prestige-button","blank",
            ["display-text",
                function() {
                    return '你的公司强度为' + "<h3 style='color:gray;text-shadow:0px 0px 5px;'>" 
                    + format(player.d.companypower) + 
                    "</h3>,每秒增加<h3 style='color:gray;text-shadow:0px 0px 5px;'>" 
                    + format(tmp.d.companypowergain) + "<h3>"
                },
               {"color": "#FFFFFF", "font-size": "20px" }],"blank",
            ["display-text",
                function() {
                    return '你的公司强度使你的设计点获取x' + "<h3 style='color:gray;text-shadow:0px 0px 5px;'>" 
                    + format(tmp.d.companypowereffect) + 
                    "</h3>" 
                },
               {"color": "#FFFFFF", "font-size": "20px" }],"blank",
            "buyables"
            ],
            unlocked(){
                return hasUpgrade("g",13)
            }
        },
    },
    update(diff){
        player.d.designpower = player.d.designpower.add(tmp.d.designpowergain.mul(diff))
        if(hasUpgrade("g",13))
            player.d.companypower = player.d.companypower.add(tmp.d.companypowergain.mul(diff))
    },
    upgrades: {
        11: {
            title:"加强设计",
            description(){return "基于设计点倍增设计力量<br>当前：x" + format(upgradeEffect("d",11))},
            cost: new Decimal(3),
            effect(){
                return player.points.add(1).log(10).add(1)
            },
        },
        12: {
            title:"设计设计",
            description(){return "基于设计点倍增设计点<br>当前：x" + format(upgradeEffect("d",12))},
            cost: new Decimal(5),
            effect(){
                return player.points.add(1).log(6).add(1)
            },
            unlocked(){
                return hasUpgrade("d",22)
            }
        },
        13: {
            title:"设计强化",
            description(){return "基于设计者倍增设计力量<br>当前：x" + format(upgradeEffect("d",13))},
            cost: new Decimal(7),
            effect(){
                return player.d.points.add(1).pow(1.7)
            },
            unlocked(){
                return hasUpgrade("d",23)
            }
        },
        14: {
            title:"设计点设计",
            description(){return "基于设计者倍增设计点<br>当前：x" + format(upgradeEffect("d",14))},
            cost: new Decimal(9),
            effect(){
                return player.d.points.add(1).root(1.5)
            },
            unlocked(){
                return hasUpgrade("d",24)
            }
        },
        21: {
            title:"设计底数",
            description(){return "基于设计点增加设计者的效果底数<br>当前：+" + format(upgradeEffect("d",21))},
            cost: new Decimal(500),currencyDisplayName:"设计力量",currencyInternalName:"designpower",currencyLayer:"d",
            effect(){
                return player.points.add(1).log(10).div(10)
            },
            unlocked(){
                return hasUpgrade("d",11)
            }
        },
        22: {
            title:"力量底数",
            description(){return "基于设计者增加设计者的效果底数<br>当前：+" + format(upgradeEffect("d",22))},
            cost: new Decimal(3000),currencyDisplayName:"设计力量",currencyInternalName:"designpower",currencyLayer:"d",
            effect(){
                return player.d.points.root(2).div(5)
            },
            unlocked(){
                return hasUpgrade("d",21)
            }
        },
        23: {
            title:"公式增强",
            description(){return "加强设计力量的效果公式"},
            cost: new Decimal(20000),currencyDisplayName:"设计力量",currencyInternalName:"designpower",currencyLayer:"d",
            unlocked(){
                return hasUpgrade("d",12)
            }
        },
        24: {
            title:"公式设计增强",
            description(){return "基于设计力量加强设计力量的效果公式"},
            cost: new Decimal(500000),currencyDisplayName:"设计力量",currencyInternalName:"designpower",currencyLayer:"d",
            unlocked(){
                return hasUpgrade("d",13)
            }
        },
        31: {
            title:"<h2>接近蚂蚁</h2>",
            description(){return "<h3>解锁下一个层级</h3>"},
            cost: new Decimal(10),
            unlocked(){
                return hasUpgrade("d",14)
            },
            style: {'height':'200px','width':'200px'},
        },
    },
    buyables: {
        11: {
            title: "公司扩建",
            cost(x) {
                let bas = ten
                return new Decimal(1e17).mul(bas.pow(x.pow(1.1)))
            },
            display() { 
                let disp = "增加公司力量获得<br>当前：x" + format(this.effect())
                disp = disp + "<br>价格：" + format(this.cost()) + "<br>数量：" + format(getBuyableAmount("d",11))
                return disp
            },
            canAfford() { return player.d.companypower.gte(this.cost()) },
            buy() {
                player.d.companypower = player.d.companypower.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(){
                let bas = four
                let effe = bas.pow(getBuyableAmount("d",11))
                return effe
            },
        },
    },
    doReset(resettingLayer){
        player.d.designpower = zero

        if(layers[resettingLayer].row > layers[this.layer].row){
            let kept = ["unlocked","auto"]
            if(resettingLayer == "g" && hasMilestone("g",0)){
                kept.push("upgrades")
            }
            layerDataReset(this.layer,kept)
        }
    },
    row: 0,
    hotkeys: [
        {key: "d", description: "D: 获得一个设计者", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})
addLayer("g", {
    infoboxes:{
        introBox:{
            title:"游戏设计",
            body(){
                return "你需要设计一些游戏，来更好的接近蚂蚁"
            }
        },
    },
    name: "game",
    symbol: "G",
    position: 0,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        //designpower: new Decimal(0),
    }},
    color: "#DD6666",
    branches(){return ["d"]},
    requires: new Decimal(1e7),
    resource: "游戏",
    baseResource: "设计点",
    baseAmount() {return player.points},
    type: "static",
    exponent: 1,
    gainMult() {
        mult = new Decimal(1)
        return mult
    },
    gainExp() {
        return new Decimal(0.29)
    },
    gameeffect(){
        let exp = n(3)
        let effe = player.g.points.add(1).pow(exp)
        if(hasUpgrade("g",11)) effe = exp.pow(player.g.points)
        let softcappower = n(0.3)
        if(hasUpgrade("g",15)) softcappower = n(0.75)
        if(effe.gte(1e10)) effe = effe.div(1e10).pow(softcappower).mul(1e10)
        return effe
    },
    effectDescription(){
        let disp = "增益设计点和设计力量获取 <h3 style='color:#DD6666;text-shadow:0px 0px 5px;'>x" + 
        format(tmp.g.gameeffect) + "</h3>"
        if(tmp.g.gameeffect.gte(1e10)) disp = disp + "(软上限)"
        return disp
    },
    tabFormat: {
        "main": {
            content: [ ["infobox","introBox"],
            "main-display","prestige-button","blank","milestones"],
        },
        "upgrade": {
            content: [ ["infobox","introBox"],
            "main-display","prestige-button","blank","upgrades"],
            unlocked(){
                return hasMilestone("g",4)
            }
        },
    },
    autoPrestige(){
        return hasMilestone("g",5)
    },
    resetsNothing(){
        return hasMilestone("g",5)
    },
    update(diff){
        //player.d.designpower = player.d.designpower.add(tmp.d.designpowergain.mul(diff))
    },
    upgrades: {
        11: {
            title:"更好的游戏",
            description(){return "改善游戏效果的公式"},
            cost: new Decimal(8),
        },
        12: {
            title:"游玩量增加",
            description(){return "设计者获取增加"},
            cost: new Decimal(14),
        },
        13: {
            title:"建立公司",
            description(){return "购买最大设计者，并且解锁公司界面(在设计者层级)"},
            cost: new Decimal(27),
        },
        14: {
            title:"公司增强",
            description(){return "基于制作的游戏倍增公司力量获得<br>当前：x" + format(this.effect())},
            cost: new Decimal(32),
            effect(){
                return player.g.points.add(1).pow(5)
            }
        },
        15: {
            title:"削弱软上限",
            description(){return "将游戏效果的软上限削弱,并且解锁一个可购买"},
            cost: new Decimal(38),
        },
    },
    milestones: {
        0: {
            requirementDescription: "2游戏",
            effectDescription: "保留设计者层的升级",
            done() { return player.g.points.gte(2) }
        },
        1: {
            requirementDescription: "3游戏",
            effectDescription(){
                return "再次基于设计力量倍增设计点<br>当前：x" + format(this.effect())
            },
            effect(){
                let effe = player.d.designpower.add(1).root(10)
                if(hasMilestone("g",2)) effe = effe.pow(1.5)
                if(hasMilestone("g",3)) effe = effe.pow(1.2)
                return effe
            },
            done() { return player.g.points.gte(3) }
        },
        2: {
            requirementDescription: "5游戏",
            effectDescription: "自动重置获得设计者,且3游戏里程碑的效果变为原来的1.5次方",
            done() { return player.g.points.gte(5) }
        },
        3: {
            requirementDescription: "6游戏",
            effectDescription: "设计者不重置任何东西,且3游戏里程碑的效果变为原来的1.2次方",
            done() { return player.g.points.gte(6) }
        },
        4: {
            requirementDescription: "8游戏",
            effectDescription: "解锁游戏升级",
            done() { return player.g.points.gte(8) }
        },
        5: {
            requirementDescription: "37游戏",
            effectDescription: "你可以自动制作游戏并且游戏不重置任何东西",
            done() { return player.g.points.gte(37) }
        },
    },

    row: 1,
    hotkeys: [
        {key: "g", description: "G: 设计一个游戏", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("d",31) || hasAchievement("a",12)}
})