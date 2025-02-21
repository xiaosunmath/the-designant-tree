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
        21:{
            name: "可恶的",
            done() {return hasChallenge("g",11)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "第一次向他人提出诉讼并胜利", 
            textStyle: {'color': '#FF0000'},
        },
        22:{
            name: "扩张员工",
            done() {return getClickableState("g",42)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "解锁员工", 
            textStyle: {'color': '#FFFFFF'},
        },
        23:{
            name: "员工增强",
            done() {return hasUpgrade("e",23)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "解锁员工增强", 
            textStyle: {'color': '#FFFFFF'},
        },
        24:{
            name: "击破所有公司",
            done() {return hasChallenge("g",21)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "完成第三个g层挑战", 
            textStyle: {'color': '#FF9999'},
        },
        25:{
            name: "坍缩近在眼前",
            done() {return hasUpgrade("e",31)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "获得员工层的最后一个升级", 
            textStyle: {'color': '#55CC55'},
        },
        31:{
            name: "坍缩!",
            done() {return player.c.points.gte(1)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "坍缩一次", 
            textStyle: {'color': '#55CC55'},
        },
        32:{
            name: "完全自动化",
            done() {return hasMilestone("c",4)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "获得第五个坍缩里程碑", 
            textStyle: {'color': '#55CC55'},
        },
        33:{
            name: "这是什么",
            done() {return hasUpgrade("c",15)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "获得夸克", 
            textStyle: {'color': '#CC00CC'},
        },
        34:{
            name: "下一个资源",
            done() {return hasUpgrade("c",25)}, 
            onComplete(){player.a.points=player.a.points.add(1)},
            tooltip: "获得原子", 
            textStyle: {'color': '#2277FF'},
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
        let roo = n(10)
        if(getGridData("e",203)) roo = n(15)
        if(player.d.points.gte(1000)) exp = exp.div(player.d.points.sub(998).root(roo))
        return exp
    },
    designpowergain(){
        let bas = n(1.45)
        if(hasUpgrade("d",21)) bas = bas.add(upgradeEffect("d",21))
        if(hasUpgrade("d",22)) bas = bas.add(upgradeEffect("d",22))
        let gain = bas.pow(player.d.points.min(1000))
        if(hasUpgrade("d",11)) gain = gain.mul(upgradeEffect("d",11))
        gain = gain.mul(tmp.g.gameeffect)
        if(getGridData("e",401)) gain = gain.pow(1.02)
        
        if(gain.gte(1e60)) gain = gain.div(1e60).root(3).mul(1e60)
        
        if(hasUpgrade("c",11)) gain = gain.mul(100)
        if(player.d.points.gte(1)) return gain
        else return zero
    },
    designpowereffect(){
        if(!hasUpgrade("c",13)){
            let effe = n(1.7)
            if(hasUpgrade("d",23)) effe = n(1.08)
            if(hasUpgrade("d",24)) effe = effe.sub(1).div(player.d.designpower.add(1).log(10).pow(1.75).add(1)).add(1)
            effe = effe.max(1.00000001)
            return player.d.designpower.add(1).log(effe).add(1)
        }
        else return one
        
    },
    companypowergain(){
        let gain = player.d.points.mul(player.points.add(1).log(10).add(1).pow(3))
        if(hasUpgrade("e",22)) gain = player.d.points.pow(2).mul(player.points.add(1).root(20))
        if(hasUpgrade("g",14)) gain = gain.mul(upgradeEffect("g",14))
        gain = gain.mul(buyableEffect("d",11))
        if(hasUpgrade("g",21)) gain = gain.mul(upgradeEffect("g",21))
        if(getClickableState("g",21)) gain = gain.mul(tmp.d.othercompanypowereffect)
        if(getGridData("e",101)) gain = gain.mul(gridEffect("e",101))
        if(getGridData("e",204)) gain = gain.mul(gridEffect("e",204))
        if(hasChallenge("g",11)) gain = gain.pow(1.1)
        
        if(hasUpgrade("c",11)) gain = gain.mul(100)
        return gain
    },
    companypowereffect(){
        let effe = player.d.companypower.add(1).root(3)
        return effe
    },
    othercompanypowergain(){
        let gain = player.d.companypower.add(1).log(10).pow(3)
        if(getGridData("e",103)) gain = gain.mul(100)
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
        + format(tmp.d.designpowergain) + "</h3> 设计力量（最多计入1000个设计者）"
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

        if(hasMilestone("c",4) && layers.d.buyables[11].canAfford()) layers.d.buyables[11].buy()
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
            if(resettingLayer == "g" && (hasMilestone("g",0) || hasMilestone("c",1))){
                kept.push("upgrades")
            }
            if(resettingLayer == "l"){
                kept.push("upgrades")
                kept.push("buyables")
            }
            if(resettingLayer == "c"){
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
addLayer("e", {
    infoboxes:{
        introBox:{
            title:"员工",
            body(){
                return "公司需要更多的员工才能稳定<br>本层级的升级不会被重置<br>什么？你说什么时候才能设计蚂蚁，还远着呢"
            }
        },
        upBox:{
            title:"员工增强",
            body(){
                return "员工的数量可以增强everything<br>这个也不会重置"
            }
        },
    },
    name: "employee",
    symbol: "E",
    position: 1,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        up: new Decimal(0),
        tup: new Decimal(0),
    }},
    color: "#FFFFFF",
    requires: new Decimal(10),
    resource: "员工",
    baseResource: "设计点",
    baseAmount() {return player.points},
    type: "normal",
    branches: ["d","l"],
    exponent(){
        let exp = 0.02
        if(getGridData("e",302)) exp = 0.023
        return exp
    },
    gainMult() {
        let mult = new Decimal(1)
        if(hasUpgrade("e",11)) mult = mult.mul(upgradeEffect("e",11))
        if(hasUpgrade("e",12)) mult = mult.mul(upgradeEffect("e",12))
        if(hasUpgrade("e",13)) mult = mult.mul(upgradeEffect("e",13))
        if(hasUpgrade("e",14)) mult = mult.mul(100)
        if(hasChallenge("g",12)) mult = mult.mul(challengeEffect("g",12))
        if(getGridData("e",102)) mult = mult.mul(10)
        if(getGridData("e",202)) mult = mult.mul(gridEffect("e",202))
        if(getGridData("e",304)) mult = mult.mul(gridEffect("e",304))
        if(hasUpgrade("e",24)) mult = mult.mul(10)

        if(hasUpgrade("c",11)) mult = mult.mul(100)
        return mult
    },
    gainExp() {
        let exp = new Decimal(1)
        return exp
    },
    canReset(){
        return getClickableState("g",42)
    },
    effectDescription(){
        let disp = "增益设计点获取x <h3 style='color:white;text-shadow:0px 0px 5px;'>" 
        + format(tmp.e.employee_effect) + "</h3>"
        return disp
    },
    employee_effect(){
        let power = n(0.7)
        if(hasUpgrade("e",21)) power = power.mul(2)
        let effe = player.e.points.pow(power).add(1)
        return effe
    },
    update(diff){
        player.e.tup = buyableEffect('e',11)
        if(hasChallenge("g",21)) player.e.tup = player.e.tup.add(5)
        if(hasUpgrade("e",25)) player.e.tup = player.e.tup.add(5)
        if(hasUpgrade("c",24)) player.e.tup = player.e.tup.mul(upgradeEffect("c",24))
        
        if(hasMilestone("c",4) && layers.e.buyables[11].canAfford()) layers.e.buyables[11].buy()
    },
    tabFormat: {
        "main": {
            content: [ ["infobox","introBox"],
            "main-display","prestige-button","blank","blank","upgrades","blank","blank","buyables"],
        },
        "upgrades": {
            content: [ ["infobox","upBox"],
            "main-display","prestige-button","blank","blank",
            ["display-text",
                function() {
                    return '你有 ' + "<h3 style='color:white;text-shadow:0px 0px 5px;'>"  + format(player.e.up) + "</h3> 员工增强点数"
                },
               {"color": "#FFFFFF", "font-size": "20px" }],
            ["display-text",
                function() {
                    return "你总共有"  + format(player.e.tup) + "员工增强点数"
                },
               {"color": "#FFFFFF", "font-size": "15px" }],"blank",
               "clickables","blank","grid"],
            unlocked(){
                return hasUpgrade("e",23)
            }
        },
    },
    upgrades: {
        11: {
            title:"百万规模",
            description(){return "基于员工倍增员工获取<br>当前：x" + format(upgradeEffect("e",11))},
            cost: new Decimal(1e6),
            effect(){
                return player.e.points.add(1).log(5).add(1)
            },
        },
        12: {
            title:"一千万个",
            description(){return "基于公司力量倍增员工获取<br>当前：x" + format(upgradeEffect("e",12))},
            cost: new Decimal(1e7),
            effect(){
                return player.d.companypower.add(1).log(7).add(1)
            },
        },
        13: {
            title:"设计人类",
            description(){return "基于设计点倍增员工<br>当前：x" + format(upgradeEffect("e",13))},
            cost: new Decimal(1e9),
            effect(){
                return player.points.add(1).log(10).div(10).add(1)
            },
        },
        14: {
            title:"出发，星系！",
            description(){return "需要将公司扩张到其他星系<br>员工获取x100"},
            cost: new Decimal(8e9),
        },
        15: {
            title:"外星文明",
            description(){return "解锁下一个挑战"},
            cost: new Decimal(1e12),
        },
        21: {
            title:"效果增强",
            description(){return "改善员工效果的公式"},
            cost: new Decimal(1e15),
        },
        22: {
            title:"公司增强",
            description(){return "公司力量的获得公式更好"},
            cost: new Decimal(3e15),
        },
        23: {
            title:"更多的策略",
            description(){return "……"},
            cost: new Decimal(1e16),
        },
        24: {
            title:"并非极限",
            description(){return "员工获得x10"},
            cost: new Decimal(1e24),
            unlocked(){
                return hasUpgrade("e",23)
            },
        },
        25: {
            title:"永无止境",
            description(){return "员工增强点+5"},
            cost: new Decimal(1e30),
            unlocked(){
                return hasUpgrade("e",24)
            },
        },
        31: {
            title:"坍缩前的最后",
            description(){return "“升级增强”的效果基于总员工增强点"},
            cost: new Decimal(1e55),
            unlocked(){
                return hasUpgrade("e",24)
            },
            style: {'width':'300px'},
        },
    },
    doReset(resettingLayer){
        if(layers[resettingLayer].row > layers[this.layer].row){
            let kept = ["unlocked","auto"]
            if(resettingLayer == "g" || resettingLayer == "l"){
                kept.push("upgrades")
                kept.push("grid")
                kept.push("buyables")
            }
            if(resettingLayer == "c" && hasMilestone("c",3)){
                kept.push("upgrades")
                kept.push("grid")
            }
            layerDataReset(this.layer,kept)
        }
    },
    clickables: {
        11: {
            title: "洗点",
            display(){return "重置你的员工增强"},
            onClick(){
                for (let i in player["e"].grid)
                    player["e"].grid[i] = false
                player.e.up = player.e.tup
                player.e.points = zero
                player.points = zero
            },
            canClick(){
                return true
            },
        },
    },
    buyables: {
        11: {
            title: "员工增强",
            cost(x) {
                let bas = n(10)
                if(getBuyableAmount("e",11).gte(308)) x = x.sub(306).pow(2).add(306)
                return new Decimal(1e16).mul(bas.pow(x))
            },
            display() { 
                let disp = "员工增强点数+1<br>当前：+" + format(this.effect())
                disp = disp + "<br>价格：" + format(this.cost())
                if(getBuyableAmount("e",11).gte(308)) disp = disp + "(折算)"
                disp = disp + "<br>数量：" + format(getBuyableAmount("e",11))
                return disp
            },
            canAfford() { return player.e.points.gte(this.cost()) },
            buy() {
                //player.d.companypower = player.d.companypower.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.e.tup = player.e.tup.add(1)
                player.e.up = player.e.up.add(1)
            },
            effect(){
                return getBuyableAmount("e",11)
            },
        },
    },
    grid: {
        rows: 4,
        cols: 4,
        getStartData(id){
            return false
        },
        getUnlocked(id){
            return hasUpgrade("e",23)
        },
        getCanClick(data, id) {
            if(!getGridData(this.layer,id)){
                return player.e.up.gte(this.cost[(Math.floor(id / 100) - 1)*4 + id % 100])
            }
            else return false
        },
        onClick(data,id){
            if(!hasUpgrade("c",12)) player.e.up = player.e.up.sub(this.cost[(Math.floor(id / 100) - 1)*4 + id % 100])
            player[this.layer].grid[id] = true
            if(id == 402) player.e.up = player.e.up.add(3)
        },
        getTitle(data,id){
            if(id == 101) return "更强公司"
            if(id == 102) return "员工倍增"
            if(id == 103) return "分加强"
            if(id == 104) return "设计倍增"
            if(id == 201) return "更优质游戏"
            if(id == 202) return "溢出加强"
            if(id == 203) return "软上限削弱"
            if(id == 204) return "不再无用"
            if(id == 301) return "更多强化"
            if(id == 302) return "指数员工"
            if(id == 303) return "挑战"
            if(id == 304) return "升级增强"
            if(id == 401) return "力量指数"
            if(id == 402) return "+3"
            if(id == 403) return "点数指数"
            if(id == 404) return "坍缩一切"
            
        },
        getDisplay(data,id){
            let disp = "<br>"
            if(id == 101) disp = "基于员工倍增公司力量" + disp
            if(id == 102) disp = "员工获得x10" + disp
            if(id == 103) disp = "分公司力量获得x100" + disp
            if(id == 104) disp = "设计点获取x10000" + disp
            if(id == 201) disp = "游戏效果^1.02" + disp
            if(id == 202) disp = "基于(设计者-1000)倍增员工获取" + disp
            if(id == 203) disp = "弱化设计者的软上限" + disp
            if(id == 204) disp = "基于总公司增强点数量倍增公司力量" + disp
            if(id == 301) disp = "获得公司增强点的购买项价格底数降低" + disp
            if(id == 302) disp = "员工获得公式更好" + disp
            if(id == 303) disp = "解锁一个挑战" + disp
            if(id == 304) disp = "基于剩余的员工升级点数量倍增员工" + disp
            if(id == 401) disp = "设计力量获得^1.02" + disp
            if(id == 402) disp = "员工增强点+3" + disp
            if(id == 403) disp = "设计点获取^1.04" + disp
            if(id == 404) disp = "解锁下一个层级：坍缩" + disp
            return disp + "价格：" + this.cost[(Math.floor(id / 100) - 1)*4 + id % 100] + "员工升级点"
        },
        getEffect(data,id){
            if(id == 101) return player.e.points.add(1).root(6)
            if(id == 202) return player.d.points.sub(1000).max(0).root(2)
            if(id == 204) return player.g.total_company_study_points.add(1).pow(2)
            if(id == 301) return n(200)
            if(id == 304){
                if(hasUpgrade("e",31)) return six.pow(player.e.tup)
                return six.pow(player.e.up)
            }
        },
        getTooltip(data, id){
            if(id == 101) return "效果：x" + format(this.getEffect(data,id))
            if(id == 102) return "可以先买这个升级"
            if(id == 103) return "这个真的有用吗"
            if(id == 104) return "基础的乘数，意义不大"
            if(id == 201) return "这个或许可以做备选"
            if(id == 202) return "先买右边的<br>效果：x" + format(this.getEffect(data,id))
            if(id == 203) return "exp/((x-998)^1/10) -> exp/((x-998)^1/15)"
            if(id == 204) return "先买301<br>效果：x" + format(this.getEffect(data,id))
            if(id == 301) return "还行<br>效果：-" + format(this.getEffect(data,id))
            if(id == 302) return "值得的<br>x^0.02 -> x^0.023"
            if(id == 303) return "这次会更强"
            if(id == 304) return "我想你可以预留一点<br>效果：x" + format(this.getEffect(data,id))
            if(id == 401) return "主要是3游戏里程碑,但是基本没有用处"
            if(id == 402) return "这是一个纯加成，为什么不要呢"
            if(id == 403) return "这个指数还可以"
            if(id == 404) return "∅"
        },
        cost:[0,
            1,1,1,1,
            1,2,2,2,
            1,2,5,5,
            1,2,5,120],//这玩意竟然用不了b_e
        getStyle(data,id){
            let color = "#BF8F8F"
            if(getGridData(this.layer,id) == true) color = "#77BF5F"
            else if(this.getCanClick(data,id)) color = "white"

            return {"background-color":color,"height":'120px',"width":'120px'}
        },
    },
    passiveGeneration(){
        if(hasMilestone("c",3)) return 1
        else return 0
    },
    row: 0,
    hotkeys: [
        {key: "e", description: "E: 重置获得员工", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return getClickableState("g",42) || hasAchievement("a",31)}
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
    canBuyMax(){
        return hasMilestone("c",5)
    },
    gameeffect(){
        let exp = n(3)
        let effe = player.g.points.add(1).pow(exp)
        if(hasUpgrade("g",11)) effe = exp.pow(player.g.points)
        let softcappower = n(0.3)
        if(hasUpgrade("g",15)) softcappower = n(0.75)
        if(getClickableState("g",41)) softcappower = n(0.8)
        if(effe.gte(1e10)) effe = effe.div(1e10).pow(softcappower).mul(1e10)
        if(getGridData("e",201)) effe = effe.pow(1.02)
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
               ["row",[["clickable",41],"blank",["clickable",42]]],"blank",
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
        if(hasMilestone("c",3) && layers.g.buyables[11].canAfford()) layers.g.buyables[11].buy()
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
                if(hasUpgrade("c",13)) effe = effe.pow(1.1)
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
                if(getGridData("e",301)) bas = bas.sub(gridEffect("e",301))
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
                    if (!["11","33","42"].includes(i))
                        setClickableState("g",i,0)
                player.g.company_study_points = player.g.total_company_study_points
                player.d.othercompanypower = n(0)
                if(!player.d.points.gte(1000)) player.d.points = n(0)
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
        42: {
            title:"荣誉",
            display(){return "你击败了第一个对手，公司内的人感到自豪。你或许需要一些普通员工<br>需要：2公司增强点数和第一游戏挑战完成"},
            canClick(){
                return player.g.company_study_points.gte(2) && getClickableState(this.layer,this.id) != 1 && getClickableState(this.layer,33) == 1 && hasChallenge("g",11)
            },
            onClick(){
                setClickableState(this.layer, this.id,1)
                player.g.company_study_points = player.g.company_study_points.sub(2)
            },
            style() { 
                if(getClickableState(this.layer,this.id)==1) return {'background-color' : "#77BF5F"}
                else{
                    if(layers.g.clickables[this.id].canClick()) return {'background-color' : "#999999"}
                    else return {'background-color' : "#BF8F8F"}
                }
            },
            branches(){return ["33"]},
            unlocked(){
                return hasChallenge("g",11)
            }
        },
    },
    challenges: {
        11: {
            name: "邪恶的亲戚",
            challengeDescription: "你亲戚强硬的要求你将公司股份分它50%，并且抄袭了你的游戏",
            goalDescription: "让对方血量<0（其他挑战都默认这个了)",
            canComplete: function() {return player.l.empty_hp.lt(0)},
            rewardDescription: "公司力量^1.1",
            onEnter(){
                player.l.empty_max_hp = n(1000)
                player.l.empty_hp = player.l.empty_max_hp
                player.l.empty_atk = n(30)
                player.l.hp = player.l.max_hp
            },
            onExit(){
                player.l.empty_max_hp = n(0)
                player.l.empty_hp = n(0)
                player.l.empty_atk = n(0)
                player.l.hp = player.l.max_hp
            }
        },
        12: {
            name: "外星组织",
            challengeDescription: "你太强了，外星人也来抄袭你的游戏并初步取得了成就",
            canComplete: function() {return player.l.empty_hp.lt(0)},
            rewardDescription(){return "员工获取基于游戏数量倍增<br>当前：x" + format(this.rewardEffect())},
            rewardEffect(){
                return player.g.points.add(1)
            },
            onEnter(){
                player.l.empty_max_hp = n(5000)
                player.l.empty_hp = player.l.empty_max_hp
                player.l.empty_atk = n(100)
                player.l.hp = player.l.max_hp
            },
            onExit(){
                player.l.empty_max_hp = n(0)
                player.l.empty_hp = n(0)
                player.l.empty_atk = n(0)
                player.l.hp = player.l.max_hp
            },
            unlocked(){
                return hasUpgrade("e",15)
            }
        },
        21: {
            name: "现在是所有的公司",
            challengeDescription: "现在你已经远超所有公司的力量，但是这次你绝不能输(解锁技能,并且在战斗开始的100秒内你无视死亡)",
            canComplete: function() {return player.l.empty_hp.lt(0)},
            rewardDescription(){return "获得5个员工增强点"},
            onEnter(){
                player.l.empty_max_hp = n(10000000)
                player.l.empty_hp = player.l.empty_max_hp
                player.l.empty_atk = n(300000)
                player.l.hp = player.l.max_hp
                player.l.sec = n(100)
            },
            onExit(){
                player.l.empty_max_hp = n(0)
                player.l.empty_hp = n(0)
                player.l.empty_atk = n(0)
                player.l.hp = player.l.max_hp
            },
            unlocked(){
                return getGridData("e",303) || hasChallenge("g",21)
            }
        },
    },
    doReset(resettingLayer){
        if(layers[resettingLayer].row > layers[this.layer].row){
            let kept = ["unlocked","auto"]
            if(resettingLayer == "c" || hasMilestone("c",0)){
                kept.push("challenges")
            }
            if(resettingLayer == "c" || hasMilestone("c",2)){
                kept.push("upgrades")
                kept.push("clickables")
                kept.push("milestones")
            }
            layerDataReset(this.layer,kept)
        }
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
        unlocked: false,
		points: new Decimal(0),
        lawyer_power: new Decimal(0),
        empty_hp: new Decimal(0),
        empty_atk: new Decimal(0),
        empty_max_hp: new Decimal(0),
        hp: new Decimal(0),
        atk: new Decimal(0),
        max_hp: new Decimal(0),
        sec: new Decimal(0),
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
    autoPrestige(){
        return hasUpgrade("c",14)
    },
    resetsNothing(){
        return hasUpgrade("c",14)
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
        if(!inChallenge("g",11) && !inChallenge("g",12) && !inChallenge("g",21)){
            player.l.lawyer_power = player.l.lawyer_power.add(tmp.l.lawyer_power_gain.mul(diff))
            player.l.hp = player.l.max_hp
            player.l.atk = player.l.lawyer_power.root(3)
        }
        if(inChallenge("g",11) || inChallenge("g",12) || inChallenge("g",21)){
            if(player.l.empty_hp.gte(0))
                player.l.hp = player.l.hp.sub(player.l.empty_atk.mul(diff))
        }
        player.l.max_hp = player.d.companypower.add(1).root(15)
        
        if(inChallenge("g",21))
            player.l.sec = player.l.sec.sub(diff)
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
                    if(player.l.hp.lt(0) && (inChallenge("g",21) && player.l.sec.lt(0))) return "你死了,菜的不能再菜了"
                },
               {"color": "#FF0000", "font-size": "120px" }],
            ],
        },
    },
    clickables: {
        11: {
            title: "攻击",
            onClick(){
                player.l.empty_hp = player.l.empty_hp.sub(player.l.atk)
            },
            canClick(){
                let undied = inChallenge("g",21) && player.l.sec.gte(0)
                return ((inChallenge("g",11) || inChallenge("g",12)) && player.l.hp.gte(0)) || undied
            },
        },
        21: {
            title: "强化!",
            onClick(){
                player.l.atk = player.l.atk.mul(1.01)
            },
            onHold(){
                player.l.atk = player.l.atk.mul(1.01)
            },
            canClick(){
                return inChallenge("g",21)
            },
            unlocked(){
                return inChallenge("g",21)
            }
        },
    },
    row: 1,
    hotkeys: [
        {key: "l", description: "L: 获得一个律师", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return getClickableState("g",33) || hasAchievement("a",31)}
})
addLayer("c", {
    infoboxes:{
        introBox:{
            title:"坍缩",
            body(){
                return "你之前的一切都被坍缩了！别担心，会有强大的加成帮你更快的度过前面的流程"
            }
        },
        createBox:{
            title:"创造",
            body(){
                return "现在，你需要通过创造最基本的粒子，一步步构造出蚂蚁"
            }
        },
        quarkBox:{
            title:"夸克",
            body(){
                return "构造更多的夸克，合成原子（电子不做了）"
            }
        },
        atomBox:{
            title:"原子",
            body(){
                return "idkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidk"
            }
        },
    },
    name: "collapse points",
    symbol: "C",
    position: 0,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        total: new Decimal(0),
        best: new Decimal(0),

        quark: n(0),
        atom: n(0),
    }},
    color: "#55CC55",
    requires: new Decimal("1e500"),
    resource: "坍缩点",
    baseResource: "设计点",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.004,
    gainMult() {
        let mult = new Decimal(1)
        if(hasUpgrade("c",14)) mult = mult.mul(upgradeEffect("c",14))
        return mult
    },
    gainExp() {
        let exp = new Decimal(1)
        return exp
    },
    canReset(){
        return getGridData("e",404) && player.points.gte("1e500")
    },
    quarkGain(){
        let gain = one
        if(hasUpgrade("c",21)) gain = gain.mul(upgradeEffect("c",21))
        if(hasUpgrade("c",22)) gain = gain.mul(upgradeEffect("c",22))
        return gain
    },
    atomGain(){
        return "undefined"
    },
    update(diff){
        if(hasUpgrade("c",15)) player.c.quark = player.c.quark.add(tmp.c.quarkGain.mul(diff))
    },
    tabFormat: {
        "main": {
            content: [ ["infobox","introBox"],
            "main-display","prestige-button","resource-display",
            "blank","blank","milestones"],
        },
        "upgrades": {
            content: [ ["infobox","introBox"],
            "main-display","prestige-button","resource-display",
            "blank","blank",
            ["row",[["upgrade",11],["upgrade",12],["upgrade",13],["upgrade",14],["upgrade",15]]]
            ],
        },
        "create": {
            content: [ ["infobox","createBox"],
            "main-display","prestige-button",
            "blank","blank",["microtabs","main"]],
        },
    },
    microtabs:{
        main:{
            "quark":{
                content:[ ["infobox","quarkBox"],"blank",
                ["display-text",
                    function() {
                        return "你有" + quickColor(format(player.c.quark),"#CC00CC") + "夸克，每秒增加" + quickColor(format(tmp.c.quarkGain),"#CC00CC")
                    },
                   {"color": "#FFFFFF", "font-size": "20px" }],"blank","blank",
                ["row",[["upgrade",21],["upgrade",22],["upgrade",23],["upgrade",24],["upgrade",25]]]
                ]
            },
            "atom":{
                content:[ ["infobox","atomBox"],"blank",
                ["display-text",
                    function() {
                        return "你有" + quickColor(format(player.c.atom),"#2277FF") + "原子，每秒增加" + quickColor("undefined","#2277FF")
                    },
                   {"color": "#FFFFFF", "font-size": "20px" }],"blank","blank",
                ["display-text",
                    function() {
                        return "idkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidkidk"
                    },
                   {"color": "#FFFFFF", "font-size": "10px" }],
                ["display-text",
                    function() {
                        return "还没做/拜谢 /拜谢 "
                    },
                   {"color": "#FFFFFF", "font-size": "30px" }]
                ]
            },
        },
        
    },
    upgrades: {
        11: {
            title:"一个小小的加速",
            description(){return "设计点，设计力量，公司力量，分公司力量，员工获得x100(软上限后,指数后)"},
            cost: new Decimal(1),
        },
        12: {
            title:"跳跃",
            description(){return "购买员工增强不再消耗员工升级点"},
            cost: new Decimal(1),
            unlocked(){
                return hasUpgrade("c",11)
            },
        },
        13: {
            title:"增强",
            description(){return "移除设计力量的效果，但是游戏里程碑2的效果变为原来的1.1次方"},
            cost: new Decimal(50),
            unlocked(){
                return hasUpgrade("c",12)
            },
        },
        14: {
            title:"有用的律师",
            description(){return "基于律师力量倍增坍缩点获得,并且自动重置律师，律师不重置任何东西<br>当前：x" + format(this.effect())},
            effect(){
                return player.l.lawyer_power.add(1).log(10).add(1)
            },
            cost: new Decimal(150),
            unlocked(){
                return hasUpgrade("c",13)
            },
        },
        15: {
            title:"创造",
            description(){return "解锁创造界面"},
            cost: new Decimal(1000),
            unlocked(){
                return hasUpgrade("c",14)
            },
        },
        21: {
            title:"夸克自增",
            description(){return "基于夸克倍增夸克获得<br>当前：x" + format(this.effect())},
            cost: new Decimal(10),currencyDisplayName:"夸克",currencyInternalName:"quark",currencyLayer:"c",
            effect(){
                return player.c.quark.add(1).log(2).add(1)
            },
        },
        22: {
            title:"坍缩夸克",
            description(){return "基于坍缩点倍增夸克<br>当前：x" + format(this.effect())},
            cost: new Decimal(50),currencyDisplayName:"夸克",currencyInternalName:"quark",currencyLayer:"c",
            effect(){
                return player.c.points.add(1).root(3)
            },
        },
        23: {
            title:"设计提升",
            description(){return "基于夸克倍增设计点<br>当前：x" + format(this.effect())},
            cost: new Decimal(200),currencyDisplayName:"夸克",currencyInternalName:"quark",currencyLayer:"c",
            effect(){
                return player.c.quark.add(1).pow(30)
            },
        },
        24: {
            title:"员工指数提升",
            description(){return "基于夸克倍增员工增强点的数量<br>当前：x" + format(this.effect())},
            cost: new Decimal(20000),currencyDisplayName:"夸克",currencyInternalName:"quark",currencyLayer:"c",
            effect(){
                return player.c.quark.add(1).log(10).root(6)
            },
        },
        25: {
            title:"合成",
            description(){return "解锁下一个子资源"},
            cost: new Decimal(500000),currencyDisplayName:"夸克",currencyInternalName:"quark",currencyLayer:"c",
        },
    },
    milestones: {
        0: {
            requirementDescription: "总共1坍缩点",
            effectDescription: "保留游戏层挑战(真废物)",
            done() { return player.c.total.gte(1) }
        },
        1: {
            requirementDescription: "总共2坍缩点",
            effectDescription: "保留设计者层的升级",
            done() { return player.c.total.gte(2) }
        },
        2: {
            requirementDescription: "总共3坍缩点",
            effectDescription: "虽然这时你能一次获得10个坍缩点了，但是里程碑还是要这样写<br>保留游戏层升级和里程碑",
            done() { return player.c.total.gte(3) }
        },
        3: {
            requirementDescription: "总共20坍缩点",
            effectDescription: "每秒获得100%的员工，自动购买员工购买项，保留员工层的所有升级",
            done() { return player.c.total.gte(20) }
        },
        4: {
            requirementDescription: "总共30坍缩点",
            effectDescription: "自动购买购买项“公司扩建”，“公司增强点数”",
            done() { return player.c.total.gte(30) }
        },
        5: {
            requirementDescription: "总共100坍缩点",
            effectDescription: "重置获得最大游戏",
            done() { return player.c.total.gte(100) }
        },
    },
    row: 2,
    hotkeys: [
        {key: "c", description: "C: 进行一次坍缩", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})