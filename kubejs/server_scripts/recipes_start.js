// priority: 0


onEvent('recipes', event => {
 	event.remove({output: 'stonechest:part_cobblestone'})
	event.shaped('stonechest:part_cobblestone', [
		'S ',
		' S'
	], {
		S: 'compressium:cobblestone_1'
	}
	)


	// Stone Pickaxe
	event.shaped(Item.of('tconstruct:tool_handle', '{Material:"tconstruct:rock#stone"}'), [
		'S',
		'S'
	], {
		S: 'minecraft:cobblestone'
	})

	event.shaped(Item.of('tconstruct:tool_binding', '{Material:"tconstruct:rock#stone"}'), [
		'SS',
		'SS'
	], {
		S: Item.of('tconstruct:tool_handle', '{Material:"tconstruct:rock#stone"}'),
	})

	event.shaped(Item.of('tconstruct:pick_head', '{Material:"tconstruct:rock#stone"}'), [
		'SS',
		' S',
	], {
		S: 'minecraft:cobblestone'
	})

	event.shaped(Item.of('tconstruct:pickaxe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:rock#stone","tconstruct:rock#stone","tconstruct:rock#stone"],tic_modifiers:[{level:1s,name:"tconstruct:piercing"},{level:3s,name:"tconstruct:stonebound"}],tic_multipliers:{},tic_persistent_data:{abilities:1,upgrades:3},tic_stats:{"tconstruct:attack_damage":1.0f,"tconstruct:attack_speed":1.2f,"tconstruct:durability":116.0f,"tconstruct:harvest_tier":"minecraft:stone","tconstruct:mining_speed":4.2f}}'), [
		'BP',
		'S ',
	], {
		B: Item.of('tconstruct:tool_binding', '{Material:"tconstruct:rock#stone"}'),
		P: Item.of('tconstruct:pick_head', '{Material:"tconstruct:rock#stone"}'),
		S: Item.of('tconstruct:tool_handle', '{Material:"tconstruct:rock#stone"}'),
	})

	event.shaped(Item.of('tconstruct:repair_kit', '{Material:"tconstruct:rock#stone"}'), [
		'SS',
		'SS'
	], {
		S: 'minecraft:cobblestone'
	})

	// Dirt Fragment

	event.shaped('minecraft:dirt', [
		'SS',
		'SS'
	], {
		S: 'kubejs:dirt_fragment'
	})



})
