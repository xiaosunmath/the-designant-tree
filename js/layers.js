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
        13:{
            name: "公司建设",
            done() {return hasUpgrade("g",13)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "解锁公司力量", 
            textStyle: {'color': '#999999'},
        },
        14:{
            name: "分公司建设",
            done() {return getClickableState("g",21)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "解锁分公司", 
            textStyle: {'color': '#999999'},
        },
        15:{
            name: "提出诉讼",
            done() {return getClickableState("g",33)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "解锁律师", 
            textStyle: {'color': '#9999FF'},
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
        othercompanypower: new Decimal(0),
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
        if(hasUpgrade("g",22)) exp = exp.mul(1.5)
        if(player.d.points.gte(1000)) exp = exp.div(player.d.points.sub(998).root(3))
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
        if(hasUpgrade("g",21)) gain = gain.mul(upgradeEffect("g",21))
        if(getClickableState("g",21)) gain = gain.mul(tmp.d.othercompanypowereffect)
        return gain
    },
    companypowereffect(){
        let effe = player.d.companypower.add(1).root(3)
        return effe
    },
    othercompanypowergain(){
        let gain = player.d.companypower.add(1).log(10).pow(3)
        if(getClickableState("g",32)) gain = gain.pow(1.5)
        return gain
    },
    othercompanypowereffect(){
        let effe = player.d.othercompanypower.add(1).root(3)
        if(getClickableState("g",32)) effe = effe.pow(1.2)
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
            ["display-text",
                function() {
                    if(player.d.points.gte(1000)) return "当你的设计者获取超过1000时，获得被软上限"
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
            ["display-text",
                function() {
                    if(getClickableState("g",21)){
                        return '你的分公司强度为' + "<h3 style='color:gray;text-shadow:0px 0px 5px;'>" 
                    + format(player.d.othercompanypower) + 
                    "</h3>,每秒增加<h3 style='color:gray;text-shadow:0px 0px 5px;'>" 
                    + format(tmp.d.othercompanypowergain) + "<h3>"
                    }
                    
                },
               {"color": "#FFFFFF", "font-size": "20px" }],"blank",
            ["display-text",
                function() {
                    if(getClickableState("g",21)){
                        return '你的分公司强度使你的公司强度获取x' + "<h3 style='color:gray;text-shadow:0px 0px 5px;'>" 
                    + format(tmp.d.othercompanypowereffect) + 
                    "</h3>"
                    }
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
        if(getClickableState("g",21))
            player.d.othercompanypower = player.d.othercompanypower.add(tmp.d.othercompanypowergain.mul(diff))
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
            if(resettingLayer == "l"){
                kept.push("upgrades")
                kept.push("buyables")
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
        treeBox:{
            title:"公司发展",
            body(){
                return "你可以选择一些线路发展公司"
            }
        },
        challengeBox:{
            title:"原创",
            body(){
                return "现在你需要把抄袭你游戏的公司/团体/个人提出诉讼<br>当你在挑战中，会在律师界面解锁庭审界面（你的血量基于公司力量，攻击基于律师力量），你需要击败对方才能通过挑战，并且在挑战中会停止律师力量的生产。"
            }
        },
    },
    name: "game",
    symbol: "G",
    position: 0,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        company_study_points: new Decimal(0),
        total_company_study_points: new Decimal(0),
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
        if(getClickableState("g",41)) softcappower = n(0.8)
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
        "companytree": {
            content: [ ["infobox","treeBox"],"blank",
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
                    return '你有' + "<h3 style='color:gray;text-shadow:0px 0px 5px;'>" 
                    + format(player.g.company_study_points) + 
                    "</h3>公司增强点数"
                },
               {"color": "#FFFFFF", "font-size": "20px" }],
            ["display-text",
                function() {
                    return "你总共有" + format(player.g.total_company_study_points) + "公司增强点数"
                },
               {"color": "#FFFFFF", "font-size": "12px" }],"blank",
               
               "buyables","blank",
               ["row",[["clickable",11]]],"blank",
               ["row",[["clickable",21]]],"blank","blank","blank","blank",
               ["row",[["clickable",31],"blank",["clickable",32],"blank",["clickable",33]]],"blank","blank","blank","blank",
               ["row",[["clickable",41]]],"blank",
            ],
            unlocked(){
                return hasUpgrade("g",23)
            }
        },
        "challenge": {
            content: [ ["infobox","challengeBox"],
            "blank","challenges"],
            unlocked(){
                return getClickableState("g",33)
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
        21: {
            title:"公司收购",
            description(){return "基于公司力量倍增公司力量获取<br>当前：x" + format(upgradeEffect("g",21))},
            cost: new Decimal(5e19),currencyDisplayName:"公司力量",currencyInternalName:"companypower",currencyLayer:"d",
            effect(){
                return player.d.companypower.add(1).log(1.05).add(1)
            },
            unlocked(){
                return hasUpgrade("g",15)
            }
        },
        22: {
            title:"增加人手",
            description(){return "获取更多设计者"},
            cost: new Decimal(1e25),currencyDisplayName:"公司力量",currencyInternalName:"companypower",currencyLayer:"d",
            unlocked(){
                return hasUpgrade("g",15)
            }
        },
        23: {
            title:"多方面研究",
            description(){return "解锁公司研究树"},
            cost: new Decimal(1e28),currencyDisplayName:"公司力量",currencyInternalName:"companypower",currencyLayer:"d",
            unlocked(){
                return hasUpgrade("g",15)
            }
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
    buyables: {
        11: {
            title: "公司增强点数",
            cost(x) {
                let bas = n(500)
                return new Decimal(1e28).mul(bas.pow(x))
            },
            display() { 
                let disp = "公司增强点数+1<br>当前：+" + format(this.effect())
                disp = disp + "<br>价格：" + format(this.cost()) + "<br>数量：" + format(getBuyableAmount("g",11))
                return disp
            },
            canAfford() { return player.d.companypower.gte(this.cost()) },
            buy() {
                player.d.companypower = player.d.companypower.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.g.total_company_study_points = player.g.total_company_study_points.add(1)
                player.g.company_study_points = player.g.company_study_points.add(1)
            },
            effect(){
                return getBuyableAmount("g",11)
            },
            style: {'height':'100px'},
        },
    },
    clickables:{
        11: {
            title: "洗点",
            display(){return "重置你的公司增强"},
            onClick(){
                for (let i in layers.g.clickables)
                    if (!["11","33"].includes(i))
                        setClickableState("g",i,0)
                player.g.company_study_points = player.g.total_company_study_points
                player.d.othercompanypower = n(0)
                player.d.points = n(0)
                player.d.designpower = n(0)
                player.d.companypower = n(0)
                player.points = n(0)
                //player.g.points = player.g.points.div(1.1).floor()
            },
            canClick(){
                return true
            },
        },
        21: {
            title:"分公司",
            display(){return "解锁分公司力量<br>价格：1公司增强点数"},
            canClick(){
                return player.g.company_study_points.gte(1) && getClickableState(this.layer,this.id) != 1
            },
            onClick(){
                player.g.company_study_points = player.g.company_study_points.sub(1)
                setClickableState(this.layer, this.id,1)
            },
            style() { 
                if(getClickableState(this.layer,this.id)==1) return {'background-color' : "#77BF5F"}
                else{
                    if(layers.g.clickables[this.id].canClick()) return {'background-color' : "#999999"}
                    else return {'background-color' : "#BF8F8F"}
                }
            },
        },
        31: {
            title:"基础指数",
            display(){return "设计点获取^1.05<br>价格：1公司增强点数"},
            canClick(){
                return player.g.company_study_points.gte(1) && getClickableState(this.layer,this.id) != 1 && getClickableState(this.layer,21) == 1
            },
            onClick(){
                player.g.company_study_points = player.g.company_study_points.sub(1)
                setClickableState(this.layer, this.id,1)
            },
            style() { 
                if(getClickableState(this.layer,this.id)==1) return {'background-color' : "#77BF5F"}
                else{
                    if(layers.g.clickables[this.id].canClick()) return {'background-color' : "#999999"}
                    else return {'background-color' : "#BF8F8F"}
                }
            },
            branches(){return ["21"]},
        },
        32: {
            title:"公司改进",
            display(){return "加强分公司的获得公式和效果<br>价格：2公司增强点数"},
            canClick(){
                return player.g.company_study_points.gte(2) && getClickableState(this.layer,this.id) != 1 && getClickableState(this.layer,21) == 1
            },
            onClick(){
                player.g.company_study_points = player.g.company_study_points.sub(2)
                setClickableState(this.layer, this.id,1)
            },
            style() { 
                if(getClickableState(this.layer,this.id)==1) return {'background-color' : "#77BF5F"}
                else{
                    if(layers.g.clickables[this.id].canClick()) return {'background-color' : "#999999"}
                    else return {'background-color' : "#BF8F8F"}
                }
            },
            branches(){return ["21"]},
        },
        33: {
            title:"诉讼抄袭",
            display(){return "对于某些抄袭你的游戏的公司/团体/个人，你需要诉讼<br>解锁律师和挑战<br>需要：5总公司增强点数"},
            canClick(){
                return player.g.total_company_study_points.gte(5) && getClickableState(this.layer,this.id) != 1 && getClickableState(this.layer,32) == 1
            },
            onClick(){
                setClickableState(this.layer, this.id,1)
            },
            style() { 
                if(getClickableState(this.layer,this.id)==1) return {'background-color' : "#77BF5F"}
                else{
                    if(layers.g.clickables[this.id].canClick()) return {'background-color' : "#999999"}
                    else return {'background-color' : "#BF8F8F"}
                }
            },
            branches(){return ["32"]},
        },
        41: {
            title:"游戏影响",
            display(){return "削弱游戏效果的软上限<br>价格：2公司增强点数"},
            canClick(){
                return player.g.company_study_points.gte(2) && getClickableState(this.layer,this.id) != 1 && getClickableState(this.layer,31) == 1
            },
            onClick(){
                player.g.company_study_points = player.g.company_study_points.sub(2)
                setClickableState(this.layer, this.id,1)
            },
            style() { 
                if(getClickableState(this.layer,this.id)==1) return {'background-color' : "#77BF5F"}
                else{
                    if(layers.g.clickables[this.id].canClick()) return {'background-color' : "#999999"}
                    else return {'background-color' : "#BF8F8F"}
                }
            },
            branches(){return ["31"]},
        },
    },
    challenges: {
        11: {
            name: "邪恶的亲戚(还没处理)",
            challengeDescription: "你亲戚强硬的要求你将公司股份分它50%，并且抄袭了你的游戏",
            goalDescription: "让对方血量<0（其他挑战都默认这个了)",
            canComplete: function() {return player.l.empty_hp.lt(0)},
            rewardDescription: "公司力量^1.1",
            onEnter(){
                player.l.empty_max_hp = n("(e^1.79e308) 1")
                player.l.empty_hp = n("(e^1.79e308) 1")
                player.l.empty_atk = n("(e^1.79e308) 1")
                player.l.hp = player.l.max_hp
            },
            onExit(){
                player.l.empty_max_hp = n(0)
                player.l.empty_hp = n(0)
                player.l.empty_atk = n(0)
                player.l.hp = player.l.max_hp
            }
        },
    },
    row: 1,
    hotkeys: [
        {key: "g", description: "G: 设计一个游戏", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("d",31) || hasAchievement("a",12)}
})
addLayer("l", {
    infoboxes:{
        introBox:{
            title:"律师",
            body(){
                return "律师会帮助你的公司<br>本层级保留d层升级和购买项"
            }
        },
        trialBox:{
            title:"庭审",
            body(){
                return "击败对方，或者被对方击败"
            }
        },
    },
    name: "lawyer",
    symbol: "L",
    position: 1,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        lawyer_power: new Decimal(0),
        empty_hp: new Decimal(0),
        empty_atk: new Decimal(0),
        empty_max_hp: new Decimal(0),
        hp: new Decimal(0),
        atk: new Decimal(0),
        max_hp: new Decimal(0),
    }},
    color: "#9999FF",
    requires: new Decimal(1e40),
    resource: "律师",
    baseResource: "公司力量",
    baseAmount() {return player.d.companypower},
    type: "static",
    branches(){return ["d"]},
    exponent: 1,
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() {
        let exp = new Decimal(0.13)
        return exp
    },
    effectDescription(){
        let disp = "每秒产生 <h3 style='color:#9999FF;text-shadow:0px 0px 5px;'>" 
        + format(tmp.l.lawyer_power_gain) + "</h3> 律师力量"
        return disp
    },
    lawyer_power_gain(){
        let bas = n(2)
        let gain = n(bas.pow(player.l.points).sub(1))
        return gain
    },
    update(diff){
        if(!inChallenge("g",11))
            player.l.lawyer_power = player.l.lawyer_power.add(tmp.l.lawyer_power_gain.mul(diff))
        if(inChallenge("g",11)){
            player.l.hp = player.l.hp.sub(player.empty_atk.mul(diff))
        }
        player.l.max_hp = player.d.companypower.add(1).root(15)
        player.l.atk = player.l.lawyer_power.root(3)
    },
    tabFormat: {
        "main": {
            content: [ ["infobox","introBox"],
            "main-display","prestige-button","blank",
            ["display-text",
                function() {
                    return '你有 ' + "<h3 style='color:#9999FF;text-shadow:0px 0px 5px;'>" 
                    + format(player.l.lawyer_power) + "</h3> 律师力量"
                },
               {"color": "#FFFFFF", "font-size": "20px" }],"blank",
            ]
        },
        "trial": {
            content: [ ["infobox","trialBox"],"blank","blank","blank",
            ["display-text",
                function() {
                    return "你的血量为" + format(player.l.hp) + "/" + format(player.l.max_hp)
                },
               {"color": "#FFFFFF", "font-size": "20px" }],
            ["display-text",
                function() {
                    return "你的攻击力为" + format(player.l.atk)
                },
               {"color": "#FFFFFF", "font-size": "20px" }],"blank",
            ["display-text",
                function() {
                    return "敌人的血量为" + format(player.l.empty_hp) + "/" + format(player.l.empty_max_hp)
                },
               {"color": "#FFFFFF", "font-size": "20px" }],
            ["display-text",
                function() {
                    return "敌人的攻击力为" + format(player.l.empty_atk)
                },
               {"color": "#FFFFFF", "font-size": "20px" }],"blank",
            "clickables",
            ["display-text",
                function() {
                    if(player.l.hp.lt(1)) return "你死了"
                },
               {"color": "#FF0000", "font-size": "120px" }],
            ],
        },
    },
    upgrades: {
         
    },
    clickables: {
        11: {
            title: "攻击",
            onClick(){
                player.l.empty_hp = player.l.empty_hp.sub(player.l.atk)
            },
            canClick(){
                return inChallenge("g",11) && player.l.hp.gte(0)
            },
        },
    },
    row: 1,
    hotkeys: [
        {key: "l", description: "L: 获得一个律师", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})