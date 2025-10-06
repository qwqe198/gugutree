var uNode = { //这是代码中的节点代码 例如player.p可以调用该层级的数据 尽量使用顺手的字母什么的 不建议数字开头
    symbol: "U", // 这是节点上显示的字母
    position: 0, // 节点顺序
    startData() { return {
        unlocked: true, //是否开始就解锁
		points: new ExpantaNum(0),
    }},
    color: "lightblue",
    resource: "更新点", // 重置获得的资源名称
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    requires(){return player.points.pow(layers.u.guguexp()).add(1)},
    exponent:1,
    baseAmount(){return player.points},//基础资源数量
    baseResource:"小时",//基础资源名称
    gainMult() { // 资源获取数量倍率
        mult = new ExpantaNum(1)
        return mult
    },
    gainExp() { // 资源获取指数加成(与exponent相乘)
        var exp = new ExpantaNum(1)
        return exp
    },
   guguexp() { // 咕咕咕
        var exp = new ExpantaNum(0.8613531161467861)
        return exp
    },
     effectDescription() {
        return `
        更新点的获取公式为((小时^咕咕指数+1)x单次获得数量)
        `},
    row: 1, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
    layerShown(){return true},
     upgrades: {
        11: {
            description: `开始更新，先写一个升级，时间基于它本身变得更快.`,
            effect() {
                var eff = player.points.pow(0.5).add(1)
               
                return eff
            },
            effectDisplay() { return `x ${format(this.effect())}` },
            cost: n(1),
        },
         12: {
            description: `更新激励着你，感觉时间更快了,更新点加成时间获取.`,
            effect() {
                var eff = player.u.points.pow(0.5).add(1)
               
                return eff
            },
            effectDisplay() { return `x ${format(this.effect())}` },
            cost(){var cost = player.u.points.pow(0.8).add(1)
                 return cost},
        },
        13: {
            description: `更新也是升级，购买升级数量加成时间获取.`,
            effect() {
                var eff = player.u.upgrades.length+1
               
                return eff
            },
            effectDisplay() { return `x ${format(this.effect())}` },
            cost(){var cost = player.u.points.pow(0.98).add(1)
                 return cost},
        }, 
        14: {
            description: `更新(咕咕)需要漫长的时间，游戏时间加成时间获取.`,
            effect() {
                var eff = player.timePlayed**0.125
                return eff
            },
            effectDisplay() { return `x ${format(this.effect())}` },
            cost(){var cost = player.u.points.pow(0.995).add(1)
                 return cost},
        }, 
        15: {
            description: `只写升级有点太无聊了,解锁新东西(咕咕咕).`,
            
            cost(){var cost = player.u.points.pow(0.9977).add(1)
                 return cost},
        }, 
    },
}

addLayer("u", uNode)
