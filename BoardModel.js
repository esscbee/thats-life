LIFE.BoardModel = function(width, height, board) {
	this.cells = [];
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
	if(!col) {
		col = [];
		arr[i] = col;
	}
	col[j] = val;
}
LIFE.BoardModel.prototype.generate = function() {
	var startDate = new Date();
	// straightfoward and slow
	var needsRender = false;
	var newCells = [];
	var cellsToProcess = [];
	var anyToProcess = false;

	for(i = 0; i < this.width; i++) {
		var col = this.cells[i];
		if(!col)
			continue;
		for(j = 0 ; j < this.height; j++) {
			var val = col[j];
			if(!val || val != ALIVE)
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
	if(!anyToProcess)
		return;
	var trailValue = DEAD;
	for(i = 0; i < this.width; i++) {
		var toProcess = cellsToProcess[i];
		if(!toProcess)
			continue;
		newCells[i] = [];
		for(j = 0; j < this.height; j++) {
			if(!toProcess[j])
				continue;
			var liveNeighbors = this.liveNeighbors(i, j);
			var col = this.cells[i];

			var val;
			if(col)
				val = col[j];
			if(!val)
				val = DEAD;
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

LIFE.BoardModel.prototype.setCell = function(i, j, state) {
	var col = this.cells[i];
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
	this.board.setCell(i, j, state);
}

LIFE.BoardModel.prototype.liveNeighbors = function(i, j) {
	var ret = 0;
	for(ii = i - 1 ; ii <= (i + 1); ii++) {
		var col = this.cells[ii];
		if(!col)
			continue;
		for(jj = j - 1; jj <= (j + 1); jj++) {
			if(ii == i && jj == j)
				continue;
			var val = col[jj];
			if(val && val == ALIVE)
				ret++;
		}
	}
	return ret;
}