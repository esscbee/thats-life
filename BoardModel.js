LIFE.BoardModel = function(width, height, board) {
	this.cells = [];
	this.setCellQ = [];
	this.liveNeighborList = [];
	this.width = width;
	this.height = height;

	// console.log(DEAD);

	// for(i = 0; i < width; i++) {
	// 	this.cells[i] = [];
	// 	for(j = 0; j < height; j++) {
	// 		this.cells[i][j] = DEAD;
	// 	}
	// }

	board.addToggleCallback(this);
	this.board = board;
}

LIFE.BoardModel.prototype = Object.create(Object.prototype);
LIFE.BoardModel.prototype.constructor = LIFE.BoardModel;

function set(arr, i, j, val) {
	var col = arr[i];
	if(col == undefined) {
		col = [];
		arr[i] = col;
	}
	col[j] = val;
}

function add(arr, i, j, val) {
	var col = arr[i];
	if(col == undefined) {
		col = [];
		arr[i] = col;
	}
	var curVal = col[j];
	if(curVal != undefined) {
		curVal += val;
		if(curVal < 0)
			curVal = 0;
	} else {
		if(val > 0)
			curVal = val;
		else
			curVal = 0;
	}
	col[j] = curVal;

}
LIFE.BoardModel.prototype.addNeighbors = function(i, j, val) {
	var arr = this.liveNeighborList;
	i = Number(i);
	j = Number(j);
	add(arr, i-1, j-1, val);
	add(arr, i-1, j, val);
	add(arr, i-1, j+1, val);
	add(arr, i, j-1, val);
	add(arr, i, j+1, val);
	add(arr, i+1, j-1, val);
	add(arr, i+1, j, val);
	add(arr, i+1, j+1, val);
}

function appendUpdate(arr, i, j, val) {
	var o = {i: Number(i), j: Number(j), val: val};
	arr[arr.length] = o;
}

LIFE.BoardModel.prototype.generate = function() {
	if(this.generating)
		return;
	this.generating = true;
	var startDate = new Date();
	// straightfoward and slow
	var needsRender = false;
	var newCells = [];
	var cellsToProcess = [];
	var anyToProcess = false;

	for(var i in this.cells) {
		var col = this.cells[i];
		for(var j in col) {
			var val = col[j];
			if(val == undefined || val != ALIVE)
				continue;
			anyToProcess = true;
			var ii = Number(i);
			var jj = Number(j);
			set(cellsToProcess, ii-1, jj-1, true);
			set(cellsToProcess, ii-1, jj, true);
			set(cellsToProcess, ii-1, jj+1, true);
			set(cellsToProcess, ii, jj-1, true);
			set(cellsToProcess, ii, jj, true);
			set(cellsToProcess, ii, jj+1, true);
			set(cellsToProcess, ii+1, jj-1, true);
			set(cellsToProcess, ii+1, jj, true);
			set(cellsToProcess, ii+1, jj+1, true);
		}
	}
	var endScan = new Date();
	// console.log('Generate scan: ' + (endScan.getTime() - startDate.getTime()));
	if(anyToProcess) {
		var trailValue = DEAD;
		var neighborUpdate = [];
		for(var i in cellsToProcess) {
			var toProcess = cellsToProcess[i];
			if(toProcess == undefined)
				continue;
			newCells[i] = [];
			var col = this.cells[i];
			for(var j in toProcess) {
				if(toProcess[j] == undefined)
					continue;
				var liveNeighbors = this.liveNeighbors(i, j);
				var val = undefined;
				if(col)
					val = col[j];
				if(val == undefined)
					val = DEAD;
				if(val == ALIVE) {
					if(liveNeighbors <= 1 || liveNeighbors >= 4) {
						this.board.setCell(i, j, trailValue, false);
						appendUpdate(neighborUpdate, i, j, -1);
						val = trailValue;
						needsRender = true;
					}
				} else {
					if(liveNeighbors == 3) {
						this.board.setCell(i, j, ALIVE, false);
						appendUpdate(neighborUpdate, i, j, 1);
						val = ALIVE;
						needsRender = true;
					}
				}
				newCells[i][j] = val;
			}
		}
		var endGenerate = new Date();
		// console.log('Generate - endGenerate: ' + (endGenerate.getTime() - endScan.getTime()));
		for(var i in neighborUpdate) {
			var o = neighborUpdate[i];
			this.addNeighbors(o.i, o.j, o.val);
		}
		var endNeighbors = new Date();
		// console.log('Generate - endNeighbors (' + neighborUpdate.length + '): ' + (endNeighbors.getTime() - endGenerate.getTime()));
		this.cells = newCells;
		if(false && needsRender)
			board.render();
	}
	this.generating = false;
	// console.log('Done generating: ');
	// console.dir(this.cells);
	// console.dir(this.liveNeighborList);
	if(this.setCellQ.length != 0) {
		for(var n in this.setCellQ) {
			var o = this.setCellQ[n];
			this.setCell(o.i, o.j, o.state);
		}
		this.setCellQ = [];
	}

	// console.log('Generate - render: ' + (endDate.getTime() - endNeighbors.getTime() ));
}

LIFE.BoardModel.prototype.setCell = function(i, j, state, render) {
	// console.log('setCell: (' + i + ', ' + j + ') ' + state);
	if(isNaN(i) || isNaN(j))
		return;
	if(this.generating) {
		this.setCellQ.push({i: i, j: j, state: state});
		// console.log('already geenrating');
		return;
	}
	var col = this.cells[i];
	if(state == undefined) {
		state = ALIVE;
		if(col != undefined) {
			var cell = col[j];
			if(cell == ALIVE)
				state = DEAD;
		}
	}
	var inc = state == ALIVE ? 1 : -1;
	if(col) {
		var val = col[j];
		if(val != undefined && val == state)
			return;
	} else {
		if(state == DEAD)
			return;
		col = [];
		this.cells[i] = col;
	}
	col[j] = state;
	this.addNeighbors(i, j, inc);
	this.board.setCell(i, j, state, render);
	// console.log('setCell');
	// console.dir(this.cells);
	// console.dir(this.liveNeighborList);
}

LIFE.BoardModel.prototype.play = function(window, state) {
	var newState = state;
	if(newState == undefined) {
		if(this.playing == undefined)
			newState = true;
	}
	if(newState != undefined && newState) {
		this.playing = true;
		var This = this;
		function play() {
			if(This.playing != undefined) {
				This.generate();
				window.setTimeout(play, 100);
			}
		}
		play();
	} else {
		this.playing = undefined;
	}
	return this.playing;
}

LIFE.BoardModel.prototype.liveNeighbors = function(i, j) {
	var ret = 0;
	var col = this.liveNeighborList[i];
	if(col) {
		var val = col[j];
		if(val)
			ret = val;
	}
	return ret;
}
LIFE.BoardModel.prototype.term = function() {
	this.cells = null;
	this.liveNeighborList = null;
	this.board = null;
}