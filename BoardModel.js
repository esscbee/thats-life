LIFE.BoardModel = function(width, height, board, fnStatus) {
	this.cells = [];
	this.setCellQ = [];
	this.liveNeighborList = [];
	this.width = width;
	this.height = height;
	this.liveCellCount = 0;
	this.lastLiveCellCount = 0;
	this.fnStatus = fnStatus;
	this.generationCount = 0;

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

LIFE.BoardModel.prototype.generate = function(single) {
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
						this.board.setCell(i, j, trailValue, this.generationCount, false);
						appendUpdate(neighborUpdate, i, j, -1);
						val = trailValue;
						needsRender = true;
						this.liveCellCount--;
					}
				} else {
					if(liveNeighbors == 3) {
						this.board.setCell(i, j, ALIVE, this.generationCount, false);
						appendUpdate(neighborUpdate, i, j, 1);
						val = ALIVE;
						needsRender = true;
						this.liveCellCount++;
					}
				}
				if(val == ALIVE) {
					newCells[i][j] = val;
				} else {
					if(newCells[i][j])
						delete newCells[i][j];
				}
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
		this.updateStatus();
	}
	this.generating = false;
	this.generationCount ++;
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
	if(single)
		this.compressBoard();

	// console.log('Generate - render: ' + (endDate.getTime() - endNeighbors.getTime() ));
}

LIFE.BoardModel.prototype.updateStatus = function(caption) {
	var growth = this.liveCellCount - this.lastLiveCellCount;
	this.lastLiveCellCount = this.liveCellCount;
	if(!caption)
		caption = '';
	else
		caption = caption + '  ';
	if(this.fnStatus)
		this.fnStatus(caption + this.liveCellCount + ' living cells at generation ' + this.generationCount, growth);
}

LIFE.BoardModel.prototype.setCell = function(i, j, state, render) {
	// console.log('BoardModel.setCell: (' + i + ', ' + j + ') ' + state);
	if(isNaN(i) || isNaN(j))
		return;
	if(this.generating) {
		this.setCellQ.push({i: i, j: j, state: state});
		// console.log('already geenrating');
		return;
	}
	// must be disposing
	if(!this.cells)
		return;
	var col = this.cells[i];
	if(state === false)
		state = DEAD;
	else if(state === true)
		state = ALIVE;
	else if(state == undefined) {
		state = ALIVE;
		if(col != undefined) {
			var cell = col[j];
			if(cell == ALIVE)
				state = DEAD;
		}
	}
	if(state != ALIVE)
		state = DEAD;
	// console.log(' resulting state: ' + state);
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
	if(state == DEAD) {
		if(col[j])
			delete(col[j]);
	} else {
		col[j] = state;
	}
	this.addNeighbors(i, j, inc);
	this.board.setCell(i, j, state, this.generationCount, render);
	this.liveCellCount += inc;
	this.updateStatus();
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
		this.compressBoard();
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
LIFE.BoardModel.prototype.dispose = function() {
	this.cells = undefined;
	this.liveNeighborList = undefined;
	this.board = undefined;
}

LIFE.BoardModel.prototype.compressBoard = function() {
	if(!this.cells)
		return;
	var rowCount = 0;
	var cellCount = 0;
	for(var i in this.cells) {
		var anyAlive = false;
		var col = this.cells[i];
		for(var j in col) {
			if(col[j] == 0) {
				delete col[j];
				cellCount++;
			}
			else
				anyAlive = true;
		}
		var here1 = 20;
		if(!anyAlive) {
			delete this.cells[i];
			rowCount++;
		}
	}
	// this.updateStatus(rowCount + ' rows deleted.');
	var here = 20;
}