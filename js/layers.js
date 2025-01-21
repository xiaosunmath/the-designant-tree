addLayer("d", {
    infoboxes:{
        introBox:{
            title:"设计者",
            body(){
                return "你开始了设计蚂蚁，现在你需要雇佣更多的设计者来接近蚂蚁"
            }
        },
    },
    name: "designer", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "D", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        designpower: new Decimal(0),
    }},
    color: "#999999",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "设计者", // Name of prestige currency
    baseResource: "设计点", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(0.45)
    },
    designpowergain(){
        let bas = n(1.45)
        if(hasUpgrade("d",21)) bas = bas.add(upgradeEffect("d",21))
        if(hasUpgrade("d",22)) bas = bas.add(upgradeEffect("d",22))
        let gain = bas.pow(player.d.points)
        if(hasUpgrade("d",11)) gain = gain.mul(upgradeEffect("d",11))
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
    effectDescription(){
        let disp = "每秒产生 <h3 style='color:gray;text-shadow:0px 0px 5px;'>" 
        + format(tmp.d.designpowergain) + "</h3> 设计力量"
        return disp
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
               "milestones","buyables","upgrades"],
        },
    },
    update(diff){
        player.d.designpower = player.d.designpower.add(tmp.d.designpowergain.mul(diff))
    },
    doReset(){
        player.d.designpower = zero
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
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "d", description: "D: 获得一个设计者", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})
