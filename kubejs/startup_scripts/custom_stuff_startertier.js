// priority: 0

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')

    // Dirt Fragment
    event.create('dirt_fragment').displayName('Dirt Fragment')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})