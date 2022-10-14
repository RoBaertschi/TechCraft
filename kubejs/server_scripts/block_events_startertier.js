// priority: 0

onEvent('block.break', event => {
    if (event.block == 'minecraft:cobblestone' && Math.random() < 0.05) {
        event.player.give('kubejs:dirt_fragment')
    }
}) 