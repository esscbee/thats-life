LIFE.BoardModel = function(width, height, board) {
	this.cells = [];
	this.liveNeighborList = [];
	this.width = width;
	this.height = height;

	console.log(DEAD);

	for(i = 0; i < width; i++) {
		this.cells[i] = [];
		for(j = 0; j < height; j++) {
			this.cells[i][j] = DEAD;
		}
	}

	board.addToggleCallback(this);
	this.board = board;
}

LIFE.BoardModel.prototype = Object.create(Object.prototype);
LIFE.BoardModel.prototype.constructor = LIFE.BoardModel;
LIFE.BoardModel.prototype.toggleCallBack = function(x, y, state) {
	this.board[x][y] = state;
}

LIFE.BoardModel.prototype.generate_old = function() {
	var startDate = new Date();
	// straightfoward and slow
	var needsRender = false;
	var newCells = [];
	var trailValue = DEAD;
	for(i = 0; i < this.width; i++) {
		newCells[i] = [];
		for(j = 0; j < this.height; j++) {
			var liveNeighbors = this.liveNeighbors(i, j);
			var val = this.cells[i][j];
			if(val == ALIVE) {
				if(liveNeighbors <= 1 || liveNeighbors >= 4) {
					this.board.setCell(i, j, trailValue, false);
					val = trailValue;
					needsRender = true;
				}
			} else {
				if(liveNeighbors == 3) {
					this.board.setCell(i, j, ALIVE, false);
					val = ALIVE;
					needsRender = true;
				}
			}
			newCells[i][j] = val;
		}
	}
	this.cells = newCells;
	var endDate = new Date();
	if(needsRender)
		board.render();
	console.log('Generate: ' + (endDate.getTime() - startDate.getTime() ));
}

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
	if(curVal) {
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
	var o = {i: i, j: j, val: val};
	arr[arr.length] = o;
}

LIFE.BoardModel.prototype.generate = function() {
	var startDate = new Date();
	// straightfoward and slow
	var needsRender = false;
	var newCells = [];
	var cellsToProcess = [];
	var anyToProcess = false;

	for(var i = 0; i < this.width; i++) {
		var col = this.cells[i];
		if(col == undefined)
			continue;
		for(var j = 0 ; j < this.height; j++) {
			var val = col[j];
			if(val == undefined || val != ALIVE)
				continue;
			anyToProcess = true;
			set(cellsToProcess, i-1, j-1, true);
			set(cellsToProcess, i-1, j, true);
			set(cellsToProcess, i-1, j+1, true);
			set(cellsToProcess, i, j-1, true);
			set(cellsToProcess, i, j, true);
			set(cellsToProcess, i, j+1, true);
			set(cellsToProcess, i+1, j-1, true);
			set(cellsToProcess, i+1, j, true);
			set(cellsToProcess, i+1, j+1, true);
		}
	}
	var endScan = new Date();
	console.log('Generate scan: ' + (endScan.getTime() - startDate.getTime()));
	if(!anyToProcess)
		return;
	var trailValue = DEAD;
	var neighborUpdate = [];
	for(var i = 0; i < this.width; i++) {
		var toProcess = cellsToProcess[i];
		if(toProcess == undefined)
			continue;
		newCells[i] = [];
		for(var j = 0; j < this.height; j++) {
			if(toProcess[j] == undefined)
				continue;
			var liveNeighbors = this.liveNeighbors(i, j);
			var col = this.cells[i];

			var val;
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
	console.log('Generate - endGenerate: ' + (endGenerate.getTime() - endScan.getTime()));
	for(var i in neighborUpdate) {
		var o = neighborUpdate[i];
		this.addNeighbors(o.i, o.j, o.val);
	}
	var endNeighbors = new Date();
	console.log('Generate - endNeighbors (' + neighborUpdate.length + '): ' + (endNeighbors.getTime() - endGenerate.getTime()));
	this.cells = newCells;
	if(needsRender)
		board.render();
	var endDate = new Date();
	console.log('Generate - render: ' + (endDate.getTime() - endNeighbors.getTime() ));
}

LIFE.BoardModel.prototype.setCell = function(i, j, state, render) {
	var col = this.cells[i];
	var inc = state == ALIVE ? 1 : -1;
	if(col) {
		var val = col[j];
		if(val && val == state)
			return;
	} else {
		if(state == DEAD)
			return;
		col = [];
		this.cells[i] = col;
	}
	col[j] = state;
	this.addNeighbors(i, j, 1);
	this.board.setCell(i, j, state, render);
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