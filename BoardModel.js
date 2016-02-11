LIFE.BoardModel = function(width, height, board, fnStatus) {
	this.cells = [];
	this.liveNeighborList = [];
	this.width = width;
	this.height = height;
	this.liveCellCount = 0;
	this.lastLiveCellCount = 0;
	this.fnStatus = fnStatus;
	this.generationCount = 1;
	this.playSpeed = 100;
	this.doAnimate = true;

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
			if(val == undefined || val == 0)
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
		var trailValue = 0;
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
					val = 0;
				if(val != 0) {
					if(liveNeighbors <= 1 || liveNeighbors >= 4) {
						if(single || this.doAnimate) {
							this.board.setCell(i, j, false, this.generationCount, false);
						}
						appendUpdate(neighborUpdate, i, j, -1);
						val = trailValue;
						needsRender = true;
						this.liveCellCount--;
					}
				} else {
					if(liveNeighbors == 3) {
						if(single || this.doAnimate) {
							this.board.setCell(i, j, true, this.generationCount, false);
						}
						appendUpdate(neighborUpdate, i, j, 1);
						val = this.generationCount;
						needsRender = true;
						this.liveCellCount++;
					}
				}
				if(val != 0) {
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
	if(single || 0 == (this.generationCount % 50))
		this.compressBoard();

	if(single)
		board.render();

	// console.log('Generate - render: ' + (endDate.getTime() - endNeighbors.getTime() ));
}

LIFE.BoardModel.prototype.updateStatus = function(caption) {
	var growth = this.liveCellCount - this.lastLiveCellCount;
	this.lastLiveCellCount = this.liveCellCount;
	if(!caption)
		caption = '';
	else
		caption = caption + '  ';
	var webGL = board.isWebGL() ? '[WebGL]' : '[Canvas]';
	if(this.fnStatus)
		this.fnStatus(caption + this.liveCellCount + ' living cells at generation ' + this.generationCount + ' (sp: ' + this.playSpeed + ') ' + webGL, growth);
}

LIFE.BoardModel.prototype.setCell = function(i, j, state, render) {
	// console.log('BoardModel.setCell: (' + i + ', ' + j + ') ' + state);
	if(isNaN(i) || isNaN(j))
		return;
	// must be disposing
	if(!this.cells)
		return;
	var col = this.cells[i];
	if(state == undefined) {
		state = true;
		if(col != undefined) {
			var cell = col[j];
			if(cell != 0)
				state = false;
		}
	}
	// console.log(' resulting state: ' + state);
	var inc = state ? 1 : -1;
	if(col) {
		var val = col[j];
		if(val == undefined && !state)
			return;
		if(val && state)
			return;
	} else {
		if(!state)
			return;
		col = [];
		this.cells[i] = col;
	}
	if(!state) {
		if(col[j])
			delete(col[j]);
		else
			return;
	} else {
		col[j] = this.generationCount;
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
			if(!This)
				return;
			if(This.playing != undefined) {
				This.generate();
				window.setTimeout(play, This.playSpeed);
			}
		}
		play();
	} else {
		this.playing = undefined;
		this.compressBoard();
		this.syncBoard();
	}
	this.fnStatus('play', undefined, this.playing);
	this.board.playing(this.playing);
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
LIFE.BoardModel.prototype.setSpeed = function(newSpeed) {
	this.playSpeed = newSpeed;
	this.board.setSpeed(newSpeed);
	this.updateStatus();
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
	this.board.compressBoard();
}
LIFE.BoardModel.prototype.dispose = function() {
	var here = 20;
	delete this.cells;
	this.board = undefined;
	delete this.liveNeighborList;
}
LIFE.BoardModel.prototype.getContents = function() {
	if(this.cells == undefined)
		return "";
	var json = {};
	for(var i in this.cells) {
		var inCol = this.cells[i];
		var col = {};
		for(var j in inCol) {
			col[j] = inCol[j];
		}
		json[i] = col;
	}
	return JSON.stringify(json);
}
LIFE.BoardModel.prototype.setBoard = function(board) {
	this.board = board;
	if(this.cells == undefined)
		return;
	for(var i in this.cells) {
		var col = this.cells[i];
		for(var j in col) {
			var thisCell = col[j];
			if(thisCell != 0) {
				this.board.setCell(i, j, true, thisCell, false);
			}
		}
	}
	this.board.addToggleCallback(this);
}
LIFE.BoardModel.prototype.animate = function(doAnimate) {
	if(this.cells && this.board) {
		if(!this.doAnimate)
			this.syncBoard();
		this.doAnimate = doAnimate;
		this.board.animate(doAnimate);
	}
}
LIFE.BoardModel.prototype.syncBoard = function() {
	if(this.doAnimate || !this.board) {
		return;
	}
	this.board.clearCells();
	this.setBoard(this.board);
	this.board.render();
}
