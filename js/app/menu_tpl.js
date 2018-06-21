/*
  --- menu level scope settins structure --- 
  note that this structure has changed its format since previous version.
  Now this structure has the same layout as Tigra Menu GOLD.
  Format description can be found in product documentation.
*/
var MENU_POS = [{
	// item sizes
	'height': 23,
	'width': 91,
	// menu block offset from the origin:
	//	for root level origin is upper left corner of the page
	//	for other levels origin is upper left corner of parent item
	'block_top': 1,
	'block_left': 8,
	// offsets between items of the same level
	'top': 0,
	'left': 92,
	// time in milliseconds before menu is hidden after cursor has gone out
	// of any items
	'hide_delay': 600,
	'expd_delay': 200,
	'css' : {
		'outer' : ['m0l0oout', 'm0l0oover'],
		'inner' : ['m0l0iout', 'm0l0iover']
	}
},{
	'height': 20,
	'width': 140,
	'block_top': 25,
	'block_left': 0,
	'top': 19,
	'left': 0,
	'css' : {
		'outer' : ['m0l1oout', 'm0l1oover'],
		'inner' : ['m0l1iout', 'm0l1iover']
	}
},{
	'block_top': 7,
	'block_left': 100
}
]
