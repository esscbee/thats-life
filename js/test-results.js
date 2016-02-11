var testResults = [];


var initializeTests = function() {

}

var assert = function(cond, quote) {
}
var checkResults = function(testNum, jsonResults) {
	var results = JSON.parse(jsonResults);
	if(testResults[testNum]) {
		var errors = testResults[testNum](results);
		console.log(errors);
	} else {
		// generate the test
		var funcstr = 'testResults[' + testNum + '] = function(results) {\n  var col, errors = "";\n';
		for(var i in results) {
			funcstr += "  col=results[" + i + "];\n";
			var col = results[i];
			for(var j in col) {
				funcstr += "  if(col[" + j + "] != " + col[j] + ") ";
				funcstr += 'errors += "col[' + j + '] != ' + col[j] + '";\n';
			}
		}
		funcstr += "  return errors;\n}"
		// console.log(funcstr);
		// console.dir(results);
	}
}


testResults[0] = function(results) {
  var col, errors = "";
  col=results[0];
  if(col[100] != 10)
    errors += "col[100] != 10";
  col=results[1];
  if(col[100] != 10)
    errors += "col[100] != 10";
  col=results[2];
  if(col[99] != 9)
    errors += "col[99] != 9";
  if(col[100] != 9)
    errors += "col[100] != 9";
  if(col[101] != 9)
    errors += "col[101] != 9";
  col=results[3];
  if(col[95] != 10)
    errors += "col[95] != 10";
  if(col[96] != 9)
    errors += "col[96] != 9";
  if(col[104] != 9)
    errors += "col[104] != 9";
  if(col[105] != 10)
    errors += "col[105] != 10";
  col=results[4];
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[100] != 9)
    errors += "col[100] != 9";
  if(col[106] != 10)
    errors += "col[106] != 10";
  col=results[5];
  if(col[94] != 8)
    errors += "col[94] != 8";
  if(col[100] != 10)
    errors += "col[100] != 10";
  if(col[106] != 8)
    errors += "col[106] != 8";
  col=results[6];
  if(col[95] != 10)
    errors += "col[95] != 10";
  if(col[96] != 10)
    errors += "col[96] != 10";
  if(col[97] != 10)
    errors += "col[97] != 10";
  if(col[103] != 10)
    errors += "col[103] != 10";
  if(col[104] != 10)
    errors += "col[104] != 10";
  if(col[105] != 10)
    errors += "col[105] != 10";
  col=results[8];
  if(col[92] != 10)
    errors += "col[92] != 10";
  if(col[108] != 10)
    errors += "col[108] != 10";
  col=results[9];
  if(col[91] != 9)
    errors += "col[91] != 9";
  if(col[93] != 9)
    errors += "col[93] != 9";
  if(col[107] != 9)
    errors += "col[107] != 9";
  if(col[109] != 9)
    errors += "col[109] != 9";
  col=results[10];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[11];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[12];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[13];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[14];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[15];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[16];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[17];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[18];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[19];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[20];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[21];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[22];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[23];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[24];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[25];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[26];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[27];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[28];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[29];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[30];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[31];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[32];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[33];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[34];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[35];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[36];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[37];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[38];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[39];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[40];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[41];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[42];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[43];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[44];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[45];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[46];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[47];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[48];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[49];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[50];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[51];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[52];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[53];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[54];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[55];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[56];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[57];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[58];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[59];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[60];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[61];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[62];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[63];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[64];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[65];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[66];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[67];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[68];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[69];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[70];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[71];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[72];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[73];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[74];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[75];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[76];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[77];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[78];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[79];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[80];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[81];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[82];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[83];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[84];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[85];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[86];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[87];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[88];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[89];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[90];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[91];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[92];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[93];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[94];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[95];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[96];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[97];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[98];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[99];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[100];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[101];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[102];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[103];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[104];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[105];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[106];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[107];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[108];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[109];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[110];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[111];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[112];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[113];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[114];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[115];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[116];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[117];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[118];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[119];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[120];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[121];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[122];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[123];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[124];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[125];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[126];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[127];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[128];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[129];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[130];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[131];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[132];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[133];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[134];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[135];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[136];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[137];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[138];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[139];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[140];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[141];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[142];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[143];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[144];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[145];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[146];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[147];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[148];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[149];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[150];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[151];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[152];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[153];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[154];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[155];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[156];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[157];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[158];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[159];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[160];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[161];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[162];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[163];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[164];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[165];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[166];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[167];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[168];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[169];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[170];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[171];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[172];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[173];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[174];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[175];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[176];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[177];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[178];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[179];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[180];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[181];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[182];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[183];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[184];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[185];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[186];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[187];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[188];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[189];
  if(col[90] != 10)
    errors += "col[90] != 10";
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[106] != 10)
    errors += "col[106] != 10";
  if(col[110] != 10)
    errors += "col[110] != 10";
  col=results[190];
  if(col[91] != 9)
    errors += "col[91] != 9";
  if(col[93] != 9)
    errors += "col[93] != 9";
  if(col[107] != 9)
    errors += "col[107] != 9";
  if(col[109] != 9)
    errors += "col[109] != 9";
  col=results[191];
  if(col[92] != 10)
    errors += "col[92] != 10";
  if(col[108] != 10)
    errors += "col[108] != 10";
  col=results[193];
  if(col[95] != 10)
    errors += "col[95] != 10";
  if(col[96] != 10)
    errors += "col[96] != 10";
  if(col[97] != 10)
    errors += "col[97] != 10";
  if(col[103] != 10)
    errors += "col[103] != 10";
  if(col[104] != 10)
    errors += "col[104] != 10";
  if(col[105] != 10)
    errors += "col[105] != 10";
  col=results[194];
  if(col[94] != 8)
    errors += "col[94] != 8";
  if(col[100] != 10)
    errors += "col[100] != 10";
  if(col[106] != 8)
    errors += "col[106] != 8";
  col=results[195];
  if(col[94] != 10)
    errors += "col[94] != 10";
  if(col[100] != 9)
    errors += "col[100] != 9";
  if(col[106] != 10)
    errors += "col[106] != 10";
  col=results[196];
  if(col[95] != 10)
    errors += "col[95] != 10";
  if(col[96] != 9)
    errors += "col[96] != 9";
  if(col[104] != 9)
    errors += "col[104] != 9";
  if(col[105] != 10)
    errors += "col[105] != 10";
  col=results[197];
  if(col[99] != 9)
    errors += "col[99] != 9";
  if(col[100] != 9)
    errors += "col[100] != 9";
  if(col[101] != 9)
    errors += "col[101] != 9";
  col=results[198];
  if(col[100] != 10)
    errors += "col[100] != 10";
  col=results[199];
  if(col[100] != 10)
    errors += "col[100] != 10";
  col=results[200];
  if(col[99] != 9)
    errors += "col[99] != 9";
  if(col[100] != 9)
    errors += "col[100] != 9";
  if(col[101] != 9)
    errors += "col[101] != 9";
  col=results[-1];
  if(col[99] != 9)
    errors += "col[99] != 9";
  if(col[100] != 9)
    errors += "col[100] != 9";
  if(col[101] != 9)
    errors += "col[101] != 9";
  return errors;
}

testResults[1] = function(results) {
  var col, errors = "";
  col=results[0];
  if(col[100] != 65280) errors += "col[100] != 65280";
  col=results[1];
  if(col[100] != 65280) errors += "col[100] != 65280";
  col=results[2];
  if(col[99] != 60928) errors += "col[99] != 60928";
  if(col[100] != 60928) errors += "col[100] != 60928";
  if(col[101] != 60928) errors += "col[101] != 60928";
  col=results[3];
  if(col[95] != 65280) errors += "col[95] != 65280";
  if(col[96] != 60928) errors += "col[96] != 60928";
  if(col[104] != 60928) errors += "col[104] != 60928";
  if(col[105] != 65280) errors += "col[105] != 65280";
  col=results[4];
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[100] != 60928) errors += "col[100] != 60928";
  if(col[106] != 65280) errors += "col[106] != 65280";
  col=results[5];
  if(col[94] != 56576) errors += "col[94] != 56576";
  if(col[100] != 65280) errors += "col[100] != 65280";
  if(col[106] != 56576) errors += "col[106] != 56576";
  col=results[6];
  if(col[95] != 65280) errors += "col[95] != 65280";
  if(col[96] != 65280) errors += "col[96] != 65280";
  if(col[97] != 65280) errors += "col[97] != 65280";
  if(col[103] != 65280) errors += "col[103] != 65280";
  if(col[104] != 65280) errors += "col[104] != 65280";
  if(col[105] != 65280) errors += "col[105] != 65280";
  col=results[8];
  if(col[92] != 65280) errors += "col[92] != 65280";
  if(col[108] != 65280) errors += "col[108] != 65280";
  col=results[9];
  if(col[91] != 60928) errors += "col[91] != 60928";
  if(col[93] != 60928) errors += "col[93] != 60928";
  if(col[107] != 60928) errors += "col[107] != 60928";
  if(col[109] != 60928) errors += "col[109] != 60928";
  col=results[10];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[11];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[12];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[13];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[14];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[15];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[16];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[17];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[18];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[19];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[20];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[21];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[22];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[23];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[24];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[25];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[26];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[27];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[28];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[29];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[30];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[31];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[32];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[33];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[34];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[35];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[36];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[37];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[38];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[39];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[40];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[41];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[42];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[43];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[44];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[45];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[46];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[47];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[48];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[49];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[50];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[51];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[52];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[53];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[54];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[55];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[56];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[57];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[58];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[59];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[60];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[61];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[62];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[63];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[64];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[65];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[66];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[67];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[68];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[69];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[70];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[71];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[72];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[73];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[74];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[75];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[76];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[77];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[78];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[79];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[80];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[81];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[82];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[83];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[84];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[85];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[86];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[87];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[88];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[89];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[90];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[91];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[92];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[93];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[94];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[95];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[96];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[97];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[98];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[99];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[100];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[101];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[102];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[103];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[104];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[105];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[106];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[107];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[108];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[109];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[110];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[111];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[112];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[113];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[114];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[115];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[116];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[117];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[118];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[119];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[120];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[121];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[122];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[123];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[124];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[125];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[126];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[127];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[128];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[129];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[130];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[131];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[132];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[133];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[134];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[135];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[136];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[137];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[138];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[139];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[140];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[141];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[142];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[143];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[144];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[145];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[146];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[147];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[148];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[149];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[150];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[151];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[152];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[153];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[154];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[155];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[156];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[157];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[158];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[159];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[160];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[161];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[162];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[163];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[164];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[165];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[166];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[167];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[168];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[169];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[170];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[171];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[172];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[173];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[174];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[175];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[176];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[177];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[178];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[179];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[180];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[181];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[182];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[183];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[184];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[185];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[186];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[187];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[188];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[189];
  if(col[90] != 65280) errors += "col[90] != 65280";
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[106] != 65280) errors += "col[106] != 65280";
  if(col[110] != 65280) errors += "col[110] != 65280";
  col=results[190];
  if(col[91] != 60928) errors += "col[91] != 60928";
  if(col[93] != 60928) errors += "col[93] != 60928";
  if(col[107] != 60928) errors += "col[107] != 60928";
  if(col[109] != 60928) errors += "col[109] != 60928";
  col=results[191];
  if(col[92] != 65280) errors += "col[92] != 65280";
  if(col[108] != 65280) errors += "col[108] != 65280";
  col=results[193];
  if(col[95] != 65280) errors += "col[95] != 65280";
  if(col[96] != 65280) errors += "col[96] != 65280";
  if(col[97] != 65280) errors += "col[97] != 65280";
  if(col[103] != 65280) errors += "col[103] != 65280";
  if(col[104] != 65280) errors += "col[104] != 65280";
  if(col[105] != 65280) errors += "col[105] != 65280";
  col=results[194];
  if(col[94] != 56576) errors += "col[94] != 56576";
  if(col[100] != 65280) errors += "col[100] != 65280";
  if(col[106] != 56576) errors += "col[106] != 56576";
  col=results[195];
  if(col[94] != 65280) errors += "col[94] != 65280";
  if(col[100] != 60928) errors += "col[100] != 60928";
  if(col[106] != 65280) errors += "col[106] != 65280";
  col=results[196];
  if(col[95] != 65280) errors += "col[95] != 65280";
  if(col[96] != 60928) errors += "col[96] != 60928";
  if(col[104] != 60928) errors += "col[104] != 60928";
  if(col[105] != 65280) errors += "col[105] != 65280";
  col=results[197];
  if(col[99] != 60928) errors += "col[99] != 60928";
  if(col[100] != 60928) errors += "col[100] != 60928";
  if(col[101] != 60928) errors += "col[101] != 60928";
  col=results[198];
  if(col[100] != 65280) errors += "col[100] != 65280";
  col=results[199];
  if(col[100] != 65280) errors += "col[100] != 65280";
  col=results[200];
  if(col[99] != 60928) errors += "col[99] != 60928";
  if(col[100] != 60928) errors += "col[100] != 60928";
  if(col[101] != 60928) errors += "col[101] != 60928";
  col=results[-1];
  if(col[99] != 60928) errors += "col[99] != 60928";
  if(col[100] != 60928) errors += "col[100] != 60928";
  if(col[101] != 60928) errors += "col[101] != 60928";
  return errors;
}

testResults[2] = function(results) {
  var col, errors = "";
  col=results[1];
  if(col[87] != 88) errors += "col[87] != 88";
  if(col[88] != 89) errors += "col[88] != 89";
  if(col[112] != 89) errors += "col[112] != 89";
  if(col[113] != 88) errors += "col[113] != 88";
  col=results[2];
  if(col[87] != 90) errors += "col[87] != 90";
  if(col[88] != 90) errors += "col[88] != 90";
  if(col[112] != 90) errors += "col[112] != 90";
  if(col[113] != 90) errors += "col[113] != 90";
  col=results[7];
  if(col[82] != 100) errors += "col[82] != 100";
  if(col[83] != 98) errors += "col[83] != 98";
  if(col[84] != 100) errors += "col[84] != 100";
  if(col[116] != 100) errors += "col[116] != 100";
  if(col[117] != 98) errors += "col[117] != 98";
  if(col[118] != 100) errors += "col[118] != 100";
  col=results[8];
  if(col[81] != 100) errors += "col[81] != 100";
  if(col[85] != 100) errors += "col[85] != 100";
  if(col[115] != 100) errors += "col[115] != 100";
  if(col[119] != 100) errors += "col[119] != 100";
  col=results[9];
  if(col[81] != 98) errors += "col[81] != 98";
  if(col[85] != 98) errors += "col[85] != 98";
  if(col[115] != 98) errors += "col[115] != 98";
  if(col[119] != 98) errors += "col[119] != 98";
  col=results[10];
  if(col[81] != 100) errors += "col[81] != 100";
  if(col[85] != 100) errors += "col[85] != 100";
  if(col[115] != 100) errors += "col[115] != 100";
  if(col[119] != 100) errors += "col[119] != 100";
  col=results[11];
  if(col[82] != 100) errors += "col[82] != 100";
  if(col[83] != 98) errors += "col[83] != 98";
  if(col[84] != 100) errors += "col[84] != 100";
  if(col[116] != 100) errors += "col[116] != 100";
  if(col[117] != 98) errors += "col[117] != 98";
  if(col[118] != 100) errors += "col[118] != 100";
  col=results[12];
  if(col[97] != 35) errors += "col[97] != 35";
  if(col[98] != 31) errors += "col[98] != 31";
  if(col[102] != 31) errors += "col[102] != 31";
  if(col[103] != 35) errors += "col[103] != 35";
  col=results[13];
  if(col[97] != 35) errors += "col[97] != 35";
  if(col[98] != 32) errors += "col[98] != 32";
  if(col[102] != 32) errors += "col[102] != 32";
  if(col[103] != 35) errors += "col[103] != 35";
  col=results[15];
  if(col[87] != 100) errors += "col[87] != 100";
  if(col[88] != 99) errors += "col[88] != 99";
  if(col[89] != 100) errors += "col[89] != 100";
  if(col[111] != 100) errors += "col[111] != 100";
  if(col[112] != 99) errors += "col[112] != 99";
  if(col[113] != 100) errors += "col[113] != 100";
  col=results[16];
  if(col[86] != 100) errors += "col[86] != 100";
  if(col[89] != 98) errors += "col[89] != 98";
  if(col[111] != 98) errors += "col[111] != 98";
  if(col[114] != 100) errors += "col[114] != 100";
  col=results[17];
  if(col[86] != 99) errors += "col[86] != 99";
  if(col[87] != 96) errors += "col[87] != 96";
  if(col[89] != 100) errors += "col[89] != 100";
  if(col[111] != 100) errors += "col[111] != 100";
  if(col[113] != 96) errors += "col[113] != 96";
  if(col[114] != 99) errors += "col[114] != 99";
  col=results[18];
  if(col[90] != 100) errors += "col[90] != 100";
  if(col[91] != 100) errors += "col[91] != 100";
  if(col[109] != 100) errors += "col[109] != 100";
  if(col[110] != 100) errors += "col[110] != 100";
  col=results[19];
  if(col[90] != 99) errors += "col[90] != 99";
  if(col[91] != 99) errors += "col[91] != 99";
  if(col[109] != 99) errors += "col[109] != 99";
  if(col[110] != 99) errors += "col[110] != 99";
  col=results[20];
  if(col[76] != 98) errors += "col[76] != 98";
  if(col[77] != 99) errors += "col[77] != 99";
  if(col[89] != 100) errors += "col[89] != 100";
  if(col[92] != 100) errors += "col[92] != 100";
  if(col[108] != 100) errors += "col[108] != 100";
  if(col[111] != 100) errors += "col[111] != 100";
  if(col[123] != 99) errors += "col[123] != 99";
  if(col[124] != 98) errors += "col[124] != 98";
  col=results[21];
  if(col[71] != 100) errors += "col[71] != 100";
  if(col[75] != 95) errors += "col[75] != 95";
  if(col[77] != 95) errors += "col[77] != 95";
  if(col[90] != 99) errors += "col[90] != 99";
  if(col[91] != 98) errors += "col[91] != 98";
  if(col[109] != 98) errors += "col[109] != 98";
  if(col[110] != 99) errors += "col[110] != 99";
  if(col[123] != 95) errors += "col[123] != 95";
  if(col[125] != 95) errors += "col[125] != 95";
  if(col[129] != 100) errors += "col[129] != 100";
  col=results[22];
  if(col[69] != 99) errors += "col[69] != 99";
  if(col[72] != 98) errors += "col[72] != 98";
  if(col[73] != 100) errors += "col[73] != 100";
  if(col[75] != 97) errors += "col[75] != 97";
  if(col[76] != 95) errors += "col[76] != 95";
  if(col[124] != 95) errors += "col[124] != 95";
  if(col[125] != 97) errors += "col[125] != 97";
  if(col[127] != 100) errors += "col[127] != 100";
  if(col[128] != 98) errors += "col[128] != 98";
  if(col[131] != 99) errors += "col[131] != 99";
  col=results[23];
  if(col[68] != 99) errors += "col[68] != 99";
  if(col[70] != 100) errors += "col[70] != 100";
  if(col[72] != 97) errors += "col[72] != 97";
  if(col[73] != 100) errors += "col[73] != 100";
  if(col[84] != 92) errors += "col[84] != 92";
  if(col[116] != 92) errors += "col[116] != 92";
  if(col[127] != 100) errors += "col[127] != 100";
  if(col[128] != 97) errors += "col[128] != 97";
  if(col[130] != 100) errors += "col[130] != 100";
  if(col[132] != 99) errors += "col[132] != 99";
  col=results[24];
  if(col[65] != 100) errors += "col[65] != 100";
  if(col[68] != 98) errors += "col[68] != 98";
  if(col[69] != 97) errors += "col[69] != 97";
  if(col[70] != 100) errors += "col[70] != 100";
  if(col[71] != 94) errors += "col[71] != 94";
  if(col[72] != 99) errors += "col[72] != 99";
  if(col[83] != 91) errors += "col[83] != 91";
  if(col[85] != 90) errors += "col[85] != 90";
  if(col[115] != 90) errors += "col[115] != 90";
  if(col[117] != 91) errors += "col[117] != 91";
  if(col[128] != 99) errors += "col[128] != 99";
  if(col[129] != 94) errors += "col[129] != 94";
  if(col[130] != 100) errors += "col[130] != 100";
  if(col[131] != 97) errors += "col[131] != 97";
  if(col[132] != 98) errors += "col[132] != 98";
  if(col[135] != 100) errors += "col[135] != 100";
  col=results[25];
  if(col[64] != 99) errors += "col[64] != 99";
  if(col[65] != 98) errors += "col[65] != 98";
  if(col[66] != 98) errors += "col[66] != 98";
  if(col[68] != 99) errors += "col[68] != 99";
  if(col[71] != 98) errors += "col[71] != 98";
  if(col[83] != 89) errors += "col[83] != 89";
  if(col[85] != 91) errors += "col[85] != 91";
  if(col[115] != 91) errors += "col[115] != 91";
  if(col[117] != 89) errors += "col[117] != 89";
  if(col[129] != 98) errors += "col[129] != 98";
  if(col[132] != 99) errors += "col[132] != 99";
  if(col[134] != 98) errors += "col[134] != 98";
  if(col[135] != 98) errors += "col[135] != 98";
  if(col[136] != 99) errors += "col[136] != 99";
  col=results[26];
  if(col[63] != 99) errors += "col[63] != 99";
  if(col[64] != 100) errors += "col[64] != 100";
  if(col[69] != 94) errors += "col[69] != 94";
  if(col[70] != 100) errors += "col[70] != 100";
  if(col[71] != 100) errors += "col[71] != 100";
  if(col[72] != 99) errors += "col[72] != 99";
  if(col[84] != 92) errors += "col[84] != 92";
  if(col[116] != 92) errors += "col[116] != 92";
  if(col[128] != 99) errors += "col[128] != 99";
  if(col[129] != 100) errors += "col[129] != 100";
  if(col[130] != 100) errors += "col[130] != 100";
  if(col[131] != 94) errors += "col[131] != 94";
  if(col[136] != 100) errors += "col[136] != 100";
  if(col[137] != 99) errors += "col[137] != 99";
  col=results[27];
  if(col[62] != 99) errors += "col[62] != 99";
  if(col[65] != 100) errors += "col[65] != 100";
  if(col[69] != 98) errors += "col[69] != 98";
  if(col[72] != 98) errors += "col[72] != 98";
  if(col[73] != 100) errors += "col[73] != 100";
  if(col[127] != 100) errors += "col[127] != 100";
  if(col[128] != 98) errors += "col[128] != 98";
  if(col[131] != 98) errors += "col[131] != 98";
  if(col[135] != 100) errors += "col[135] != 100";
  if(col[138] != 99) errors += "col[138] != 99";
  col=results[28];
  if(col[61] != 99) errors += "col[61] != 99";
  if(col[62] != 100) errors += "col[62] != 100";
  if(col[65] != 100) errors += "col[65] != 100";
  if(col[66] != 98) errors += "col[66] != 98";
  if(col[69] != 100) errors += "col[69] != 100";
  if(col[131] != 100) errors += "col[131] != 100";
  if(col[134] != 98) errors += "col[134] != 98";
  if(col[135] != 100) errors += "col[135] != 100";
  if(col[138] != 100) errors += "col[138] != 100";
  if(col[139] != 99) errors += "col[139] != 99";
  col=results[29];
  if(col[60] != 100) errors += "col[60] != 100";
  if(col[61] != 98) errors += "col[61] != 98";
  if(col[69] != 99) errors += "col[69] != 99";
  if(col[70] != 100) errors += "col[70] != 100";
  if(col[71] != 100) errors += "col[71] != 100";
  if(col[72] != 100) errors += "col[72] != 100";
  if(col[128] != 100) errors += "col[128] != 100";
  if(col[129] != 100) errors += "col[129] != 100";
  if(col[130] != 100) errors += "col[130] != 100";
  if(col[131] != 99) errors += "col[131] != 99";
  if(col[139] != 98) errors += "col[139] != 98";
  if(col[140] != 100) errors += "col[140] != 100";
  col=results[30];
  if(col[62] != 100) errors += "col[62] != 100";
  if(col[67] != 100) errors += "col[67] != 100";
  if(col[68] != 96) errors += "col[68] != 96";
  if(col[70] != 98) errors += "col[70] != 98";
  if(col[71] != 97) errors += "col[71] != 97";
  if(col[129] != 97) errors += "col[129] != 97";
  if(col[130] != 98) errors += "col[130] != 98";
  if(col[132] != 96) errors += "col[132] != 96";
  if(col[133] != 100) errors += "col[133] != 100";
  if(col[138] != 100) errors += "col[138] != 100";
  col=results[31];
  if(col[67] != 100) errors += "col[67] != 100";
  if(col[69] != 100) errors += "col[69] != 100";
  if(col[71] != 100) errors += "col[71] != 100";
  if(col[129] != 100) errors += "col[129] != 100";
  if(col[131] != 100) errors += "col[131] != 100";
  if(col[133] != 100) errors += "col[133] != 100";
  col=results[34];
  if(col[65] != 100) errors += "col[65] != 100";
  if(col[66] != 99) errors += "col[66] != 99";
  if(col[70] != 95) errors += "col[70] != 95";
  if(col[130] != 95) errors += "col[130] != 95";
  if(col[134] != 99) errors += "col[134] != 99";
  if(col[135] != 100) errors += "col[135] != 100";
  col=results[35];
  if(col[65] != 98) errors += "col[65] != 98";
  if(col[68] != 99) errors += "col[68] != 99";
  if(col[69] != 100) errors += "col[69] != 100";
  if(col[70] != 99) errors += "col[70] != 99";
  if(col[71] != 99) errors += "col[71] != 99";
  if(col[88] != 100) errors += "col[88] != 100";
  if(col[89] != 99) errors += "col[89] != 99";
  if(col[90] != 100) errors += "col[90] != 100";
  if(col[91] != 100) errors += "col[91] != 100";
  if(col[92] != 100) errors += "col[92] != 100";
  if(col[108] != 100) errors += "col[108] != 100";
  if(col[109] != 100) errors += "col[109] != 100";
  if(col[110] != 100) errors += "col[110] != 100";
  if(col[111] != 99) errors += "col[111] != 99";
  if(col[112] != 100) errors += "col[112] != 100";
  if(col[129] != 99) errors += "col[129] != 99";
  if(col[130] != 99) errors += "col[130] != 99";
  if(col[131] != 100) errors += "col[131] != 100";
  if(col[132] != 99) errors += "col[132] != 99";
  if(col[135] != 98) errors += "col[135] != 98";
  col=results[36];
  if(col[64] != 95) errors += "col[64] != 95";
  if(col[67] != 96) errors += "col[67] != 96";
  if(col[69] != 100) errors += "col[69] != 100";
  if(col[71] != 99) errors += "col[71] != 99";
  if(col[88] != 99) errors += "col[88] != 99";
  if(col[90] != 97) errors += "col[90] != 97";
  if(col[91] != 99) errors += "col[91] != 99";
  if(col[92] != 99) errors += "col[92] != 99";
  if(col[108] != 99) errors += "col[108] != 99";
  if(col[109] != 99) errors += "col[109] != 99";
  if(col[110] != 97) errors += "col[110] != 97";
  if(col[112] != 99) errors += "col[112] != 99";
  if(col[129] != 99) errors += "col[129] != 99";
  if(col[131] != 100) errors += "col[131] != 100";
  if(col[133] != 96) errors += "col[133] != 96";
  if(col[136] != 95) errors += "col[136] != 95";
  col=results[37];
  if(col[64] != 96) errors += "col[64] != 96";
  if(col[69] != 99) errors += "col[69] != 99";
  if(col[72] != 98) errors += "col[72] != 98";
  if(col[73] != 99) errors += "col[73] != 99";
  if(col[74] != 100) errors += "col[74] != 100";
  if(col[88] != 100) errors += "col[88] != 100";
  if(col[89] != 99) errors += "col[89] != 99";
  if(col[90] != 100) errors += "col[90] != 100";
  if(col[91] != 100) errors += "col[91] != 100";
  if(col[92] != 100) errors += "col[92] != 100";
  if(col[93] != 96) errors += "col[93] != 96";
  if(col[94] != 98) errors += "col[94] != 98";
  if(col[106] != 98) errors += "col[106] != 98";
  if(col[107] != 96) errors += "col[107] != 96";
  if(col[108] != 100) errors += "col[108] != 100";
  if(col[109] != 100) errors += "col[109] != 100";
  if(col[110] != 100) errors += "col[110] != 100";
  if(col[111] != 99) errors += "col[111] != 99";
  if(col[112] != 100) errors += "col[112] != 100";
  if(col[126] != 100) errors += "col[126] != 100";
  if(col[127] != 99) errors += "col[127] != 99";
  if(col[128] != 98) errors += "col[128] != 98";
  if(col[131] != 99) errors += "col[131] != 99";
  if(col[136] != 96) errors += "col[136] != 96";
  col=results[38];
  if(col[65] != 98) errors += "col[65] != 98";
  if(col[74] != 99) errors += "col[74] != 99";
  if(col[75] != 100) errors += "col[75] != 100";
  if(col[79] != 100) errors += "col[79] != 100";
  if(col[80] != 98) errors += "col[80] != 98";
  if(col[81] != 100) errors += "col[81] != 100";
  if(col[119] != 100) errors += "col[119] != 100";
  if(col[120] != 98) errors += "col[120] != 98";
  if(col[121] != 100) errors += "col[121] != 100";
  if(col[125] != 100) errors += "col[125] != 100";
  if(col[126] != 99) errors += "col[126] != 99";
  if(col[135] != 98) errors += "col[135] != 98";
  col=results[39];
  if(col[69] != 97) errors += "col[69] != 97";
  if(col[71] != 98) errors += "col[71] != 98";
  if(col[72] != 99) errors += "col[72] != 99";
  if(col[73] != 100) errors += "col[73] != 100";
  if(col[127] != 100) errors += "col[127] != 100";
  if(col[128] != 99) errors += "col[128] != 99";
  if(col[129] != 98) errors += "col[129] != 98";
  if(col[131] != 97) errors += "col[131] != 97";
  col=results[40];
  if(col[65] != 99) errors += "col[65] != 99";
  if(col[135] != 99) errors += "col[135] != 99";
  col=results[41];
  if(col[64] != 100) errors += "col[64] != 100";
  if(col[65] != 95) errors += "col[65] != 95";
  if(col[66] != 100) errors += "col[66] != 100";
  if(col[90] != 100) errors += "col[90] != 100";
  if(col[110] != 100) errors += "col[110] != 100";
  if(col[134] != 100) errors += "col[134] != 100";
  if(col[135] != 95) errors += "col[135] != 95";
  if(col[136] != 100) errors += "col[136] != 100";
  col=results[42];
  if(col[74] != 98) errors += "col[74] != 98";
  if(col[83] != 99) errors += "col[83] != 99";
  if(col[84] != 96) errors += "col[84] != 96";
  if(col[90] != 97) errors += "col[90] != 97";
  if(col[91] != 99) errors += "col[91] != 99";
  if(col[109] != 99) errors += "col[109] != 99";
  if(col[110] != 97) errors += "col[110] != 97";
  if(col[116] != 96) errors += "col[116] != 96";
  if(col[117] != 99) errors += "col[117] != 99";
  if(col[126] != 98) errors += "col[126] != 98";
  col=results[43];
  if(col[73] != 100) errors += "col[73] != 100";
  if(col[75] != 99) errors += "col[75] != 99";
  if(col[82] != 100) errors += "col[82] != 100";
  if(col[83] != 97) errors += "col[83] != 97";
  if(col[85] != 99) errors += "col[85] != 99";
  if(col[89] != 100) errors += "col[89] != 100";
  if(col[91] != 98) errors += "col[91] != 98";
  if(col[109] != 98) errors += "col[109] != 98";
  if(col[111] != 100) errors += "col[111] != 100";
  if(col[115] != 99) errors += "col[115] != 99";
  if(col[117] != 97) errors += "col[117] != 97";
  if(col[118] != 100) errors += "col[118] != 100";
  if(col[125] != 99) errors += "col[125] != 99";
  if(col[127] != 100) errors += "col[127] != 100";
  col=results[44];
  if(col[73] != 100) errors += "col[73] != 100";
  if(col[74] != 98) errors += "col[74] != 98";
  if(col[83] != 77) errors += "col[83] != 77";
  if(col[85] != 100) errors += "col[85] != 100";
  if(col[86] != 99) errors += "col[86] != 99";
  if(col[114] != 99) errors += "col[114] != 99";
  if(col[115] != 100) errors += "col[115] != 100";
  if(col[117] != 77) errors += "col[117] != 77";
  if(col[126] != 98) errors += "col[126] != 98";
  if(col[127] != 100) errors += "col[127] != 100";
  col=results[45];
  if(col[64] != 98) errors += "col[64] != 98";
  if(col[65] != 97) errors += "col[65] != 97";
  if(col[73] != 99) errors += "col[73] != 99";
  if(col[77] != 85) errors += "col[77] != 85";
  if(col[78] != 82) errors += "col[78] != 82";
  if(col[85] != 100) errors += "col[85] != 100";
  if(col[87] != 99) errors += "col[87] != 99";
  if(col[113] != 99) errors += "col[113] != 99";
  if(col[115] != 100) errors += "col[115] != 100";
  if(col[122] != 82) errors += "col[122] != 82";
  if(col[123] != 85) errors += "col[123] != 85";
  if(col[127] != 99) errors += "col[127] != 99";
  if(col[135] != 97) errors += "col[135] != 97";
  if(col[136] != 98) errors += "col[136] != 98";
  col=results[46];
  if(col[63] != 99) errors += "col[63] != 99";
  if(col[66] != 99) errors += "col[66] != 99";
  if(col[76] != 86) errors += "col[76] != 86";
  if(col[79] != 86) errors += "col[79] != 86";
  if(col[86] != 95) errors += "col[86] != 95";
  if(col[87] != 96) errors += "col[87] != 96";
  if(col[113] != 96) errors += "col[113] != 96";
  if(col[114] != 95) errors += "col[114] != 95";
  if(col[121] != 86) errors += "col[121] != 86";
  if(col[124] != 86) errors += "col[124] != 86";
  if(col[134] != 99) errors += "col[134] != 99";
  if(col[137] != 99) errors += "col[137] != 99";
  col=results[47];
  if(col[63] != 100) errors += "col[63] != 100";
  if(col[64] != 98) errors += "col[64] != 98";
  if(col[66] != 92) errors += "col[66] != 92";
  if(col[67] != 100) errors += "col[67] != 100";
  if(col[77] != 84) errors += "col[77] != 84";
  if(col[78] != 85) errors += "col[78] != 85";
  if(col[122] != 85) errors += "col[122] != 85";
  if(col[123] != 84) errors += "col[123] != 84";
  if(col[133] != 100) errors += "col[133] != 100";
  if(col[134] != 92) errors += "col[134] != 92";
  if(col[136] != 98) errors += "col[136] != 98";
  if(col[137] != 100) errors += "col[137] != 100";
  col=results[48];
  if(col[64] != 99) errors += "col[64] != 99";
  if(col[66] != 99) errors += "col[66] != 99";
  if(col[134] != 99) errors += "col[134] != 99";
  if(col[136] != 99) errors += "col[136] != 99";
  col=results[49];
  if(col[41] != 100) errors += "col[41] != 100";
  if(col[42] != 99) errors += "col[42] != 99";
  if(col[43] != 100) errors += "col[43] != 100";
  if(col[65] != 100) errors += "col[65] != 100";
  if(col[85] != 100) errors += "col[85] != 100";
  if(col[115] != 100) errors += "col[115] != 100";
  if(col[135] != 100) errors += "col[135] != 100";
  if(col[157] != 100) errors += "col[157] != 100";
  if(col[158] != 99) errors += "col[158] != 99";
  if(col[159] != 100) errors += "col[159] != 100";
  col=results[50];
  if(col[41] != 97) errors += "col[41] != 97";
  if(col[43] != 99) errors += "col[43] != 99";
  if(col[83] != 100) errors += "col[83] != 100";
  if(col[84] != 98) errors += "col[84] != 98";
  if(col[86] != 100) errors += "col[86] != 100";
  if(col[87] != 99) errors += "col[87] != 99";
  if(col[113] != 99) errors += "col[113] != 99";
  if(col[114] != 100) errors += "col[114] != 100";
  if(col[116] != 98) errors += "col[116] != 98";
  if(col[117] != 100) errors += "col[117] != 100";
  if(col[157] != 99) errors += "col[157] != 99";
  if(col[159] != 97) errors += "col[159] != 97";
  col=results[51];
  if(col[41] != 100) errors += "col[41] != 100";
  if(col[42] != 99) errors += "col[42] != 99";
  if(col[43] != 100) errors += "col[43] != 100";
  if(col[77] != 81) errors += "col[77] != 81";
  if(col[78] != 84) errors += "col[78] != 84";
  if(col[82] != 100) errors += "col[82] != 100";
  if(col[83] != 97) errors += "col[83] != 97";
  if(col[86] != 98) errors += "col[86] != 98";
  if(col[87] != 100) errors += "col[87] != 100";
  if(col[113] != 100) errors += "col[113] != 100";
  if(col[114] != 98) errors += "col[114] != 98";
  if(col[117] != 97) errors += "col[117] != 97";
  if(col[118] != 100) errors += "col[118] != 100";
  if(col[122] != 84) errors += "col[122] != 84";
  if(col[123] != 81) errors += "col[123] != 81";
  if(col[157] != 100) errors += "col[157] != 100";
  if(col[158] != 99) errors += "col[158] != 99";
  if(col[159] != 100) errors += "col[159] != 100";
  col=results[52];
  if(col[77] != 83) errors += "col[77] != 83";
  if(col[78] != 82) errors += "col[78] != 82";
  if(col[82] != 98) errors += "col[82] != 98";
  if(col[83] != 99) errors += "col[83] != 99";
  if(col[85] != 95) errors += "col[85] != 95";
  if(col[86] != 99) errors += "col[86] != 99";
  if(col[114] != 99) errors += "col[114] != 99";
  if(col[115] != 95) errors += "col[115] != 95";
  if(col[117] != 99) errors += "col[117] != 99";
  if(col[118] != 98) errors += "col[118] != 98";
  if(col[122] != 82) errors += "col[122] != 82";
  if(col[123] != 83) errors += "col[123] != 83";
  col=results[53];
  if(col[55] != 99) errors += "col[55] != 99";
  if(col[82] != 100) errors += "col[82] != 100";
  if(col[83] != 97) errors += "col[83] != 97";
  if(col[85] != 97) errors += "col[85] != 97";
  if(col[86] != 100) errors += "col[86] != 100";
  if(col[114] != 100) errors += "col[114] != 100";
  if(col[115] != 97) errors += "col[115] != 97";
  if(col[117] != 97) errors += "col[117] != 97";
  if(col[118] != 100) errors += "col[118] != 100";
  if(col[145] != 99) errors += "col[145] != 99";
  col=results[54];
  if(col[54] != 97) errors += "col[54] != 97";
  if(col[56] != 98) errors += "col[56] != 98";
  if(col[80] != 100) errors += "col[80] != 100";
  if(col[84] != 98) errors += "col[84] != 98";
  if(col[116] != 98) errors += "col[116] != 98";
  if(col[120] != 100) errors += "col[120] != 100";
  if(col[144] != 98) errors += "col[144] != 98";
  if(col[146] != 97) errors += "col[146] != 97";
  col=results[55];
  if(col[54] != 98) errors += "col[54] != 98";
  if(col[56] != 94) errors += "col[56] != 94";
  if(col[79] != 99) errors += "col[79] != 99";
  if(col[80] != 97) errors += "col[80] != 97";
  if(col[81] != 97) errors += "col[81] != 97";
  if(col[119] != 97) errors += "col[119] != 97";
  if(col[120] != 97) errors += "col[120] != 97";
  if(col[121] != 99) errors += "col[121] != 99";
  if(col[144] != 94) errors += "col[144] != 94";
  if(col[146] != 98) errors += "col[146] != 98";
  col=results[56];
  if(col[55] != 99) errors += "col[55] != 99";
  if(col[56] != 100) errors += "col[56] != 100";
  if(col[77] != 100) errors += "col[77] != 100";
  if(col[78] != 97) errors += "col[78] != 97";
  if(col[83] != 99) errors += "col[83] != 99";
  if(col[117] != 99) errors += "col[117] != 99";
  if(col[122] != 97) errors += "col[122] != 97";
  if(col[123] != 100) errors += "col[123] != 100";
  if(col[144] != 100) errors += "col[144] != 100";
  if(col[145] != 99) errors += "col[145] != 99";
  col=results[57];
  if(col[47] != 100) errors += "col[47] != 100";
  if(col[55] != 100) errors += "col[55] != 100";
  if(col[56] != 99) errors += "col[56] != 99";
  if(col[77] != 100) errors += "col[77] != 100";
  if(col[78] != 94) errors += "col[78] != 94";
  if(col[80] != 100) errors += "col[80] != 100";
  if(col[81] != 98) errors += "col[81] != 98";
  if(col[83] != 97) errors += "col[83] != 97";
  if(col[95] != 71) errors += "col[95] != 71";
  if(col[105] != 71) errors += "col[105] != 71";
  if(col[117] != 97) errors += "col[117] != 97";
  if(col[119] != 98) errors += "col[119] != 98";
  if(col[120] != 100) errors += "col[120] != 100";
  if(col[122] != 94) errors += "col[122] != 94";
  if(col[123] != 100) errors += "col[123] != 100";
  if(col[144] != 99) errors += "col[144] != 99";
  if(col[145] != 100) errors += "col[145] != 100";
  if(col[153] != 100) errors += "col[153] != 100";
  col=results[58];
  if(col[41] != 98) errors += "col[41] != 98";
  if(col[42] != 100) errors += "col[42] != 100";
  if(col[49] != 100) errors += "col[49] != 100";
  if(col[56] != 100) errors += "col[56] != 100";
  if(col[77] != 100) errors += "col[77] != 100";
  if(col[79] != 99) errors += "col[79] != 99";
  if(col[80] != 100) errors += "col[80] != 100";
  if(col[81] != 100) errors += "col[81] != 100";
  if(col[82] != 99) errors += "col[82] != 99";
  if(col[83] != 100) errors += "col[83] != 100";
  if(col[94] != 74) errors += "col[94] != 74";
  if(col[96] != 75) errors += "col[96] != 75";
  if(col[104] != 75) errors += "col[104] != 75";
  if(col[106] != 74) errors += "col[106] != 74";
  if(col[117] != 100) errors += "col[117] != 100";
  if(col[118] != 99) errors += "col[118] != 99";
  if(col[119] != 100) errors += "col[119] != 100";
  if(col[120] != 100) errors += "col[120] != 100";
  if(col[121] != 99) errors += "col[121] != 99";
  if(col[123] != 100) errors += "col[123] != 100";
  if(col[144] != 100) errors += "col[144] != 100";
  if(col[151] != 100) errors += "col[151] != 100";
  if(col[158] != 100) errors += "col[158] != 100";
  if(col[159] != 98) errors += "col[159] != 98";
  col=results[59];
  if(col[41] != 99) errors += "col[41] != 99";
  if(col[44] != 99) errors += "col[44] != 99";
  if(col[50] != 100) errors += "col[50] != 100";
  if(col[55] != 100) errors += "col[55] != 100";
  if(col[57] != 100) errors += "col[57] != 100";
  if(col[94] != 74) errors += "col[94] != 74";
  if(col[95] != 72) errors += "col[95] != 72";
  if(col[105] != 72) errors += "col[105] != 72";
  if(col[106] != 74) errors += "col[106] != 74";
  if(col[143] != 100) errors += "col[143] != 100";
  if(col[145] != 100) errors += "col[145] != 100";
  if(col[150] != 100) errors += "col[150] != 100";
  if(col[156] != 99) errors += "col[156] != 99";
  if(col[159] != 99) errors += "col[159] != 99";
  col=results[60];
  if(col[51] != 100) errors += "col[51] != 100";
  if(col[56] != 98) errors += "col[56] != 98";
  if(col[80] != 96) errors += "col[80] != 96";
  if(col[120] != 96) errors += "col[120] != 96";
  if(col[144] != 98) errors += "col[144] != 98";
  if(col[149] != 100) errors += "col[149] != 100";
  col=results[61];
  if(col[41] != 100) errors += "col[41] != 100";
  if(col[46] != 100) errors += "col[46] != 100";
  if(col[47] != 100) errors += "col[47] != 100";
  if(col[51] != 98) errors += "col[51] != 98";
  if(col[56] != 100) errors += "col[56] != 100";
  if(col[61] != 100) errors += "col[61] != 100";
  if(col[62] != 99) errors += "col[62] != 99";
  if(col[63] != 100) errors += "col[63] != 100";
  if(col[74] != 99) errors += "col[74] != 99";
  if(col[75] != 96) errors += "col[75] != 96";
  if(col[98] != 73) errors += "col[98] != 73";
  if(col[99] != 76) errors += "col[99] != 76";
  if(col[101] != 76) errors += "col[101] != 76";
  if(col[102] != 73) errors += "col[102] != 73";
  if(col[125] != 96) errors += "col[125] != 96";
  if(col[126] != 99) errors += "col[126] != 99";
  if(col[137] != 100) errors += "col[137] != 100";
  if(col[138] != 99) errors += "col[138] != 99";
  if(col[139] != 100) errors += "col[139] != 100";
  if(col[144] != 100) errors += "col[144] != 100";
  if(col[149] != 98) errors += "col[149] != 98";
  if(col[153] != 100) errors += "col[153] != 100";
  if(col[154] != 100) errors += "col[154] != 100";
  if(col[159] != 100) errors += "col[159] != 100";
  col=results[62];
  if(col[38] != 100) errors += "col[38] != 100";
  if(col[41] != 100) errors += "col[41] != 100";
  if(col[44] != 100) errors += "col[44] != 100";
  if(col[47] != 99) errors += "col[47] != 99";
  if(col[51] != 100) errors += "col[51] != 100";
  if(col[61] != 98) errors += "col[61] != 98";
  if(col[62] != 96) errors += "col[62] != 96";
  if(col[63] != 98) errors += "col[63] != 98";
  if(col[74] != 100) errors += "col[74] != 100";
  if(col[75] != 97) errors += "col[75] != 97";
  if(col[79] != 99) errors += "col[79] != 99";
  if(col[98] != 75) errors += "col[98] != 75";
  if(col[99] != 74) errors += "col[99] != 74";
  if(col[101] != 74) errors += "col[101] != 74";
  if(col[102] != 75) errors += "col[102] != 75";
  if(col[121] != 99) errors += "col[121] != 99";
  if(col[125] != 97) errors += "col[125] != 97";
  if(col[126] != 100) errors += "col[126] != 100";
  if(col[137] != 98) errors += "col[137] != 98";
  if(col[138] != 96) errors += "col[138] != 96";
  if(col[139] != 98) errors += "col[139] != 98";
  if(col[149] != 100) errors += "col[149] != 100";
  if(col[153] != 99) errors += "col[153] != 99";
  if(col[156] != 100) errors += "col[156] != 100";
  if(col[159] != 100) errors += "col[159] != 100";
  if(col[162] != 100) errors += "col[162] != 100";
  col=results[63];
  if(col[36] != 100) errors += "col[36] != 100";
  if(col[39] != 99) errors += "col[39] != 99";
  if(col[40] != 100) errors += "col[40] != 100";
  if(col[41] != 100) errors += "col[41] != 100";
  if(col[43] != 99) errors += "col[43] != 99";
  if(col[50] != 100) errors += "col[50] != 100";
  if(col[65] != 100) errors += "col[65] != 100";
  if(col[76] != 98) errors += "col[76] != 98";
  if(col[79] != 100) errors += "col[79] != 100";
  if(col[121] != 100) errors += "col[121] != 100";
  if(col[124] != 98) errors += "col[124] != 98";
  if(col[135] != 100) errors += "col[135] != 100";
  if(col[150] != 100) errors += "col[150] != 100";
  if(col[157] != 99) errors += "col[157] != 99";
  if(col[159] != 100) errors += "col[159] != 100";
  if(col[160] != 100) errors += "col[160] != 100";
  if(col[161] != 99) errors += "col[161] != 99";
  if(col[164] != 100) errors += "col[164] != 100";
  col=results[64];
  if(col[35] != 99) errors += "col[35] != 99";
  if(col[36] != 97) errors += "col[36] != 97";
  if(col[42] != 100) errors += "col[42] != 100";
  if(col[47] != 100) errors += "col[47] != 100";
  if(col[48] != 99) errors += "col[48] != 99";
  if(col[49] != 100) errors += "col[49] != 100";
  if(col[63] != 99) errors += "col[63] != 99";
  if(col[66] != 100) errors += "col[66] != 100";
  if(col[76] != 100) errors += "col[76] != 100";
  if(col[77] != 99) errors += "col[77] != 99";
  if(col[78] != 100) errors += "col[78] != 100";
  if(col[122] != 100) errors += "col[122] != 100";
  if(col[123] != 99) errors += "col[123] != 99";
  if(col[124] != 100) errors += "col[124] != 100";
  if(col[134] != 100) errors += "col[134] != 100";
  if(col[137] != 99) errors += "col[137] != 99";
  if(col[151] != 100) errors += "col[151] != 100";
  if(col[152] != 99) errors += "col[152] != 99";
  if(col[153] != 100) errors += "col[153] != 100";
  if(col[158] != 100) errors += "col[158] != 100";
  if(col[164] != 97) errors += "col[164] != 97";
  if(col[165] != 99) errors += "col[165] != 99";
  col=results[65];
  if(col[36] != 99) errors += "col[36] != 99";
  if(col[39] != 99) errors += "col[39] != 99";
  if(col[40] != 100) errors += "col[40] != 100";
  if(col[63] != 99) errors += "col[63] != 99";
  if(col[66] != 99) errors += "col[66] != 99";
  if(col[134] != 99) errors += "col[134] != 99";
  if(col[137] != 99) errors += "col[137] != 99";
  if(col[160] != 100) errors += "col[160] != 100";
  if(col[161] != 99) errors += "col[161] != 99";
  if(col[164] != 99) errors += "col[164] != 99";
  col=results[66];
  if(col[29] != 97) errors += "col[29] != 97";
  if(col[30] != 99) errors += "col[30] != 99";
  if(col[33] != 100) errors += "col[33] != 100";
  if(col[34] != 99) errors += "col[34] != 99";
  if(col[36] != 100) errors += "col[36] != 100";
  if(col[37] != 100) errors += "col[37] != 100";
  if(col[38] != 100) errors += "col[38] != 100";
  if(col[56] != 99) errors += "col[56] != 99";
  if(col[57] != 94) errors += "col[57] != 94";
  if(col[58] != 100) errors += "col[58] != 100";
  if(col[63] != 100) errors += "col[63] != 100";
  if(col[66] != 100) errors += "col[66] != 100";
  if(col[134] != 100) errors += "col[134] != 100";
  if(col[137] != 100) errors += "col[137] != 100";
  if(col[142] != 100) errors += "col[142] != 100";
  if(col[143] != 94) errors += "col[143] != 94";
  if(col[144] != 99) errors += "col[144] != 99";
  if(col[162] != 100) errors += "col[162] != 100";
  if(col[163] != 100) errors += "col[163] != 100";
  if(col[164] != 100) errors += "col[164] != 100";
  if(col[166] != 99) errors += "col[166] != 99";
  if(col[167] != 100) errors += "col[167] != 100";
  if(col[170] != 99) errors += "col[170] != 99";
  if(col[171] != 97) errors += "col[171] != 97";
  col=results[67];
  if(col[28] != 98) errors += "col[28] != 98";
  if(col[29] != 100) errors += "col[29] != 100";
  if(col[31] != 99) errors += "col[31] != 99";
  if(col[32] != 100) errors += "col[32] != 100";
  if(col[33] != 99) errors += "col[33] != 99";
  if(col[34] != 97) errors += "col[34] != 97";
  if(col[35] != 99) errors += "col[35] != 99";
  if(col[56] != 100) errors += "col[56] != 100";
  if(col[57] != 98) errors += "col[57] != 98";
  if(col[58] != 95) errors += "col[58] != 95";
  if(col[64] != 99) errors += "col[64] != 99";
  if(col[65] != 100) errors += "col[65] != 100";
  if(col[135] != 100) errors += "col[135] != 100";
  if(col[136] != 99) errors += "col[136] != 99";
  if(col[142] != 95) errors += "col[142] != 95";
  if(col[143] != 98) errors += "col[143] != 98";
  if(col[144] != 100) errors += "col[144] != 100";
  if(col[165] != 99) errors += "col[165] != 99";
  if(col[166] != 97) errors += "col[166] != 97";
  if(col[167] != 99) errors += "col[167] != 99";
  if(col[168] != 100) errors += "col[168] != 100";
  if(col[169] != 99) errors += "col[169] != 99";
  if(col[171] != 100) errors += "col[171] != 100";
  if(col[172] != 98) errors += "col[172] != 98";
  col=results[68];
  if(col[27] != 96) errors += "col[27] != 96";
  if(col[30] != 100) errors += "col[30] != 100";
  if(col[31] != 98) errors += "col[31] != 98";
  if(col[33] != 100) errors += "col[33] != 100";
  if(col[35] != 100) errors += "col[35] != 100";
  if(col[165] != 100) errors += "col[165] != 100";
  if(col[167] != 100) errors += "col[167] != 100";
  if(col[169] != 98) errors += "col[169] != 98";
  if(col[170] != 100) errors += "col[170] != 100";
  if(col[173] != 96) errors += "col[173] != 96";
  col=results[69];
  if(col[27] != 98) errors += "col[27] != 98";
  if(col[29] != 98) errors += "col[29] != 98";
  if(col[32] != 99) errors += "col[32] != 99";
  if(col[42] != 97) errors += "col[42] != 97";
  if(col[43] != 99) errors += "col[43] != 99";
  if(col[157] != 99) errors += "col[157] != 99";
  if(col[158] != 97) errors += "col[158] != 97";
  if(col[168] != 99) errors += "col[168] != 99";
  if(col[171] != 98) errors += "col[171] != 98";
  if(col[173] != 98) errors += "col[173] != 98";
  col=results[70];
  if(col[26] != 100) errors += "col[26] != 100";
  if(col[27] != 98) errors += "col[27] != 98";
  if(col[28] != 99) errors += "col[28] != 99";
  if(col[29] != 100) errors += "col[29] != 100";
  if(col[30] != 94) errors += "col[30] != 94";
  if(col[31] != 93) errors += "col[31] != 93";
  if(col[41] != 99) errors += "col[41] != 99";
  if(col[44] != 99) errors += "col[44] != 99";
  if(col[156] != 99) errors += "col[156] != 99";
  if(col[159] != 99) errors += "col[159] != 99";
  if(col[169] != 93) errors += "col[169] != 93";
  if(col[170] != 94) errors += "col[170] != 94";
  if(col[171] != 100) errors += "col[171] != 100";
  if(col[172] != 99) errors += "col[172] != 99";
  if(col[173] != 98) errors += "col[173] != 98";
  if(col[174] != 100) errors += "col[174] != 100";
  col=results[71];
  if(col[24] != 99) errors += "col[24] != 99";
  if(col[25] != 100) errors += "col[25] != 100";
  if(col[40] != 100) errors += "col[40] != 100";
  if(col[41] != 99) errors += "col[41] != 99";
  if(col[42] != 100) errors += "col[42] != 100";
  if(col[43] != 100) errors += "col[43] != 100";
  if(col[44] != 97) errors += "col[44] != 97";
  if(col[45] != 100) errors += "col[45] != 100";
  if(col[155] != 100) errors += "col[155] != 100";
  if(col[156] != 97) errors += "col[156] != 97";
  if(col[157] != 100) errors += "col[157] != 100";
  if(col[158] != 100) errors += "col[158] != 100";
  if(col[159] != 99) errors += "col[159] != 99";
  if(col[160] != 100) errors += "col[160] != 100";
  if(col[175] != 100) errors += "col[175] != 100";
  if(col[176] != 99) errors += "col[176] != 99";
  col=results[72];
  if(col[25] != 100) errors += "col[25] != 100";
  if(col[27] != 100) errors += "col[27] != 100";
  if(col[41] != 99) errors += "col[41] != 99";
  if(col[44] != 99) errors += "col[44] != 99";
  if(col[156] != 99) errors += "col[156] != 99";
  if(col[159] != 99) errors += "col[159] != 99";
  if(col[173] != 100) errors += "col[173] != 100";
  if(col[175] != 100) errors += "col[175] != 100";
  col=results[73];
  if(col[26] != 99) errors += "col[26] != 99";
  if(col[28] != 99) errors += "col[28] != 99";
  if(col[29] != 100) errors += "col[29] != 100";
  if(col[42] != 97) errors += "col[42] != 97";
  if(col[43] != 99) errors += "col[43] != 99";
  if(col[157] != 99) errors += "col[157] != 99";
  if(col[158] != 97) errors += "col[158] != 97";
  if(col[171] != 100) errors += "col[171] != 100";
  if(col[172] != 99) errors += "col[172] != 99";
  if(col[174] != 99) errors += "col[174] != 99";
  col=results[74];
  if(col[30] != 99) errors += "col[30] != 99";
  if(col[31] != 96) errors += "col[31] != 96";
  if(col[32] != 100) errors += "col[32] != 100";
  if(col[168] != 100) errors += "col[168] != 100";
  if(col[169] != 96) errors += "col[169] != 96";
  if(col[170] != 99) errors += "col[170] != 99";
  col=results[75];
  if(col[26] != 98) errors += "col[26] != 98";
  if(col[28] != 99) errors += "col[28] != 99";
  if(col[29] != 100) errors += "col[29] != 100";
  if(col[30] != 100) errors += "col[30] != 100";
  if(col[33] != 100) errors += "col[33] != 100";
  if(col[45] != 96) errors += "col[45] != 96";
  if(col[47] != 99) errors += "col[47] != 99";
  if(col[153] != 99) errors += "col[153] != 99";
  if(col[155] != 96) errors += "col[155] != 96";
  if(col[167] != 100) errors += "col[167] != 100";
  if(col[170] != 100) errors += "col[170] != 100";
  if(col[171] != 100) errors += "col[171] != 100";
  if(col[172] != 99) errors += "col[172] != 99";
  if(col[174] != 98) errors += "col[174] != 98";
  col=results[76];
  if(col[20] != 100) errors += "col[20] != 100";
  if(col[27] != 100) errors += "col[27] != 100";
  if(col[33] != 99) errors += "col[33] != 99";
  if(col[44] != 100) errors += "col[44] != 100";
  if(col[45] != 97) errors += "col[45] != 97";
  if(col[47] != 98) errors += "col[47] != 98";
  if(col[48] != 100) errors += "col[48] != 100";
  if(col[152] != 100) errors += "col[152] != 100";
  if(col[153] != 98) errors += "col[153] != 98";
  if(col[155] != 97) errors += "col[155] != 97";
  if(col[156] != 100) errors += "col[156] != 100";
  if(col[167] != 99) errors += "col[167] != 99";
  if(col[173] != 100) errors += "col[173] != 100";
  if(col[180] != 100) errors += "col[180] != 100";
  col=results[77];
  if(col[19] != 99) errors += "col[19] != 99";
  if(col[20] != 97) errors += "col[20] != 97";
  if(col[21] != 99) errors += "col[21] != 99";
  if(col[32] != 100) errors += "col[32] != 100";
  if(col[45] != 99) errors += "col[45] != 99";
  if(col[48] != 98) errors += "col[48] != 98";
  if(col[152] != 98) errors += "col[152] != 98";
  if(col[155] != 99) errors += "col[155] != 99";
  if(col[168] != 100) errors += "col[168] != 100";
  if(col[179] != 99) errors += "col[179] != 99";
  if(col[180] != 97) errors += "col[180] != 97";
  if(col[181] != 99) errors += "col[181] != 99";
  col=results[78];
  if(col[18] != 98) errors += "col[18] != 98";
  if(col[19] != 100) errors += "col[19] != 100";
  if(col[20] != 100) errors += "col[20] != 100";
  if(col[21] != 100) errors += "col[21] != 100";
  if(col[22] != 98) errors += "col[22] != 98";
  if(col[45] != 100) errors += "col[45] != 100";
  if(col[48] != 99) errors += "col[48] != 99";
  if(col[53] != 98) errors += "col[53] != 98";
  if(col[54] != 99) errors += "col[54] != 99";
  if(col[146] != 99) errors += "col[146] != 99";
  if(col[147] != 98) errors += "col[147] != 98";
  if(col[152] != 99) errors += "col[152] != 99";
  if(col[155] != 100) errors += "col[155] != 100";
  if(col[178] != 98) errors += "col[178] != 98";
  if(col[179] != 100) errors += "col[179] != 100";
  if(col[180] != 100) errors += "col[180] != 100";
  if(col[181] != 100) errors += "col[181] != 100";
  if(col[182] != 98) errors += "col[182] != 98";
  col=results[79];
  if(col[17] != 99) errors += "col[17] != 99";
  if(col[22] != 100) errors += "col[22] != 100";
  if(col[23] != 99) errors += "col[23] != 99";
  if(col[26] != 95) errors += "col[26] != 95";
  if(col[27] != 96) errors += "col[27] != 96";
  if(col[28] != 100) errors += "col[28] != 100";
  if(col[46] != 99) errors += "col[46] != 99";
  if(col[48] != 100) errors += "col[48] != 100";
  if(col[52] != 93) errors += "col[52] != 93";
  if(col[54] != 100) errors += "col[54] != 100";
  if(col[55] != 98) errors += "col[55] != 98";
  if(col[145] != 98) errors += "col[145] != 98";
  if(col[146] != 100) errors += "col[146] != 100";
  if(col[148] != 93) errors += "col[148] != 93";
  if(col[152] != 100) errors += "col[152] != 100";
  if(col[154] != 99) errors += "col[154] != 99";
  if(col[172] != 100) errors += "col[172] != 100";
  if(col[173] != 96) errors += "col[173] != 96";
  if(col[174] != 95) errors += "col[174] != 95";
  if(col[177] != 99) errors += "col[177] != 99";
  if(col[178] != 100) errors += "col[178] != 100";
  if(col[183] != 99) errors += "col[183] != 99";
  col=results[80];
  if(col[17] != 99) errors += "col[17] != 99";
  if(col[18] != 97) errors += "col[18] != 97";
  if(col[19] != 100) errors += "col[19] != 100";
  if(col[20] != 100) errors += "col[20] != 100";
  if(col[21] != 100) errors += "col[21] != 100";
  if(col[22] != 98) errors += "col[22] != 98";
  if(col[26] != 97) errors += "col[26] != 97";
  if(col[28] != 98) errors += "col[28] != 98";
  if(col[52] != 90) errors += "col[52] != 90";
  if(col[54] != 100) errors += "col[54] != 100";
  if(col[55] != 100) errors += "col[55] != 100";
  if(col[145] != 100) errors += "col[145] != 100";
  if(col[146] != 100) errors += "col[146] != 100";
  if(col[148] != 90) errors += "col[148] != 90";
  if(col[172] != 98) errors += "col[172] != 98";
  if(col[174] != 97) errors += "col[174] != 97";
  if(col[178] != 98) errors += "col[178] != 98";
  if(col[179] != 100) errors += "col[179] != 100";
  if(col[180] != 100) errors += "col[180] != 100";
  if(col[181] != 100) errors += "col[181] != 100";
  if(col[182] != 97) errors += "col[182] != 97";
  if(col[183] != 99) errors += "col[183] != 99";
  col=results[81];
  if(col[18] != 100) errors += "col[18] != 100";
  if(col[19] != 98) errors += "col[19] != 98";
  if(col[20] != 96) errors += "col[20] != 96";
  if(col[21] != 99) errors += "col[21] != 99";
  if(col[22] != 100) errors += "col[22] != 100";
  if(col[27] != 100) errors += "col[27] != 100";
  if(col[28] != 100) errors += "col[28] != 100";
  if(col[29] != 100) errors += "col[29] != 100";
  if(col[52] != 100) errors += "col[52] != 100";
  if(col[148] != 100) errors += "col[148] != 100";
  if(col[171] != 100) errors += "col[171] != 100";
  if(col[172] != 100) errors += "col[172] != 100";
  if(col[173] != 100) errors += "col[173] != 100";
  if(col[178] != 100) errors += "col[178] != 100";
  if(col[179] != 99) errors += "col[179] != 99";
  if(col[180] != 96) errors += "col[180] != 96";
  if(col[181] != 98) errors += "col[181] != 98";
  if(col[182] != 100) errors += "col[182] != 100";
  col=results[82];
  if(col[20] != 100) errors += "col[20] != 100";
  if(col[22] != 100) errors += "col[22] != 100";
  if(col[23] != 99) errors += "col[23] != 99";
  if(col[24] != 100) errors += "col[24] != 100";
  if(col[28] != 100) errors += "col[28] != 100";
  if(col[29] != 100) errors += "col[29] != 100";
  if(col[48] != 100) errors += "col[48] != 100";
  if(col[49] != 99) errors += "col[49] != 99";
  if(col[53] != 99) errors += "col[53] != 99";
  if(col[55] != 99) errors += "col[55] != 99";
  if(col[145] != 99) errors += "col[145] != 99";
  if(col[147] != 99) errors += "col[147] != 99";
  if(col[151] != 99) errors += "col[151] != 99";
  if(col[152] != 100) errors += "col[152] != 100";
  if(col[171] != 100) errors += "col[171] != 100";
  if(col[172] != 100) errors += "col[172] != 100";
  if(col[176] != 100) errors += "col[176] != 100";
  if(col[177] != 99) errors += "col[177] != 99";
  if(col[178] != 100) errors += "col[178] != 100";
  if(col[180] != 100) errors += "col[180] != 100";
  col=results[83];
  if(col[25] != 100) errors += "col[25] != 100";
  if(col[28] != 99) errors += "col[28] != 99";
  if(col[29] != 98) errors += "col[29] != 98";
  if(col[47] != 100) errors += "col[47] != 100";
  if(col[54] != 100) errors += "col[54] != 100";
  if(col[146] != 100) errors += "col[146] != 100";
  if(col[153] != 100) errors += "col[153] != 100";
  if(col[171] != 98) errors += "col[171] != 98";
  if(col[172] != 99) errors += "col[172] != 99";
  if(col[175] != 100) errors += "col[175] != 100";
  col=results[84];
  if(col[15] != 99) errors += "col[15] != 99";
  if(col[16] != 98) errors += "col[16] != 98";
  if(col[20] != 100) errors += "col[20] != 100";
  if(col[21] != 99) errors += "col[21] != 99";
  if(col[51] != 99) errors += "col[51] != 99";
  if(col[52] != 100) errors += "col[52] != 100";
  if(col[148] != 100) errors += "col[148] != 100";
  if(col[149] != 99) errors += "col[149] != 99";
  if(col[179] != 99) errors += "col[179] != 99";
  if(col[180] != 100) errors += "col[180] != 100";
  if(col[184] != 98) errors += "col[184] != 98";
  if(col[185] != 99) errors += "col[185] != 99";
  col=results[85];
  if(col[20] != 98) errors += "col[20] != 98";
  if(col[21] != 93) errors += "col[21] != 93";
  if(col[26] != 98) errors += "col[26] != 98";
  if(col[46] != 98) errors += "col[46] != 98";
  if(col[51] != 93) errors += "col[51] != 93";
  if(col[52] != 98) errors += "col[52] != 98";
  if(col[148] != 98) errors += "col[148] != 98";
  if(col[149] != 93) errors += "col[149] != 93";
  if(col[154] != 98) errors += "col[154] != 98";
  if(col[174] != 98) errors += "col[174] != 98";
  if(col[179] != 93) errors += "col[179] != 93";
  if(col[180] != 98) errors += "col[180] != 98";
  col=results[86];
  if(col[14] != 99) errors += "col[14] != 99";
  if(col[19] != 99) errors += "col[19] != 99";
  if(col[22] != 100) errors += "col[22] != 100";
  if(col[25] != 97) errors += "col[25] != 97";
  if(col[26] != 96) errors += "col[26] != 96";
  if(col[46] != 96) errors += "col[46] != 96";
  if(col[47] != 97) errors += "col[47] != 97";
  if(col[50] != 100) errors += "col[50] != 100";
  if(col[53] != 99) errors += "col[53] != 99";
  if(col[56] != 100) errors += "col[56] != 100";
  if(col[57] != 99) errors += "col[57] != 99";
  if(col[58] != 99) errors += "col[58] != 99";
  if(col[142] != 99) errors += "col[142] != 99";
  if(col[143] != 99) errors += "col[143] != 99";
  if(col[144] != 100) errors += "col[144] != 100";
  if(col[147] != 99) errors += "col[147] != 99";
  if(col[150] != 100) errors += "col[150] != 100";
  if(col[153] != 97) errors += "col[153] != 97";
  if(col[154] != 96) errors += "col[154] != 96";
  if(col[174] != 96) errors += "col[174] != 96";
  if(col[175] != 97) errors += "col[175] != 97";
  if(col[178] != 100) errors += "col[178] != 100";
  if(col[181] != 99) errors += "col[181] != 99";
  if(col[186] != 99) errors += "col[186] != 99";
  col=results[87];
  if(col[13] != 100) errors += "col[13] != 100";
  if(col[20] != 98) errors += "col[20] != 98";
  if(col[21] != 96) errors += "col[21] != 96";
  if(col[22] != 95) errors += "col[22] != 95";
  if(col[26] != 100) errors += "col[26] != 100";
  if(col[27] != 100) errors += "col[27] != 100";
  if(col[45] != 100) errors += "col[45] != 100";
  if(col[46] != 100) errors += "col[46] != 100";
  if(col[50] != 95) errors += "col[50] != 95";
  if(col[51] != 96) errors += "col[51] != 96";
  if(col[52] != 98) errors += "col[52] != 98";
  if(col[59] != 100) errors += "col[59] != 100";
  if(col[141] != 100) errors += "col[141] != 100";
  if(col[148] != 98) errors += "col[148] != 98";
  if(col[149] != 96) errors += "col[149] != 96";
  if(col[150] != 95) errors += "col[150] != 95";
  if(col[154] != 100) errors += "col[154] != 100";
  if(col[155] != 100) errors += "col[155] != 100";
  if(col[173] != 100) errors += "col[173] != 100";
  if(col[174] != 100) errors += "col[174] != 100";
  if(col[178] != 95) errors += "col[178] != 95";
  if(col[179] != 96) errors += "col[179] != 96";
  if(col[180] != 98) errors += "col[180] != 98";
  if(col[187] != 100) errors += "col[187] != 100";
  col=results[88];
  if(col[11] != 100) errors += "col[11] != 100";
  if(col[12] != 98) errors += "col[12] != 98";
  if(col[20] != 100) errors += "col[20] != 100";
  if(col[21] != 99) errors += "col[21] != 99";
  if(col[22] != 100) errors += "col[22] != 100";
  if(col[27] != 99) errors += "col[27] != 99";
  if(col[29] != 100) errors += "col[29] != 100";
  if(col[43] != 100) errors += "col[43] != 100";
  if(col[45] != 99) errors += "col[45] != 99";
  if(col[50] != 100) errors += "col[50] != 100";
  if(col[51] != 99) errors += "col[51] != 99";
  if(col[52] != 100) errors += "col[52] != 100";
  if(col[60] != 98) errors += "col[60] != 98";
  if(col[61] != 100) errors += "col[61] != 100";
  if(col[139] != 100) errors += "col[139] != 100";
  if(col[140] != 98) errors += "col[140] != 98";
  if(col[148] != 100) errors += "col[148] != 100";
  if(col[149] != 99) errors += "col[149] != 99";
  if(col[150] != 100) errors += "col[150] != 100";
  if(col[155] != 99) errors += "col[155] != 99";
  if(col[157] != 100) errors += "col[157] != 100";
  if(col[171] != 100) errors += "col[171] != 100";
  if(col[173] != 99) errors += "col[173] != 99";
  if(col[178] != 100) errors += "col[178] != 100";
  if(col[179] != 99) errors += "col[179] != 99";
  if(col[180] != 100) errors += "col[180] != 100";
  if(col[188] != 98) errors += "col[188] != 98";
  if(col[189] != 100) errors += "col[189] != 100";
  col=results[89];
  if(col[11] != 99) errors += "col[11] != 99";
  if(col[27] != 97) errors += "col[27] != 97";
  if(col[29] != 99) errors += "col[29] != 99";
  if(col[43] != 99) errors += "col[43] != 99";
  if(col[45] != 97) errors += "col[45] != 97";
  if(col[61] != 99) errors += "col[61] != 99";
  if(col[139] != 99) errors += "col[139] != 99";
  if(col[155] != 97) errors += "col[155] != 97";
  if(col[157] != 99) errors += "col[157] != 99";
  if(col[171] != 99) errors += "col[171] != 99";
  if(col[173] != 97) errors += "col[173] != 97";
  if(col[189] != 99) errors += "col[189] != 99";
  col=results[90];
  if(col[11] != 98) errors += "col[11] != 98";
  if(col[17] != 100) errors += "col[17] != 100";
  if(col[23] != 100) errors += "col[23] != 100";
  if(col[24] != 99) errors += "col[24] != 99";
  if(col[25] != 100) errors += "col[25] != 100";
  if(col[26] != 100) errors += "col[26] != 100";
  if(col[27] != 100) errors += "col[27] != 100";
  if(col[29] != 98) errors += "col[29] != 98";
  if(col[43] != 98) errors += "col[43] != 98";
  if(col[45] != 100) errors += "col[45] != 100";
  if(col[46] != 100) errors += "col[46] != 100";
  if(col[47] != 100) errors += "col[47] != 100";
  if(col[48] != 99) errors += "col[48] != 99";
  if(col[49] != 100) errors += "col[49] != 100";
  if(col[55] != 100) errors += "col[55] != 100";
  if(col[61] != 98) errors += "col[61] != 98";
  if(col[139] != 98) errors += "col[139] != 98";
  if(col[145] != 100) errors += "col[145] != 100";
  if(col[151] != 100) errors += "col[151] != 100";
  if(col[152] != 99) errors += "col[152] != 99";
  if(col[153] != 100) errors += "col[153] != 100";
  if(col[154] != 100) errors += "col[154] != 100";
  if(col[155] != 100) errors += "col[155] != 100";
  if(col[157] != 98) errors += "col[157] != 98";
  if(col[171] != 98) errors += "col[171] != 98";
  if(col[173] != 100) errors += "col[173] != 100";
  if(col[174] != 100) errors += "col[174] != 100";
  if(col[175] != 100) errors += "col[175] != 100";
  if(col[176] != 99) errors += "col[176] != 99";
  if(col[177] != 100) errors += "col[177] != 100";
  if(col[183] != 100) errors += "col[183] != 100";
  if(col[189] != 98) errors += "col[189] != 98";
  col=results[91];
  if(col[12] != 100) errors += "col[12] != 100";
  if(col[14] != 100) errors += "col[14] != 100";
  if(col[15] != 98) errors += "col[15] != 98";
  if(col[25] != 98) errors += "col[25] != 98";
  if(col[26] != 100) errors += "col[26] != 100";
  if(col[28] != 100) errors += "col[28] != 100";
  if(col[44] != 100) errors += "col[44] != 100";
  if(col[46] != 100) errors += "col[46] != 100";
  if(col[47] != 98) errors += "col[47] != 98";
  if(col[57] != 98) errors += "col[57] != 98";
  if(col[58] != 100) errors += "col[58] != 100";
  if(col[60] != 100) errors += "col[60] != 100";
  if(col[140] != 100) errors += "col[140] != 100";
  if(col[142] != 100) errors += "col[142] != 100";
  if(col[143] != 98) errors += "col[143] != 98";
  if(col[153] != 98) errors += "col[153] != 98";
  if(col[154] != 100) errors += "col[154] != 100";
  if(col[156] != 100) errors += "col[156] != 100";
  if(col[172] != 100) errors += "col[172] != 100";
  if(col[174] != 100) errors += "col[174] != 100";
  if(col[175] != 98) errors += "col[175] != 98";
  if(col[185] != 98) errors += "col[185] != 98";
  if(col[186] != 100) errors += "col[186] != 100";
  if(col[188] != 100) errors += "col[188] != 100";
  col=results[92];
  if(col[6] != 98) errors += "col[6] != 98";
  if(col[13] != 98) errors += "col[13] != 98";
  if(col[18] != 98) errors += "col[18] != 98";
  if(col[22] != 98) errors += "col[22] != 98";
  if(col[27] != 98) errors += "col[27] != 98";
  if(col[34] != 98) errors += "col[34] != 98";
  if(col[38] != 98) errors += "col[38] != 98";
  if(col[45] != 98) errors += "col[45] != 98";
  if(col[50] != 98) errors += "col[50] != 98";
  if(col[54] != 98) errors += "col[54] != 98";
  if(col[59] != 98) errors += "col[59] != 98";
  if(col[66] != 98) errors += "col[66] != 98";
  if(col[134] != 98) errors += "col[134] != 98";
  if(col[141] != 98) errors += "col[141] != 98";
  if(col[146] != 98) errors += "col[146] != 98";
  if(col[150] != 98) errors += "col[150] != 98";
  if(col[155] != 98) errors += "col[155] != 98";
  if(col[162] != 98) errors += "col[162] != 98";
  if(col[166] != 98) errors += "col[166] != 98";
  if(col[173] != 98) errors += "col[173] != 98";
  if(col[178] != 98) errors += "col[178] != 98";
  if(col[182] != 98) errors += "col[182] != 98";
  if(col[187] != 98) errors += "col[187] != 98";
  if(col[194] != 98) errors += "col[194] != 98";
  col=results[93];
  if(col[6] != 96) errors += "col[6] != 96";
  if(col[8] != 99) errors += "col[8] != 99";
  if(col[14] != 96) errors += "col[14] != 96";
  if(col[18] != 96) errors += "col[18] != 96";
  if(col[22] != 96) errors += "col[22] != 96";
  if(col[26] != 96) errors += "col[26] != 96";
  if(col[32] != 99) errors += "col[32] != 99";
  if(col[34] != 96) errors += "col[34] != 96";
  if(col[38] != 96) errors += "col[38] != 96";
  if(col[40] != 99) errors += "col[40] != 99";
  if(col[46] != 96) errors += "col[46] != 96";
  if(col[50] != 96) errors += "col[50] != 96";
  if(col[54] != 96) errors += "col[54] != 96";
  if(col[58] != 96) errors += "col[58] != 96";
  if(col[64] != 99) errors += "col[64] != 99";
  if(col[66] != 96) errors += "col[66] != 96";
  if(col[134] != 96) errors += "col[134] != 96";
  if(col[136] != 99) errors += "col[136] != 99";
  if(col[142] != 96) errors += "col[142] != 96";
  if(col[146] != 96) errors += "col[146] != 96";
  if(col[150] != 96) errors += "col[150] != 96";
  if(col[154] != 96) errors += "col[154] != 96";
  if(col[160] != 99) errors += "col[160] != 99";
  if(col[162] != 96) errors += "col[162] != 96";
  if(col[166] != 96) errors += "col[166] != 96";
  if(col[168] != 99) errors += "col[168] != 99";
  if(col[174] != 96) errors += "col[174] != 96";
  if(col[178] != 96) errors += "col[178] != 96";
  if(col[182] != 96) errors += "col[182] != 96";
  if(col[186] != 96) errors += "col[186] != 96";
  if(col[192] != 99) errors += "col[192] != 99";
  if(col[194] != 96) errors += "col[194] != 96";
  col=results[94];
  if(col[8] != 98) errors += "col[8] != 98";
  if(col[9] != 100) errors += "col[9] != 100";
  if(col[14] != 100) errors += "col[14] != 100";
  if(col[26] != 100) errors += "col[26] != 100";
  if(col[31] != 100) errors += "col[31] != 100";
  if(col[32] != 98) errors += "col[32] != 98";
  if(col[40] != 98) errors += "col[40] != 98";
  if(col[41] != 100) errors += "col[41] != 100";
  if(col[46] != 100) errors += "col[46] != 100";
  if(col[58] != 100) errors += "col[58] != 100";
  if(col[63] != 100) errors += "col[63] != 100";
  if(col[64] != 98) errors += "col[64] != 98";
  if(col[136] != 98) errors += "col[136] != 98";
  if(col[137] != 100) errors += "col[137] != 100";
  if(col[142] != 100) errors += "col[142] != 100";
  if(col[154] != 100) errors += "col[154] != 100";
  if(col[159] != 100) errors += "col[159] != 100";
  if(col[160] != 98) errors += "col[160] != 98";
  if(col[168] != 98) errors += "col[168] != 98";
  if(col[169] != 100) errors += "col[169] != 100";
  if(col[174] != 100) errors += "col[174] != 100";
  if(col[186] != 100) errors += "col[186] != 100";
  if(col[191] != 100) errors += "col[191] != 100";
  if(col[192] != 98) errors += "col[192] != 98";
  col=results[95];
  if(col[7] != 100) errors += "col[7] != 100";
  if(col[8] != 99) errors += "col[8] != 99";
  if(col[15] != 100) errors += "col[15] != 100";
  if(col[16] != 99) errors += "col[16] != 99";
  if(col[17] != 100) errors += "col[17] != 100";
  if(col[23] != 100) errors += "col[23] != 100";
  if(col[24] != 99) errors += "col[24] != 99";
  if(col[25] != 100) errors += "col[25] != 100";
  if(col[32] != 99) errors += "col[32] != 99";
  if(col[33] != 100) errors += "col[33] != 100";
  if(col[39] != 100) errors += "col[39] != 100";
  if(col[40] != 99) errors += "col[40] != 99";
  if(col[47] != 100) errors += "col[47] != 100";
  if(col[48] != 99) errors += "col[48] != 99";
  if(col[49] != 100) errors += "col[49] != 100";
  if(col[55] != 100) errors += "col[55] != 100";
  if(col[56] != 99) errors += "col[56] != 99";
  if(col[57] != 100) errors += "col[57] != 100";
  if(col[64] != 99) errors += "col[64] != 99";
  if(col[65] != 100) errors += "col[65] != 100";
  if(col[135] != 100) errors += "col[135] != 100";
  if(col[136] != 99) errors += "col[136] != 99";
  if(col[143] != 100) errors += "col[143] != 100";
  if(col[144] != 99) errors += "col[144] != 99";
  if(col[145] != 100) errors += "col[145] != 100";
  if(col[151] != 100) errors += "col[151] != 100";
  if(col[152] != 99) errors += "col[152] != 99";
  if(col[153] != 100) errors += "col[153] != 100";
  if(col[160] != 99) errors += "col[160] != 99";
  if(col[161] != 100) errors += "col[161] != 100";
  if(col[167] != 100) errors += "col[167] != 100";
  if(col[168] != 99) errors += "col[168] != 99";
  if(col[175] != 100) errors += "col[175] != 100";
  if(col[176] != 99) errors += "col[176] != 99";
  if(col[177] != 100) errors += "col[177] != 100";
  if(col[183] != 100) errors += "col[183] != 100";
  if(col[184] != 99) errors += "col[184] != 99";
  if(col[185] != 100) errors += "col[185] != 100";
  if(col[192] != 99) errors += "col[192] != 99";
  if(col[193] != 100) errors += "col[193] != 100";
  col=results[96];
  if(col[3] != 100) errors += "col[3] != 100";
  if(col[4] != 98) errors += "col[4] != 98";
  if(col[5] != 100) errors += "col[5] != 100";
  if(col[67] != 100) errors += "col[67] != 100";
  if(col[68] != 98) errors += "col[68] != 98";
  if(col[69] != 100) errors += "col[69] != 100";
  if(col[131] != 100) errors += "col[131] != 100";
  if(col[132] != 98) errors += "col[132] != 98";
  if(col[133] != 100) errors += "col[133] != 100";
  if(col[195] != 100) errors += "col[195] != 100";
  if(col[196] != 98) errors += "col[196] != 98";
  if(col[197] != 100) errors += "col[197] != 100";
  col=results[97];
  if(col[2] != 100) errors += "col[2] != 100";
  if(col[6] != 100) errors += "col[6] != 100";
  if(col[66] != 100) errors += "col[66] != 100";
  if(col[70] != 100) errors += "col[70] != 100";
  if(col[130] != 100) errors += "col[130] != 100";
  if(col[134] != 100) errors += "col[134] != 100";
  if(col[194] != 100) errors += "col[194] != 100";
  if(col[198] != 100) errors += "col[198] != 100";
  col=results[98];
  if(col[1] != 100) errors += "col[1] != 100";
  if(col[7] != 100) errors += "col[7] != 100";
  if(col[65] != 100) errors += "col[65] != 100";
  if(col[71] != 100) errors += "col[71] != 100";
  if(col[129] != 100) errors += "col[129] != 100";
  if(col[135] != 100) errors += "col[135] != 100";
  if(col[193] != 100) errors += "col[193] != 100";
  if(col[199] != 100) errors += "col[199] != 100";
  col=results[101];
  if(col[1] != 100) errors += "col[1] != 100";
  if(col[7] != 100) errors += "col[7] != 100";
  if(col[65] != 100) errors += "col[65] != 100";
  if(col[71] != 100) errors += "col[71] != 100";
  if(col[129] != 100) errors += "col[129] != 100";
  if(col[135] != 100) errors += "col[135] != 100";
  if(col[193] != 100) errors += "col[193] != 100";
  if(col[199] != 100) errors += "col[199] != 100";
  col=results[102];
  if(col[2] != 100) errors += "col[2] != 100";
  if(col[6] != 100) errors += "col[6] != 100";
  if(col[66] != 100) errors += "col[66] != 100";
  if(col[70] != 100) errors += "col[70] != 100";
  if(col[130] != 100) errors += "col[130] != 100";
  if(col[134] != 100) errors += "col[134] != 100";
  if(col[194] != 100) errors += "col[194] != 100";
  if(col[198] != 100) errors += "col[198] != 100";
  col=results[103];
  if(col[3] != 100) errors += "col[3] != 100";
  if(col[4] != 98) errors += "col[4] != 98";
  if(col[5] != 100) errors += "col[5] != 100";
  if(col[67] != 100) errors += "col[67] != 100";
  if(col[68] != 98) errors += "col[68] != 98";
  if(col[69] != 100) errors += "col[69] != 100";
  if(col[131] != 100) errors += "col[131] != 100";
  if(col[132] != 98) errors += "col[132] != 98";
  if(col[133] != 100) errors += "col[133] != 100";
  if(col[195] != 100) errors += "col[195] != 100";
  if(col[196] != 98) errors += "col[196] != 98";
  if(col[197] != 100) errors += "col[197] != 100";
  col=results[104];
  if(col[7] != 100) errors += "col[7] != 100";
  if(col[8] != 99) errors += "col[8] != 99";
  if(col[15] != 100) errors += "col[15] != 100";
  if(col[16] != 99) errors += "col[16] != 99";
  if(col[17] != 100) errors += "col[17] != 100";
  if(col[23] != 100) errors += "col[23] != 100";
  if(col[24] != 99) errors += "col[24] != 99";
  if(col[25] != 100) errors += "col[25] != 100";
  if(col[32] != 99) errors += "col[32] != 99";
  if(col[33] != 100) errors += "col[33] != 100";
  if(col[39] != 100) errors += "col[39] != 100";
  if(col[40] != 99) errors += "col[40] != 99";
  if(col[47] != 100) errors += "col[47] != 100";
  if(col[48] != 99) errors += "col[48] != 99";
  if(col[49] != 100) errors += "col[49] != 100";
  if(col[55] != 100) errors += "col[55] != 100";
  if(col[56] != 99) errors += "col[56] != 99";
  if(col[57] != 100) errors += "col[57] != 100";
  if(col[64] != 99) errors += "col[64] != 99";
  if(col[65] != 100) errors += "col[65] != 100";
  if(col[135] != 100) errors += "col[135] != 100";
  if(col[136] != 99) errors += "col[136] != 99";
  if(col[143] != 100) errors += "col[143] != 100";
  if(col[144] != 99) errors += "col[144] != 99";
  if(col[145] != 100) errors += "col[145] != 100";
  if(col[151] != 100) errors += "col[151] != 100";
  if(col[152] != 99) errors += "col[152] != 99";
  if(col[153] != 100) errors += "col[153] != 100";
  if(col[160] != 99) errors += "col[160] != 99";
  if(col[161] != 100) errors += "col[161] != 100";
  if(col[167] != 100) errors += "col[167] != 100";
  if(col[168] != 99) errors += "col[168] != 99";
  if(col[175] != 100) errors += "col[175] != 100";
  if(col[176] != 99) errors += "col[176] != 99";
  if(col[177] != 100) errors += "col[177] != 100";
  if(col[183] != 100) errors += "col[183] != 100";
  if(col[184] != 99) errors += "col[184] != 99";
  if(col[185] != 100) errors += "col[185] != 100";
  if(col[192] != 99) errors += "col[192] != 99";
  if(col[193] != 100) errors += "col[193] != 100";
  col=results[105];
  if(col[8] != 98) errors += "col[8] != 98";
  if(col[9] != 100) errors += "col[9] != 100";
  if(col[14] != 100) errors += "col[14] != 100";
  if(col[26] != 100) errors += "col[26] != 100";
  if(col[31] != 100) errors += "col[31] != 100";
  if(col[32] != 98) errors += "col[32] != 98";
  if(col[40] != 98) errors += "col[40] != 98";
  if(col[41] != 100) errors += "col[41] != 100";
  if(col[46] != 100) errors += "col[46] != 100";
  if(col[58] != 100) errors += "col[58] != 100";
  if(col[63] != 100) errors += "col[63] != 100";
  if(col[64] != 98) errors += "col[64] != 98";
  if(col[136] != 98) errors += "col[136] != 98";
  if(col[137] != 100) errors += "col[137] != 100";
  if(col[142] != 100) errors += "col[142] != 100";
  if(col[154] != 100) errors += "col[154] != 100";
  if(col[159] != 100) errors += "col[159] != 100";
  if(col[160] != 98) errors += "col[160] != 98";
  if(col[168] != 98) errors += "col[168] != 98";
  if(col[169] != 100) errors += "col[169] != 100";
  if(col[174] != 100) errors += "col[174] != 100";
  if(col[186] != 100) errors += "col[186] != 100";
  if(col[191] != 100) errors += "col[191] != 100";
  if(col[192] != 98) errors += "col[192] != 98";
  col=results[106];
  if(col[6] != 96) errors += "col[6] != 96";
  if(col[8] != 99) errors += "col[8] != 99";
  if(col[14] != 96) errors += "col[14] != 96";
  if(col[18] != 96) errors += "col[18] != 96";
  if(col[22] != 96) errors += "col[22] != 96";
  if(col[26] != 96) errors += "col[26] != 96";
  if(col[32] != 99) errors += "col[32] != 99";
  if(col[34] != 96) errors += "col[34] != 96";
  if(col[38] != 96) errors += "col[38] != 96";
  if(col[40] != 99) errors += "col[40] != 99";
  if(col[46] != 96) errors += "col[46] != 96";
  if(col[50] != 96) errors += "col[50] != 96";
  if(col[54] != 96) errors += "col[54] != 96";
  if(col[58] != 96) errors += "col[58] != 96";
  if(col[64] != 99) errors += "col[64] != 99";
  if(col[66] != 96) errors += "col[66] != 96";
  if(col[134] != 96) errors += "col[134] != 96";
  if(col[136] != 99) errors += "col[136] != 99";
  if(col[142] != 96) errors += "col[142] != 96";
  if(col[146] != 96) errors += "col[146] != 96";
  if(col[150] != 96) errors += "col[150] != 96";
  if(col[154] != 96) errors += "col[154] != 96";
  if(col[160] != 99) errors += "col[160] != 99";
  if(col[162] != 96) errors += "col[162] != 96";
  if(col[166] != 96) errors += "col[166] != 96";
  if(col[168] != 99) errors += "col[168] != 99";
  if(col[174] != 96) errors += "col[174] != 96";
  if(col[178] != 96) errors += "col[178] != 96";
  if(col[182] != 96) errors += "col[182] != 96";
  if(col[186] != 96) errors += "col[186] != 96";
  if(col[192] != 99) errors += "col[192] != 99";
  if(col[194] != 96) errors += "col[194] != 96";
  col=results[107];
  if(col[6] != 98) errors += "col[6] != 98";
  if(col[13] != 98) errors += "col[13] != 98";
  if(col[18] != 98) errors += "col[18] != 98";
  if(col[22] != 98) errors += "col[22] != 98";
  if(col[27] != 98) errors += "col[27] != 98";
  if(col[34] != 98) errors += "col[34] != 98";
  if(col[38] != 98) errors += "col[38] != 98";
  if(col[45] != 98) errors += "col[45] != 98";
  if(col[50] != 98) errors += "col[50] != 98";
  if(col[54] != 98) errors += "col[54] != 98";
  if(col[59] != 98) errors += "col[59] != 98";
  if(col[66] != 98) errors += "col[66] != 98";
  if(col[134] != 98) errors += "col[134] != 98";
  if(col[141] != 98) errors += "col[141] != 98";
  if(col[146] != 98) errors += "col[146] != 98";
  if(col[150] != 98) errors += "col[150] != 98";
  if(col[155] != 98) errors += "col[155] != 98";
  if(col[162] != 98) errors += "col[162] != 98";
  if(col[166] != 98) errors += "col[166] != 98";
  if(col[173] != 98) errors += "col[173] != 98";
  if(col[178] != 98) errors += "col[178] != 98";
  if(col[182] != 98) errors += "col[182] != 98";
  if(col[187] != 98) errors += "col[187] != 98";
  if(col[194] != 98) errors += "col[194] != 98";
  col=results[108];
  if(col[12] != 100) errors += "col[12] != 100";
  if(col[14] != 100) errors += "col[14] != 100";
  if(col[15] != 98) errors += "col[15] != 98";
  if(col[25] != 98) errors += "col[25] != 98";
  if(col[26] != 100) errors += "col[26] != 100";
  if(col[28] != 100) errors += "col[28] != 100";
  if(col[44] != 100) errors += "col[44] != 100";
  if(col[46] != 100) errors += "col[46] != 100";
  if(col[47] != 98) errors += "col[47] != 98";
  if(col[57] != 98) errors += "col[57] != 98";
  if(col[58] != 100) errors += "col[58] != 100";
  if(col[60] != 100) errors += "col[60] != 100";
  if(col[140] != 100) errors += "col[140] != 100";
  if(col[142] != 100) errors += "col[142] != 100";
  if(col[143] != 98) errors += "col[143] != 98";
  if(col[153] != 98) errors += "col[153] != 98";
  if(col[154] != 100) errors += "col[154] != 100";
  if(col[156] != 100) errors += "col[156] != 100";
  if(col[172] != 100) errors += "col[172] != 100";
  if(col[174] != 100) errors += "col[174] != 100";
  if(col[175] != 98) errors += "col[175] != 98";
  if(col[185] != 98) errors += "col[185] != 98";
  if(col[186] != 100) errors += "col[186] != 100";
  if(col[188] != 100) errors += "col[188] != 100";
  col=results[109];
  if(col[11] != 98) errors += "col[11] != 98";
  if(col[17] != 100) errors += "col[17] != 100";
  if(col[23] != 100) errors += "col[23] != 100";
  if(col[24] != 99) errors += "col[24] != 99";
  if(col[25] != 100) errors += "col[25] != 100";
  if(col[26] != 100) errors += "col[26] != 100";
  if(col[27] != 100) errors += "col[27] != 100";
  if(col[29] != 98) errors += "col[29] != 98";
  if(col[43] != 98) errors += "col[43] != 98";
  if(col[45] != 100) errors += "col[45] != 100";
  if(col[46] != 100) errors += "col[46] != 100";
  if(col[47] != 100) errors += "col[47] != 100";
  if(col[48] != 99) errors += "col[48] != 99";
  if(col[49] != 100) errors += "col[49] != 100";
  if(col[55] != 100) errors += "col[55] != 100";
  if(col[61] != 98) errors += "col[61] != 98";
  if(col[139] != 98) errors += "col[139] != 98";
  if(col[145] != 100) errors += "col[145] != 100";
  if(col[151] != 100) errors += "col[151] != 100";
  if(col[152] != 99) errors += "col[152] != 99";
  if(col[153] != 100) errors += "col[153] != 100";
  if(col[154] != 100) errors += "col[154] != 100";
  if(col[155] != 100) errors += "col[155] != 100";
  if(col[157] != 98) errors += "col[157] != 98";
  if(col[171] != 98) errors += "col[171] != 98";
  if(col[173] != 100) errors += "col[173] != 100";
  if(col[174] != 100) errors += "col[174] != 100";
  if(col[175] != 100) errors += "col[175] != 100";
  if(col[176] != 99) errors += "col[176] != 99";
  if(col[177] != 100) errors += "col[177] != 100";
  if(col[183] != 100) errors += "col[183] != 100";
  if(col[189] != 98) errors += "col[189] != 98";
  col=results[110];
  if(col[11] != 99) errors += "col[11] != 99";
  if(col[27] != 97) errors += "col[27] != 97";
  if(col[29] != 99) errors += "col[29] != 99";
  if(col[43] != 99) errors += "col[43] != 99";
  if(col[45] != 97) errors += "col[45] != 97";
  if(col[61] != 99) errors += "col[61] != 99";
  if(col[139] != 99) errors += "col[139] != 99";
  if(col[155] != 97) errors += "col[155] != 97";
  if(col[157] != 99) errors += "col[157] != 99";
  if(col[171] != 99) errors += "col[171] != 99";
  if(col[173] != 97) errors += "col[173] != 97";
  if(col[189] != 99) errors += "col[189] != 99";
  col=results[111];
  if(col[11] != 100) errors += "col[11] != 100";
  if(col[12] != 98) errors += "col[12] != 98";
  if(col[20] != 100) errors += "col[20] != 100";
  if(col[21] != 99) errors += "col[21] != 99";
  if(col[22] != 100) errors += "col[22] != 100";
  if(col[27] != 99) errors += "col[27] != 99";
  if(col[29] != 100) errors += "col[29] != 100";
  if(col[43] != 100) errors += "col[43] != 100";
  if(col[45] != 99) errors += "col[45] != 99";
  if(col[50] != 100) errors += "col[50] != 100";
  if(col[51] != 99) errors += "col[51] != 99";
  if(col[52] != 100) errors += "col[52] != 100";
  if(col[60] != 98) errors += "col[60] != 98";
  if(col[61] != 100) errors += "col[61] != 100";
  if(col[139] != 100) errors += "col[139] != 100";
  if(col[140] != 98) errors += "col[140] != 98";
  if(col[148] != 100) errors += "col[148] != 100";
  if(col[149] != 99) errors += "col[149] != 99";
  if(col[150] != 100) errors += "col[150] != 100";
  if(col[155] != 99) errors += "col[155] != 99";
  if(col[157] != 100) errors += "col[157] != 100";
  if(col[171] != 100) errors += "col[171] != 100";
  if(col[173] != 99) errors += "col[173] != 99";
  if(col[178] != 100) errors += "col[178] != 100";
  if(col[179] != 99) errors += "col[179] != 99";
  if(col[180] != 100) errors += "col[180] != 100";
  if(col[188] != 98) errors += "col[188] != 98";
  if(col[189] != 100) errors += "col[189] != 100";
  col=results[112];
  if(col[13] != 100) errors += "col[13] != 100";
  if(col[20] != 98) errors += "col[20] != 98";
  if(col[21] != 96) errors += "col[21] != 96";
  if(col[22] != 95) errors += "col[22] != 95";
  if(col[26] != 100) errors += "col[26] != 100";
  if(col[27] != 100) errors += "col[27] != 100";
  if(col[45] != 100) errors += "col[45] != 100";
  if(col[46] != 100) errors += "col[46] != 100";
  if(col[50] != 95) errors += "col[50] != 95";
  if(col[51] != 96) errors += "col[51] != 96";
  if(col[52] != 98) errors += "col[52] != 98";
  if(col[59] != 100) errors += "col[59] != 100";
  if(col[141] != 100) errors += "col[141] != 100";
  if(col[148] != 98) errors += "col[148] != 98";
  if(col[149] != 96) errors += "col[149] != 96";
  if(col[150] != 95) errors += "col[150] != 95";
  if(col[154] != 100) errors += "col[154] != 100";
  if(col[155] != 100) errors += "col[155] != 100";
  if(col[173] != 100) errors += "col[173] != 100";
  if(col[174] != 100) errors += "col[174] != 100";
  if(col[178] != 95) errors += "col[178] != 95";
  if(col[179] != 96) errors += "col[179] != 96";
  if(col[180] != 98) errors += "col[180] != 98";
  if(col[187] != 100) errors += "col[187] != 100";
  col=results[113];
  if(col[14] != 99) errors += "col[14] != 99";
  if(col[19] != 99) errors += "col[19] != 99";
  if(col[22] != 100) errors += "col[22] != 100";
  if(col[25] != 97) errors += "col[25] != 97";
  if(col[26] != 96) errors += "col[26] != 96";
  if(col[46] != 96) errors += "col[46] != 96";
  if(col[47] != 97) errors += "col[47] != 97";
  if(col[50] != 100) errors += "col[50] != 100";
  if(col[53] != 99) errors += "col[53] != 99";
  if(col[56] != 100) errors += "col[56] != 100";
  if(col[57] != 99) errors += "col[57] != 99";
  if(col[58] != 99) errors += "col[58] != 99";
  if(col[142] != 99) errors += "col[142] != 99";
  if(col[143] != 99) errors += "col[143] != 99";
  if(col[144] != 100) errors += "col[144] != 100";
  if(col[147] != 99) errors += "col[147] != 99";
  if(col[150] != 100) errors += "col[150] != 100";
  if(col[153] != 97) errors += "col[153] != 97";
  if(col[154] != 96) errors += "col[154] != 96";
  if(col[174] != 96) errors += "col[174] != 96";
  if(col[175] != 97) errors += "col[175] != 97";
  if(col[178] != 100) errors += "col[178] != 100";
  if(col[181] != 99) errors += "col[181] != 99";
  if(col[186] != 99) errors += "col[186] != 99";
  col=results[114];
  if(col[20] != 98) errors += "col[20] != 98";
  if(col[21] != 93) errors += "col[21] != 93";
  if(col[26] != 98) errors += "col[26] != 98";
  if(col[46] != 98) errors += "col[46] != 98";
  if(col[51] != 93) errors += "col[51] != 93";
  if(col[52] != 98) errors += "col[52] != 98";
  if(col[148] != 98) errors += "col[148] != 98";
  if(col[149] != 93) errors += "col[149] != 93";
  if(col[154] != 98) errors += "col[154] != 98";
  if(col[174] != 98) errors += "col[174] != 98";
  if(col[179] != 93) errors += "col[179] != 93";
  if(col[180] != 98) errors += "col[180] != 98";
  col=results[115];
  if(col[15] != 99) errors += "col[15] != 99";
  if(col[16] != 98) errors += "col[16] != 98";
  if(col[20] != 100) errors += "col[20] != 100";
  if(col[21] != 99) errors += "col[21] != 99";
  if(col[51] != 99) errors += "col[51] != 99";
  if(col[52] != 100) errors += "col[52] != 100";
  if(col[148] != 100) errors += "col[148] != 100";
  if(col[149] != 99) errors += "col[149] != 99";
  if(col[179] != 99) errors += "col[179] != 99";
  if(col[180] != 100) errors += "col[180] != 100";
  if(col[184] != 98) errors += "col[184] != 98";
  if(col[185] != 99) errors += "col[185] != 99";
  col=results[116];
  if(col[25] != 100) errors += "col[25] != 100";
  if(col[28] != 99) errors += "col[28] != 99";
  if(col[29] != 98) errors += "col[29] != 98";
  if(col[47] != 100) errors += "col[47] != 100";
  if(col[54] != 100) errors += "col[54] != 100";
  if(col[146] != 100) errors += "col[146] != 100";
  if(col[153] != 100) errors += "col[153] != 100";
  if(col[171] != 98) errors += "col[171] != 98";
  if(col[172] != 99) errors += "col[172] != 99";
  if(col[175] != 100) errors += "col[175] != 100";
  col=results[117];
  if(col[20] != 100) errors += "col[20] != 100";
  if(col[22] != 100) errors += "col[22] != 100";
  if(col[23] != 99) errors += "col[23] != 99";
  if(col[24] != 100) errors += "col[24] != 100";
  if(col[28] != 100) errors += "col[28] != 100";
  if(col[29] != 100) errors += "col[29] != 100";
  if(col[48] != 100) errors += "col[48] != 100";
  if(col[49] != 99) errors += "col[49] != 99";
  if(col[53] != 99) errors += "col[53] != 99";
  if(col[55] != 99) errors += "col[55] != 99";
  if(col[145] != 99) errors += "col[145] != 99";
  if(col[147] != 99) errors += "col[147] != 99";
  if(col[151] != 99) errors += "col[151] != 99";
  if(col[152] != 100) errors += "col[152] != 100";
  if(col[171] != 100) errors += "col[171] != 100";
  if(col[172] != 100) errors += "col[172] != 100";
  if(col[176] != 100) errors += "col[176] != 100";
  if(col[177] != 99) errors += "col[177] != 99";
  if(col[178] != 100) errors += "col[178] != 100";
  if(col[180] != 100) errors += "col[180] != 100";
  col=results[118];
  if(col[18] != 100) errors += "col[18] != 100";
  if(col[19] != 98) errors += "col[19] != 98";
  if(col[20] != 96) errors += "col[20] != 96";
  if(col[21] != 99) errors += "col[21] != 99";
  if(col[22] != 100) errors += "col[22] != 100";
  if(col[27] != 100) errors += "col[27] != 100";
  if(col[28] != 100) errors += "col[28] != 100";
  if(col[29] != 100) errors += "col[29] != 100";
  if(col[52] != 100) errors += "col[52] != 100";
  if(col[148] != 100) errors += "col[148] != 100";
  if(col[171] != 100) errors += "col[171] != 100";
  if(col[172] != 100) errors += "col[172] != 100";
  if(col[173] != 100) errors += "col[173] != 100";
  if(col[178] != 100) errors += "col[178] != 100";
  if(col[179] != 99) errors += "col[179] != 99";
  if(col[180] != 96) errors += "col[180] != 96";
  if(col[181] != 98) errors += "col[181] != 98";
  if(col[182] != 100) errors += "col[182] != 100";
  col=results[119];
  if(col[17] != 99) errors += "col[17] != 99";
  if(col[18] != 97) errors += "col[18] != 97";
  if(col[19] != 100) errors += "col[19] != 100";
  if(col[20] != 100) errors += "col[20] != 100";
  if(col[21] != 100) errors += "col[21] != 100";
  if(col[22] != 98) errors += "col[22] != 98";
  if(col[26] != 97) errors += "col[26] != 97";
  if(col[28] != 98) errors += "col[28] != 98";
  if(col[52] != 90) errors += "col[52] != 90";
  if(col[54] != 100) errors += "col[54] != 100";
  if(col[55] != 100) errors += "col[55] != 100";
  if(col[145] != 100) errors += "col[145] != 100";
  if(col[146] != 100) errors += "col[146] != 100";
  if(col[148] != 90) errors += "col[148] != 90";
  if(col[172] != 98) errors += "col[172] != 98";
  if(col[174] != 97) errors += "col[174] != 97";
  if(col[178] != 98) errors += "col[178] != 98";
  if(col[179] != 100) errors += "col[179] != 100";
  if(col[180] != 100) errors += "col[180] != 100";
  if(col[181] != 100) errors += "col[181] != 100";
  if(col[182] != 97) errors += "col[182] != 97";
  if(col[183] != 99) errors += "col[183] != 99";
  col=results[120];
  if(col[17] != 99) errors += "col[17] != 99";
  if(col[22] != 100) errors += "col[22] != 100";
  if(col[23] != 99) errors += "col[23] != 99";
  if(col[26] != 95) errors += "col[26] != 95";
  if(col[27] != 96) errors += "col[27] != 96";
  if(col[28] != 100) errors += "col[28] != 100";
  if(col[46] != 99) errors += "col[46] != 99";
  if(col[48] != 100) errors += "col[48] != 100";
  if(col[52] != 93) errors += "col[52] != 93";
  if(col[54] != 100) errors += "col[54] != 100";
  if(col[55] != 98) errors += "col[55] != 98";
  if(col[145] != 98) errors += "col[145] != 98";
  if(col[146] != 100) errors += "col[146] != 100";
  if(col[148] != 93) errors += "col[148] != 93";
  if(col[152] != 100) errors += "col[152] != 100";
  if(col[154] != 99) errors += "col[154] != 99";
  if(col[172] != 100) errors += "col[172] != 100";
  if(col[173] != 96) errors += "col[173] != 96";
  if(col[174] != 95) errors += "col[174] != 95";
  if(col[177] != 99) errors += "col[177] != 99";
  if(col[178] != 100) errors += "col[178] != 100";
  if(col[183] != 99) errors += "col[183] != 99";
  col=results[121];
  if(col[18] != 98) errors += "col[18] != 98";
  if(col[19] != 100) errors += "col[19] != 100";
  if(col[20] != 100) errors += "col[20] != 100";
  if(col[21] != 100) errors += "col[21] != 100";
  if(col[22] != 98) errors += "col[22] != 98";
  if(col[45] != 100) errors += "col[45] != 100";
  if(col[48] != 99) errors += "col[48] != 99";
  if(col[53] != 98) errors += "col[53] != 98";
  if(col[54] != 99) errors += "col[54] != 99";
  if(col[146] != 99) errors += "col[146] != 99";
  if(col[147] != 98) errors += "col[147] != 98";
  if(col[152] != 99) errors += "col[152] != 99";
  if(col[155] != 100) errors += "col[155] != 100";
  if(col[178] != 98) errors += "col[178] != 98";
  if(col[179] != 100) errors += "col[179] != 100";
  if(col[180] != 100) errors += "col[180] != 100";
  if(col[181] != 100) errors += "col[181] != 100";
  if(col[182] != 98) errors += "col[182] != 98";
  col=results[122];
  if(col[19] != 99) errors += "col[19] != 99";
  if(col[20] != 97) errors += "col[20] != 97";
  if(col[21] != 99) errors += "col[21] != 99";
  if(col[32] != 100) errors += "col[32] != 100";
  if(col[45] != 99) errors += "col[45] != 99";
  if(col[48] != 98) errors += "col[48] != 98";
  if(col[152] != 98) errors += "col[152] != 98";
  if(col[155] != 99) errors += "col[155] != 99";
  if(col[168] != 100) errors += "col[168] != 100";
  if(col[179] != 99) errors += "col[179] != 99";
  if(col[180] != 97) errors += "col[180] != 97";
  if(col[181] != 99) errors += "col[181] != 99";
  col=results[123];
  if(col[20] != 100) errors += "col[20] != 100";
  if(col[27] != 100) errors += "col[27] != 100";
  if(col[33] != 99) errors += "col[33] != 99";
  if(col[44] != 100) errors += "col[44] != 100";
  if(col[45] != 97) errors += "col[45] != 97";
  if(col[47] != 98) errors += "col[47] != 98";
  if(col[48] != 100) errors += "col[48] != 100";
  if(col[152] != 100) errors += "col[152] != 100";
  if(col[153] != 98) errors += "col[153] != 98";
  if(col[155] != 97) errors += "col[155] != 97";
  if(col[156] != 100) errors += "col[156] != 100";
  if(col[167] != 99) errors += "col[167] != 99";
  if(col[173] != 100) errors += "col[173] != 100";
  if(col[180] != 100) errors += "col[180] != 100";
  col=results[124];
  if(col[26] != 98) errors += "col[26] != 98";
  if(col[28] != 99) errors += "col[28] != 99";
  if(col[29] != 100) errors += "col[29] != 100";
  if(col[30] != 100) errors += "col[30] != 100";
  if(col[33] != 100) errors += "col[33] != 100";
  if(col[45] != 96) errors += "col[45] != 96";
  if(col[47] != 99) errors += "col[47] != 99";
  if(col[153] != 99) errors += "col[153] != 99";
  if(col[155] != 96) errors += "col[155] != 96";
  if(col[167] != 100) errors += "col[167] != 100";
  if(col[170] != 100) errors += "col[170] != 100";
  if(col[171] != 100) errors += "col[171] != 100";
  if(col[172] != 99) errors += "col[172] != 99";
  if(col[174] != 98) errors += "col[174] != 98";
  col=results[125];
  if(col[30] != 99) errors += "col[30] != 99";
  if(col[31] != 96) errors += "col[31] != 96";
  if(col[32] != 100) errors += "col[32] != 100";
  if(col[168] != 100) errors += "col[168] != 100";
  if(col[169] != 96) errors += "col[169] != 96";
  if(col[170] != 99) errors += "col[170] != 99";
  col=results[126];
  if(col[26] != 99) errors += "col[26] != 99";
  if(col[28] != 99) errors += "col[28] != 99";
  if(col[29] != 100) errors += "col[29] != 100";
  if(col[42] != 97) errors += "col[42] != 97";
  if(col[43] != 99) errors += "col[43] != 99";
  if(col[157] != 99) errors += "col[157] != 99";
  if(col[158] != 97) errors += "col[158] != 97";
  if(col[171] != 100) errors += "col[171] != 100";
  if(col[172] != 99) errors += "col[172] != 99";
  if(col[174] != 99) errors += "col[174] != 99";
  col=results[127];
  if(col[25] != 100) errors += "col[25] != 100";
  if(col[27] != 100) errors += "col[27] != 100";
  if(col[41] != 99) errors += "col[41] != 99";
  if(col[44] != 99) errors += "col[44] != 99";
  if(col[156] != 99) errors += "col[156] != 99";
  if(col[159] != 99) errors += "col[159] != 99";
  if(col[173] != 100) errors += "col[173] != 100";
  if(col[175] != 100) errors += "col[175] != 100";
  col=results[128];
  if(col[24] != 99) errors += "col[24] != 99";
  if(col[25] != 100) errors += "col[25] != 100";
  if(col[40] != 100) errors += "col[40] != 100";
  if(col[41] != 99) errors += "col[41] != 99";
  if(col[42] != 100) errors += "col[42] != 100";
  if(col[43] != 100) errors += "col[43] != 100";
  if(col[44] != 97) errors += "col[44] != 97";
  if(col[45] != 100) errors += "col[45] != 100";
  if(col[155] != 100) errors += "col[155] != 100";
  if(col[156] != 97) errors += "col[156] != 97";
  if(col[157] != 100) errors += "col[157] != 100";
  if(col[158] != 100) errors += "col[158] != 100";
  if(col[159] != 99) errors += "col[159] != 99";
  if(col[160] != 100) errors += "col[160] != 100";
  if(col[175] != 100) errors += "col[175] != 100";
  if(col[176] != 99) errors += "col[176] != 99";
  col=results[129];
  if(col[26] != 100) errors += "col[26] != 100";
  if(col[27] != 98) errors += "col[27] != 98";
  if(col[28] != 99) errors += "col[28] != 99";
  if(col[29] != 100) errors += "col[29] != 100";
  if(col[30] != 94) errors += "col[30] != 94";
  if(col[31] != 93) errors += "col[31] != 93";
  if(col[41] != 99) errors += "col[41] != 99";
  if(col[44] != 99) errors += "col[44] != 99";
  if(col[156] != 99) errors += "col[156] != 99";
  if(col[159] != 99) errors += "col[159] != 99";
  if(col[169] != 93) errors += "col[169] != 93";
  if(col[170] != 94) errors += "col[170] != 94";
  if(col[171] != 100) errors += "col[171] != 100";
  if(col[172] != 99) errors += "col[172] != 99";
  if(col[173] != 98) errors += "col[173] != 98";
  if(col[174] != 100) errors += "col[174] != 100";
  col=results[130];
  if(col[27] != 98) errors += "col[27] != 98";
  if(col[29] != 98) errors += "col[29] != 98";
  if(col[32] != 99) errors += "col[32] != 99";
  if(col[42] != 97) errors += "col[42] != 97";
  if(col[43] != 99) errors += "col[43] != 99";
  if(col[157] != 99) errors += "col[157] != 99";
  if(col[158] != 97) errors += "col[158] != 97";
  if(col[168] != 99) errors += "col[168] != 99";
  if(col[171] != 98) errors += "col[171] != 98";
  if(col[173] != 98) errors += "col[173] != 98";
  col=results[131];
  if(col[27] != 96) errors += "col[27] != 96";
  if(col[30] != 100) errors += "col[30] != 100";
  if(col[31] != 98) errors += "col[31] != 98";
  if(col[33] != 100) errors += "col[33] != 100";
  if(col[35] != 100) errors += "col[35] != 100";
  if(col[165] != 100) errors += "col[165] != 100";
  if(col[167] != 100) errors += "col[167] != 100";
  if(col[169] != 98) errors += "col[169] != 98";
  if(col[170] != 100) errors += "col[170] != 100";
  if(col[173] != 96) errors += "col[173] != 96";
  col=results[132];
  if(col[28] != 98) errors += "col[28] != 98";
  if(col[29] != 100) errors += "col[29] != 100";
  if(col[31] != 99) errors += "col[31] != 99";
  if(col[32] != 100) errors += "col[32] != 100";
  if(col[33] != 99) errors += "col[33] != 99";
  if(col[34] != 97) errors += "col[34] != 97";
  if(col[35] != 99) errors += "col[35] != 99";
  if(col[56] != 100) errors += "col[56] != 100";
  if(col[57] != 98) errors += "col[57] != 98";
  if(col[58] != 95) errors += "col[58] != 95";
  if(col[64] != 99) errors += "col[64] != 99";
  if(col[65] != 100) errors += "col[65] != 100";
  if(col[135] != 100) errors += "col[135] != 100";
  if(col[136] != 99) errors += "col[136] != 99";
  if(col[142] != 95) errors += "col[142] != 95";
  if(col[143] != 98) errors += "col[143] != 98";
  if(col[144] != 100) errors += "col[144] != 100";
  if(col[165] != 99) errors += "col[165] != 99";
  if(col[166] != 97) errors += "col[166] != 97";
  if(col[167] != 99) errors += "col[167] != 99";
  if(col[168] != 100) errors += "col[168] != 100";
  if(col[169] != 99) errors += "col[169] != 99";
  if(col[171] != 100) errors += "col[171] != 100";
  if(col[172] != 98) errors += "col[172] != 98";
  col=results[133];
  if(col[29] != 97) errors += "col[29] != 97";
  if(col[30] != 99) errors += "col[30] != 99";
  if(col[33] != 100) errors += "col[33] != 100";
  if(col[34] != 99) errors += "col[34] != 99";
  if(col[36] != 100) errors += "col[36] != 100";
  if(col[37] != 100) errors += "col[37] != 100";
  if(col[38] != 100) errors += "col[38] != 100";
  if(col[56] != 99) errors += "col[56] != 99";
  if(col[57] != 94) errors += "col[57] != 94";
  if(col[58] != 100) errors += "col[58] != 100";
  if(col[63] != 100) errors += "col[63] != 100";
  if(col[66] != 100) errors += "col[66] != 100";
  if(col[134] != 100) errors += "col[134] != 100";
  if(col[137] != 100) errors += "col[137] != 100";
  if(col[142] != 100) errors += "col[142] != 100";
  if(col[143] != 94) errors += "col[143] != 94";
  if(col[144] != 99) errors += "col[144] != 99";
  if(col[162] != 100) errors += "col[162] != 100";
  if(col[163] != 100) errors += "col[163] != 100";
  if(col[164] != 100) errors += "col[164] != 100";
  if(col[166] != 99) errors += "col[166] != 99";
  if(col[167] != 100) errors += "col[167] != 100";
  if(col[170] != 99) errors += "col[170] != 99";
  if(col[171] != 97) errors += "col[171] != 97";
  col=results[134];
  if(col[36] != 99) errors += "col[36] != 99";
  if(col[39] != 99) errors += "col[39] != 99";
  if(col[40] != 100) errors += "col[40] != 100";
  if(col[63] != 99) errors += "col[63] != 99";
  if(col[66] != 99) errors += "col[66] != 99";
  if(col[134] != 99) errors += "col[134] != 99";
  if(col[137] != 99) errors += "col[137] != 99";
  if(col[160] != 100) errors += "col[160] != 100";
  if(col[161] != 99) errors += "col[161] != 99";
  if(col[164] != 99) errors += "col[164] != 99";
  col=results[135];
  if(col[35] != 99) errors += "col[35] != 99";
  if(col[36] != 97) errors += "col[36] != 97";
  if(col[42] != 100) errors += "col[42] != 100";
  if(col[47] != 100) errors += "col[47] != 100";
  if(col[48] != 99) errors += "col[48] != 99";
  if(col[49] != 100) errors += "col[49] != 100";
  if(col[63] != 99) errors += "col[63] != 99";
  if(col[66] != 100) errors += "col[66] != 100";
  if(col[76] != 100) errors += "col[76] != 100";
  if(col[77] != 99) errors += "col[77] != 99";
  if(col[78] != 100) errors += "col[78] != 100";
  if(col[122] != 100) errors += "col[122] != 100";
  if(col[123] != 99) errors += "col[123] != 99";
  if(col[124] != 100) errors += "col[124] != 100";
  if(col[134] != 100) errors += "col[134] != 100";
  if(col[137] != 99) errors += "col[137] != 99";
  if(col[151] != 100) errors += "col[151] != 100";
  if(col[152] != 99) errors += "col[152] != 99";
  if(col[153] != 100) errors += "col[153] != 100";
  if(col[158] != 100) errors += "col[158] != 100";
  if(col[164] != 97) errors += "col[164] != 97";
  if(col[165] != 99) errors += "col[165] != 99";
  col=results[136];
  if(col[36] != 100) errors += "col[36] != 100";
  if(col[39] != 99) errors += "col[39] != 99";
  if(col[40] != 100) errors += "col[40] != 100";
  if(col[41] != 100) errors += "col[41] != 100";
  if(col[43] != 99) errors += "col[43] != 99";
  if(col[50] != 100) errors += "col[50] != 100";
  if(col[65] != 100) errors += "col[65] != 100";
  if(col[76] != 98) errors += "col[76] != 98";
  if(col[79] != 100) errors += "col[79] != 100";
  if(col[121] != 100) errors += "col[121] != 100";
  if(col[124] != 98) errors += "col[124] != 98";
  if(col[135] != 100) errors += "col[135] != 100";
  if(col[150] != 100) errors += "col[150] != 100";
  if(col[157] != 99) errors += "col[157] != 99";
  if(col[159] != 100) errors += "col[159] != 100";
  if(col[160] != 100) errors += "col[160] != 100";
  if(col[161] != 99) errors += "col[161] != 99";
  if(col[164] != 100) errors += "col[164] != 100";
  col=results[137];
  if(col[38] != 100) errors += "col[38] != 100";
  if(col[41] != 100) errors += "col[41] != 100";
  if(col[44] != 100) errors += "col[44] != 100";
  if(col[47] != 99) errors += "col[47] != 99";
  if(col[51] != 100) errors += "col[51] != 100";
  if(col[61] != 98) errors += "col[61] != 98";
  if(col[62] != 96) errors += "col[62] != 96";
  if(col[63] != 98) errors += "col[63] != 98";
  if(col[74] != 100) errors += "col[74] != 100";
  if(col[75] != 97) errors += "col[75] != 97";
  if(col[79] != 99) errors += "col[79] != 99";
  if(col[98] != 75) errors += "col[98] != 75";
  if(col[99] != 74) errors += "col[99] != 74";
  if(col[101] != 74) errors += "col[101] != 74";
  if(col[102] != 75) errors += "col[102] != 75";
  if(col[121] != 99) errors += "col[121] != 99";
  if(col[125] != 97) errors += "col[125] != 97";
  if(col[126] != 100) errors += "col[126] != 100";
  if(col[137] != 98) errors += "col[137] != 98";
  if(col[138] != 96) errors += "col[138] != 96";
  if(col[139] != 98) errors += "col[139] != 98";
  if(col[149] != 100) errors += "col[149] != 100";
  if(col[153] != 99) errors += "col[153] != 99";
  if(col[156] != 100) errors += "col[156] != 100";
  if(col[159] != 100) errors += "col[159] != 100";
  if(col[162] != 100) errors += "col[162] != 100";
  col=results[138];
  if(col[41] != 100) errors += "col[41] != 100";
  if(col[46] != 100) errors += "col[46] != 100";
  if(col[47] != 100) errors += "col[47] != 100";
  if(col[51] != 98) errors += "col[51] != 98";
  if(col[56] != 100) errors += "col[56] != 100";
  if(col[61] != 100) errors += "col[61] != 100";
  if(col[62] != 99) errors += "col[62] != 99";
  if(col[63] != 100) errors += "col[63] != 100";
  if(col[74] != 99) errors += "col[74] != 99";
  if(col[75] != 96) errors += "col[75] != 96";
  if(col[98] != 73) errors += "col[98] != 73";
  if(col[99] != 76) errors += "col[99] != 76";
  if(col[101] != 76) errors += "col[101] != 76";
  if(col[102] != 73) errors += "col[102] != 73";
  if(col[125] != 96) errors += "col[125] != 96";
  if(col[126] != 99) errors += "col[126] != 99";
  if(col[137] != 100) errors += "col[137] != 100";
  if(col[138] != 99) errors += "col[138] != 99";
  if(col[139] != 100) errors += "col[139] != 100";
  if(col[144] != 100) errors += "col[144] != 100";
  if(col[149] != 98) errors += "col[149] != 98";
  if(col[153] != 100) errors += "col[153] != 100";
  if(col[154] != 100) errors += "col[154] != 100";
  if(col[159] != 100) errors += "col[159] != 100";
  col=results[139];
  if(col[51] != 100) errors += "col[51] != 100";
  if(col[56] != 98) errors += "col[56] != 98";
  if(col[80] != 96) errors += "col[80] != 96";
  if(col[120] != 96) errors += "col[120] != 96";
  if(col[144] != 98) errors += "col[144] != 98";
  if(col[149] != 100) errors += "col[149] != 100";
  col=results[140];
  if(col[41] != 99) errors += "col[41] != 99";
  if(col[44] != 99) errors += "col[44] != 99";
  if(col[50] != 100) errors += "col[50] != 100";
  if(col[55] != 100) errors += "col[55] != 100";
  if(col[57] != 100) errors += "col[57] != 100";
  if(col[94] != 74) errors += "col[94] != 74";
  if(col[95] != 72) errors += "col[95] != 72";
  if(col[105] != 72) errors += "col[105] != 72";
  if(col[106] != 74) errors += "col[106] != 74";
  if(col[143] != 100) errors += "col[143] != 100";
  if(col[145] != 100) errors += "col[145] != 100";
  if(col[150] != 100) errors += "col[150] != 100";
  if(col[156] != 99) errors += "col[156] != 99";
  if(col[159] != 99) errors += "col[159] != 99";
  col=results[141];
  if(col[41] != 98) errors += "col[41] != 98";
  if(col[42] != 100) errors += "col[42] != 100";
  if(col[49] != 100) errors += "col[49] != 100";
  if(col[56] != 100) errors += "col[56] != 100";
  if(col[77] != 100) errors += "col[77] != 100";
  if(col[79] != 99) errors += "col[79] != 99";
  if(col[80] != 100) errors += "col[80] != 100";
  if(col[81] != 100) errors += "col[81] != 100";
  if(col[82] != 99) errors += "col[82] != 99";
  if(col[83] != 100) errors += "col[83] != 100";
  if(col[94] != 74) errors += "col[94] != 74";
  if(col[96] != 75) errors += "col[96] != 75";
  if(col[104] != 75) errors += "col[104] != 75";
  if(col[106] != 74) errors += "col[106] != 74";
  if(col[117] != 100) errors += "col[117] != 100";
  if(col[118] != 99) errors += "col[118] != 99";
  if(col[119] != 100) errors += "col[119] != 100";
  if(col[120] != 100) errors += "col[120] != 100";
  if(col[121] != 99) errors += "col[121] != 99";
  if(col[123] != 100) errors += "col[123] != 100";
  if(col[144] != 100) errors += "col[144] != 100";
  if(col[151] != 100) errors += "col[151] != 100";
  if(col[158] != 100) errors += "col[158] != 100";
  if(col[159] != 98) errors += "col[159] != 98";
  col=results[142];
  if(col[47] != 100) errors += "col[47] != 100";
  if(col[55] != 100) errors += "col[55] != 100";
  if(col[56] != 99) errors += "col[56] != 99";
  if(col[77] != 100) errors += "col[77] != 100";
  if(col[78] != 94) errors += "col[78] != 94";
  if(col[80] != 100) errors += "col[80] != 100";
  if(col[81] != 98) errors += "col[81] != 98";
  if(col[83] != 97) errors += "col[83] != 97";
  if(col[95] != 71) errors += "col[95] != 71";
  if(col[105] != 71) errors += "col[105] != 71";
  if(col[117] != 97) errors += "col[117] != 97";
  if(col[119] != 98) errors += "col[119] != 98";
  if(col[120] != 100) errors += "col[120] != 100";
  if(col[122] != 94) errors += "col[122] != 94";
  if(col[123] != 100) errors += "col[123] != 100";
  if(col[144] != 99) errors += "col[144] != 99";
  if(col[145] != 100) errors += "col[145] != 100";
  if(col[153] != 100) errors += "col[153] != 100";
  col=results[143];
  if(col[55] != 99) errors += "col[55] != 99";
  if(col[56] != 100) errors += "col[56] != 100";
  if(col[77] != 100) errors += "col[77] != 100";
  if(col[78] != 97) errors += "col[78] != 97";
  if(col[83] != 99) errors += "col[83] != 99";
  if(col[117] != 99) errors += "col[117] != 99";
  if(col[122] != 97) errors += "col[122] != 97";
  if(col[123] != 100) errors += "col[123] != 100";
  if(col[144] != 100) errors += "col[144] != 100";
  if(col[145] != 99) errors += "col[145] != 99";
  col=results[144];
  if(col[54] != 98) errors += "col[54] != 98";
  if(col[56] != 94) errors += "col[56] != 94";
  if(col[79] != 99) errors += "col[79] != 99";
  if(col[80] != 97) errors += "col[80] != 97";
  if(col[81] != 97) errors += "col[81] != 97";
  if(col[119] != 97) errors += "col[119] != 97";
  if(col[120] != 97) errors += "col[120] != 97";
  if(col[121] != 99) errors += "col[121] != 99";
  if(col[144] != 94) errors += "col[144] != 94";
  if(col[146] != 98) errors += "col[146] != 98";
  col=results[145];
  if(col[54] != 97) errors += "col[54] != 97";
  if(col[56] != 98) errors += "col[56] != 98";
  if(col[80] != 100) errors += "col[80] != 100";
  if(col[84] != 98) errors += "col[84] != 98";
  if(col[116] != 98) errors += "col[116] != 98";
  if(col[120] != 100) errors += "col[120] != 100";
  if(col[144] != 98) errors += "col[144] != 98";
  if(col[146] != 97) errors += "col[146] != 97";
  col=results[146];
  if(col[55] != 99) errors += "col[55] != 99";
  if(col[82] != 100) errors += "col[82] != 100";
  if(col[83] != 97) errors += "col[83] != 97";
  if(col[85] != 97) errors += "col[85] != 97";
  if(col[86] != 100) errors += "col[86] != 100";
  if(col[114] != 100) errors += "col[114] != 100";
  if(col[115] != 97) errors += "col[115] != 97";
  if(col[117] != 97) errors += "col[117] != 97";
  if(col[118] != 100) errors += "col[118] != 100";
  if(col[145] != 99) errors += "col[145] != 99";
  col=results[147];
  if(col[77] != 83) errors += "col[77] != 83";
  if(col[78] != 82) errors += "col[78] != 82";
  if(col[82] != 98) errors += "col[82] != 98";
  if(col[83] != 99) errors += "col[83] != 99";
  if(col[85] != 95) errors += "col[85] != 95";
  if(col[86] != 99) errors += "col[86] != 99";
  if(col[114] != 99) errors += "col[114] != 99";
  if(col[115] != 95) errors += "col[115] != 95";
  if(col[117] != 99) errors += "col[117] != 99";
  if(col[118] != 98) errors += "col[118] != 98";
  if(col[122] != 82) errors += "col[122] != 82";
  if(col[123] != 83) errors += "col[123] != 83";
  col=results[148];
  if(col[41] != 100) errors += "col[41] != 100";
  if(col[42] != 99) errors += "col[42] != 99";
  if(col[43] != 100) errors += "col[43] != 100";
  if(col[77] != 81) errors += "col[77] != 81";
  if(col[78] != 84) errors += "col[78] != 84";
  if(col[82] != 100) errors += "col[82] != 100";
  if(col[83] != 97) errors += "col[83] != 97";
  if(col[86] != 98) errors += "col[86] != 98";
  if(col[87] != 100) errors += "col[87] != 100";
  if(col[113] != 100) errors += "col[113] != 100";
  if(col[114] != 98) errors += "col[114] != 98";
  if(col[117] != 97) errors += "col[117] != 97";
  if(col[118] != 100) errors += "col[118] != 100";
  if(col[122] != 84) errors += "col[122] != 84";
  if(col[123] != 81) errors += "col[123] != 81";
  if(col[157] != 100) errors += "col[157] != 100";
  if(col[158] != 99) errors += "col[158] != 99";
  if(col[159] != 100) errors += "col[159] != 100";
  col=results[149];
  if(col[41] != 97) errors += "col[41] != 97";
  if(col[43] != 99) errors += "col[43] != 99";
  if(col[83] != 100) errors += "col[83] != 100";
  if(col[84] != 98) errors += "col[84] != 98";
  if(col[86] != 100) errors += "col[86] != 100";
  if(col[87] != 99) errors += "col[87] != 99";
  if(col[113] != 99) errors += "col[113] != 99";
  if(col[114] != 100) errors += "col[114] != 100";
  if(col[116] != 98) errors += "col[116] != 98";
  if(col[117] != 100) errors += "col[117] != 100";
  if(col[157] != 99) errors += "col[157] != 99";
  if(col[159] != 97) errors += "col[159] != 97";
  col=results[150];
  if(col[41] != 100) errors += "col[41] != 100";
  if(col[42] != 99) errors += "col[42] != 99";
  if(col[43] != 100) errors += "col[43] != 100";
  if(col[65] != 100) errors += "col[65] != 100";
  if(col[85] != 100) errors += "col[85] != 100";
  if(col[115] != 100) errors += "col[115] != 100";
  if(col[135] != 100) errors += "col[135] != 100";
  if(col[157] != 100) errors += "col[157] != 100";
  if(col[158] != 99) errors += "col[158] != 99";
  if(col[159] != 100) errors += "col[159] != 100";
  col=results[151];
  if(col[64] != 99) errors += "col[64] != 99";
  if(col[66] != 99) errors += "col[66] != 99";
  if(col[134] != 99) errors += "col[134] != 99";
  if(col[136] != 99) errors += "col[136] != 99";
  col=results[152];
  if(col[63] != 100) errors += "col[63] != 100";
  if(col[64] != 98) errors += "col[64] != 98";
  if(col[66] != 92) errors += "col[66] != 92";
  if(col[67] != 100) errors += "col[67] != 100";
  if(col[77] != 84) errors += "col[77] != 84";
  if(col[78] != 85) errors += "col[78] != 85";
  if(col[122] != 85) errors += "col[122] != 85";
  if(col[123] != 84) errors += "col[123] != 84";
  if(col[133] != 100) errors += "col[133] != 100";
  if(col[134] != 92) errors += "col[134] != 92";
  if(col[136] != 98) errors += "col[136] != 98";
  if(col[137] != 100) errors += "col[137] != 100";
  col=results[153];
  if(col[63] != 99) errors += "col[63] != 99";
  if(col[66] != 99) errors += "col[66] != 99";
  if(col[76] != 86) errors += "col[76] != 86";
  if(col[79] != 86) errors += "col[79] != 86";
  if(col[86] != 95) errors += "col[86] != 95";
  if(col[87] != 96) errors += "col[87] != 96";
  if(col[113] != 96) errors += "col[113] != 96";
  if(col[114] != 95) errors += "col[114] != 95";
  if(col[121] != 86) errors += "col[121] != 86";
  if(col[124] != 86) errors += "col[124] != 86";
  if(col[134] != 99) errors += "col[134] != 99";
  if(col[137] != 99) errors += "col[137] != 99";
  col=results[154];
  if(col[64] != 98) errors += "col[64] != 98";
  if(col[65] != 97) errors += "col[65] != 97";
  if(col[73] != 99) errors += "col[73] != 99";
  if(col[77] != 85) errors += "col[77] != 85";
  if(col[78] != 82) errors += "col[78] != 82";
  if(col[85] != 100) errors += "col[85] != 100";
  if(col[87] != 99) errors += "col[87] != 99";
  if(col[113] != 99) errors += "col[113] != 99";
  if(col[115] != 100) errors += "col[115] != 100";
  if(col[122] != 82) errors += "col[122] != 82";
  if(col[123] != 85) errors += "col[123] != 85";
  if(col[127] != 99) errors += "col[127] != 99";
  if(col[135] != 97) errors += "col[135] != 97";
  if(col[136] != 98) errors += "col[136] != 98";
  col=results[155];
  if(col[73] != 100) errors += "col[73] != 100";
  if(col[74] != 98) errors += "col[74] != 98";
  if(col[83] != 77) errors += "col[83] != 77";
  if(col[85] != 100) errors += "col[85] != 100";
  if(col[86] != 99) errors += "col[86] != 99";
  if(col[114] != 99) errors += "col[114] != 99";
  if(col[115] != 100) errors += "col[115] != 100";
  if(col[117] != 77) errors += "col[117] != 77";
  if(col[126] != 98) errors += "col[126] != 98";
  if(col[127] != 100) errors += "col[127] != 100";
  col=results[156];
  if(col[73] != 100) errors += "col[73] != 100";
  if(col[75] != 99) errors += "col[75] != 99";
  if(col[82] != 100) errors += "col[82] != 100";
  if(col[83] != 97) errors += "col[83] != 97";
  if(col[85] != 99) errors += "col[85] != 99";
  if(col[89] != 100) errors += "col[89] != 100";
  if(col[91] != 98) errors += "col[91] != 98";
  if(col[109] != 98) errors += "col[109] != 98";
  if(col[111] != 100) errors += "col[111] != 100";
  if(col[115] != 99) errors += "col[115] != 99";
  if(col[117] != 97) errors += "col[117] != 97";
  if(col[118] != 100) errors += "col[118] != 100";
  if(col[125] != 99) errors += "col[125] != 99";
  if(col[127] != 100) errors += "col[127] != 100";
  col=results[157];
  if(col[74] != 98) errors += "col[74] != 98";
  if(col[83] != 99) errors += "col[83] != 99";
  if(col[84] != 96) errors += "col[84] != 96";
  if(col[90] != 97) errors += "col[90] != 97";
  if(col[91] != 99) errors += "col[91] != 99";
  if(col[109] != 99) errors += "col[109] != 99";
  if(col[110] != 97) errors += "col[110] != 97";
  if(col[116] != 96) errors += "col[116] != 96";
  if(col[117] != 99) errors += "col[117] != 99";
  if(col[126] != 98) errors += "col[126] != 98";
  col=results[158];
  if(col[64] != 100) errors += "col[64] != 100";
  if(col[65] != 95) errors += "col[65] != 95";
  if(col[66] != 100) errors += "col[66] != 100";
  if(col[90] != 100) errors += "col[90] != 100";
  if(col[110] != 100) errors += "col[110] != 100";
  if(col[134] != 100) errors += "col[134] != 100";
  if(col[135] != 95) errors += "col[135] != 95";
  if(col[136] != 100) errors += "col[136] != 100";
  col=results[159];
  if(col[65] != 99) errors += "col[65] != 99";
  if(col[135] != 99) errors += "col[135] != 99";
  col=results[160];
  if(col[69] != 97) errors += "col[69] != 97";
  if(col[71] != 98) errors += "col[71] != 98";
  if(col[72] != 99) errors += "col[72] != 99";
  if(col[73] != 100) errors += "col[73] != 100";
  if(col[127] != 100) errors += "col[127] != 100";
  if(col[128] != 99) errors += "col[128] != 99";
  if(col[129] != 98) errors += "col[129] != 98";
  if(col[131] != 97) errors += "col[131] != 97";
  col=results[161];
  if(col[65] != 98) errors += "col[65] != 98";
  if(col[74] != 99) errors += "col[74] != 99";
  if(col[75] != 100) errors += "col[75] != 100";
  if(col[79] != 100) errors += "col[79] != 100";
  if(col[80] != 98) errors += "col[80] != 98";
  if(col[81] != 100) errors += "col[81] != 100";
  if(col[119] != 100) errors += "col[119] != 100";
  if(col[120] != 98) errors += "col[120] != 98";
  if(col[121] != 100) errors += "col[121] != 100";
  if(col[125] != 100) errors += "col[125] != 100";
  if(col[126] != 99) errors += "col[126] != 99";
  if(col[135] != 98) errors += "col[135] != 98";
  col=results[162];
  if(col[64] != 96) errors += "col[64] != 96";
  if(col[69] != 99) errors += "col[69] != 99";
  if(col[72] != 98) errors += "col[72] != 98";
  if(col[73] != 99) errors += "col[73] != 99";
  if(col[74] != 100) errors += "col[74] != 100";
  if(col[88] != 100) errors += "col[88] != 100";
  if(col[89] != 99) errors += "col[89] != 99";
  if(col[90] != 100) errors += "col[90] != 100";
  if(col[91] != 100) errors += "col[91] != 100";
  if(col[92] != 100) errors += "col[92] != 100";
  if(col[93] != 96) errors += "col[93] != 96";
  if(col[94] != 98) errors += "col[94] != 98";
  if(col[106] != 98) errors += "col[106] != 98";
  if(col[107] != 96) errors += "col[107] != 96";
  if(col[108] != 100) errors += "col[108] != 100";
  if(col[109] != 100) errors += "col[109] != 100";
  if(col[110] != 100) errors += "col[110] != 100";
  if(col[111] != 99) errors += "col[111] != 99";
  if(col[112] != 100) errors += "col[112] != 100";
  if(col[126] != 100) errors += "col[126] != 100";
  if(col[127] != 99) errors += "col[127] != 99";
  if(col[128] != 98) errors += "col[128] != 98";
  if(col[131] != 99) errors += "col[131] != 99";
  if(col[136] != 96) errors += "col[136] != 96";
  col=results[163];
  if(col[64] != 95) errors += "col[64] != 95";
  if(col[67] != 96) errors += "col[67] != 96";
  if(col[69] != 100) errors += "col[69] != 100";
  if(col[71] != 99) errors += "col[71] != 99";
  if(col[88] != 99) errors += "col[88] != 99";
  if(col[90] != 97) errors += "col[90] != 97";
  if(col[91] != 99) errors += "col[91] != 99";
  if(col[92] != 99) errors += "col[92] != 99";
  if(col[108] != 99) errors += "col[108] != 99";
  if(col[109] != 99) errors += "col[109] != 99";
  if(col[110] != 97) errors += "col[110] != 97";
  if(col[112] != 99) errors += "col[112] != 99";
  if(col[129] != 99) errors += "col[129] != 99";
  if(col[131] != 100) errors += "col[131] != 100";
  if(col[133] != 96) errors += "col[133] != 96";
  if(col[136] != 95) errors += "col[136] != 95";
  col=results[164];
  if(col[65] != 98) errors += "col[65] != 98";
  if(col[68] != 99) errors += "col[68] != 99";
  if(col[69] != 100) errors += "col[69] != 100";
  if(col[70] != 99) errors += "col[70] != 99";
  if(col[71] != 99) errors += "col[71] != 99";
  if(col[88] != 100) errors += "col[88] != 100";
  if(col[89] != 99) errors += "col[89] != 99";
  if(col[90] != 100) errors += "col[90] != 100";
  if(col[91] != 100) errors += "col[91] != 100";
  if(col[92] != 100) errors += "col[92] != 100";
  if(col[108] != 100) errors += "col[108] != 100";
  if(col[109] != 100) errors += "col[109] != 100";
  if(col[110] != 100) errors += "col[110] != 100";
  if(col[111] != 99) errors += "col[111] != 99";
  if(col[112] != 100) errors += "col[112] != 100";
  if(col[129] != 99) errors += "col[129] != 99";
  if(col[130] != 99) errors += "col[130] != 99";
  if(col[131] != 100) errors += "col[131] != 100";
  if(col[132] != 99) errors += "col[132] != 99";
  if(col[135] != 98) errors += "col[135] != 98";
  col=results[165];
  if(col[65] != 100) errors += "col[65] != 100";
  if(col[66] != 99) errors += "col[66] != 99";
  if(col[70] != 95) errors += "col[70] != 95";
  if(col[130] != 95) errors += "col[130] != 95";
  if(col[134] != 99) errors += "col[134] != 99";
  if(col[135] != 100) errors += "col[135] != 100";
  col=results[168];
  if(col[67] != 100) errors += "col[67] != 100";
  if(col[69] != 100) errors += "col[69] != 100";
  if(col[71] != 100) errors += "col[71] != 100";
  if(col[129] != 100) errors += "col[129] != 100";
  if(col[131] != 100) errors += "col[131] != 100";
  if(col[133] != 100) errors += "col[133] != 100";
  col=results[169];
  if(col[62] != 100) errors += "col[62] != 100";
  if(col[67] != 100) errors += "col[67] != 100";
  if(col[68] != 96) errors += "col[68] != 96";
  if(col[70] != 98) errors += "col[70] != 98";
  if(col[71] != 97) errors += "col[71] != 97";
  if(col[129] != 97) errors += "col[129] != 97";
  if(col[130] != 98) errors += "col[130] != 98";
  if(col[132] != 96) errors += "col[132] != 96";
  if(col[133] != 100) errors += "col[133] != 100";
  if(col[138] != 100) errors += "col[138] != 100";
  col=results[170];
  if(col[60] != 100) errors += "col[60] != 100";
  if(col[61] != 98) errors += "col[61] != 98";
  if(col[69] != 99) errors += "col[69] != 99";
  if(col[70] != 100) errors += "col[70] != 100";
  if(col[71] != 100) errors += "col[71] != 100";
  if(col[72] != 100) errors += "col[72] != 100";
  if(col[128] != 100) errors += "col[128] != 100";
  if(col[129] != 100) errors += "col[129] != 100";
  if(col[130] != 100) errors += "col[130] != 100";
  if(col[131] != 99) errors += "col[131] != 99";
  if(col[139] != 98) errors += "col[139] != 98";
  if(col[140] != 100) errors += "col[140] != 100";
  col=results[171];
  if(col[61] != 99) errors += "col[61] != 99";
  if(col[62] != 100) errors += "col[62] != 100";
  if(col[65] != 100) errors += "col[65] != 100";
  if(col[66] != 98) errors += "col[66] != 98";
  if(col[69] != 100) errors += "col[69] != 100";
  if(col[131] != 100) errors += "col[131] != 100";
  if(col[134] != 98) errors += "col[134] != 98";
  if(col[135] != 100) errors += "col[135] != 100";
  if(col[138] != 100) errors += "col[138] != 100";
  if(col[139] != 99) errors += "col[139] != 99";
  col=results[172];
  if(col[62] != 99) errors += "col[62] != 99";
  if(col[65] != 100) errors += "col[65] != 100";
  if(col[69] != 98) errors += "col[69] != 98";
  if(col[72] != 98) errors += "col[72] != 98";
  if(col[73] != 100) errors += "col[73] != 100";
  if(col[127] != 100) errors += "col[127] != 100";
  if(col[128] != 98) errors += "col[128] != 98";
  if(col[131] != 98) errors += "col[131] != 98";
  if(col[135] != 100) errors += "col[135] != 100";
  if(col[138] != 99) errors += "col[138] != 99";
  col=results[173];
  if(col[63] != 99) errors += "col[63] != 99";
  if(col[64] != 100) errors += "col[64] != 100";
  if(col[69] != 94) errors += "col[69] != 94";
  if(col[70] != 100) errors += "col[70] != 100";
  if(col[71] != 100) errors += "col[71] != 100";
  if(col[72] != 99) errors += "col[72] != 99";
  if(col[84] != 92) errors += "col[84] != 92";
  if(col[116] != 92) errors += "col[116] != 92";
  if(col[128] != 99) errors += "col[128] != 99";
  if(col[129] != 100) errors += "col[129] != 100";
  if(col[130] != 100) errors += "col[130] != 100";
  if(col[131] != 94) errors += "col[131] != 94";
  if(col[136] != 100) errors += "col[136] != 100";
  if(col[137] != 99) errors += "col[137] != 99";
  col=results[174];
  if(col[64] != 99) errors += "col[64] != 99";
  if(col[65] != 98) errors += "col[65] != 98";
  if(col[66] != 98) errors += "col[66] != 98";
  if(col[68] != 99) errors += "col[68] != 99";
  if(col[71] != 98) errors += "col[71] != 98";
  if(col[83] != 89) errors += "col[83] != 89";
  if(col[85] != 91) errors += "col[85] != 91";
  if(col[115] != 91) errors += "col[115] != 91";
  if(col[117] != 89) errors += "col[117] != 89";
  if(col[129] != 98) errors += "col[129] != 98";
  if(col[132] != 99) errors += "col[132] != 99";
  if(col[134] != 98) errors += "col[134] != 98";
  if(col[135] != 98) errors += "col[135] != 98";
  if(col[136] != 99) errors += "col[136] != 99";
  col=results[175];
  if(col[65] != 100) errors += "col[65] != 100";
  if(col[68] != 98) errors += "col[68] != 98";
  if(col[69] != 97) errors += "col[69] != 97";
  if(col[70] != 100) errors += "col[70] != 100";
  if(col[71] != 94) errors += "col[71] != 94";
  if(col[72] != 99) errors += "col[72] != 99";
  if(col[83] != 91) errors += "col[83] != 91";
  if(col[85] != 90) errors += "col[85] != 90";
  if(col[115] != 90) errors += "col[115] != 90";
  if(col[117] != 91) errors += "col[117] != 91";
  if(col[128] != 99) errors += "col[128] != 99";
  if(col[129] != 94) errors += "col[129] != 94";
  if(col[130] != 100) errors += "col[130] != 100";
  if(col[131] != 97) errors += "col[131] != 97";
  if(col[132] != 98) errors += "col[132] != 98";
  if(col[135] != 100) errors += "col[135] != 100";
  col=results[176];
  if(col[68] != 99) errors += "col[68] != 99";
  if(col[70] != 100) errors += "col[70] != 100";
  if(col[72] != 97) errors += "col[72] != 97";
  if(col[73] != 100) errors += "col[73] != 100";
  if(col[84] != 92) errors += "col[84] != 92";
  if(col[116] != 92) errors += "col[116] != 92";
  if(col[127] != 100) errors += "col[127] != 100";
  if(col[128] != 97) errors += "col[128] != 97";
  if(col[130] != 100) errors += "col[130] != 100";
  if(col[132] != 99) errors += "col[132] != 99";
  col=results[177];
  if(col[69] != 99) errors += "col[69] != 99";
  if(col[72] != 98) errors += "col[72] != 98";
  if(col[73] != 100) errors += "col[73] != 100";
  if(col[75] != 97) errors += "col[75] != 97";
  if(col[76] != 95) errors += "col[76] != 95";
  if(col[124] != 95) errors += "col[124] != 95";
  if(col[125] != 97) errors += "col[125] != 97";
  if(col[127] != 100) errors += "col[127] != 100";
  if(col[128] != 98) errors += "col[128] != 98";
  if(col[131] != 99) errors += "col[131] != 99";
  col=results[178];
  if(col[71] != 100) errors += "col[71] != 100";
  if(col[75] != 95) errors += "col[75] != 95";
  if(col[77] != 95) errors += "col[77] != 95";
  if(col[90] != 99) errors += "col[90] != 99";
  if(col[91] != 98) errors += "col[91] != 98";
  if(col[109] != 98) errors += "col[109] != 98";
  if(col[110] != 99) errors += "col[110] != 99";
  if(col[123] != 95) errors += "col[123] != 95";
  if(col[125] != 95) errors += "col[125] != 95";
  if(col[129] != 100) errors += "col[129] != 100";
  col=results[179];
  if(col[76] != 98) errors += "col[76] != 98";
  if(col[77] != 99) errors += "col[77] != 99";
  if(col[89] != 100) errors += "col[89] != 100";
  if(col[92] != 100) errors += "col[92] != 100";
  if(col[108] != 100) errors += "col[108] != 100";
  if(col[111] != 100) errors += "col[111] != 100";
  if(col[123] != 99) errors += "col[123] != 99";
  if(col[124] != 98) errors += "col[124] != 98";
  col=results[180];
  if(col[90] != 99) errors += "col[90] != 99";
  if(col[91] != 99) errors += "col[91] != 99";
  if(col[109] != 99) errors += "col[109] != 99";
  if(col[110] != 99) errors += "col[110] != 99";
  col=results[181];
  if(col[90] != 100) errors += "col[90] != 100";
  if(col[91] != 100) errors += "col[91] != 100";
  if(col[109] != 100) errors += "col[109] != 100";
  if(col[110] != 100) errors += "col[110] != 100";
  col=results[182];
  if(col[86] != 99) errors += "col[86] != 99";
  if(col[87] != 96) errors += "col[87] != 96";
  if(col[89] != 100) errors += "col[89] != 100";
  if(col[111] != 100) errors += "col[111] != 100";
  if(col[113] != 96) errors += "col[113] != 96";
  if(col[114] != 99) errors += "col[114] != 99";
  col=results[183];
  if(col[86] != 100) errors += "col[86] != 100";
  if(col[89] != 98) errors += "col[89] != 98";
  if(col[111] != 98) errors += "col[111] != 98";
  if(col[114] != 100) errors += "col[114] != 100";
  col=results[184];
  if(col[87] != 100) errors += "col[87] != 100";
  if(col[88] != 99) errors += "col[88] != 99";
  if(col[89] != 100) errors += "col[89] != 100";
  if(col[111] != 100) errors += "col[111] != 100";
  if(col[112] != 99) errors += "col[112] != 99";
  if(col[113] != 100) errors += "col[113] != 100";
  col=results[186];
  if(col[97] != 35) errors += "col[97] != 35";
  if(col[98] != 32) errors += "col[98] != 32";
  if(col[102] != 32) errors += "col[102] != 32";
  if(col[103] != 35) errors += "col[103] != 35";
  col=results[187];
  if(col[97] != 35) errors += "col[97] != 35";
  if(col[98] != 31) errors += "col[98] != 31";
  if(col[102] != 31) errors += "col[102] != 31";
  if(col[103] != 35) errors += "col[103] != 35";
  col=results[188];
  if(col[82] != 100) errors += "col[82] != 100";
  if(col[83] != 98) errors += "col[83] != 98";
  if(col[84] != 100) errors += "col[84] != 100";
  if(col[116] != 100) errors += "col[116] != 100";
  if(col[117] != 98) errors += "col[117] != 98";
  if(col[118] != 100) errors += "col[118] != 100";
  col=results[189];
  if(col[81] != 100) errors += "col[81] != 100";
  if(col[85] != 100) errors += "col[85] != 100";
  if(col[115] != 100) errors += "col[115] != 100";
  if(col[119] != 100) errors += "col[119] != 100";
  col=results[190];
  if(col[81] != 98) errors += "col[81] != 98";
  if(col[85] != 98) errors += "col[85] != 98";
  if(col[115] != 98) errors += "col[115] != 98";
  if(col[119] != 98) errors += "col[119] != 98";
  col=results[191];
  if(col[81] != 100) errors += "col[81] != 100";
  if(col[85] != 100) errors += "col[85] != 100";
  if(col[115] != 100) errors += "col[115] != 100";
  if(col[119] != 100) errors += "col[119] != 100";
  col=results[192];
  if(col[82] != 100) errors += "col[82] != 100";
  if(col[83] != 98) errors += "col[83] != 98";
  if(col[84] != 100) errors += "col[84] != 100";
  if(col[116] != 100) errors += "col[116] != 100";
  if(col[117] != 98) errors += "col[117] != 98";
  if(col[118] != 100) errors += "col[118] != 100";
  col=results[197];
  if(col[87] != 90) errors += "col[87] != 90";
  if(col[88] != 90) errors += "col[88] != 90";
  if(col[112] != 90) errors += "col[112] != 90";
  if(col[113] != 90) errors += "col[113] != 90";
  col=results[198];
  if(col[87] != 88) errors += "col[87] != 88";
  if(col[88] != 89) errors += "col[88] != 89";
  if(col[112] != 89) errors += "col[112] != 89";
  if(col[113] != 88) errors += "col[113] != 88";
  return errors;
}

testResults[3] = function(results) {
  var col, errors = "";
  col=results[1];
  if(col[87] != 5570560) errors += "col[87] != 5570560";
  if(col[88] != 6684672) errors += "col[88] != 6684672";
  if(col[112] != 6684672) errors += "col[112] != 6684672";
  if(col[113] != 5570560) errors += "col[113] != 5570560";
  col=results[2];
  if(col[87] != 7798784) errors += "col[87] != 7798784";
  if(col[88] != 7798784) errors += "col[88] != 7798784";
  if(col[112] != 7798784) errors += "col[112] != 7798784";
  if(col[113] != 7798784) errors += "col[113] != 7798784";
  col=results[7];
  if(col[82] != 6684774) errors += "col[82] != 6684774";
  if(col[83] != 16711680) errors += "col[83] != 16711680";
  if(col[84] != 6684774) errors += "col[84] != 6684774";
  if(col[116] != 6684774) errors += "col[116] != 6684774";
  if(col[117] != 16711680) errors += "col[117] != 16711680";
  if(col[118] != 6684774) errors += "col[118] != 6684774";
  col=results[8];
  if(col[81] != 6684774) errors += "col[81] != 6684774";
  if(col[85] != 6684774) errors += "col[85] != 6684774";
  if(col[115] != 6684774) errors += "col[115] != 6684774";
  if(col[119] != 6684774) errors += "col[119] != 6684774";
  col=results[9];
  if(col[81] != 16711680) errors += "col[81] != 16711680";
  if(col[85] != 16711680) errors += "col[85] != 16711680";
  if(col[115] != 16711680) errors += "col[115] != 16711680";
  if(col[119] != 16711680) errors += "col[119] != 16711680";
  col=results[10];
  if(col[81] != 6684774) errors += "col[81] != 6684774";
  if(col[85] != 6684774) errors += "col[85] != 6684774";
  if(col[115] != 6684774) errors += "col[115] != 6684774";
  if(col[119] != 6684774) errors += "col[119] != 6684774";
  col=results[11];
  if(col[82] != 6684774) errors += "col[82] != 6684774";
  if(col[83] != 16711680) errors += "col[83] != 16711680";
  if(col[84] != 6684774) errors += "col[84] != 6684774";
  if(col[116] != 6684774) errors += "col[116] != 6684774";
  if(col[117] != 16711680) errors += "col[117] != 16711680";
  if(col[118] != 6684774) errors += "col[118] != 6684774";
  col=results[12];
  if(col[97] != 7798784) errors += "col[97] != 7798784";
  if(col[98] != 15658496) errors += "col[98] != 15658496";
  if(col[102] != 15658496) errors += "col[102] != 15658496";
  if(col[103] != 7798784) errors += "col[103] != 7798784";
  col=results[13];
  if(col[97] != 7798784) errors += "col[97] != 7798784";
  if(col[98] != 16776960) errors += "col[98] != 16776960";
  if(col[102] != 16776960) errors += "col[102] != 16776960";
  if(col[103] != 7798784) errors += "col[103] != 7798784";
  col=results[15];
  if(col[87] != 6684774) errors += "col[87] != 6684774";
  if(col[88] != 5570645) errors += "col[88] != 5570645";
  if(col[89] != 6684774) errors += "col[89] != 6684774";
  if(col[111] != 6684774) errors += "col[111] != 6684774";
  if(col[112] != 5570645) errors += "col[112] != 5570645";
  if(col[113] != 6684774) errors += "col[113] != 6684774";
  col=results[16];
  if(col[86] != 6684774) errors += "col[86] != 6684774";
  if(col[89] != 16711680) errors += "col[89] != 16711680";
  if(col[111] != 16711680) errors += "col[111] != 16711680";
  if(col[114] != 6684774) errors += "col[114] != 6684774";
  col=results[17];
  if(col[86] != 5570645) errors += "col[86] != 5570645";
  if(col[87] != 14483456) errors += "col[87] != 14483456";
  if(col[89] != 6684774) errors += "col[89] != 6684774";
  if(col[111] != 6684774) errors += "col[111] != 6684774";
  if(col[113] != 14483456) errors += "col[113] != 14483456";
  if(col[114] != 5570645) errors += "col[114] != 5570645";
  col=results[18];
  if(col[90] != 6684774) errors += "col[90] != 6684774";
  if(col[91] != 6684774) errors += "col[91] != 6684774";
  if(col[109] != 6684774) errors += "col[109] != 6684774";
  if(col[110] != 6684774) errors += "col[110] != 6684774";
  col=results[19];
  if(col[90] != 5570645) errors += "col[90] != 5570645";
  if(col[91] != 5570645) errors += "col[91] != 5570645";
  if(col[109] != 5570645) errors += "col[109] != 5570645";
  if(col[110] != 5570645) errors += "col[110] != 5570645";
  col=results[20];
  if(col[76] != 16711680) errors += "col[76] != 16711680";
  if(col[77] != 5570645) errors += "col[77] != 5570645";
  if(col[89] != 6684774) errors += "col[89] != 6684774";
  if(col[92] != 6684774) errors += "col[92] != 6684774";
  if(col[108] != 6684774) errors += "col[108] != 6684774";
  if(col[111] != 6684774) errors += "col[111] != 6684774";
  if(col[123] != 5570645) errors += "col[123] != 5570645";
  if(col[124] != 16711680) errors += "col[124] != 16711680";
  col=results[21];
  if(col[71] != 6684774) errors += "col[71] != 6684774";
  if(col[75] != 13369344) errors += "col[75] != 13369344";
  if(col[77] != 13369344) errors += "col[77] != 13369344";
  if(col[90] != 5570645) errors += "col[90] != 5570645";
  if(col[91] != 16711680) errors += "col[91] != 16711680";
  if(col[109] != 16711680) errors += "col[109] != 16711680";
  if(col[110] != 5570645) errors += "col[110] != 5570645";
  if(col[123] != 13369344) errors += "col[123] != 13369344";
  if(col[125] != 13369344) errors += "col[125] != 13369344";
  if(col[129] != 6684774) errors += "col[129] != 6684774";
  col=results[22];
  if(col[69] != 5570645) errors += "col[69] != 5570645";
  if(col[72] != 16711680) errors += "col[72] != 16711680";
  if(col[73] != 6684774) errors += "col[73] != 6684774";
  if(col[75] != 15597568) errors += "col[75] != 15597568";
  if(col[76] != 13369344) errors += "col[76] != 13369344";
  if(col[124] != 13369344) errors += "col[124] != 13369344";
  if(col[125] != 15597568) errors += "col[125] != 15597568";
  if(col[127] != 6684774) errors += "col[127] != 6684774";
  if(col[128] != 16711680) errors += "col[128] != 16711680";
  if(col[131] != 5570645) errors += "col[131] != 5570645";
  col=results[23];
  if(col[68] != 5570645) errors += "col[68] != 5570645";
  if(col[70] != 6684774) errors += "col[70] != 6684774";
  if(col[72] != 15597568) errors += "col[72] != 15597568";
  if(col[73] != 6684774) errors += "col[73] != 6684774";
  if(col[84] != 10027008) errors += "col[84] != 10027008";
  if(col[116] != 10027008) errors += "col[116] != 10027008";
  if(col[127] != 6684774) errors += "col[127] != 6684774";
  if(col[128] != 15597568) errors += "col[128] != 15597568";
  if(col[130] != 6684774) errors += "col[130] != 6684774";
  if(col[132] != 5570645) errors += "col[132] != 5570645";
  col=results[24];
  if(col[65] != 6684774) errors += "col[65] != 6684774";
  if(col[68] != 16711680) errors += "col[68] != 16711680";
  if(col[69] != 15597568) errors += "col[69] != 15597568";
  if(col[70] != 6684774) errors += "col[70] != 6684774";
  if(col[71] != 12255232) errors += "col[71] != 12255232";
  if(col[72] != 5570645) errors += "col[72] != 5570645";
  if(col[83] != 8912896) errors += "col[83] != 8912896";
  if(col[85] != 7798784) errors += "col[85] != 7798784";
  if(col[115] != 7798784) errors += "col[115] != 7798784";
  if(col[117] != 8912896) errors += "col[117] != 8912896";
  if(col[128] != 5570645) errors += "col[128] != 5570645";
  if(col[129] != 12255232) errors += "col[129] != 12255232";
  if(col[130] != 6684774) errors += "col[130] != 6684774";
  if(col[131] != 15597568) errors += "col[131] != 15597568";
  if(col[132] != 16711680) errors += "col[132] != 16711680";
  if(col[135] != 6684774) errors += "col[135] != 6684774";
  col=results[25];
  if(col[64] != 5570645) errors += "col[64] != 5570645";
  if(col[65] != 16711680) errors += "col[65] != 16711680";
  if(col[66] != 16711680) errors += "col[66] != 16711680";
  if(col[68] != 5570645) errors += "col[68] != 5570645";
  if(col[71] != 16711680) errors += "col[71] != 16711680";
  if(col[83] != 6684672) errors += "col[83] != 6684672";
  if(col[85] != 8912896) errors += "col[85] != 8912896";
  if(col[115] != 8912896) errors += "col[115] != 8912896";
  if(col[117] != 6684672) errors += "col[117] != 6684672";
  if(col[129] != 16711680) errors += "col[129] != 16711680";
  if(col[132] != 5570645) errors += "col[132] != 5570645";
  if(col[134] != 16711680) errors += "col[134] != 16711680";
  if(col[135] != 16711680) errors += "col[135] != 16711680";
  if(col[136] != 5570645) errors += "col[136] != 5570645";
  col=results[26];
  if(col[63] != 5570645) errors += "col[63] != 5570645";
  if(col[64] != 6684774) errors += "col[64] != 6684774";
  if(col[69] != 12255232) errors += "col[69] != 12255232";
  if(col[70] != 6684774) errors += "col[70] != 6684774";
  if(col[71] != 6684774) errors += "col[71] != 6684774";
  if(col[72] != 5570645) errors += "col[72] != 5570645";
  if(col[84] != 10027008) errors += "col[84] != 10027008";
  if(col[116] != 10027008) errors += "col[116] != 10027008";
  if(col[128] != 5570645) errors += "col[128] != 5570645";
  if(col[129] != 6684774) errors += "col[129] != 6684774";
  if(col[130] != 6684774) errors += "col[130] != 6684774";
  if(col[131] != 12255232) errors += "col[131] != 12255232";
  if(col[136] != 6684774) errors += "col[136] != 6684774";
  if(col[137] != 5570645) errors += "col[137] != 5570645";
  col=results[27];
  if(col[62] != 5570645) errors += "col[62] != 5570645";
  if(col[65] != 6684774) errors += "col[65] != 6684774";
  if(col[69] != 16711680) errors += "col[69] != 16711680";
  if(col[72] != 16711680) errors += "col[72] != 16711680";
  if(col[73] != 6684774) errors += "col[73] != 6684774";
  if(col[127] != 6684774) errors += "col[127] != 6684774";
  if(col[128] != 16711680) errors += "col[128] != 16711680";
  if(col[131] != 16711680) errors += "col[131] != 16711680";
  if(col[135] != 6684774) errors += "col[135] != 6684774";
  if(col[138] != 5570645) errors += "col[138] != 5570645";
  col=results[28];
  if(col[61] != 5570645) errors += "col[61] != 5570645";
  if(col[62] != 6684774) errors += "col[62] != 6684774";
  if(col[65] != 6684774) errors += "col[65] != 6684774";
  if(col[66] != 16711680) errors += "col[66] != 16711680";
  if(col[69] != 6684774) errors += "col[69] != 6684774";
  if(col[131] != 6684774) errors += "col[131] != 6684774";
  if(col[134] != 16711680) errors += "col[134] != 16711680";
  if(col[135] != 6684774) errors += "col[135] != 6684774";
  if(col[138] != 6684774) errors += "col[138] != 6684774";
  if(col[139] != 5570645) errors += "col[139] != 5570645";
  col=results[29];
  if(col[60] != 6684774) errors += "col[60] != 6684774";
  if(col[61] != 16711680) errors += "col[61] != 16711680";
  if(col[69] != 5570645) errors += "col[69] != 5570645";
  if(col[70] != 6684774) errors += "col[70] != 6684774";
  if(col[71] != 6684774) errors += "col[71] != 6684774";
  if(col[72] != 6684774) errors += "col[72] != 6684774";
  if(col[128] != 6684774) errors += "col[128] != 6684774";
  if(col[129] != 6684774) errors += "col[129] != 6684774";
  if(col[130] != 6684774) errors += "col[130] != 6684774";
  if(col[131] != 5570645) errors += "col[131] != 5570645";
  if(col[139] != 16711680) errors += "col[139] != 16711680";
  if(col[140] != 6684774) errors += "col[140] != 6684774";
  col=results[30];
  if(col[62] != 6684774) errors += "col[62] != 6684774";
  if(col[67] != 6684774) errors += "col[67] != 6684774";
  if(col[68] != 14483456) errors += "col[68] != 14483456";
  if(col[70] != 16711680) errors += "col[70] != 16711680";
  if(col[71] != 15597568) errors += "col[71] != 15597568";
  if(col[129] != 15597568) errors += "col[129] != 15597568";
  if(col[130] != 16711680) errors += "col[130] != 16711680";
  if(col[132] != 14483456) errors += "col[132] != 14483456";
  if(col[133] != 6684774) errors += "col[133] != 6684774";
  if(col[138] != 6684774) errors += "col[138] != 6684774";
  col=results[31];
  if(col[67] != 6684774) errors += "col[67] != 6684774";
  if(col[69] != 6684774) errors += "col[69] != 6684774";
  if(col[71] != 6684774) errors += "col[71] != 6684774";
  if(col[129] != 6684774) errors += "col[129] != 6684774";
  if(col[131] != 6684774) errors += "col[131] != 6684774";
  if(col[133] != 6684774) errors += "col[133] != 6684774";
  col=results[34];
  if(col[65] != 6684774) errors += "col[65] != 6684774";
  if(col[66] != 5570645) errors += "col[66] != 5570645";
  if(col[70] != 13369344) errors += "col[70] != 13369344";
  if(col[130] != 13369344) errors += "col[130] != 13369344";
  if(col[134] != 5570645) errors += "col[134] != 5570645";
  if(col[135] != 6684774) errors += "col[135] != 6684774";
  col=results[35];
  if(col[65] != 16711680) errors += "col[65] != 16711680";
  if(col[68] != 5570645) errors += "col[68] != 5570645";
  if(col[69] != 6684774) errors += "col[69] != 6684774";
  if(col[70] != 5570645) errors += "col[70] != 5570645";
  if(col[71] != 5570645) errors += "col[71] != 5570645";
  if(col[88] != 6684774) errors += "col[88] != 6684774";
  if(col[89] != 5570645) errors += "col[89] != 5570645";
  if(col[90] != 6684774) errors += "col[90] != 6684774";
  if(col[91] != 6684774) errors += "col[91] != 6684774";
  if(col[92] != 6684774) errors += "col[92] != 6684774";
  if(col[108] != 6684774) errors += "col[108] != 6684774";
  if(col[109] != 6684774) errors += "col[109] != 6684774";
  if(col[110] != 6684774) errors += "col[110] != 6684774";
  if(col[111] != 5570645) errors += "col[111] != 5570645";
  if(col[112] != 6684774) errors += "col[112] != 6684774";
  if(col[129] != 5570645) errors += "col[129] != 5570645";
  if(col[130] != 5570645) errors += "col[130] != 5570645";
  if(col[131] != 6684774) errors += "col[131] != 6684774";
  if(col[132] != 5570645) errors += "col[132] != 5570645";
  if(col[135] != 16711680) errors += "col[135] != 16711680";
  col=results[36];
  if(col[64] != 13369344) errors += "col[64] != 13369344";
  if(col[67] != 14483456) errors += "col[67] != 14483456";
  if(col[69] != 6684774) errors += "col[69] != 6684774";
  if(col[71] != 5570645) errors += "col[71] != 5570645";
  if(col[88] != 5570645) errors += "col[88] != 5570645";
  if(col[90] != 15597568) errors += "col[90] != 15597568";
  if(col[91] != 5570645) errors += "col[91] != 5570645";
  if(col[92] != 5570645) errors += "col[92] != 5570645";
  if(col[108] != 5570645) errors += "col[108] != 5570645";
  if(col[109] != 5570645) errors += "col[109] != 5570645";
  if(col[110] != 15597568) errors += "col[110] != 15597568";
  if(col[112] != 5570645) errors += "col[112] != 5570645";
  if(col[129] != 5570645) errors += "col[129] != 5570645";
  if(col[131] != 6684774) errors += "col[131] != 6684774";
  if(col[133] != 14483456) errors += "col[133] != 14483456";
  if(col[136] != 13369344) errors += "col[136] != 13369344";
  col=results[37];
  if(col[64] != 14483456) errors += "col[64] != 14483456";
  if(col[69] != 5570645) errors += "col[69] != 5570645";
  if(col[72] != 16711680) errors += "col[72] != 16711680";
  if(col[73] != 5570645) errors += "col[73] != 5570645";
  if(col[74] != 6684774) errors += "col[74] != 6684774";
  if(col[88] != 6684774) errors += "col[88] != 6684774";
  if(col[89] != 5570645) errors += "col[89] != 5570645";
  if(col[90] != 6684774) errors += "col[90] != 6684774";
  if(col[91] != 6684774) errors += "col[91] != 6684774";
  if(col[92] != 6684774) errors += "col[92] != 6684774";
  if(col[93] != 14483456) errors += "col[93] != 14483456";
  if(col[94] != 16711680) errors += "col[94] != 16711680";
  if(col[106] != 16711680) errors += "col[106] != 16711680";
  if(col[107] != 14483456) errors += "col[107] != 14483456";
  if(col[108] != 6684774) errors += "col[108] != 6684774";
  if(col[109] != 6684774) errors += "col[109] != 6684774";
  if(col[110] != 6684774) errors += "col[110] != 6684774";
  if(col[111] != 5570645) errors += "col[111] != 5570645";
  if(col[112] != 6684774) errors += "col[112] != 6684774";
  if(col[126] != 6684774) errors += "col[126] != 6684774";
  if(col[127] != 5570645) errors += "col[127] != 5570645";
  if(col[128] != 16711680) errors += "col[128] != 16711680";
  if(col[131] != 5570645) errors += "col[131] != 5570645";
  if(col[136] != 14483456) errors += "col[136] != 14483456";
  col=results[38];
  if(col[65] != 16711680) errors += "col[65] != 16711680";
  if(col[74] != 5570645) errors += "col[74] != 5570645";
  if(col[75] != 6684774) errors += "col[75] != 6684774";
  if(col[79] != 6684774) errors += "col[79] != 6684774";
  if(col[80] != 16711680) errors += "col[80] != 16711680";
  if(col[81] != 6684774) errors += "col[81] != 6684774";
  if(col[119] != 6684774) errors += "col[119] != 6684774";
  if(col[120] != 16711680) errors += "col[120] != 16711680";
  if(col[121] != 6684774) errors += "col[121] != 6684774";
  if(col[125] != 6684774) errors += "col[125] != 6684774";
  if(col[126] != 5570645) errors += "col[126] != 5570645";
  if(col[135] != 16711680) errors += "col[135] != 16711680";
  col=results[39];
  if(col[69] != 15597568) errors += "col[69] != 15597568";
  if(col[71] != 16711680) errors += "col[71] != 16711680";
  if(col[72] != 5570645) errors += "col[72] != 5570645";
  if(col[73] != 6684774) errors += "col[73] != 6684774";
  if(col[127] != 6684774) errors += "col[127] != 6684774";
  if(col[128] != 5570645) errors += "col[128] != 5570645";
  if(col[129] != 16711680) errors += "col[129] != 16711680";
  if(col[131] != 15597568) errors += "col[131] != 15597568";
  col=results[40];
  if(col[65] != 5570645) errors += "col[65] != 5570645";
  if(col[135] != 5570645) errors += "col[135] != 5570645";
  col=results[41];
  if(col[64] != 6684774) errors += "col[64] != 6684774";
  if(col[65] != 13369344) errors += "col[65] != 13369344";
  if(col[66] != 6684774) errors += "col[66] != 6684774";
  if(col[90] != 6684774) errors += "col[90] != 6684774";
  if(col[110] != 6684774) errors += "col[110] != 6684774";
  if(col[134] != 6684774) errors += "col[134] != 6684774";
  if(col[135] != 13369344) errors += "col[135] != 13369344";
  if(col[136] != 6684774) errors += "col[136] != 6684774";
  col=results[42];
  if(col[74] != 16711680) errors += "col[74] != 16711680";
  if(col[83] != 5570645) errors += "col[83] != 5570645";
  if(col[84] != 14483456) errors += "col[84] != 14483456";
  if(col[90] != 15597568) errors += "col[90] != 15597568";
  if(col[91] != 5570645) errors += "col[91] != 5570645";
  if(col[109] != 5570645) errors += "col[109] != 5570645";
  if(col[110] != 15597568) errors += "col[110] != 15597568";
  if(col[116] != 14483456) errors += "col[116] != 14483456";
  if(col[117] != 5570645) errors += "col[117] != 5570645";
  if(col[126] != 16711680) errors += "col[126] != 16711680";
  col=results[43];
  if(col[73] != 6684774) errors += "col[73] != 6684774";
  if(col[75] != 5570645) errors += "col[75] != 5570645";
  if(col[82] != 6684774) errors += "col[82] != 6684774";
  if(col[83] != 15597568) errors += "col[83] != 15597568";
  if(col[85] != 5570645) errors += "col[85] != 5570645";
  if(col[89] != 6684774) errors += "col[89] != 6684774";
  if(col[91] != 16711680) errors += "col[91] != 16711680";
  if(col[109] != 16711680) errors += "col[109] != 16711680";
  if(col[111] != 6684774) errors += "col[111] != 6684774";
  if(col[115] != 5570645) errors += "col[115] != 5570645";
  if(col[117] != 15597568) errors += "col[117] != 15597568";
  if(col[118] != 6684774) errors += "col[118] != 6684774";
  if(col[125] != 5570645) errors += "col[125] != 5570645";
  if(col[127] != 6684774) errors += "col[127] != 6684774";
  col=results[44];
  if(col[73] != 6684774) errors += "col[73] != 6684774";
  if(col[74] != 16711680) errors += "col[74] != 16711680";
  if(col[83] != 5592320) errors += "col[83] != 5592320";
  if(col[85] != 6684774) errors += "col[85] != 6684774";
  if(col[86] != 5570645) errors += "col[86] != 5570645";
  if(col[114] != 5570645) errors += "col[114] != 5570645";
  if(col[115] != 6684774) errors += "col[115] != 6684774";
  if(col[117] != 5592320) errors += "col[117] != 5592320";
  if(col[126] != 16711680) errors += "col[126] != 16711680";
  if(col[127] != 6684774) errors += "col[127] != 6684774";
  col=results[45];
  if(col[64] != 16711680) errors += "col[64] != 16711680";
  if(col[65] != 15597568) errors += "col[65] != 15597568";
  if(col[73] != 5570645) errors += "col[73] != 5570645";
  if(col[77] != 14540032) errors += "col[77] != 14540032";
  if(col[78] != 11184640) errors += "col[78] != 11184640";
  if(col[85] != 6684774) errors += "col[85] != 6684774";
  if(col[87] != 5570645) errors += "col[87] != 5570645";
  if(col[113] != 5570645) errors += "col[113] != 5570645";
  if(col[115] != 6684774) errors += "col[115] != 6684774";
  if(col[122] != 11184640) errors += "col[122] != 11184640";
  if(col[123] != 14540032) errors += "col[123] != 14540032";
  if(col[127] != 5570645) errors += "col[127] != 5570645";
  if(col[135] != 15597568) errors += "col[135] != 15597568";
  if(col[136] != 16711680) errors += "col[136] != 16711680";
  col=results[46];
  if(col[63] != 5570645) errors += "col[63] != 5570645";
  if(col[66] != 5570645) errors += "col[66] != 5570645";
  if(col[76] != 15658496) errors += "col[76] != 15658496";
  if(col[79] != 15658496) errors += "col[79] != 15658496";
  if(col[86] != 13369344) errors += "col[86] != 13369344";
  if(col[87] != 14483456) errors += "col[87] != 14483456";
  if(col[113] != 14483456) errors += "col[113] != 14483456";
  if(col[114] != 13369344) errors += "col[114] != 13369344";
  if(col[121] != 15658496) errors += "col[121] != 15658496";
  if(col[124] != 15658496) errors += "col[124] != 15658496";
  if(col[134] != 5570645) errors += "col[134] != 5570645";
  if(col[137] != 5570645) errors += "col[137] != 5570645";
  col=results[47];
  if(col[63] != 6684774) errors += "col[63] != 6684774";
  if(col[64] != 16711680) errors += "col[64] != 16711680";
  if(col[66] != 10027008) errors += "col[66] != 10027008";
  if(col[67] != 6684774) errors += "col[67] != 6684774";
  if(col[77] != 13421568) errors += "col[77] != 13421568";
  if(col[78] != 14540032) errors += "col[78] != 14540032";
  if(col[122] != 14540032) errors += "col[122] != 14540032";
  if(col[123] != 13421568) errors += "col[123] != 13421568";
  if(col[133] != 6684774) errors += "col[133] != 6684774";
  if(col[134] != 10027008) errors += "col[134] != 10027008";
  if(col[136] != 16711680) errors += "col[136] != 16711680";
  if(col[137] != 6684774) errors += "col[137] != 6684774";
  col=results[48];
  if(col[64] != 5570645) errors += "col[64] != 5570645";
  if(col[66] != 5570645) errors += "col[66] != 5570645";
  if(col[134] != 5570645) errors += "col[134] != 5570645";
  if(col[136] != 5570645) errors += "col[136] != 5570645";
  col=results[49];
  if(col[41] != 6684774) errors += "col[41] != 6684774";
  if(col[42] != 5570645) errors += "col[42] != 5570645";
  if(col[43] != 6684774) errors += "col[43] != 6684774";
  if(col[65] != 6684774) errors += "col[65] != 6684774";
  if(col[85] != 6684774) errors += "col[85] != 6684774";
  if(col[115] != 6684774) errors += "col[115] != 6684774";
  if(col[135] != 6684774) errors += "col[135] != 6684774";
  if(col[157] != 6684774) errors += "col[157] != 6684774";
  if(col[158] != 5570645) errors += "col[158] != 5570645";
  if(col[159] != 6684774) errors += "col[159] != 6684774";
  col=results[50];
  if(col[41] != 15597568) errors += "col[41] != 15597568";
  if(col[43] != 5570645) errors += "col[43] != 5570645";
  if(col[83] != 6684774) errors += "col[83] != 6684774";
  if(col[84] != 16711680) errors += "col[84] != 16711680";
  if(col[86] != 6684774) errors += "col[86] != 6684774";
  if(col[87] != 5570645) errors += "col[87] != 5570645";
  if(col[113] != 5570645) errors += "col[113] != 5570645";
  if(col[114] != 6684774) errors += "col[114] != 6684774";
  if(col[116] != 16711680) errors += "col[116] != 16711680";
  if(col[117] != 6684774) errors += "col[117] != 6684774";
  if(col[157] != 5570645) errors += "col[157] != 5570645";
  if(col[159] != 15597568) errors += "col[159] != 15597568";
  col=results[51];
  if(col[41] != 6684774) errors += "col[41] != 6684774";
  if(col[42] != 5570645) errors += "col[42] != 5570645";
  if(col[43] != 6684774) errors += "col[43] != 6684774";
  if(col[77] != 10066176) errors += "col[77] != 10066176";
  if(col[78] != 13421568) errors += "col[78] != 13421568";
  if(col[82] != 6684774) errors += "col[82] != 6684774";
  if(col[83] != 15597568) errors += "col[83] != 15597568";
  if(col[86] != 16711680) errors += "col[86] != 16711680";
  if(col[87] != 6684774) errors += "col[87] != 6684774";
  if(col[113] != 6684774) errors += "col[113] != 6684774";
  if(col[114] != 16711680) errors += "col[114] != 16711680";
  if(col[117] != 15597568) errors += "col[117] != 15597568";
  if(col[118] != 6684774) errors += "col[118] != 6684774";
  if(col[122] != 13421568) errors += "col[122] != 13421568";
  if(col[123] != 10066176) errors += "col[123] != 10066176";
  if(col[157] != 6684774) errors += "col[157] != 6684774";
  if(col[158] != 5570645) errors += "col[158] != 5570645";
  if(col[159] != 6684774) errors += "col[159] != 6684774";
  col=results[52];
  if(col[77] != 12303104) errors += "col[77] != 12303104";
  if(col[78] != 11184640) errors += "col[78] != 11184640";
  if(col[82] != 16711680) errors += "col[82] != 16711680";
  if(col[83] != 5570645) errors += "col[83] != 5570645";
  if(col[85] != 13369344) errors += "col[85] != 13369344";
  if(col[86] != 5570645) errors += "col[86] != 5570645";
  if(col[114] != 5570645) errors += "col[114] != 5570645";
  if(col[115] != 13369344) errors += "col[115] != 13369344";
  if(col[117] != 5570645) errors += "col[117] != 5570645";
  if(col[118] != 16711680) errors += "col[118] != 16711680";
  if(col[122] != 11184640) errors += "col[122] != 11184640";
  if(col[123] != 12303104) errors += "col[123] != 12303104";
  col=results[53];
  if(col[55] != 5570645) errors += "col[55] != 5570645";
  if(col[82] != 6684774) errors += "col[82] != 6684774";
  if(col[83] != 15597568) errors += "col[83] != 15597568";
  if(col[85] != 15597568) errors += "col[85] != 15597568";
  if(col[86] != 6684774) errors += "col[86] != 6684774";
  if(col[114] != 6684774) errors += "col[114] != 6684774";
  if(col[115] != 15597568) errors += "col[115] != 15597568";
  if(col[117] != 15597568) errors += "col[117] != 15597568";
  if(col[118] != 6684774) errors += "col[118] != 6684774";
  if(col[145] != 5570645) errors += "col[145] != 5570645";
  col=results[54];
  if(col[54] != 15597568) errors += "col[54] != 15597568";
  if(col[56] != 16711680) errors += "col[56] != 16711680";
  if(col[80] != 6684774) errors += "col[80] != 6684774";
  if(col[84] != 16711680) errors += "col[84] != 16711680";
  if(col[116] != 16711680) errors += "col[116] != 16711680";
  if(col[120] != 6684774) errors += "col[120] != 6684774";
  if(col[144] != 16711680) errors += "col[144] != 16711680";
  if(col[146] != 15597568) errors += "col[146] != 15597568";
  col=results[55];
  if(col[54] != 16711680) errors += "col[54] != 16711680";
  if(col[56] != 12255232) errors += "col[56] != 12255232";
  if(col[79] != 5570645) errors += "col[79] != 5570645";
  if(col[80] != 15597568) errors += "col[80] != 15597568";
  if(col[81] != 15597568) errors += "col[81] != 15597568";
  if(col[119] != 15597568) errors += "col[119] != 15597568";
  if(col[120] != 15597568) errors += "col[120] != 15597568";
  if(col[121] != 5570645) errors += "col[121] != 5570645";
  if(col[144] != 12255232) errors += "col[144] != 12255232";
  if(col[146] != 16711680) errors += "col[146] != 16711680";
  col=results[56];
  if(col[55] != 5570645) errors += "col[55] != 5570645";
  if(col[56] != 6684774) errors += "col[56] != 6684774";
  if(col[77] != 6684774) errors += "col[77] != 6684774";
  if(col[78] != 15597568) errors += "col[78] != 15597568";
  if(col[83] != 5570645) errors += "col[83] != 5570645";
  if(col[117] != 5570645) errors += "col[117] != 5570645";
  if(col[122] != 15597568) errors += "col[122] != 15597568";
  if(col[123] != 6684774) errors += "col[123] != 6684774";
  if(col[144] != 6684774) errors += "col[144] != 6684774";
  if(col[145] != 5570645) errors += "col[145] != 5570645";
  col=results[57];
  if(col[47] != 6684774) errors += "col[47] != 6684774";
  if(col[55] != 6684774) errors += "col[55] != 6684774";
  if(col[56] != 5570645) errors += "col[56] != 5570645";
  if(col[77] != 6684774) errors += "col[77] != 6684774";
  if(col[78] != 12255232) errors += "col[78] != 12255232";
  if(col[80] != 6684774) errors += "col[80] != 6684774";
  if(col[81] != 16711680) errors += "col[81] != 16711680";
  if(col[83] != 15597568) errors += "col[83] != 15597568";
  if(col[95] != 43690) errors += "col[95] != 43690";
  if(col[105] != 43690) errors += "col[105] != 43690";
  if(col[117] != 15597568) errors += "col[117] != 15597568";
  if(col[119] != 16711680) errors += "col[119] != 16711680";
  if(col[120] != 6684774) errors += "col[120] != 6684774";
  if(col[122] != 12255232) errors += "col[122] != 12255232";
  if(col[123] != 6684774) errors += "col[123] != 6684774";
  if(col[144] != 5570645) errors += "col[144] != 5570645";
  if(col[145] != 6684774) errors += "col[145] != 6684774";
  if(col[153] != 6684774) errors += "col[153] != 6684774";
  col=results[58];
  if(col[41] != 16711680) errors += "col[41] != 16711680";
  if(col[42] != 6684774) errors += "col[42] != 6684774";
  if(col[49] != 6684774) errors += "col[49] != 6684774";
  if(col[56] != 6684774) errors += "col[56] != 6684774";
  if(col[77] != 6684774) errors += "col[77] != 6684774";
  if(col[79] != 5570645) errors += "col[79] != 5570645";
  if(col[80] != 6684774) errors += "col[80] != 6684774";
  if(col[81] != 6684774) errors += "col[81] != 6684774";
  if(col[82] != 5570645) errors += "col[82] != 5570645";
  if(col[83] != 6684774) errors += "col[83] != 6684774";
  if(col[94] != 56797) errors += "col[94] != 56797";
  if(col[96] != 61166) errors += "col[96] != 61166";
  if(col[104] != 61166) errors += "col[104] != 61166";
  if(col[106] != 56797) errors += "col[106] != 56797";
  if(col[117] != 6684774) errors += "col[117] != 6684774";
  if(col[118] != 5570645) errors += "col[118] != 5570645";
  if(col[119] != 6684774) errors += "col[119] != 6684774";
  if(col[120] != 6684774) errors += "col[120] != 6684774";
  if(col[121] != 5570645) errors += "col[121] != 5570645";
  if(col[123] != 6684774) errors += "col[123] != 6684774";
  if(col[144] != 6684774) errors += "col[144] != 6684774";
  if(col[151] != 6684774) errors += "col[151] != 6684774";
  if(col[158] != 6684774) errors += "col[158] != 6684774";
  if(col[159] != 16711680) errors += "col[159] != 16711680";
  col=results[59];
  if(col[41] != 5570645) errors += "col[41] != 5570645";
  if(col[44] != 5570645) errors += "col[44] != 5570645";
  if(col[50] != 6684774) errors += "col[50] != 6684774";
  if(col[55] != 6684774) errors += "col[55] != 6684774";
  if(col[57] != 6684774) errors += "col[57] != 6684774";
  if(col[94] != 56797) errors += "col[94] != 56797";
  if(col[95] != 48059) errors += "col[95] != 48059";
  if(col[105] != 48059) errors += "col[105] != 48059";
  if(col[106] != 56797) errors += "col[106] != 56797";
  if(col[143] != 6684774) errors += "col[143] != 6684774";
  if(col[145] != 6684774) errors += "col[145] != 6684774";
  if(col[150] != 6684774) errors += "col[150] != 6684774";
  if(col[156] != 5570645) errors += "col[156] != 5570645";
  if(col[159] != 5570645) errors += "col[159] != 5570645";
  col=results[60];
  if(col[51] != 6684774) errors += "col[51] != 6684774";
  if(col[56] != 16711680) errors += "col[56] != 16711680";
  if(col[80] != 14483456) errors += "col[80] != 14483456";
  if(col[120] != 14483456) errors += "col[120] != 14483456";
  if(col[144] != 16711680) errors += "col[144] != 16711680";
  if(col[149] != 6684774) errors += "col[149] != 6684774";
  col=results[61];
  if(col[41] != 6684774) errors += "col[41] != 6684774";
  if(col[46] != 6684774) errors += "col[46] != 6684774";
  if(col[47] != 6684774) errors += "col[47] != 6684774";
  if(col[51] != 16711680) errors += "col[51] != 16711680";
  if(col[56] != 6684774) errors += "col[56] != 6684774";
  if(col[61] != 6684774) errors += "col[61] != 6684774";
  if(col[62] != 5570645) errors += "col[62] != 5570645";
  if(col[63] != 6684774) errors += "col[63] != 6684774";
  if(col[74] != 5570645) errors += "col[74] != 5570645";
  if(col[75] != 14483456) errors += "col[75] != 14483456";
  if(col[98] != 52428) errors += "col[98] != 52428";
  if(col[99] != 65535) errors += "col[99] != 65535";
  if(col[101] != 65535) errors += "col[101] != 65535";
  if(col[102] != 52428) errors += "col[102] != 52428";
  if(col[125] != 14483456) errors += "col[125] != 14483456";
  if(col[126] != 5570645) errors += "col[126] != 5570645";
  if(col[137] != 6684774) errors += "col[137] != 6684774";
  if(col[138] != 5570645) errors += "col[138] != 5570645";
  if(col[139] != 6684774) errors += "col[139] != 6684774";
  if(col[144] != 6684774) errors += "col[144] != 6684774";
  if(col[149] != 16711680) errors += "col[149] != 16711680";
  if(col[153] != 6684774) errors += "col[153] != 6684774";
  if(col[154] != 6684774) errors += "col[154] != 6684774";
  if(col[159] != 6684774) errors += "col[159] != 6684774";
  col=results[62];
  if(col[38] != 6684774) errors += "col[38] != 6684774";
  if(col[41] != 6684774) errors += "col[41] != 6684774";
  if(col[44] != 6684774) errors += "col[44] != 6684774";
  if(col[47] != 5570645) errors += "col[47] != 5570645";
  if(col[51] != 6684774) errors += "col[51] != 6684774";
  if(col[61] != 16711680) errors += "col[61] != 16711680";
  if(col[62] != 14483456) errors += "col[62] != 14483456";
  if(col[63] != 16711680) errors += "col[63] != 16711680";
  if(col[74] != 6684774) errors += "col[74] != 6684774";
  if(col[75] != 15597568) errors += "col[75] != 15597568";
  if(col[79] != 5570645) errors += "col[79] != 5570645";
  if(col[98] != 61166) errors += "col[98] != 61166";
  if(col[99] != 56797) errors += "col[99] != 56797";
  if(col[101] != 56797) errors += "col[101] != 56797";
  if(col[102] != 61166) errors += "col[102] != 61166";
  if(col[121] != 5570645) errors += "col[121] != 5570645";
  if(col[125] != 15597568) errors += "col[125] != 15597568";
  if(col[126] != 6684774) errors += "col[126] != 6684774";
  if(col[137] != 16711680) errors += "col[137] != 16711680";
  if(col[138] != 14483456) errors += "col[138] != 14483456";
  if(col[139] != 16711680) errors += "col[139] != 16711680";
  if(col[149] != 6684774) errors += "col[149] != 6684774";
  if(col[153] != 5570645) errors += "col[153] != 5570645";
  if(col[156] != 6684774) errors += "col[156] != 6684774";
  if(col[159] != 6684774) errors += "col[159] != 6684774";
  if(col[162] != 6684774) errors += "col[162] != 6684774";
  col=results[63];
  if(col[36] != 6684774) errors += "col[36] != 6684774";
  if(col[39] != 5570645) errors += "col[39] != 5570645";
  if(col[40] != 6684774) errors += "col[40] != 6684774";
  if(col[41] != 6684774) errors += "col[41] != 6684774";
  if(col[43] != 5570645) errors += "col[43] != 5570645";
  if(col[50] != 6684774) errors += "col[50] != 6684774";
  if(col[65] != 6684774) errors += "col[65] != 6684774";
  if(col[76] != 16711680) errors += "col[76] != 16711680";
  if(col[79] != 6684774) errors += "col[79] != 6684774";
  if(col[121] != 6684774) errors += "col[121] != 6684774";
  if(col[124] != 16711680) errors += "col[124] != 16711680";
  if(col[135] != 6684774) errors += "col[135] != 6684774";
  if(col[150] != 6684774) errors += "col[150] != 6684774";
  if(col[157] != 5570645) errors += "col[157] != 5570645";
  if(col[159] != 6684774) errors += "col[159] != 6684774";
  if(col[160] != 6684774) errors += "col[160] != 6684774";
  if(col[161] != 5570645) errors += "col[161] != 5570645";
  if(col[164] != 6684774) errors += "col[164] != 6684774";
  col=results[64];
  if(col[35] != 5570645) errors += "col[35] != 5570645";
  if(col[36] != 15597568) errors += "col[36] != 15597568";
  if(col[42] != 6684774) errors += "col[42] != 6684774";
  if(col[47] != 6684774) errors += "col[47] != 6684774";
  if(col[48] != 5570645) errors += "col[48] != 5570645";
  if(col[49] != 6684774) errors += "col[49] != 6684774";
  if(col[63] != 5570645) errors += "col[63] != 5570645";
  if(col[66] != 6684774) errors += "col[66] != 6684774";
  if(col[76] != 6684774) errors += "col[76] != 6684774";
  if(col[77] != 5570645) errors += "col[77] != 5570645";
  if(col[78] != 6684774) errors += "col[78] != 6684774";
  if(col[122] != 6684774) errors += "col[122] != 6684774";
  if(col[123] != 5570645) errors += "col[123] != 5570645";
  if(col[124] != 6684774) errors += "col[124] != 6684774";
  if(col[134] != 6684774) errors += "col[134] != 6684774";
  if(col[137] != 5570645) errors += "col[137] != 5570645";
  if(col[151] != 6684774) errors += "col[151] != 6684774";
  if(col[152] != 5570645) errors += "col[152] != 5570645";
  if(col[153] != 6684774) errors += "col[153] != 6684774";
  if(col[158] != 6684774) errors += "col[158] != 6684774";
  if(col[164] != 15597568) errors += "col[164] != 15597568";
  if(col[165] != 5570645) errors += "col[165] != 5570645";
  col=results[65];
  if(col[36] != 5570645) errors += "col[36] != 5570645";
  if(col[39] != 5570645) errors += "col[39] != 5570645";
  if(col[40] != 6684774) errors += "col[40] != 6684774";
  if(col[63] != 5570645) errors += "col[63] != 5570645";
  if(col[66] != 5570645) errors += "col[66] != 5570645";
  if(col[134] != 5570645) errors += "col[134] != 5570645";
  if(col[137] != 5570645) errors += "col[137] != 5570645";
  if(col[160] != 6684774) errors += "col[160] != 6684774";
  if(col[161] != 5570645) errors += "col[161] != 5570645";
  if(col[164] != 5570645) errors += "col[164] != 5570645";
  col=results[66];
  if(col[29] != 15597568) errors += "col[29] != 15597568";
  if(col[30] != 5570645) errors += "col[30] != 5570645";
  if(col[33] != 6684774) errors += "col[33] != 6684774";
  if(col[34] != 5570645) errors += "col[34] != 5570645";
  if(col[36] != 6684774) errors += "col[36] != 6684774";
  if(col[37] != 6684774) errors += "col[37] != 6684774";
  if(col[38] != 6684774) errors += "col[38] != 6684774";
  if(col[56] != 5570645) errors += "col[56] != 5570645";
  if(col[57] != 12255232) errors += "col[57] != 12255232";
  if(col[58] != 6684774) errors += "col[58] != 6684774";
  if(col[63] != 6684774) errors += "col[63] != 6684774";
  if(col[66] != 6684774) errors += "col[66] != 6684774";
  if(col[134] != 6684774) errors += "col[134] != 6684774";
  if(col[137] != 6684774) errors += "col[137] != 6684774";
  if(col[142] != 6684774) errors += "col[142] != 6684774";
  if(col[143] != 12255232) errors += "col[143] != 12255232";
  if(col[144] != 5570645) errors += "col[144] != 5570645";
  if(col[162] != 6684774) errors += "col[162] != 6684774";
  if(col[163] != 6684774) errors += "col[163] != 6684774";
  if(col[164] != 6684774) errors += "col[164] != 6684774";
  if(col[166] != 5570645) errors += "col[166] != 5570645";
  if(col[167] != 6684774) errors += "col[167] != 6684774";
  if(col[170] != 5570645) errors += "col[170] != 5570645";
  if(col[171] != 15597568) errors += "col[171] != 15597568";
  col=results[67];
  if(col[28] != 16711680) errors += "col[28] != 16711680";
  if(col[29] != 6684774) errors += "col[29] != 6684774";
  if(col[31] != 5570645) errors += "col[31] != 5570645";
  if(col[32] != 6684774) errors += "col[32] != 6684774";
  if(col[33] != 5570645) errors += "col[33] != 5570645";
  if(col[34] != 15597568) errors += "col[34] != 15597568";
  if(col[35] != 5570645) errors += "col[35] != 5570645";
  if(col[56] != 6684774) errors += "col[56] != 6684774";
  if(col[57] != 16711680) errors += "col[57] != 16711680";
  if(col[58] != 13369344) errors += "col[58] != 13369344";
  if(col[64] != 5570645) errors += "col[64] != 5570645";
  if(col[65] != 6684774) errors += "col[65] != 6684774";
  if(col[135] != 6684774) errors += "col[135] != 6684774";
  if(col[136] != 5570645) errors += "col[136] != 5570645";
  if(col[142] != 13369344) errors += "col[142] != 13369344";
  if(col[143] != 16711680) errors += "col[143] != 16711680";
  if(col[144] != 6684774) errors += "col[144] != 6684774";
  if(col[165] != 5570645) errors += "col[165] != 5570645";
  if(col[166] != 15597568) errors += "col[166] != 15597568";
  if(col[167] != 5570645) errors += "col[167] != 5570645";
  if(col[168] != 6684774) errors += "col[168] != 6684774";
  if(col[169] != 5570645) errors += "col[169] != 5570645";
  if(col[171] != 6684774) errors += "col[171] != 6684774";
  if(col[172] != 16711680) errors += "col[172] != 16711680";
  col=results[68];
  if(col[27] != 14483456) errors += "col[27] != 14483456";
  if(col[30] != 6684774) errors += "col[30] != 6684774";
  if(col[31] != 16711680) errors += "col[31] != 16711680";
  if(col[33] != 6684774) errors += "col[33] != 6684774";
  if(col[35] != 6684774) errors += "col[35] != 6684774";
  if(col[165] != 6684774) errors += "col[165] != 6684774";
  if(col[167] != 6684774) errors += "col[167] != 6684774";
  if(col[169] != 16711680) errors += "col[169] != 16711680";
  if(col[170] != 6684774) errors += "col[170] != 6684774";
  if(col[173] != 14483456) errors += "col[173] != 14483456";
  col=results[69];
  if(col[27] != 16711680) errors += "col[27] != 16711680";
  if(col[29] != 16711680) errors += "col[29] != 16711680";
  if(col[32] != 5570645) errors += "col[32] != 5570645";
  if(col[42] != 15597568) errors += "col[42] != 15597568";
  if(col[43] != 5570645) errors += "col[43] != 5570645";
  if(col[157] != 5570645) errors += "col[157] != 5570645";
  if(col[158] != 15597568) errors += "col[158] != 15597568";
  if(col[168] != 5570645) errors += "col[168] != 5570645";
  if(col[171] != 16711680) errors += "col[171] != 16711680";
  if(col[173] != 16711680) errors += "col[173] != 16711680";
  col=results[70];
  if(col[26] != 6684774) errors += "col[26] != 6684774";
  if(col[27] != 16711680) errors += "col[27] != 16711680";
  if(col[28] != 5570645) errors += "col[28] != 5570645";
  if(col[29] != 6684774) errors += "col[29] != 6684774";
  if(col[30] != 12255232) errors += "col[30] != 12255232";
  if(col[31] != 11141120) errors += "col[31] != 11141120";
  if(col[41] != 5570645) errors += "col[41] != 5570645";
  if(col[44] != 5570645) errors += "col[44] != 5570645";
  if(col[156] != 5570645) errors += "col[156] != 5570645";
  if(col[159] != 5570645) errors += "col[159] != 5570645";
  if(col[169] != 11141120) errors += "col[169] != 11141120";
  if(col[170] != 12255232) errors += "col[170] != 12255232";
  if(col[171] != 6684774) errors += "col[171] != 6684774";
  if(col[172] != 5570645) errors += "col[172] != 5570645";
  if(col[173] != 16711680) errors += "col[173] != 16711680";
  if(col[174] != 6684774) errors += "col[174] != 6684774";
  col=results[71];
  if(col[24] != 5570645) errors += "col[24] != 5570645";
  if(col[25] != 6684774) errors += "col[25] != 6684774";
  if(col[40] != 6684774) errors += "col[40] != 6684774";
  if(col[41] != 5570645) errors += "col[41] != 5570645";
  if(col[42] != 6684774) errors += "col[42] != 6684774";
  if(col[43] != 6684774) errors += "col[43] != 6684774";
  if(col[44] != 15597568) errors += "col[44] != 15597568";
  if(col[45] != 6684774) errors += "col[45] != 6684774";
  if(col[155] != 6684774) errors += "col[155] != 6684774";
  if(col[156] != 15597568) errors += "col[156] != 15597568";
  if(col[157] != 6684774) errors += "col[157] != 6684774";
  if(col[158] != 6684774) errors += "col[158] != 6684774";
  if(col[159] != 5570645) errors += "col[159] != 5570645";
  if(col[160] != 6684774) errors += "col[160] != 6684774";
  if(col[175] != 6684774) errors += "col[175] != 6684774";
  if(col[176] != 5570645) errors += "col[176] != 5570645";
  col=results[72];
  if(col[25] != 6684774) errors += "col[25] != 6684774";
  if(col[27] != 6684774) errors += "col[27] != 6684774";
  if(col[41] != 5570645) errors += "col[41] != 5570645";
  if(col[44] != 5570645) errors += "col[44] != 5570645";
  if(col[156] != 5570645) errors += "col[156] != 5570645";
  if(col[159] != 5570645) errors += "col[159] != 5570645";
  if(col[173] != 6684774) errors += "col[173] != 6684774";
  if(col[175] != 6684774) errors += "col[175] != 6684774";
  col=results[73];
  if(col[26] != 5570645) errors += "col[26] != 5570645";
  if(col[28] != 5570645) errors += "col[28] != 5570645";
  if(col[29] != 6684774) errors += "col[29] != 6684774";
  if(col[42] != 15597568) errors += "col[42] != 15597568";
  if(col[43] != 5570645) errors += "col[43] != 5570645";
  if(col[157] != 5570645) errors += "col[157] != 5570645";
  if(col[158] != 15597568) errors += "col[158] != 15597568";
  if(col[171] != 6684774) errors += "col[171] != 6684774";
  if(col[172] != 5570645) errors += "col[172] != 5570645";
  if(col[174] != 5570645) errors += "col[174] != 5570645";
  col=results[74];
  if(col[30] != 5570645) errors += "col[30] != 5570645";
  if(col[31] != 14483456) errors += "col[31] != 14483456";
  if(col[32] != 6684774) errors += "col[32] != 6684774";
  if(col[168] != 6684774) errors += "col[168] != 6684774";
  if(col[169] != 14483456) errors += "col[169] != 14483456";
  if(col[170] != 5570645) errors += "col[170] != 5570645";
  col=results[75];
  if(col[26] != 16711680) errors += "col[26] != 16711680";
  if(col[28] != 5570645) errors += "col[28] != 5570645";
  if(col[29] != 6684774) errors += "col[29] != 6684774";
  if(col[30] != 6684774) errors += "col[30] != 6684774";
  if(col[33] != 6684774) errors += "col[33] != 6684774";
  if(col[45] != 14483456) errors += "col[45] != 14483456";
  if(col[47] != 5570645) errors += "col[47] != 5570645";
  if(col[153] != 5570645) errors += "col[153] != 5570645";
  if(col[155] != 14483456) errors += "col[155] != 14483456";
  if(col[167] != 6684774) errors += "col[167] != 6684774";
  if(col[170] != 6684774) errors += "col[170] != 6684774";
  if(col[171] != 6684774) errors += "col[171] != 6684774";
  if(col[172] != 5570645) errors += "col[172] != 5570645";
  if(col[174] != 16711680) errors += "col[174] != 16711680";
  col=results[76];
  if(col[20] != 6684774) errors += "col[20] != 6684774";
  if(col[27] != 6684774) errors += "col[27] != 6684774";
  if(col[33] != 5570645) errors += "col[33] != 5570645";
  if(col[44] != 6684774) errors += "col[44] != 6684774";
  if(col[45] != 15597568) errors += "col[45] != 15597568";
  if(col[47] != 16711680) errors += "col[47] != 16711680";
  if(col[48] != 6684774) errors += "col[48] != 6684774";
  if(col[152] != 6684774) errors += "col[152] != 6684774";
  if(col[153] != 16711680) errors += "col[153] != 16711680";
  if(col[155] != 15597568) errors += "col[155] != 15597568";
  if(col[156] != 6684774) errors += "col[156] != 6684774";
  if(col[167] != 5570645) errors += "col[167] != 5570645";
  if(col[173] != 6684774) errors += "col[173] != 6684774";
  if(col[180] != 6684774) errors += "col[180] != 6684774";
  col=results[77];
  if(col[19] != 5570645) errors += "col[19] != 5570645";
  if(col[20] != 15597568) errors += "col[20] != 15597568";
  if(col[21] != 5570645) errors += "col[21] != 5570645";
  if(col[32] != 6684774) errors += "col[32] != 6684774";
  if(col[45] != 5570645) errors += "col[45] != 5570645";
  if(col[48] != 16711680) errors += "col[48] != 16711680";
  if(col[152] != 16711680) errors += "col[152] != 16711680";
  if(col[155] != 5570645) errors += "col[155] != 5570645";
  if(col[168] != 6684774) errors += "col[168] != 6684774";
  if(col[179] != 5570645) errors += "col[179] != 5570645";
  if(col[180] != 15597568) errors += "col[180] != 15597568";
  if(col[181] != 5570645) errors += "col[181] != 5570645";
  col=results[78];
  if(col[18] != 16711680) errors += "col[18] != 16711680";
  if(col[19] != 6684774) errors += "col[19] != 6684774";
  if(col[20] != 6684774) errors += "col[20] != 6684774";
  if(col[21] != 6684774) errors += "col[21] != 6684774";
  if(col[22] != 16711680) errors += "col[22] != 16711680";
  if(col[45] != 6684774) errors += "col[45] != 6684774";
  if(col[48] != 5570645) errors += "col[48] != 5570645";
  if(col[53] != 16711680) errors += "col[53] != 16711680";
  if(col[54] != 5570645) errors += "col[54] != 5570645";
  if(col[146] != 5570645) errors += "col[146] != 5570645";
  if(col[147] != 16711680) errors += "col[147] != 16711680";
  if(col[152] != 5570645) errors += "col[152] != 5570645";
  if(col[155] != 6684774) errors += "col[155] != 6684774";
  if(col[178] != 16711680) errors += "col[178] != 16711680";
  if(col[179] != 6684774) errors += "col[179] != 6684774";
  if(col[180] != 6684774) errors += "col[180] != 6684774";
  if(col[181] != 6684774) errors += "col[181] != 6684774";
  if(col[182] != 16711680) errors += "col[182] != 16711680";
  col=results[79];
  if(col[17] != 5570645) errors += "col[17] != 5570645";
  if(col[22] != 6684774) errors += "col[22] != 6684774";
  if(col[23] != 5570645) errors += "col[23] != 5570645";
  if(col[26] != 13369344) errors += "col[26] != 13369344";
  if(col[27] != 14483456) errors += "col[27] != 14483456";
  if(col[28] != 6684774) errors += "col[28] != 6684774";
  if(col[46] != 5570645) errors += "col[46] != 5570645";
  if(col[48] != 6684774) errors += "col[48] != 6684774";
  if(col[52] != 11141120) errors += "col[52] != 11141120";
  if(col[54] != 6684774) errors += "col[54] != 6684774";
  if(col[55] != 16711680) errors += "col[55] != 16711680";
  if(col[145] != 16711680) errors += "col[145] != 16711680";
  if(col[146] != 6684774) errors += "col[146] != 6684774";
  if(col[148] != 11141120) errors += "col[148] != 11141120";
  if(col[152] != 6684774) errors += "col[152] != 6684774";
  if(col[154] != 5570645) errors += "col[154] != 5570645";
  if(col[172] != 6684774) errors += "col[172] != 6684774";
  if(col[173] != 14483456) errors += "col[173] != 14483456";
  if(col[174] != 13369344) errors += "col[174] != 13369344";
  if(col[177] != 5570645) errors += "col[177] != 5570645";
  if(col[178] != 6684774) errors += "col[178] != 6684774";
  if(col[183] != 5570645) errors += "col[183] != 5570645";
  col=results[80];
  if(col[17] != 5570645) errors += "col[17] != 5570645";
  if(col[18] != 15597568) errors += "col[18] != 15597568";
  if(col[19] != 6684774) errors += "col[19] != 6684774";
  if(col[20] != 6684774) errors += "col[20] != 6684774";
  if(col[21] != 6684774) errors += "col[21] != 6684774";
  if(col[22] != 16711680) errors += "col[22] != 16711680";
  if(col[26] != 15597568) errors += "col[26] != 15597568";
  if(col[28] != 16711680) errors += "col[28] != 16711680";
  if(col[52] != 7798784) errors += "col[52] != 7798784";
  if(col[54] != 6684774) errors += "col[54] != 6684774";
  if(col[55] != 6684774) errors += "col[55] != 6684774";
  if(col[145] != 6684774) errors += "col[145] != 6684774";
  if(col[146] != 6684774) errors += "col[146] != 6684774";
  if(col[148] != 7798784) errors += "col[148] != 7798784";
  if(col[172] != 16711680) errors += "col[172] != 16711680";
  if(col[174] != 15597568) errors += "col[174] != 15597568";
  if(col[178] != 16711680) errors += "col[178] != 16711680";
  if(col[179] != 6684774) errors += "col[179] != 6684774";
  if(col[180] != 6684774) errors += "col[180] != 6684774";
  if(col[181] != 6684774) errors += "col[181] != 6684774";
  if(col[182] != 15597568) errors += "col[182] != 15597568";
  if(col[183] != 5570645) errors += "col[183] != 5570645";
  col=results[81];
  if(col[18] != 6684774) errors += "col[18] != 6684774";
  if(col[19] != 16711680) errors += "col[19] != 16711680";
  if(col[20] != 14483456) errors += "col[20] != 14483456";
  if(col[21] != 5570645) errors += "col[21] != 5570645";
  if(col[22] != 6684774) errors += "col[22] != 6684774";
  if(col[27] != 6684774) errors += "col[27] != 6684774";
  if(col[28] != 6684774) errors += "col[28] != 6684774";
  if(col[29] != 6684774) errors += "col[29] != 6684774";
  if(col[52] != 6684774) errors += "col[52] != 6684774";
  if(col[148] != 6684774) errors += "col[148] != 6684774";
  if(col[171] != 6684774) errors += "col[171] != 6684774";
  if(col[172] != 6684774) errors += "col[172] != 6684774";
  if(col[173] != 6684774) errors += "col[173] != 6684774";
  if(col[178] != 6684774) errors += "col[178] != 6684774";
  if(col[179] != 5570645) errors += "col[179] != 5570645";
  if(col[180] != 14483456) errors += "col[180] != 14483456";
  if(col[181] != 16711680) errors += "col[181] != 16711680";
  if(col[182] != 6684774) errors += "col[182] != 6684774";
  col=results[82];
  if(col[20] != 6684774) errors += "col[20] != 6684774";
  if(col[22] != 6684774) errors += "col[22] != 6684774";
  if(col[23] != 5570645) errors += "col[23] != 5570645";
  if(col[24] != 6684774) errors += "col[24] != 6684774";
  if(col[28] != 6684774) errors += "col[28] != 6684774";
  if(col[29] != 6684774) errors += "col[29] != 6684774";
  if(col[48] != 6684774) errors += "col[48] != 6684774";
  if(col[49] != 5570645) errors += "col[49] != 5570645";
  if(col[53] != 5570645) errors += "col[53] != 5570645";
  if(col[55] != 5570645) errors += "col[55] != 5570645";
  if(col[145] != 5570645) errors += "col[145] != 5570645";
  if(col[147] != 5570645) errors += "col[147] != 5570645";
  if(col[151] != 5570645) errors += "col[151] != 5570645";
  if(col[152] != 6684774) errors += "col[152] != 6684774";
  if(col[171] != 6684774) errors += "col[171] != 6684774";
  if(col[172] != 6684774) errors += "col[172] != 6684774";
  if(col[176] != 6684774) errors += "col[176] != 6684774";
  if(col[177] != 5570645) errors += "col[177] != 5570645";
  if(col[178] != 6684774) errors += "col[178] != 6684774";
  if(col[180] != 6684774) errors += "col[180] != 6684774";
  col=results[83];
  if(col[25] != 6684774) errors += "col[25] != 6684774";
  if(col[28] != 5570645) errors += "col[28] != 5570645";
  if(col[29] != 16711680) errors += "col[29] != 16711680";
  if(col[47] != 6684774) errors += "col[47] != 6684774";
  if(col[54] != 6684774) errors += "col[54] != 6684774";
  if(col[146] != 6684774) errors += "col[146] != 6684774";
  if(col[153] != 6684774) errors += "col[153] != 6684774";
  if(col[171] != 16711680) errors += "col[171] != 16711680";
  if(col[172] != 5570645) errors += "col[172] != 5570645";
  if(col[175] != 6684774) errors += "col[175] != 6684774";
  col=results[84];
  if(col[15] != 5570645) errors += "col[15] != 5570645";
  if(col[16] != 16711680) errors += "col[16] != 16711680";
  if(col[20] != 6684774) errors += "col[20] != 6684774";
  if(col[21] != 5570645) errors += "col[21] != 5570645";
  if(col[51] != 5570645) errors += "col[51] != 5570645";
  if(col[52] != 6684774) errors += "col[52] != 6684774";
  if(col[148] != 6684774) errors += "col[148] != 6684774";
  if(col[149] != 5570645) errors += "col[149] != 5570645";
  if(col[179] != 5570645) errors += "col[179] != 5570645";
  if(col[180] != 6684774) errors += "col[180] != 6684774";
  if(col[184] != 16711680) errors += "col[184] != 16711680";
  if(col[185] != 5570645) errors += "col[185] != 5570645";
  col=results[85];
  if(col[20] != 16711680) errors += "col[20] != 16711680";
  if(col[21] != 11141120) errors += "col[21] != 11141120";
  if(col[26] != 16711680) errors += "col[26] != 16711680";
  if(col[46] != 16711680) errors += "col[46] != 16711680";
  if(col[51] != 11141120) errors += "col[51] != 11141120";
  if(col[52] != 16711680) errors += "col[52] != 16711680";
  if(col[148] != 16711680) errors += "col[148] != 16711680";
  if(col[149] != 11141120) errors += "col[149] != 11141120";
  if(col[154] != 16711680) errors += "col[154] != 16711680";
  if(col[174] != 16711680) errors += "col[174] != 16711680";
  if(col[179] != 11141120) errors += "col[179] != 11141120";
  if(col[180] != 16711680) errors += "col[180] != 16711680";
  col=results[86];
  if(col[14] != 5570645) errors += "col[14] != 5570645";
  if(col[19] != 5570645) errors += "col[19] != 5570645";
  if(col[22] != 6684774) errors += "col[22] != 6684774";
  if(col[25] != 15597568) errors += "col[25] != 15597568";
  if(col[26] != 14483456) errors += "col[26] != 14483456";
  if(col[46] != 14483456) errors += "col[46] != 14483456";
  if(col[47] != 15597568) errors += "col[47] != 15597568";
  if(col[50] != 6684774) errors += "col[50] != 6684774";
  if(col[53] != 5570645) errors += "col[53] != 5570645";
  if(col[56] != 6684774) errors += "col[56] != 6684774";
  if(col[57] != 5570645) errors += "col[57] != 5570645";
  if(col[58] != 5570645) errors += "col[58] != 5570645";
  if(col[142] != 5570645) errors += "col[142] != 5570645";
  if(col[143] != 5570645) errors += "col[143] != 5570645";
  if(col[144] != 6684774) errors += "col[144] != 6684774";
  if(col[147] != 5570645) errors += "col[147] != 5570645";
  if(col[150] != 6684774) errors += "col[150] != 6684774";
  if(col[153] != 15597568) errors += "col[153] != 15597568";
  if(col[154] != 14483456) errors += "col[154] != 14483456";
  if(col[174] != 14483456) errors += "col[174] != 14483456";
  if(col[175] != 15597568) errors += "col[175] != 15597568";
  if(col[178] != 6684774) errors += "col[178] != 6684774";
  if(col[181] != 5570645) errors += "col[181] != 5570645";
  if(col[186] != 5570645) errors += "col[186] != 5570645";
  col=results[87];
  if(col[13] != 6684774) errors += "col[13] != 6684774";
  if(col[20] != 16711680) errors += "col[20] != 16711680";
  if(col[21] != 14483456) errors += "col[21] != 14483456";
  if(col[22] != 13369344) errors += "col[22] != 13369344";
  if(col[26] != 6684774) errors += "col[26] != 6684774";
  if(col[27] != 6684774) errors += "col[27] != 6684774";
  if(col[45] != 6684774) errors += "col[45] != 6684774";
  if(col[46] != 6684774) errors += "col[46] != 6684774";
  if(col[50] != 13369344) errors += "col[50] != 13369344";
  if(col[51] != 14483456) errors += "col[51] != 14483456";
  if(col[52] != 16711680) errors += "col[52] != 16711680";
  if(col[59] != 6684774) errors += "col[59] != 6684774";
  if(col[141] != 6684774) errors += "col[141] != 6684774";
  if(col[148] != 16711680) errors += "col[148] != 16711680";
  if(col[149] != 14483456) errors += "col[149] != 14483456";
  if(col[150] != 13369344) errors += "col[150] != 13369344";
  if(col[154] != 6684774) errors += "col[154] != 6684774";
  if(col[155] != 6684774) errors += "col[155] != 6684774";
  if(col[173] != 6684774) errors += "col[173] != 6684774";
  if(col[174] != 6684774) errors += "col[174] != 6684774";
  if(col[178] != 13369344) errors += "col[178] != 13369344";
  if(col[179] != 14483456) errors += "col[179] != 14483456";
  if(col[180] != 16711680) errors += "col[180] != 16711680";
  if(col[187] != 6684774) errors += "col[187] != 6684774";
  col=results[88];
  if(col[11] != 6684774) errors += "col[11] != 6684774";
  if(col[12] != 16711680) errors += "col[12] != 16711680";
  if(col[20] != 6684774) errors += "col[20] != 6684774";
  if(col[21] != 5570645) errors += "col[21] != 5570645";
  if(col[22] != 6684774) errors += "col[22] != 6684774";
  if(col[27] != 5570645) errors += "col[27] != 5570645";
  if(col[29] != 6684774) errors += "col[29] != 6684774";
  if(col[43] != 6684774) errors += "col[43] != 6684774";
  if(col[45] != 5570645) errors += "col[45] != 5570645";
  if(col[50] != 6684774) errors += "col[50] != 6684774";
  if(col[51] != 5570645) errors += "col[51] != 5570645";
  if(col[52] != 6684774) errors += "col[52] != 6684774";
  if(col[60] != 16711680) errors += "col[60] != 16711680";
  if(col[61] != 6684774) errors += "col[61] != 6684774";
  if(col[139] != 6684774) errors += "col[139] != 6684774";
  if(col[140] != 16711680) errors += "col[140] != 16711680";
  if(col[148] != 6684774) errors += "col[148] != 6684774";
  if(col[149] != 5570645) errors += "col[149] != 5570645";
  if(col[150] != 6684774) errors += "col[150] != 6684774";
  if(col[155] != 5570645) errors += "col[155] != 5570645";
  if(col[157] != 6684774) errors += "col[157] != 6684774";
  if(col[171] != 6684774) errors += "col[171] != 6684774";
  if(col[173] != 5570645) errors += "col[173] != 5570645";
  if(col[178] != 6684774) errors += "col[178] != 6684774";
  if(col[179] != 5570645) errors += "col[179] != 5570645";
  if(col[180] != 6684774) errors += "col[180] != 6684774";
  if(col[188] != 16711680) errors += "col[188] != 16711680";
  if(col[189] != 6684774) errors += "col[189] != 6684774";
  col=results[89];
  if(col[11] != 5570645) errors += "col[11] != 5570645";
  if(col[27] != 15597568) errors += "col[27] != 15597568";
  if(col[29] != 5570645) errors += "col[29] != 5570645";
  if(col[43] != 5570645) errors += "col[43] != 5570645";
  if(col[45] != 15597568) errors += "col[45] != 15597568";
  if(col[61] != 5570645) errors += "col[61] != 5570645";
  if(col[139] != 5570645) errors += "col[139] != 5570645";
  if(col[155] != 15597568) errors += "col[155] != 15597568";
  if(col[157] != 5570645) errors += "col[157] != 5570645";
  if(col[171] != 5570645) errors += "col[171] != 5570645";
  if(col[173] != 15597568) errors += "col[173] != 15597568";
  if(col[189] != 5570645) errors += "col[189] != 5570645";
  col=results[90];
  if(col[11] != 16711680) errors += "col[11] != 16711680";
  if(col[17] != 6684774) errors += "col[17] != 6684774";
  if(col[23] != 6684774) errors += "col[23] != 6684774";
  if(col[24] != 5570645) errors += "col[24] != 5570645";
  if(col[25] != 6684774) errors += "col[25] != 6684774";
  if(col[26] != 6684774) errors += "col[26] != 6684774";
  if(col[27] != 6684774) errors += "col[27] != 6684774";
  if(col[29] != 16711680) errors += "col[29] != 16711680";
  if(col[43] != 16711680) errors += "col[43] != 16711680";
  if(col[45] != 6684774) errors += "col[45] != 6684774";
  if(col[46] != 6684774) errors += "col[46] != 6684774";
  if(col[47] != 6684774) errors += "col[47] != 6684774";
  if(col[48] != 5570645) errors += "col[48] != 5570645";
  if(col[49] != 6684774) errors += "col[49] != 6684774";
  if(col[55] != 6684774) errors += "col[55] != 6684774";
  if(col[61] != 16711680) errors += "col[61] != 16711680";
  if(col[139] != 16711680) errors += "col[139] != 16711680";
  if(col[145] != 6684774) errors += "col[145] != 6684774";
  if(col[151] != 6684774) errors += "col[151] != 6684774";
  if(col[152] != 5570645) errors += "col[152] != 5570645";
  if(col[153] != 6684774) errors += "col[153] != 6684774";
  if(col[154] != 6684774) errors += "col[154] != 6684774";
  if(col[155] != 6684774) errors += "col[155] != 6684774";
  if(col[157] != 16711680) errors += "col[157] != 16711680";
  if(col[171] != 16711680) errors += "col[171] != 16711680";
  if(col[173] != 6684774) errors += "col[173] != 6684774";
  if(col[174] != 6684774) errors += "col[174] != 6684774";
  if(col[175] != 6684774) errors += "col[175] != 6684774";
  if(col[176] != 5570645) errors += "col[176] != 5570645";
  if(col[177] != 6684774) errors += "col[177] != 6684774";
  if(col[183] != 6684774) errors += "col[183] != 6684774";
  if(col[189] != 16711680) errors += "col[189] != 16711680";
  col=results[91];
  if(col[12] != 6684774) errors += "col[12] != 6684774";
  if(col[14] != 6684774) errors += "col[14] != 6684774";
  if(col[15] != 16711680) errors += "col[15] != 16711680";
  if(col[25] != 16711680) errors += "col[25] != 16711680";
  if(col[26] != 6684774) errors += "col[26] != 6684774";
  if(col[28] != 6684774) errors += "col[28] != 6684774";
  if(col[44] != 6684774) errors += "col[44] != 6684774";
  if(col[46] != 6684774) errors += "col[46] != 6684774";
  if(col[47] != 16711680) errors += "col[47] != 16711680";
  if(col[57] != 16711680) errors += "col[57] != 16711680";
  if(col[58] != 6684774) errors += "col[58] != 6684774";
  if(col[60] != 6684774) errors += "col[60] != 6684774";
  if(col[140] != 6684774) errors += "col[140] != 6684774";
  if(col[142] != 6684774) errors += "col[142] != 6684774";
  if(col[143] != 16711680) errors += "col[143] != 16711680";
  if(col[153] != 16711680) errors += "col[153] != 16711680";
  if(col[154] != 6684774) errors += "col[154] != 6684774";
  if(col[156] != 6684774) errors += "col[156] != 6684774";
  if(col[172] != 6684774) errors += "col[172] != 6684774";
  if(col[174] != 6684774) errors += "col[174] != 6684774";
  if(col[175] != 16711680) errors += "col[175] != 16711680";
  if(col[185] != 16711680) errors += "col[185] != 16711680";
  if(col[186] != 6684774) errors += "col[186] != 6684774";
  if(col[188] != 6684774) errors += "col[188] != 6684774";
  col=results[92];
  if(col[6] != 16711680) errors += "col[6] != 16711680";
  if(col[13] != 16711680) errors += "col[13] != 16711680";
  if(col[18] != 16711680) errors += "col[18] != 16711680";
  if(col[22] != 16711680) errors += "col[22] != 16711680";
  if(col[27] != 16711680) errors += "col[27] != 16711680";
  if(col[34] != 16711680) errors += "col[34] != 16711680";
  if(col[38] != 16711680) errors += "col[38] != 16711680";
  if(col[45] != 16711680) errors += "col[45] != 16711680";
  if(col[50] != 16711680) errors += "col[50] != 16711680";
  if(col[54] != 16711680) errors += "col[54] != 16711680";
  if(col[59] != 16711680) errors += "col[59] != 16711680";
  if(col[66] != 16711680) errors += "col[66] != 16711680";
  if(col[134] != 16711680) errors += "col[134] != 16711680";
  if(col[141] != 16711680) errors += "col[141] != 16711680";
  if(col[146] != 16711680) errors += "col[146] != 16711680";
  if(col[150] != 16711680) errors += "col[150] != 16711680";
  if(col[155] != 16711680) errors += "col[155] != 16711680";
  if(col[162] != 16711680) errors += "col[162] != 16711680";
  if(col[166] != 16711680) errors += "col[166] != 16711680";
  if(col[173] != 16711680) errors += "col[173] != 16711680";
  if(col[178] != 16711680) errors += "col[178] != 16711680";
  if(col[182] != 16711680) errors += "col[182] != 16711680";
  if(col[187] != 16711680) errors += "col[187] != 16711680";
  if(col[194] != 16711680) errors += "col[194] != 16711680";
  col=results[93];
  if(col[6] != 14483456) errors += "col[6] != 14483456";
  if(col[8] != 5570645) errors += "col[8] != 5570645";
  if(col[14] != 14483456) errors += "col[14] != 14483456";
  if(col[18] != 14483456) errors += "col[18] != 14483456";
  if(col[22] != 14483456) errors += "col[22] != 14483456";
  if(col[26] != 14483456) errors += "col[26] != 14483456";
  if(col[32] != 5570645) errors += "col[32] != 5570645";
  if(col[34] != 14483456) errors += "col[34] != 14483456";
  if(col[38] != 14483456) errors += "col[38] != 14483456";
  if(col[40] != 5570645) errors += "col[40] != 5570645";
  if(col[46] != 14483456) errors += "col[46] != 14483456";
  if(col[50] != 14483456) errors += "col[50] != 14483456";
  if(col[54] != 14483456) errors += "col[54] != 14483456";
  if(col[58] != 14483456) errors += "col[58] != 14483456";
  if(col[64] != 5570645) errors += "col[64] != 5570645";
  if(col[66] != 14483456) errors += "col[66] != 14483456";
  if(col[134] != 14483456) errors += "col[134] != 14483456";
  if(col[136] != 5570645) errors += "col[136] != 5570645";
  if(col[142] != 14483456) errors += "col[142] != 14483456";
  if(col[146] != 14483456) errors += "col[146] != 14483456";
  if(col[150] != 14483456) errors += "col[150] != 14483456";
  if(col[154] != 14483456) errors += "col[154] != 14483456";
  if(col[160] != 5570645) errors += "col[160] != 5570645";
  if(col[162] != 14483456) errors += "col[162] != 14483456";
  if(col[166] != 14483456) errors += "col[166] != 14483456";
  if(col[168] != 5570645) errors += "col[168] != 5570645";
  if(col[174] != 14483456) errors += "col[174] != 14483456";
  if(col[178] != 14483456) errors += "col[178] != 14483456";
  if(col[182] != 14483456) errors += "col[182] != 14483456";
  if(col[186] != 14483456) errors += "col[186] != 14483456";
  if(col[192] != 5570645) errors += "col[192] != 5570645";
  if(col[194] != 14483456) errors += "col[194] != 14483456";
  col=results[94];
  if(col[8] != 16711680) errors += "col[8] != 16711680";
  if(col[9] != 6684774) errors += "col[9] != 6684774";
  if(col[14] != 6684774) errors += "col[14] != 6684774";
  if(col[26] != 6684774) errors += "col[26] != 6684774";
  if(col[31] != 6684774) errors += "col[31] != 6684774";
  if(col[32] != 16711680) errors += "col[32] != 16711680";
  if(col[40] != 16711680) errors += "col[40] != 16711680";
  if(col[41] != 6684774) errors += "col[41] != 6684774";
  if(col[46] != 6684774) errors += "col[46] != 6684774";
  if(col[58] != 6684774) errors += "col[58] != 6684774";
  if(col[63] != 6684774) errors += "col[63] != 6684774";
  if(col[64] != 16711680) errors += "col[64] != 16711680";
  if(col[136] != 16711680) errors += "col[136] != 16711680";
  if(col[137] != 6684774) errors += "col[137] != 6684774";
  if(col[142] != 6684774) errors += "col[142] != 6684774";
  if(col[154] != 6684774) errors += "col[154] != 6684774";
  if(col[159] != 6684774) errors += "col[159] != 6684774";
  if(col[160] != 16711680) errors += "col[160] != 16711680";
  if(col[168] != 16711680) errors += "col[168] != 16711680";
  if(col[169] != 6684774) errors += "col[169] != 6684774";
  if(col[174] != 6684774) errors += "col[174] != 6684774";
  if(col[186] != 6684774) errors += "col[186] != 6684774";
  if(col[191] != 6684774) errors += "col[191] != 6684774";
  if(col[192] != 16711680) errors += "col[192] != 16711680";
  col=results[95];
  if(col[7] != 6684774) errors += "col[7] != 6684774";
  if(col[8] != 5570645) errors += "col[8] != 5570645";
  if(col[15] != 6684774) errors += "col[15] != 6684774";
  if(col[16] != 5570645) errors += "col[16] != 5570645";
  if(col[17] != 6684774) errors += "col[17] != 6684774";
  if(col[23] != 6684774) errors += "col[23] != 6684774";
  if(col[24] != 5570645) errors += "col[24] != 5570645";
  if(col[25] != 6684774) errors += "col[25] != 6684774";
  if(col[32] != 5570645) errors += "col[32] != 5570645";
  if(col[33] != 6684774) errors += "col[33] != 6684774";
  if(col[39] != 6684774) errors += "col[39] != 6684774";
  if(col[40] != 5570645) errors += "col[40] != 5570645";
  if(col[47] != 6684774) errors += "col[47] != 6684774";
  if(col[48] != 5570645) errors += "col[48] != 5570645";
  if(col[49] != 6684774) errors += "col[49] != 6684774";
  if(col[55] != 6684774) errors += "col[55] != 6684774";
  if(col[56] != 5570645) errors += "col[56] != 5570645";
  if(col[57] != 6684774) errors += "col[57] != 6684774";
  if(col[64] != 5570645) errors += "col[64] != 5570645";
  if(col[65] != 6684774) errors += "col[65] != 6684774";
  if(col[135] != 6684774) errors += "col[135] != 6684774";
  if(col[136] != 5570645) errors += "col[136] != 5570645";
  if(col[143] != 6684774) errors += "col[143] != 6684774";
  if(col[144] != 5570645) errors += "col[144] != 5570645";
  if(col[145] != 6684774) errors += "col[145] != 6684774";
  if(col[151] != 6684774) errors += "col[151] != 6684774";
  if(col[152] != 5570645) errors += "col[152] != 5570645";
  if(col[153] != 6684774) errors += "col[153] != 6684774";
  if(col[160] != 5570645) errors += "col[160] != 5570645";
  if(col[161] != 6684774) errors += "col[161] != 6684774";
  if(col[167] != 6684774) errors += "col[167] != 6684774";
  if(col[168] != 5570645) errors += "col[168] != 5570645";
  if(col[175] != 6684774) errors += "col[175] != 6684774";
  if(col[176] != 5570645) errors += "col[176] != 5570645";
  if(col[177] != 6684774) errors += "col[177] != 6684774";
  if(col[183] != 6684774) errors += "col[183] != 6684774";
  if(col[184] != 5570645) errors += "col[184] != 5570645";
  if(col[185] != 6684774) errors += "col[185] != 6684774";
  if(col[192] != 5570645) errors += "col[192] != 5570645";
  if(col[193] != 6684774) errors += "col[193] != 6684774";
  col=results[96];
  if(col[3] != 6684774) errors += "col[3] != 6684774";
  if(col[4] != 16711680) errors += "col[4] != 16711680";
  if(col[5] != 6684774) errors += "col[5] != 6684774";
  if(col[67] != 6684774) errors += "col[67] != 6684774";
  if(col[68] != 16711680) errors += "col[68] != 16711680";
  if(col[69] != 6684774) errors += "col[69] != 6684774";
  if(col[131] != 6684774) errors += "col[131] != 6684774";
  if(col[132] != 16711680) errors += "col[132] != 16711680";
  if(col[133] != 6684774) errors += "col[133] != 6684774";
  if(col[195] != 6684774) errors += "col[195] != 6684774";
  if(col[196] != 16711680) errors += "col[196] != 16711680";
  if(col[197] != 6684774) errors += "col[197] != 6684774";
  col=results[97];
  if(col[2] != 6684774) errors += "col[2] != 6684774";
  if(col[6] != 6684774) errors += "col[6] != 6684774";
  if(col[66] != 6684774) errors += "col[66] != 6684774";
  if(col[70] != 6684774) errors += "col[70] != 6684774";
  if(col[130] != 6684774) errors += "col[130] != 6684774";
  if(col[134] != 6684774) errors += "col[134] != 6684774";
  if(col[194] != 6684774) errors += "col[194] != 6684774";
  if(col[198] != 6684774) errors += "col[198] != 6684774";
  col=results[98];
  if(col[1] != 6684774) errors += "col[1] != 6684774";
  if(col[7] != 6684774) errors += "col[7] != 6684774";
  if(col[65] != 6684774) errors += "col[65] != 6684774";
  if(col[71] != 6684774) errors += "col[71] != 6684774";
  if(col[129] != 6684774) errors += "col[129] != 6684774";
  if(col[135] != 6684774) errors += "col[135] != 6684774";
  if(col[193] != 6684774) errors += "col[193] != 6684774";
  if(col[199] != 6684774) errors += "col[199] != 6684774";
  col=results[101];
  if(col[1] != 6684774) errors += "col[1] != 6684774";
  if(col[7] != 6684774) errors += "col[7] != 6684774";
  if(col[65] != 6684774) errors += "col[65] != 6684774";
  if(col[71] != 6684774) errors += "col[71] != 6684774";
  if(col[129] != 6684774) errors += "col[129] != 6684774";
  if(col[135] != 6684774) errors += "col[135] != 6684774";
  if(col[193] != 6684774) errors += "col[193] != 6684774";
  if(col[199] != 6684774) errors += "col[199] != 6684774";
  col=results[102];
  if(col[2] != 6684774) errors += "col[2] != 6684774";
  if(col[6] != 6684774) errors += "col[6] != 6684774";
  if(col[66] != 6684774) errors += "col[66] != 6684774";
  if(col[70] != 6684774) errors += "col[70] != 6684774";
  if(col[130] != 6684774) errors += "col[130] != 6684774";
  if(col[134] != 6684774) errors += "col[134] != 6684774";
  if(col[194] != 6684774) errors += "col[194] != 6684774";
  if(col[198] != 6684774) errors += "col[198] != 6684774";
  col=results[103];
  if(col[3] != 6684774) errors += "col[3] != 6684774";
  if(col[4] != 16711680) errors += "col[4] != 16711680";
  if(col[5] != 6684774) errors += "col[5] != 6684774";
  if(col[67] != 6684774) errors += "col[67] != 6684774";
  if(col[68] != 16711680) errors += "col[68] != 16711680";
  if(col[69] != 6684774) errors += "col[69] != 6684774";
  if(col[131] != 6684774) errors += "col[131] != 6684774";
  if(col[132] != 16711680) errors += "col[132] != 16711680";
  if(col[133] != 6684774) errors += "col[133] != 6684774";
  if(col[195] != 6684774) errors += "col[195] != 6684774";
  if(col[196] != 16711680) errors += "col[196] != 16711680";
  if(col[197] != 6684774) errors += "col[197] != 6684774";
  col=results[104];
  if(col[7] != 6684774) errors += "col[7] != 6684774";
  if(col[8] != 5570645) errors += "col[8] != 5570645";
  if(col[15] != 6684774) errors += "col[15] != 6684774";
  if(col[16] != 5570645) errors += "col[16] != 5570645";
  if(col[17] != 6684774) errors += "col[17] != 6684774";
  if(col[23] != 6684774) errors += "col[23] != 6684774";
  if(col[24] != 5570645) errors += "col[24] != 5570645";
  if(col[25] != 6684774) errors += "col[25] != 6684774";
  if(col[32] != 5570645) errors += "col[32] != 5570645";
  if(col[33] != 6684774) errors += "col[33] != 6684774";
  if(col[39] != 6684774) errors += "col[39] != 6684774";
  if(col[40] != 5570645) errors += "col[40] != 5570645";
  if(col[47] != 6684774) errors += "col[47] != 6684774";
  if(col[48] != 5570645) errors += "col[48] != 5570645";
  if(col[49] != 6684774) errors += "col[49] != 6684774";
  if(col[55] != 6684774) errors += "col[55] != 6684774";
  if(col[56] != 5570645) errors += "col[56] != 5570645";
  if(col[57] != 6684774) errors += "col[57] != 6684774";
  if(col[64] != 5570645) errors += "col[64] != 5570645";
  if(col[65] != 6684774) errors += "col[65] != 6684774";
  if(col[135] != 6684774) errors += "col[135] != 6684774";
  if(col[136] != 5570645) errors += "col[136] != 5570645";
  if(col[143] != 6684774) errors += "col[143] != 6684774";
  if(col[144] != 5570645) errors += "col[144] != 5570645";
  if(col[145] != 6684774) errors += "col[145] != 6684774";
  if(col[151] != 6684774) errors += "col[151] != 6684774";
  if(col[152] != 5570645) errors += "col[152] != 5570645";
  if(col[153] != 6684774) errors += "col[153] != 6684774";
  if(col[160] != 5570645) errors += "col[160] != 5570645";
  if(col[161] != 6684774) errors += "col[161] != 6684774";
  if(col[167] != 6684774) errors += "col[167] != 6684774";
  if(col[168] != 5570645) errors += "col[168] != 5570645";
  if(col[175] != 6684774) errors += "col[175] != 6684774";
  if(col[176] != 5570645) errors += "col[176] != 5570645";
  if(col[177] != 6684774) errors += "col[177] != 6684774";
  if(col[183] != 6684774) errors += "col[183] != 6684774";
  if(col[184] != 5570645) errors += "col[184] != 5570645";
  if(col[185] != 6684774) errors += "col[185] != 6684774";
  if(col[192] != 5570645) errors += "col[192] != 5570645";
  if(col[193] != 6684774) errors += "col[193] != 6684774";
  col=results[105];
  if(col[8] != 16711680) errors += "col[8] != 16711680";
  if(col[9] != 6684774) errors += "col[9] != 6684774";
  if(col[14] != 6684774) errors += "col[14] != 6684774";
  if(col[26] != 6684774) errors += "col[26] != 6684774";
  if(col[31] != 6684774) errors += "col[31] != 6684774";
  if(col[32] != 16711680) errors += "col[32] != 16711680";
  if(col[40] != 16711680) errors += "col[40] != 16711680";
  if(col[41] != 6684774) errors += "col[41] != 6684774";
  if(col[46] != 6684774) errors += "col[46] != 6684774";
  if(col[58] != 6684774) errors += "col[58] != 6684774";
  if(col[63] != 6684774) errors += "col[63] != 6684774";
  if(col[64] != 16711680) errors += "col[64] != 16711680";
  if(col[136] != 16711680) errors += "col[136] != 16711680";
  if(col[137] != 6684774) errors += "col[137] != 6684774";
  if(col[142] != 6684774) errors += "col[142] != 6684774";
  if(col[154] != 6684774) errors += "col[154] != 6684774";
  if(col[159] != 6684774) errors += "col[159] != 6684774";
  if(col[160] != 16711680) errors += "col[160] != 16711680";
  if(col[168] != 16711680) errors += "col[168] != 16711680";
  if(col[169] != 6684774) errors += "col[169] != 6684774";
  if(col[174] != 6684774) errors += "col[174] != 6684774";
  if(col[186] != 6684774) errors += "col[186] != 6684774";
  if(col[191] != 6684774) errors += "col[191] != 6684774";
  if(col[192] != 16711680) errors += "col[192] != 16711680";
  col=results[106];
  if(col[6] != 14483456) errors += "col[6] != 14483456";
  if(col[8] != 5570645) errors += "col[8] != 5570645";
  if(col[14] != 14483456) errors += "col[14] != 14483456";
  if(col[18] != 14483456) errors += "col[18] != 14483456";
  if(col[22] != 14483456) errors += "col[22] != 14483456";
  if(col[26] != 14483456) errors += "col[26] != 14483456";
  if(col[32] != 5570645) errors += "col[32] != 5570645";
  if(col[34] != 14483456) errors += "col[34] != 14483456";
  if(col[38] != 14483456) errors += "col[38] != 14483456";
  if(col[40] != 5570645) errors += "col[40] != 5570645";
  if(col[46] != 14483456) errors += "col[46] != 14483456";
  if(col[50] != 14483456) errors += "col[50] != 14483456";
  if(col[54] != 14483456) errors += "col[54] != 14483456";
  if(col[58] != 14483456) errors += "col[58] != 14483456";
  if(col[64] != 5570645) errors += "col[64] != 5570645";
  if(col[66] != 14483456) errors += "col[66] != 14483456";
  if(col[134] != 14483456) errors += "col[134] != 14483456";
  if(col[136] != 5570645) errors += "col[136] != 5570645";
  if(col[142] != 14483456) errors += "col[142] != 14483456";
  if(col[146] != 14483456) errors += "col[146] != 14483456";
  if(col[150] != 14483456) errors += "col[150] != 14483456";
  if(col[154] != 14483456) errors += "col[154] != 14483456";
  if(col[160] != 5570645) errors += "col[160] != 5570645";
  if(col[162] != 14483456) errors += "col[162] != 14483456";
  if(col[166] != 14483456) errors += "col[166] != 14483456";
  if(col[168] != 5570645) errors += "col[168] != 5570645";
  if(col[174] != 14483456) errors += "col[174] != 14483456";
  if(col[178] != 14483456) errors += "col[178] != 14483456";
  if(col[182] != 14483456) errors += "col[182] != 14483456";
  if(col[186] != 14483456) errors += "col[186] != 14483456";
  if(col[192] != 5570645) errors += "col[192] != 5570645";
  if(col[194] != 14483456) errors += "col[194] != 14483456";
  col=results[107];
  if(col[6] != 16711680) errors += "col[6] != 16711680";
  if(col[13] != 16711680) errors += "col[13] != 16711680";
  if(col[18] != 16711680) errors += "col[18] != 16711680";
  if(col[22] != 16711680) errors += "col[22] != 16711680";
  if(col[27] != 16711680) errors += "col[27] != 16711680";
  if(col[34] != 16711680) errors += "col[34] != 16711680";
  if(col[38] != 16711680) errors += "col[38] != 16711680";
  if(col[45] != 16711680) errors += "col[45] != 16711680";
  if(col[50] != 16711680) errors += "col[50] != 16711680";
  if(col[54] != 16711680) errors += "col[54] != 16711680";
  if(col[59] != 16711680) errors += "col[59] != 16711680";
  if(col[66] != 16711680) errors += "col[66] != 16711680";
  if(col[134] != 16711680) errors += "col[134] != 16711680";
  if(col[141] != 16711680) errors += "col[141] != 16711680";
  if(col[146] != 16711680) errors += "col[146] != 16711680";
  if(col[150] != 16711680) errors += "col[150] != 16711680";
  if(col[155] != 16711680) errors += "col[155] != 16711680";
  if(col[162] != 16711680) errors += "col[162] != 16711680";
  if(col[166] != 16711680) errors += "col[166] != 16711680";
  if(col[173] != 16711680) errors += "col[173] != 16711680";
  if(col[178] != 16711680) errors += "col[178] != 16711680";
  if(col[182] != 16711680) errors += "col[182] != 16711680";
  if(col[187] != 16711680) errors += "col[187] != 16711680";
  if(col[194] != 16711680) errors += "col[194] != 16711680";
  col=results[108];
  if(col[12] != 6684774) errors += "col[12] != 6684774";
  if(col[14] != 6684774) errors += "col[14] != 6684774";
  if(col[15] != 16711680) errors += "col[15] != 16711680";
  if(col[25] != 16711680) errors += "col[25] != 16711680";
  if(col[26] != 6684774) errors += "col[26] != 6684774";
  if(col[28] != 6684774) errors += "col[28] != 6684774";
  if(col[44] != 6684774) errors += "col[44] != 6684774";
  if(col[46] != 6684774) errors += "col[46] != 6684774";
  if(col[47] != 16711680) errors += "col[47] != 16711680";
  if(col[57] != 16711680) errors += "col[57] != 16711680";
  if(col[58] != 6684774) errors += "col[58] != 6684774";
  if(col[60] != 6684774) errors += "col[60] != 6684774";
  if(col[140] != 6684774) errors += "col[140] != 6684774";
  if(col[142] != 6684774) errors += "col[142] != 6684774";
  if(col[143] != 16711680) errors += "col[143] != 16711680";
  if(col[153] != 16711680) errors += "col[153] != 16711680";
  if(col[154] != 6684774) errors += "col[154] != 6684774";
  if(col[156] != 6684774) errors += "col[156] != 6684774";
  if(col[172] != 6684774) errors += "col[172] != 6684774";
  if(col[174] != 6684774) errors += "col[174] != 6684774";
  if(col[175] != 16711680) errors += "col[175] != 16711680";
  if(col[185] != 16711680) errors += "col[185] != 16711680";
  if(col[186] != 6684774) errors += "col[186] != 6684774";
  if(col[188] != 6684774) errors += "col[188] != 6684774";
  col=results[109];
  if(col[11] != 16711680) errors += "col[11] != 16711680";
  if(col[17] != 6684774) errors += "col[17] != 6684774";
  if(col[23] != 6684774) errors += "col[23] != 6684774";
  if(col[24] != 5570645) errors += "col[24] != 5570645";
  if(col[25] != 6684774) errors += "col[25] != 6684774";
  if(col[26] != 6684774) errors += "col[26] != 6684774";
  if(col[27] != 6684774) errors += "col[27] != 6684774";
  if(col[29] != 16711680) errors += "col[29] != 16711680";
  if(col[43] != 16711680) errors += "col[43] != 16711680";
  if(col[45] != 6684774) errors += "col[45] != 6684774";
  if(col[46] != 6684774) errors += "col[46] != 6684774";
  if(col[47] != 6684774) errors += "col[47] != 6684774";
  if(col[48] != 5570645) errors += "col[48] != 5570645";
  if(col[49] != 6684774) errors += "col[49] != 6684774";
  if(col[55] != 6684774) errors += "col[55] != 6684774";
  if(col[61] != 16711680) errors += "col[61] != 16711680";
  if(col[139] != 16711680) errors += "col[139] != 16711680";
  if(col[145] != 6684774) errors += "col[145] != 6684774";
  if(col[151] != 6684774) errors += "col[151] != 6684774";
  if(col[152] != 5570645) errors += "col[152] != 5570645";
  if(col[153] != 6684774) errors += "col[153] != 6684774";
  if(col[154] != 6684774) errors += "col[154] != 6684774";
  if(col[155] != 6684774) errors += "col[155] != 6684774";
  if(col[157] != 16711680) errors += "col[157] != 16711680";
  if(col[171] != 16711680) errors += "col[171] != 16711680";
  if(col[173] != 6684774) errors += "col[173] != 6684774";
  if(col[174] != 6684774) errors += "col[174] != 6684774";
  if(col[175] != 6684774) errors += "col[175] != 6684774";
  if(col[176] != 5570645) errors += "col[176] != 5570645";
  if(col[177] != 6684774) errors += "col[177] != 6684774";
  if(col[183] != 6684774) errors += "col[183] != 6684774";
  if(col[189] != 16711680) errors += "col[189] != 16711680";
  col=results[110];
  if(col[11] != 5570645) errors += "col[11] != 5570645";
  if(col[27] != 15597568) errors += "col[27] != 15597568";
  if(col[29] != 5570645) errors += "col[29] != 5570645";
  if(col[43] != 5570645) errors += "col[43] != 5570645";
  if(col[45] != 15597568) errors += "col[45] != 15597568";
  if(col[61] != 5570645) errors += "col[61] != 5570645";
  if(col[139] != 5570645) errors += "col[139] != 5570645";
  if(col[155] != 15597568) errors += "col[155] != 15597568";
  if(col[157] != 5570645) errors += "col[157] != 5570645";
  if(col[171] != 5570645) errors += "col[171] != 5570645";
  if(col[173] != 15597568) errors += "col[173] != 15597568";
  if(col[189] != 5570645) errors += "col[189] != 5570645";
  col=results[111];
  if(col[11] != 6684774) errors += "col[11] != 6684774";
  if(col[12] != 16711680) errors += "col[12] != 16711680";
  if(col[20] != 6684774) errors += "col[20] != 6684774";
  if(col[21] != 5570645) errors += "col[21] != 5570645";
  if(col[22] != 6684774) errors += "col[22] != 6684774";
  if(col[27] != 5570645) errors += "col[27] != 5570645";
  if(col[29] != 6684774) errors += "col[29] != 6684774";
  if(col[43] != 6684774) errors += "col[43] != 6684774";
  if(col[45] != 5570645) errors += "col[45] != 5570645";
  if(col[50] != 6684774) errors += "col[50] != 6684774";
  if(col[51] != 5570645) errors += "col[51] != 5570645";
  if(col[52] != 6684774) errors += "col[52] != 6684774";
  if(col[60] != 16711680) errors += "col[60] != 16711680";
  if(col[61] != 6684774) errors += "col[61] != 6684774";
  if(col[139] != 6684774) errors += "col[139] != 6684774";
  if(col[140] != 16711680) errors += "col[140] != 16711680";
  if(col[148] != 6684774) errors += "col[148] != 6684774";
  if(col[149] != 5570645) errors += "col[149] != 5570645";
  if(col[150] != 6684774) errors += "col[150] != 6684774";
  if(col[155] != 5570645) errors += "col[155] != 5570645";
  if(col[157] != 6684774) errors += "col[157] != 6684774";
  if(col[171] != 6684774) errors += "col[171] != 6684774";
  if(col[173] != 5570645) errors += "col[173] != 5570645";
  if(col[178] != 6684774) errors += "col[178] != 6684774";
  if(col[179] != 5570645) errors += "col[179] != 5570645";
  if(col[180] != 6684774) errors += "col[180] != 6684774";
  if(col[188] != 16711680) errors += "col[188] != 16711680";
  if(col[189] != 6684774) errors += "col[189] != 6684774";
  col=results[112];
  if(col[13] != 6684774) errors += "col[13] != 6684774";
  if(col[20] != 16711680) errors += "col[20] != 16711680";
  if(col[21] != 14483456) errors += "col[21] != 14483456";
  if(col[22] != 13369344) errors += "col[22] != 13369344";
  if(col[26] != 6684774) errors += "col[26] != 6684774";
  if(col[27] != 6684774) errors += "col[27] != 6684774";
  if(col[45] != 6684774) errors += "col[45] != 6684774";
  if(col[46] != 6684774) errors += "col[46] != 6684774";
  if(col[50] != 13369344) errors += "col[50] != 13369344";
  if(col[51] != 14483456) errors += "col[51] != 14483456";
  if(col[52] != 16711680) errors += "col[52] != 16711680";
  if(col[59] != 6684774) errors += "col[59] != 6684774";
  if(col[141] != 6684774) errors += "col[141] != 6684774";
  if(col[148] != 16711680) errors += "col[148] != 16711680";
  if(col[149] != 14483456) errors += "col[149] != 14483456";
  if(col[150] != 13369344) errors += "col[150] != 13369344";
  if(col[154] != 6684774) errors += "col[154] != 6684774";
  if(col[155] != 6684774) errors += "col[155] != 6684774";
  if(col[173] != 6684774) errors += "col[173] != 6684774";
  if(col[174] != 6684774) errors += "col[174] != 6684774";
  if(col[178] != 13369344) errors += "col[178] != 13369344";
  if(col[179] != 14483456) errors += "col[179] != 14483456";
  if(col[180] != 16711680) errors += "col[180] != 16711680";
  if(col[187] != 6684774) errors += "col[187] != 6684774";
  col=results[113];
  if(col[14] != 5570645) errors += "col[14] != 5570645";
  if(col[19] != 5570645) errors += "col[19] != 5570645";
  if(col[22] != 6684774) errors += "col[22] != 6684774";
  if(col[25] != 15597568) errors += "col[25] != 15597568";
  if(col[26] != 14483456) errors += "col[26] != 14483456";
  if(col[46] != 14483456) errors += "col[46] != 14483456";
  if(col[47] != 15597568) errors += "col[47] != 15597568";
  if(col[50] != 6684774) errors += "col[50] != 6684774";
  if(col[53] != 5570645) errors += "col[53] != 5570645";
  if(col[56] != 6684774) errors += "col[56] != 6684774";
  if(col[57] != 5570645) errors += "col[57] != 5570645";
  if(col[58] != 5570645) errors += "col[58] != 5570645";
  if(col[142] != 5570645) errors += "col[142] != 5570645";
  if(col[143] != 5570645) errors += "col[143] != 5570645";
  if(col[144] != 6684774) errors += "col[144] != 6684774";
  if(col[147] != 5570645) errors += "col[147] != 5570645";
  if(col[150] != 6684774) errors += "col[150] != 6684774";
  if(col[153] != 15597568) errors += "col[153] != 15597568";
  if(col[154] != 14483456) errors += "col[154] != 14483456";
  if(col[174] != 14483456) errors += "col[174] != 14483456";
  if(col[175] != 15597568) errors += "col[175] != 15597568";
  if(col[178] != 6684774) errors += "col[178] != 6684774";
  if(col[181] != 5570645) errors += "col[181] != 5570645";
  if(col[186] != 5570645) errors += "col[186] != 5570645";
  col=results[114];
  if(col[20] != 16711680) errors += "col[20] != 16711680";
  if(col[21] != 11141120) errors += "col[21] != 11141120";
  if(col[26] != 16711680) errors += "col[26] != 16711680";
  if(col[46] != 16711680) errors += "col[46] != 16711680";
  if(col[51] != 11141120) errors += "col[51] != 11141120";
  if(col[52] != 16711680) errors += "col[52] != 16711680";
  if(col[148] != 16711680) errors += "col[148] != 16711680";
  if(col[149] != 11141120) errors += "col[149] != 11141120";
  if(col[154] != 16711680) errors += "col[154] != 16711680";
  if(col[174] != 16711680) errors += "col[174] != 16711680";
  if(col[179] != 11141120) errors += "col[179] != 11141120";
  if(col[180] != 16711680) errors += "col[180] != 16711680";
  col=results[115];
  if(col[15] != 5570645) errors += "col[15] != 5570645";
  if(col[16] != 16711680) errors += "col[16] != 16711680";
  if(col[20] != 6684774) errors += "col[20] != 6684774";
  if(col[21] != 5570645) errors += "col[21] != 5570645";
  if(col[51] != 5570645) errors += "col[51] != 5570645";
  if(col[52] != 6684774) errors += "col[52] != 6684774";
  if(col[148] != 6684774) errors += "col[148] != 6684774";
  if(col[149] != 5570645) errors += "col[149] != 5570645";
  if(col[179] != 5570645) errors += "col[179] != 5570645";
  if(col[180] != 6684774) errors += "col[180] != 6684774";
  if(col[184] != 16711680) errors += "col[184] != 16711680";
  if(col[185] != 5570645) errors += "col[185] != 5570645";
  col=results[116];
  if(col[25] != 6684774) errors += "col[25] != 6684774";
  if(col[28] != 5570645) errors += "col[28] != 5570645";
  if(col[29] != 16711680) errors += "col[29] != 16711680";
  if(col[47] != 6684774) errors += "col[47] != 6684774";
  if(col[54] != 6684774) errors += "col[54] != 6684774";
  if(col[146] != 6684774) errors += "col[146] != 6684774";
  if(col[153] != 6684774) errors += "col[153] != 6684774";
  if(col[171] != 16711680) errors += "col[171] != 16711680";
  if(col[172] != 5570645) errors += "col[172] != 5570645";
  if(col[175] != 6684774) errors += "col[175] != 6684774";
  col=results[117];
  if(col[20] != 6684774) errors += "col[20] != 6684774";
  if(col[22] != 6684774) errors += "col[22] != 6684774";
  if(col[23] != 5570645) errors += "col[23] != 5570645";
  if(col[24] != 6684774) errors += "col[24] != 6684774";
  if(col[28] != 6684774) errors += "col[28] != 6684774";
  if(col[29] != 6684774) errors += "col[29] != 6684774";
  if(col[48] != 6684774) errors += "col[48] != 6684774";
  if(col[49] != 5570645) errors += "col[49] != 5570645";
  if(col[53] != 5570645) errors += "col[53] != 5570645";
  if(col[55] != 5570645) errors += "col[55] != 5570645";
  if(col[145] != 5570645) errors += "col[145] != 5570645";
  if(col[147] != 5570645) errors += "col[147] != 5570645";
  if(col[151] != 5570645) errors += "col[151] != 5570645";
  if(col[152] != 6684774) errors += "col[152] != 6684774";
  if(col[171] != 6684774) errors += "col[171] != 6684774";
  if(col[172] != 6684774) errors += "col[172] != 6684774";
  if(col[176] != 6684774) errors += "col[176] != 6684774";
  if(col[177] != 5570645) errors += "col[177] != 5570645";
  if(col[178] != 6684774) errors += "col[178] != 6684774";
  if(col[180] != 6684774) errors += "col[180] != 6684774";
  col=results[118];
  if(col[18] != 6684774) errors += "col[18] != 6684774";
  if(col[19] != 16711680) errors += "col[19] != 16711680";
  if(col[20] != 14483456) errors += "col[20] != 14483456";
  if(col[21] != 5570645) errors += "col[21] != 5570645";
  if(col[22] != 6684774) errors += "col[22] != 6684774";
  if(col[27] != 6684774) errors += "col[27] != 6684774";
  if(col[28] != 6684774) errors += "col[28] != 6684774";
  if(col[29] != 6684774) errors += "col[29] != 6684774";
  if(col[52] != 6684774) errors += "col[52] != 6684774";
  if(col[148] != 6684774) errors += "col[148] != 6684774";
  if(col[171] != 6684774) errors += "col[171] != 6684774";
  if(col[172] != 6684774) errors += "col[172] != 6684774";
  if(col[173] != 6684774) errors += "col[173] != 6684774";
  if(col[178] != 6684774) errors += "col[178] != 6684774";
  if(col[179] != 5570645) errors += "col[179] != 5570645";
  if(col[180] != 14483456) errors += "col[180] != 14483456";
  if(col[181] != 16711680) errors += "col[181] != 16711680";
  if(col[182] != 6684774) errors += "col[182] != 6684774";
  col=results[119];
  if(col[17] != 5570645) errors += "col[17] != 5570645";
  if(col[18] != 15597568) errors += "col[18] != 15597568";
  if(col[19] != 6684774) errors += "col[19] != 6684774";
  if(col[20] != 6684774) errors += "col[20] != 6684774";
  if(col[21] != 6684774) errors += "col[21] != 6684774";
  if(col[22] != 16711680) errors += "col[22] != 16711680";
  if(col[26] != 15597568) errors += "col[26] != 15597568";
  if(col[28] != 16711680) errors += "col[28] != 16711680";
  if(col[52] != 7798784) errors += "col[52] != 7798784";
  if(col[54] != 6684774) errors += "col[54] != 6684774";
  if(col[55] != 6684774) errors += "col[55] != 6684774";
  if(col[145] != 6684774) errors += "col[145] != 6684774";
  if(col[146] != 6684774) errors += "col[146] != 6684774";
  if(col[148] != 7798784) errors += "col[148] != 7798784";
  if(col[172] != 16711680) errors += "col[172] != 16711680";
  if(col[174] != 15597568) errors += "col[174] != 15597568";
  if(col[178] != 16711680) errors += "col[178] != 16711680";
  if(col[179] != 6684774) errors += "col[179] != 6684774";
  if(col[180] != 6684774) errors += "col[180] != 6684774";
  if(col[181] != 6684774) errors += "col[181] != 6684774";
  if(col[182] != 15597568) errors += "col[182] != 15597568";
  if(col[183] != 5570645) errors += "col[183] != 5570645";
  col=results[120];
  if(col[17] != 5570645) errors += "col[17] != 5570645";
  if(col[22] != 6684774) errors += "col[22] != 6684774";
  if(col[23] != 5570645) errors += "col[23] != 5570645";
  if(col[26] != 13369344) errors += "col[26] != 13369344";
  if(col[27] != 14483456) errors += "col[27] != 14483456";
  if(col[28] != 6684774) errors += "col[28] != 6684774";
  if(col[46] != 5570645) errors += "col[46] != 5570645";
  if(col[48] != 6684774) errors += "col[48] != 6684774";
  if(col[52] != 11141120) errors += "col[52] != 11141120";
  if(col[54] != 6684774) errors += "col[54] != 6684774";
  if(col[55] != 16711680) errors += "col[55] != 16711680";
  if(col[145] != 16711680) errors += "col[145] != 16711680";
  if(col[146] != 6684774) errors += "col[146] != 6684774";
  if(col[148] != 11141120) errors += "col[148] != 11141120";
  if(col[152] != 6684774) errors += "col[152] != 6684774";
  if(col[154] != 5570645) errors += "col[154] != 5570645";
  if(col[172] != 6684774) errors += "col[172] != 6684774";
  if(col[173] != 14483456) errors += "col[173] != 14483456";
  if(col[174] != 13369344) errors += "col[174] != 13369344";
  if(col[177] != 5570645) errors += "col[177] != 5570645";
  if(col[178] != 6684774) errors += "col[178] != 6684774";
  if(col[183] != 5570645) errors += "col[183] != 5570645";
  col=results[121];
  if(col[18] != 16711680) errors += "col[18] != 16711680";
  if(col[19] != 6684774) errors += "col[19] != 6684774";
  if(col[20] != 6684774) errors += "col[20] != 6684774";
  if(col[21] != 6684774) errors += "col[21] != 6684774";
  if(col[22] != 16711680) errors += "col[22] != 16711680";
  if(col[45] != 6684774) errors += "col[45] != 6684774";
  if(col[48] != 5570645) errors += "col[48] != 5570645";
  if(col[53] != 16711680) errors += "col[53] != 16711680";
  if(col[54] != 5570645) errors += "col[54] != 5570645";
  if(col[146] != 5570645) errors += "col[146] != 5570645";
  if(col[147] != 16711680) errors += "col[147] != 16711680";
  if(col[152] != 5570645) errors += "col[152] != 5570645";
  if(col[155] != 6684774) errors += "col[155] != 6684774";
  if(col[178] != 16711680) errors += "col[178] != 16711680";
  if(col[179] != 6684774) errors += "col[179] != 6684774";
  if(col[180] != 6684774) errors += "col[180] != 6684774";
  if(col[181] != 6684774) errors += "col[181] != 6684774";
  if(col[182] != 16711680) errors += "col[182] != 16711680";
  col=results[122];
  if(col[19] != 5570645) errors += "col[19] != 5570645";
  if(col[20] != 15597568) errors += "col[20] != 15597568";
  if(col[21] != 5570645) errors += "col[21] != 5570645";
  if(col[32] != 6684774) errors += "col[32] != 6684774";
  if(col[45] != 5570645) errors += "col[45] != 5570645";
  if(col[48] != 16711680) errors += "col[48] != 16711680";
  if(col[152] != 16711680) errors += "col[152] != 16711680";
  if(col[155] != 5570645) errors += "col[155] != 5570645";
  if(col[168] != 6684774) errors += "col[168] != 6684774";
  if(col[179] != 5570645) errors += "col[179] != 5570645";
  if(col[180] != 15597568) errors += "col[180] != 15597568";
  if(col[181] != 5570645) errors += "col[181] != 5570645";
  col=results[123];
  if(col[20] != 6684774) errors += "col[20] != 6684774";
  if(col[27] != 6684774) errors += "col[27] != 6684774";
  if(col[33] != 5570645) errors += "col[33] != 5570645";
  if(col[44] != 6684774) errors += "col[44] != 6684774";
  if(col[45] != 15597568) errors += "col[45] != 15597568";
  if(col[47] != 16711680) errors += "col[47] != 16711680";
  if(col[48] != 6684774) errors += "col[48] != 6684774";
  if(col[152] != 6684774) errors += "col[152] != 6684774";
  if(col[153] != 16711680) errors += "col[153] != 16711680";
  if(col[155] != 15597568) errors += "col[155] != 15597568";
  if(col[156] != 6684774) errors += "col[156] != 6684774";
  if(col[167] != 5570645) errors += "col[167] != 5570645";
  if(col[173] != 6684774) errors += "col[173] != 6684774";
  if(col[180] != 6684774) errors += "col[180] != 6684774";
  col=results[124];
  if(col[26] != 16711680) errors += "col[26] != 16711680";
  if(col[28] != 5570645) errors += "col[28] != 5570645";
  if(col[29] != 6684774) errors += "col[29] != 6684774";
  if(col[30] != 6684774) errors += "col[30] != 6684774";
  if(col[33] != 6684774) errors += "col[33] != 6684774";
  if(col[45] != 14483456) errors += "col[45] != 14483456";
  if(col[47] != 5570645) errors += "col[47] != 5570645";
  if(col[153] != 5570645) errors += "col[153] != 5570645";
  if(col[155] != 14483456) errors += "col[155] != 14483456";
  if(col[167] != 6684774) errors += "col[167] != 6684774";
  if(col[170] != 6684774) errors += "col[170] != 6684774";
  if(col[171] != 6684774) errors += "col[171] != 6684774";
  if(col[172] != 5570645) errors += "col[172] != 5570645";
  if(col[174] != 16711680) errors += "col[174] != 16711680";
  col=results[125];
  if(col[30] != 5570645) errors += "col[30] != 5570645";
  if(col[31] != 14483456) errors += "col[31] != 14483456";
  if(col[32] != 6684774) errors += "col[32] != 6684774";
  if(col[168] != 6684774) errors += "col[168] != 6684774";
  if(col[169] != 14483456) errors += "col[169] != 14483456";
  if(col[170] != 5570645) errors += "col[170] != 5570645";
  col=results[126];
  if(col[26] != 5570645) errors += "col[26] != 5570645";
  if(col[28] != 5570645) errors += "col[28] != 5570645";
  if(col[29] != 6684774) errors += "col[29] != 6684774";
  if(col[42] != 15597568) errors += "col[42] != 15597568";
  if(col[43] != 5570645) errors += "col[43] != 5570645";
  if(col[157] != 5570645) errors += "col[157] != 5570645";
  if(col[158] != 15597568) errors += "col[158] != 15597568";
  if(col[171] != 6684774) errors += "col[171] != 6684774";
  if(col[172] != 5570645) errors += "col[172] != 5570645";
  if(col[174] != 5570645) errors += "col[174] != 5570645";
  col=results[127];
  if(col[25] != 6684774) errors += "col[25] != 6684774";
  if(col[27] != 6684774) errors += "col[27] != 6684774";
  if(col[41] != 5570645) errors += "col[41] != 5570645";
  if(col[44] != 5570645) errors += "col[44] != 5570645";
  if(col[156] != 5570645) errors += "col[156] != 5570645";
  if(col[159] != 5570645) errors += "col[159] != 5570645";
  if(col[173] != 6684774) errors += "col[173] != 6684774";
  if(col[175] != 6684774) errors += "col[175] != 6684774";
  col=results[128];
  if(col[24] != 5570645) errors += "col[24] != 5570645";
  if(col[25] != 6684774) errors += "col[25] != 6684774";
  if(col[40] != 6684774) errors += "col[40] != 6684774";
  if(col[41] != 5570645) errors += "col[41] != 5570645";
  if(col[42] != 6684774) errors += "col[42] != 6684774";
  if(col[43] != 6684774) errors += "col[43] != 6684774";
  if(col[44] != 15597568) errors += "col[44] != 15597568";
  if(col[45] != 6684774) errors += "col[45] != 6684774";
  if(col[155] != 6684774) errors += "col[155] != 6684774";
  if(col[156] != 15597568) errors += "col[156] != 15597568";
  if(col[157] != 6684774) errors += "col[157] != 6684774";
  if(col[158] != 6684774) errors += "col[158] != 6684774";
  if(col[159] != 5570645) errors += "col[159] != 5570645";
  if(col[160] != 6684774) errors += "col[160] != 6684774";
  if(col[175] != 6684774) errors += "col[175] != 6684774";
  if(col[176] != 5570645) errors += "col[176] != 5570645";
  col=results[129];
  if(col[26] != 6684774) errors += "col[26] != 6684774";
  if(col[27] != 16711680) errors += "col[27] != 16711680";
  if(col[28] != 5570645) errors += "col[28] != 5570645";
  if(col[29] != 6684774) errors += "col[29] != 6684774";
  if(col[30] != 12255232) errors += "col[30] != 12255232";
  if(col[31] != 11141120) errors += "col[31] != 11141120";
  if(col[41] != 5570645) errors += "col[41] != 5570645";
  if(col[44] != 5570645) errors += "col[44] != 5570645";
  if(col[156] != 5570645) errors += "col[156] != 5570645";
  if(col[159] != 5570645) errors += "col[159] != 5570645";
  if(col[169] != 11141120) errors += "col[169] != 11141120";
  if(col[170] != 12255232) errors += "col[170] != 12255232";
  if(col[171] != 6684774) errors += "col[171] != 6684774";
  if(col[172] != 5570645) errors += "col[172] != 5570645";
  if(col[173] != 16711680) errors += "col[173] != 16711680";
  if(col[174] != 6684774) errors += "col[174] != 6684774";
  col=results[130];
  if(col[27] != 16711680) errors += "col[27] != 16711680";
  if(col[29] != 16711680) errors += "col[29] != 16711680";
  if(col[32] != 5570645) errors += "col[32] != 5570645";
  if(col[42] != 15597568) errors += "col[42] != 15597568";
  if(col[43] != 5570645) errors += "col[43] != 5570645";
  if(col[157] != 5570645) errors += "col[157] != 5570645";
  if(col[158] != 15597568) errors += "col[158] != 15597568";
  if(col[168] != 5570645) errors += "col[168] != 5570645";
  if(col[171] != 16711680) errors += "col[171] != 16711680";
  if(col[173] != 16711680) errors += "col[173] != 16711680";
  col=results[131];
  if(col[27] != 14483456) errors += "col[27] != 14483456";
  if(col[30] != 6684774) errors += "col[30] != 6684774";
  if(col[31] != 16711680) errors += "col[31] != 16711680";
  if(col[33] != 6684774) errors += "col[33] != 6684774";
  if(col[35] != 6684774) errors += "col[35] != 6684774";
  if(col[165] != 6684774) errors += "col[165] != 6684774";
  if(col[167] != 6684774) errors += "col[167] != 6684774";
  if(col[169] != 16711680) errors += "col[169] != 16711680";
  if(col[170] != 6684774) errors += "col[170] != 6684774";
  if(col[173] != 14483456) errors += "col[173] != 14483456";
  col=results[132];
  if(col[28] != 16711680) errors += "col[28] != 16711680";
  if(col[29] != 6684774) errors += "col[29] != 6684774";
  if(col[31] != 5570645) errors += "col[31] != 5570645";
  if(col[32] != 6684774) errors += "col[32] != 6684774";
  if(col[33] != 5570645) errors += "col[33] != 5570645";
  if(col[34] != 15597568) errors += "col[34] != 15597568";
  if(col[35] != 5570645) errors += "col[35] != 5570645";
  if(col[56] != 6684774) errors += "col[56] != 6684774";
  if(col[57] != 16711680) errors += "col[57] != 16711680";
  if(col[58] != 13369344) errors += "col[58] != 13369344";
  if(col[64] != 5570645) errors += "col[64] != 5570645";
  if(col[65] != 6684774) errors += "col[65] != 6684774";
  if(col[135] != 6684774) errors += "col[135] != 6684774";
  if(col[136] != 5570645) errors += "col[136] != 5570645";
  if(col[142] != 13369344) errors += "col[142] != 13369344";
  if(col[143] != 16711680) errors += "col[143] != 16711680";
  if(col[144] != 6684774) errors += "col[144] != 6684774";
  if(col[165] != 5570645) errors += "col[165] != 5570645";
  if(col[166] != 15597568) errors += "col[166] != 15597568";
  if(col[167] != 5570645) errors += "col[167] != 5570645";
  if(col[168] != 6684774) errors += "col[168] != 6684774";
  if(col[169] != 5570645) errors += "col[169] != 5570645";
  if(col[171] != 6684774) errors += "col[171] != 6684774";
  if(col[172] != 16711680) errors += "col[172] != 16711680";
  col=results[133];
  if(col[29] != 15597568) errors += "col[29] != 15597568";
  if(col[30] != 5570645) errors += "col[30] != 5570645";
  if(col[33] != 6684774) errors += "col[33] != 6684774";
  if(col[34] != 5570645) errors += "col[34] != 5570645";
  if(col[36] != 6684774) errors += "col[36] != 6684774";
  if(col[37] != 6684774) errors += "col[37] != 6684774";
  if(col[38] != 6684774) errors += "col[38] != 6684774";
  if(col[56] != 5570645) errors += "col[56] != 5570645";
  if(col[57] != 12255232) errors += "col[57] != 12255232";
  if(col[58] != 6684774) errors += "col[58] != 6684774";
  if(col[63] != 6684774) errors += "col[63] != 6684774";
  if(col[66] != 6684774) errors += "col[66] != 6684774";
  if(col[134] != 6684774) errors += "col[134] != 6684774";
  if(col[137] != 6684774) errors += "col[137] != 6684774";
  if(col[142] != 6684774) errors += "col[142] != 6684774";
  if(col[143] != 12255232) errors += "col[143] != 12255232";
  if(col[144] != 5570645) errors += "col[144] != 5570645";
  if(col[162] != 6684774) errors += "col[162] != 6684774";
  if(col[163] != 6684774) errors += "col[163] != 6684774";
  if(col[164] != 6684774) errors += "col[164] != 6684774";
  if(col[166] != 5570645) errors += "col[166] != 5570645";
  if(col[167] != 6684774) errors += "col[167] != 6684774";
  if(col[170] != 5570645) errors += "col[170] != 5570645";
  if(col[171] != 15597568) errors += "col[171] != 15597568";
  col=results[134];
  if(col[36] != 5570645) errors += "col[36] != 5570645";
  if(col[39] != 5570645) errors += "col[39] != 5570645";
  if(col[40] != 6684774) errors += "col[40] != 6684774";
  if(col[63] != 5570645) errors += "col[63] != 5570645";
  if(col[66] != 5570645) errors += "col[66] != 5570645";
  if(col[134] != 5570645) errors += "col[134] != 5570645";
  if(col[137] != 5570645) errors += "col[137] != 5570645";
  if(col[160] != 6684774) errors += "col[160] != 6684774";
  if(col[161] != 5570645) errors += "col[161] != 5570645";
  if(col[164] != 5570645) errors += "col[164] != 5570645";
  col=results[135];
  if(col[35] != 5570645) errors += "col[35] != 5570645";
  if(col[36] != 15597568) errors += "col[36] != 15597568";
  if(col[42] != 6684774) errors += "col[42] != 6684774";
  if(col[47] != 6684774) errors += "col[47] != 6684774";
  if(col[48] != 5570645) errors += "col[48] != 5570645";
  if(col[49] != 6684774) errors += "col[49] != 6684774";
  if(col[63] != 5570645) errors += "col[63] != 5570645";
  if(col[66] != 6684774) errors += "col[66] != 6684774";
  if(col[76] != 6684774) errors += "col[76] != 6684774";
  if(col[77] != 5570645) errors += "col[77] != 5570645";
  if(col[78] != 6684774) errors += "col[78] != 6684774";
  if(col[122] != 6684774) errors += "col[122] != 6684774";
  if(col[123] != 5570645) errors += "col[123] != 5570645";
  if(col[124] != 6684774) errors += "col[124] != 6684774";
  if(col[134] != 6684774) errors += "col[134] != 6684774";
  if(col[137] != 5570645) errors += "col[137] != 5570645";
  if(col[151] != 6684774) errors += "col[151] != 6684774";
  if(col[152] != 5570645) errors += "col[152] != 5570645";
  if(col[153] != 6684774) errors += "col[153] != 6684774";
  if(col[158] != 6684774) errors += "col[158] != 6684774";
  if(col[164] != 15597568) errors += "col[164] != 15597568";
  if(col[165] != 5570645) errors += "col[165] != 5570645";
  col=results[136];
  if(col[36] != 6684774) errors += "col[36] != 6684774";
  if(col[39] != 5570645) errors += "col[39] != 5570645";
  if(col[40] != 6684774) errors += "col[40] != 6684774";
  if(col[41] != 6684774) errors += "col[41] != 6684774";
  if(col[43] != 5570645) errors += "col[43] != 5570645";
  if(col[50] != 6684774) errors += "col[50] != 6684774";
  if(col[65] != 6684774) errors += "col[65] != 6684774";
  if(col[76] != 16711680) errors += "col[76] != 16711680";
  if(col[79] != 6684774) errors += "col[79] != 6684774";
  if(col[121] != 6684774) errors += "col[121] != 6684774";
  if(col[124] != 16711680) errors += "col[124] != 16711680";
  if(col[135] != 6684774) errors += "col[135] != 6684774";
  if(col[150] != 6684774) errors += "col[150] != 6684774";
  if(col[157] != 5570645) errors += "col[157] != 5570645";
  if(col[159] != 6684774) errors += "col[159] != 6684774";
  if(col[160] != 6684774) errors += "col[160] != 6684774";
  if(col[161] != 5570645) errors += "col[161] != 5570645";
  if(col[164] != 6684774) errors += "col[164] != 6684774";
  col=results[137];
  if(col[38] != 6684774) errors += "col[38] != 6684774";
  if(col[41] != 6684774) errors += "col[41] != 6684774";
  if(col[44] != 6684774) errors += "col[44] != 6684774";
  if(col[47] != 5570645) errors += "col[47] != 5570645";
  if(col[51] != 6684774) errors += "col[51] != 6684774";
  if(col[61] != 16711680) errors += "col[61] != 16711680";
  if(col[62] != 14483456) errors += "col[62] != 14483456";
  if(col[63] != 16711680) errors += "col[63] != 16711680";
  if(col[74] != 6684774) errors += "col[74] != 6684774";
  if(col[75] != 15597568) errors += "col[75] != 15597568";
  if(col[79] != 5570645) errors += "col[79] != 5570645";
  if(col[98] != 61166) errors += "col[98] != 61166";
  if(col[99] != 56797) errors += "col[99] != 56797";
  if(col[101] != 56797) errors += "col[101] != 56797";
  if(col[102] != 61166) errors += "col[102] != 61166";
  if(col[121] != 5570645) errors += "col[121] != 5570645";
  if(col[125] != 15597568) errors += "col[125] != 15597568";
  if(col[126] != 6684774) errors += "col[126] != 6684774";
  if(col[137] != 16711680) errors += "col[137] != 16711680";
  if(col[138] != 14483456) errors += "col[138] != 14483456";
  if(col[139] != 16711680) errors += "col[139] != 16711680";
  if(col[149] != 6684774) errors += "col[149] != 6684774";
  if(col[153] != 5570645) errors += "col[153] != 5570645";
  if(col[156] != 6684774) errors += "col[156] != 6684774";
  if(col[159] != 6684774) errors += "col[159] != 6684774";
  if(col[162] != 6684774) errors += "col[162] != 6684774";
  col=results[138];
  if(col[41] != 6684774) errors += "col[41] != 6684774";
  if(col[46] != 6684774) errors += "col[46] != 6684774";
  if(col[47] != 6684774) errors += "col[47] != 6684774";
  if(col[51] != 16711680) errors += "col[51] != 16711680";
  if(col[56] != 6684774) errors += "col[56] != 6684774";
  if(col[61] != 6684774) errors += "col[61] != 6684774";
  if(col[62] != 5570645) errors += "col[62] != 5570645";
  if(col[63] != 6684774) errors += "col[63] != 6684774";
  if(col[74] != 5570645) errors += "col[74] != 5570645";
  if(col[75] != 14483456) errors += "col[75] != 14483456";
  if(col[98] != 52428) errors += "col[98] != 52428";
  if(col[99] != 65535) errors += "col[99] != 65535";
  if(col[101] != 65535) errors += "col[101] != 65535";
  if(col[102] != 52428) errors += "col[102] != 52428";
  if(col[125] != 14483456) errors += "col[125] != 14483456";
  if(col[126] != 5570645) errors += "col[126] != 5570645";
  if(col[137] != 6684774) errors += "col[137] != 6684774";
  if(col[138] != 5570645) errors += "col[138] != 5570645";
  if(col[139] != 6684774) errors += "col[139] != 6684774";
  if(col[144] != 6684774) errors += "col[144] != 6684774";
  if(col[149] != 16711680) errors += "col[149] != 16711680";
  if(col[153] != 6684774) errors += "col[153] != 6684774";
  if(col[154] != 6684774) errors += "col[154] != 6684774";
  if(col[159] != 6684774) errors += "col[159] != 6684774";
  col=results[139];
  if(col[51] != 6684774) errors += "col[51] != 6684774";
  if(col[56] != 16711680) errors += "col[56] != 16711680";
  if(col[80] != 14483456) errors += "col[80] != 14483456";
  if(col[120] != 14483456) errors += "col[120] != 14483456";
  if(col[144] != 16711680) errors += "col[144] != 16711680";
  if(col[149] != 6684774) errors += "col[149] != 6684774";
  col=results[140];
  if(col[41] != 5570645) errors += "col[41] != 5570645";
  if(col[44] != 5570645) errors += "col[44] != 5570645";
  if(col[50] != 6684774) errors += "col[50] != 6684774";
  if(col[55] != 6684774) errors += "col[55] != 6684774";
  if(col[57] != 6684774) errors += "col[57] != 6684774";
  if(col[94] != 56797) errors += "col[94] != 56797";
  if(col[95] != 48059) errors += "col[95] != 48059";
  if(col[105] != 48059) errors += "col[105] != 48059";
  if(col[106] != 56797) errors += "col[106] != 56797";
  if(col[143] != 6684774) errors += "col[143] != 6684774";
  if(col[145] != 6684774) errors += "col[145] != 6684774";
  if(col[150] != 6684774) errors += "col[150] != 6684774";
  if(col[156] != 5570645) errors += "col[156] != 5570645";
  if(col[159] != 5570645) errors += "col[159] != 5570645";
  col=results[141];
  if(col[41] != 16711680) errors += "col[41] != 16711680";
  if(col[42] != 6684774) errors += "col[42] != 6684774";
  if(col[49] != 6684774) errors += "col[49] != 6684774";
  if(col[56] != 6684774) errors += "col[56] != 6684774";
  if(col[77] != 6684774) errors += "col[77] != 6684774";
  if(col[79] != 5570645) errors += "col[79] != 5570645";
  if(col[80] != 6684774) errors += "col[80] != 6684774";
  if(col[81] != 6684774) errors += "col[81] != 6684774";
  if(col[82] != 5570645) errors += "col[82] != 5570645";
  if(col[83] != 6684774) errors += "col[83] != 6684774";
  if(col[94] != 56797) errors += "col[94] != 56797";
  if(col[96] != 61166) errors += "col[96] != 61166";
  if(col[104] != 61166) errors += "col[104] != 61166";
  if(col[106] != 56797) errors += "col[106] != 56797";
  if(col[117] != 6684774) errors += "col[117] != 6684774";
  if(col[118] != 5570645) errors += "col[118] != 5570645";
  if(col[119] != 6684774) errors += "col[119] != 6684774";
  if(col[120] != 6684774) errors += "col[120] != 6684774";
  if(col[121] != 5570645) errors += "col[121] != 5570645";
  if(col[123] != 6684774) errors += "col[123] != 6684774";
  if(col[144] != 6684774) errors += "col[144] != 6684774";
  if(col[151] != 6684774) errors += "col[151] != 6684774";
  if(col[158] != 6684774) errors += "col[158] != 6684774";
  if(col[159] != 16711680) errors += "col[159] != 16711680";
  col=results[142];
  if(col[47] != 6684774) errors += "col[47] != 6684774";
  if(col[55] != 6684774) errors += "col[55] != 6684774";
  if(col[56] != 5570645) errors += "col[56] != 5570645";
  if(col[77] != 6684774) errors += "col[77] != 6684774";
  if(col[78] != 12255232) errors += "col[78] != 12255232";
  if(col[80] != 6684774) errors += "col[80] != 6684774";
  if(col[81] != 16711680) errors += "col[81] != 16711680";
  if(col[83] != 15597568) errors += "col[83] != 15597568";
  if(col[95] != 43690) errors += "col[95] != 43690";
  if(col[105] != 43690) errors += "col[105] != 43690";
  if(col[117] != 15597568) errors += "col[117] != 15597568";
  if(col[119] != 16711680) errors += "col[119] != 16711680";
  if(col[120] != 6684774) errors += "col[120] != 6684774";
  if(col[122] != 12255232) errors += "col[122] != 12255232";
  if(col[123] != 6684774) errors += "col[123] != 6684774";
  if(col[144] != 5570645) errors += "col[144] != 5570645";
  if(col[145] != 6684774) errors += "col[145] != 6684774";
  if(col[153] != 6684774) errors += "col[153] != 6684774";
  col=results[143];
  if(col[55] != 5570645) errors += "col[55] != 5570645";
  if(col[56] != 6684774) errors += "col[56] != 6684774";
  if(col[77] != 6684774) errors += "col[77] != 6684774";
  if(col[78] != 15597568) errors += "col[78] != 15597568";
  if(col[83] != 5570645) errors += "col[83] != 5570645";
  if(col[117] != 5570645) errors += "col[117] != 5570645";
  if(col[122] != 15597568) errors += "col[122] != 15597568";
  if(col[123] != 6684774) errors += "col[123] != 6684774";
  if(col[144] != 6684774) errors += "col[144] != 6684774";
  if(col[145] != 5570645) errors += "col[145] != 5570645";
  col=results[144];
  if(col[54] != 16711680) errors += "col[54] != 16711680";
  if(col[56] != 12255232) errors += "col[56] != 12255232";
  if(col[79] != 5570645) errors += "col[79] != 5570645";
  if(col[80] != 15597568) errors += "col[80] != 15597568";
  if(col[81] != 15597568) errors += "col[81] != 15597568";
  if(col[119] != 15597568) errors += "col[119] != 15597568";
  if(col[120] != 15597568) errors += "col[120] != 15597568";
  if(col[121] != 5570645) errors += "col[121] != 5570645";
  if(col[144] != 12255232) errors += "col[144] != 12255232";
  if(col[146] != 16711680) errors += "col[146] != 16711680";
  col=results[145];
  if(col[54] != 15597568) errors += "col[54] != 15597568";
  if(col[56] != 16711680) errors += "col[56] != 16711680";
  if(col[80] != 6684774) errors += "col[80] != 6684774";
  if(col[84] != 16711680) errors += "col[84] != 16711680";
  if(col[116] != 16711680) errors += "col[116] != 16711680";
  if(col[120] != 6684774) errors += "col[120] != 6684774";
  if(col[144] != 16711680) errors += "col[144] != 16711680";
  if(col[146] != 15597568) errors += "col[146] != 15597568";
  col=results[146];
  if(col[55] != 5570645) errors += "col[55] != 5570645";
  if(col[82] != 6684774) errors += "col[82] != 6684774";
  if(col[83] != 15597568) errors += "col[83] != 15597568";
  if(col[85] != 15597568) errors += "col[85] != 15597568";
  if(col[86] != 6684774) errors += "col[86] != 6684774";
  if(col[114] != 6684774) errors += "col[114] != 6684774";
  if(col[115] != 15597568) errors += "col[115] != 15597568";
  if(col[117] != 15597568) errors += "col[117] != 15597568";
  if(col[118] != 6684774) errors += "col[118] != 6684774";
  if(col[145] != 5570645) errors += "col[145] != 5570645";
  col=results[147];
  if(col[77] != 12303104) errors += "col[77] != 12303104";
  if(col[78] != 11184640) errors += "col[78] != 11184640";
  if(col[82] != 16711680) errors += "col[82] != 16711680";
  if(col[83] != 5570645) errors += "col[83] != 5570645";
  if(col[85] != 13369344) errors += "col[85] != 13369344";
  if(col[86] != 5570645) errors += "col[86] != 5570645";
  if(col[114] != 5570645) errors += "col[114] != 5570645";
  if(col[115] != 13369344) errors += "col[115] != 13369344";
  if(col[117] != 5570645) errors += "col[117] != 5570645";
  if(col[118] != 16711680) errors += "col[118] != 16711680";
  if(col[122] != 11184640) errors += "col[122] != 11184640";
  if(col[123] != 12303104) errors += "col[123] != 12303104";
  col=results[148];
  if(col[41] != 6684774) errors += "col[41] != 6684774";
  if(col[42] != 5570645) errors += "col[42] != 5570645";
  if(col[43] != 6684774) errors += "col[43] != 6684774";
  if(col[77] != 10066176) errors += "col[77] != 10066176";
  if(col[78] != 13421568) errors += "col[78] != 13421568";
  if(col[82] != 6684774) errors += "col[82] != 6684774";
  if(col[83] != 15597568) errors += "col[83] != 15597568";
  if(col[86] != 16711680) errors += "col[86] != 16711680";
  if(col[87] != 6684774) errors += "col[87] != 6684774";
  if(col[113] != 6684774) errors += "col[113] != 6684774";
  if(col[114] != 16711680) errors += "col[114] != 16711680";
  if(col[117] != 15597568) errors += "col[117] != 15597568";
  if(col[118] != 6684774) errors += "col[118] != 6684774";
  if(col[122] != 13421568) errors += "col[122] != 13421568";
  if(col[123] != 10066176) errors += "col[123] != 10066176";
  if(col[157] != 6684774) errors += "col[157] != 6684774";
  if(col[158] != 5570645) errors += "col[158] != 5570645";
  if(col[159] != 6684774) errors += "col[159] != 6684774";
  col=results[149];
  if(col[41] != 15597568) errors += "col[41] != 15597568";
  if(col[43] != 5570645) errors += "col[43] != 5570645";
  if(col[83] != 6684774) errors += "col[83] != 6684774";
  if(col[84] != 16711680) errors += "col[84] != 16711680";
  if(col[86] != 6684774) errors += "col[86] != 6684774";
  if(col[87] != 5570645) errors += "col[87] != 5570645";
  if(col[113] != 5570645) errors += "col[113] != 5570645";
  if(col[114] != 6684774) errors += "col[114] != 6684774";
  if(col[116] != 16711680) errors += "col[116] != 16711680";
  if(col[117] != 6684774) errors += "col[117] != 6684774";
  if(col[157] != 5570645) errors += "col[157] != 5570645";
  if(col[159] != 15597568) errors += "col[159] != 15597568";
  col=results[150];
  if(col[41] != 6684774) errors += "col[41] != 6684774";
  if(col[42] != 5570645) errors += "col[42] != 5570645";
  if(col[43] != 6684774) errors += "col[43] != 6684774";
  if(col[65] != 6684774) errors += "col[65] != 6684774";
  if(col[85] != 6684774) errors += "col[85] != 6684774";
  if(col[115] != 6684774) errors += "col[115] != 6684774";
  if(col[135] != 6684774) errors += "col[135] != 6684774";
  if(col[157] != 6684774) errors += "col[157] != 6684774";
  if(col[158] != 5570645) errors += "col[158] != 5570645";
  if(col[159] != 6684774) errors += "col[159] != 6684774";
  col=results[151];
  if(col[64] != 5570645) errors += "col[64] != 5570645";
  if(col[66] != 5570645) errors += "col[66] != 5570645";
  if(col[134] != 5570645) errors += "col[134] != 5570645";
  if(col[136] != 5570645) errors += "col[136] != 5570645";
  col=results[152];
  if(col[63] != 6684774) errors += "col[63] != 6684774";
  if(col[64] != 16711680) errors += "col[64] != 16711680";
  if(col[66] != 10027008) errors += "col[66] != 10027008";
  if(col[67] != 6684774) errors += "col[67] != 6684774";
  if(col[77] != 13421568) errors += "col[77] != 13421568";
  if(col[78] != 14540032) errors += "col[78] != 14540032";
  if(col[122] != 14540032) errors += "col[122] != 14540032";
  if(col[123] != 13421568) errors += "col[123] != 13421568";
  if(col[133] != 6684774) errors += "col[133] != 6684774";
  if(col[134] != 10027008) errors += "col[134] != 10027008";
  if(col[136] != 16711680) errors += "col[136] != 16711680";
  if(col[137] != 6684774) errors += "col[137] != 6684774";
  col=results[153];
  if(col[63] != 5570645) errors += "col[63] != 5570645";
  if(col[66] != 5570645) errors += "col[66] != 5570645";
  if(col[76] != 15658496) errors += "col[76] != 15658496";
  if(col[79] != 15658496) errors += "col[79] != 15658496";
  if(col[86] != 13369344) errors += "col[86] != 13369344";
  if(col[87] != 14483456) errors += "col[87] != 14483456";
  if(col[113] != 14483456) errors += "col[113] != 14483456";
  if(col[114] != 13369344) errors += "col[114] != 13369344";
  if(col[121] != 15658496) errors += "col[121] != 15658496";
  if(col[124] != 15658496) errors += "col[124] != 15658496";
  if(col[134] != 5570645) errors += "col[134] != 5570645";
  if(col[137] != 5570645) errors += "col[137] != 5570645";
  col=results[154];
  if(col[64] != 16711680) errors += "col[64] != 16711680";
  if(col[65] != 15597568) errors += "col[65] != 15597568";
  if(col[73] != 5570645) errors += "col[73] != 5570645";
  if(col[77] != 14540032) errors += "col[77] != 14540032";
  if(col[78] != 11184640) errors += "col[78] != 11184640";
  if(col[85] != 6684774) errors += "col[85] != 6684774";
  if(col[87] != 5570645) errors += "col[87] != 5570645";
  if(col[113] != 5570645) errors += "col[113] != 5570645";
  if(col[115] != 6684774) errors += "col[115] != 6684774";
  if(col[122] != 11184640) errors += "col[122] != 11184640";
  if(col[123] != 14540032) errors += "col[123] != 14540032";
  if(col[127] != 5570645) errors += "col[127] != 5570645";
  if(col[135] != 15597568) errors += "col[135] != 15597568";
  if(col[136] != 16711680) errors += "col[136] != 16711680";
  col=results[155];
  if(col[73] != 6684774) errors += "col[73] != 6684774";
  if(col[74] != 16711680) errors += "col[74] != 16711680";
  if(col[83] != 5592320) errors += "col[83] != 5592320";
  if(col[85] != 6684774) errors += "col[85] != 6684774";
  if(col[86] != 5570645) errors += "col[86] != 5570645";
  if(col[114] != 5570645) errors += "col[114] != 5570645";
  if(col[115] != 6684774) errors += "col[115] != 6684774";
  if(col[117] != 5592320) errors += "col[117] != 5592320";
  if(col[126] != 16711680) errors += "col[126] != 16711680";
  if(col[127] != 6684774) errors += "col[127] != 6684774";
  col=results[156];
  if(col[73] != 6684774) errors += "col[73] != 6684774";
  if(col[75] != 5570645) errors += "col[75] != 5570645";
  if(col[82] != 6684774) errors += "col[82] != 6684774";
  if(col[83] != 15597568) errors += "col[83] != 15597568";
  if(col[85] != 5570645) errors += "col[85] != 5570645";
  if(col[89] != 6684774) errors += "col[89] != 6684774";
  if(col[91] != 16711680) errors += "col[91] != 16711680";
  if(col[109] != 16711680) errors += "col[109] != 16711680";
  if(col[111] != 6684774) errors += "col[111] != 6684774";
  if(col[115] != 5570645) errors += "col[115] != 5570645";
  if(col[117] != 15597568) errors += "col[117] != 15597568";
  if(col[118] != 6684774) errors += "col[118] != 6684774";
  if(col[125] != 5570645) errors += "col[125] != 5570645";
  if(col[127] != 6684774) errors += "col[127] != 6684774";
  col=results[157];
  if(col[74] != 16711680) errors += "col[74] != 16711680";
  if(col[83] != 5570645) errors += "col[83] != 5570645";
  if(col[84] != 14483456) errors += "col[84] != 14483456";
  if(col[90] != 15597568) errors += "col[90] != 15597568";
  if(col[91] != 5570645) errors += "col[91] != 5570645";
  if(col[109] != 5570645) errors += "col[109] != 5570645";
  if(col[110] != 15597568) errors += "col[110] != 15597568";
  if(col[116] != 14483456) errors += "col[116] != 14483456";
  if(col[117] != 5570645) errors += "col[117] != 5570645";
  if(col[126] != 16711680) errors += "col[126] != 16711680";
  col=results[158];
  if(col[64] != 6684774) errors += "col[64] != 6684774";
  if(col[65] != 13369344) errors += "col[65] != 13369344";
  if(col[66] != 6684774) errors += "col[66] != 6684774";
  if(col[90] != 6684774) errors += "col[90] != 6684774";
  if(col[110] != 6684774) errors += "col[110] != 6684774";
  if(col[134] != 6684774) errors += "col[134] != 6684774";
  if(col[135] != 13369344) errors += "col[135] != 13369344";
  if(col[136] != 6684774) errors += "col[136] != 6684774";
  col=results[159];
  if(col[65] != 5570645) errors += "col[65] != 5570645";
  if(col[135] != 5570645) errors += "col[135] != 5570645";
  col=results[160];
  if(col[69] != 15597568) errors += "col[69] != 15597568";
  if(col[71] != 16711680) errors += "col[71] != 16711680";
  if(col[72] != 5570645) errors += "col[72] != 5570645";
  if(col[73] != 6684774) errors += "col[73] != 6684774";
  if(col[127] != 6684774) errors += "col[127] != 6684774";
  if(col[128] != 5570645) errors += "col[128] != 5570645";
  if(col[129] != 16711680) errors += "col[129] != 16711680";
  if(col[131] != 15597568) errors += "col[131] != 15597568";
  col=results[161];
  if(col[65] != 16711680) errors += "col[65] != 16711680";
  if(col[74] != 5570645) errors += "col[74] != 5570645";
  if(col[75] != 6684774) errors += "col[75] != 6684774";
  if(col[79] != 6684774) errors += "col[79] != 6684774";
  if(col[80] != 16711680) errors += "col[80] != 16711680";
  if(col[81] != 6684774) errors += "col[81] != 6684774";
  if(col[119] != 6684774) errors += "col[119] != 6684774";
  if(col[120] != 16711680) errors += "col[120] != 16711680";
  if(col[121] != 6684774) errors += "col[121] != 6684774";
  if(col[125] != 6684774) errors += "col[125] != 6684774";
  if(col[126] != 5570645) errors += "col[126] != 5570645";
  if(col[135] != 16711680) errors += "col[135] != 16711680";
  col=results[162];
  if(col[64] != 14483456) errors += "col[64] != 14483456";
  if(col[69] != 5570645) errors += "col[69] != 5570645";
  if(col[72] != 16711680) errors += "col[72] != 16711680";
  if(col[73] != 5570645) errors += "col[73] != 5570645";
  if(col[74] != 6684774) errors += "col[74] != 6684774";
  if(col[88] != 6684774) errors += "col[88] != 6684774";
  if(col[89] != 5570645) errors += "col[89] != 5570645";
  if(col[90] != 6684774) errors += "col[90] != 6684774";
  if(col[91] != 6684774) errors += "col[91] != 6684774";
  if(col[92] != 6684774) errors += "col[92] != 6684774";
  if(col[93] != 14483456) errors += "col[93] != 14483456";
  if(col[94] != 16711680) errors += "col[94] != 16711680";
  if(col[106] != 16711680) errors += "col[106] != 16711680";
  if(col[107] != 14483456) errors += "col[107] != 14483456";
  if(col[108] != 6684774) errors += "col[108] != 6684774";
  if(col[109] != 6684774) errors += "col[109] != 6684774";
  if(col[110] != 6684774) errors += "col[110] != 6684774";
  if(col[111] != 5570645) errors += "col[111] != 5570645";
  if(col[112] != 6684774) errors += "col[112] != 6684774";
  if(col[126] != 6684774) errors += "col[126] != 6684774";
  if(col[127] != 5570645) errors += "col[127] != 5570645";
  if(col[128] != 16711680) errors += "col[128] != 16711680";
  if(col[131] != 5570645) errors += "col[131] != 5570645";
  if(col[136] != 14483456) errors += "col[136] != 14483456";
  col=results[163];
  if(col[64] != 13369344) errors += "col[64] != 13369344";
  if(col[67] != 14483456) errors += "col[67] != 14483456";
  if(col[69] != 6684774) errors += "col[69] != 6684774";
  if(col[71] != 5570645) errors += "col[71] != 5570645";
  if(col[88] != 5570645) errors += "col[88] != 5570645";
  if(col[90] != 15597568) errors += "col[90] != 15597568";
  if(col[91] != 5570645) errors += "col[91] != 5570645";
  if(col[92] != 5570645) errors += "col[92] != 5570645";
  if(col[108] != 5570645) errors += "col[108] != 5570645";
  if(col[109] != 5570645) errors += "col[109] != 5570645";
  if(col[110] != 15597568) errors += "col[110] != 15597568";
  if(col[112] != 5570645) errors += "col[112] != 5570645";
  if(col[129] != 5570645) errors += "col[129] != 5570645";
  if(col[131] != 6684774) errors += "col[131] != 6684774";
  if(col[133] != 14483456) errors += "col[133] != 14483456";
  if(col[136] != 13369344) errors += "col[136] != 13369344";
  col=results[164];
  if(col[65] != 16711680) errors += "col[65] != 16711680";
  if(col[68] != 5570645) errors += "col[68] != 5570645";
  if(col[69] != 6684774) errors += "col[69] != 6684774";
  if(col[70] != 5570645) errors += "col[70] != 5570645";
  if(col[71] != 5570645) errors += "col[71] != 5570645";
  if(col[88] != 6684774) errors += "col[88] != 6684774";
  if(col[89] != 5570645) errors += "col[89] != 5570645";
  if(col[90] != 6684774) errors += "col[90] != 6684774";
  if(col[91] != 6684774) errors += "col[91] != 6684774";
  if(col[92] != 6684774) errors += "col[92] != 6684774";
  if(col[108] != 6684774) errors += "col[108] != 6684774";
  if(col[109] != 6684774) errors += "col[109] != 6684774";
  if(col[110] != 6684774) errors += "col[110] != 6684774";
  if(col[111] != 5570645) errors += "col[111] != 5570645";
  if(col[112] != 6684774) errors += "col[112] != 6684774";
  if(col[129] != 5570645) errors += "col[129] != 5570645";
  if(col[130] != 5570645) errors += "col[130] != 5570645";
  if(col[131] != 6684774) errors += "col[131] != 6684774";
  if(col[132] != 5570645) errors += "col[132] != 5570645";
  if(col[135] != 16711680) errors += "col[135] != 16711680";
  col=results[165];
  if(col[65] != 6684774) errors += "col[65] != 6684774";
  if(col[66] != 5570645) errors += "col[66] != 5570645";
  if(col[70] != 13369344) errors += "col[70] != 13369344";
  if(col[130] != 13369344) errors += "col[130] != 13369344";
  if(col[134] != 5570645) errors += "col[134] != 5570645";
  if(col[135] != 6684774) errors += "col[135] != 6684774";
  col=results[168];
  if(col[67] != 6684774) errors += "col[67] != 6684774";
  if(col[69] != 6684774) errors += "col[69] != 6684774";
  if(col[71] != 6684774) errors += "col[71] != 6684774";
  if(col[129] != 6684774) errors += "col[129] != 6684774";
  if(col[131] != 6684774) errors += "col[131] != 6684774";
  if(col[133] != 6684774) errors += "col[133] != 6684774";
  col=results[169];
  if(col[62] != 6684774) errors += "col[62] != 6684774";
  if(col[67] != 6684774) errors += "col[67] != 6684774";
  if(col[68] != 14483456) errors += "col[68] != 14483456";
  if(col[70] != 16711680) errors += "col[70] != 16711680";
  if(col[71] != 15597568) errors += "col[71] != 15597568";
  if(col[129] != 15597568) errors += "col[129] != 15597568";
  if(col[130] != 16711680) errors += "col[130] != 16711680";
  if(col[132] != 14483456) errors += "col[132] != 14483456";
  if(col[133] != 6684774) errors += "col[133] != 6684774";
  if(col[138] != 6684774) errors += "col[138] != 6684774";
  col=results[170];
  if(col[60] != 6684774) errors += "col[60] != 6684774";
  if(col[61] != 16711680) errors += "col[61] != 16711680";
  if(col[69] != 5570645) errors += "col[69] != 5570645";
  if(col[70] != 6684774) errors += "col[70] != 6684774";
  if(col[71] != 6684774) errors += "col[71] != 6684774";
  if(col[72] != 6684774) errors += "col[72] != 6684774";
  if(col[128] != 6684774) errors += "col[128] != 6684774";
  if(col[129] != 6684774) errors += "col[129] != 6684774";
  if(col[130] != 6684774) errors += "col[130] != 6684774";
  if(col[131] != 5570645) errors += "col[131] != 5570645";
  if(col[139] != 16711680) errors += "col[139] != 16711680";
  if(col[140] != 6684774) errors += "col[140] != 6684774";
  col=results[171];
  if(col[61] != 5570645) errors += "col[61] != 5570645";
  if(col[62] != 6684774) errors += "col[62] != 6684774";
  if(col[65] != 6684774) errors += "col[65] != 6684774";
  if(col[66] != 16711680) errors += "col[66] != 16711680";
  if(col[69] != 6684774) errors += "col[69] != 6684774";
  if(col[131] != 6684774) errors += "col[131] != 6684774";
  if(col[134] != 16711680) errors += "col[134] != 16711680";
  if(col[135] != 6684774) errors += "col[135] != 6684774";
  if(col[138] != 6684774) errors += "col[138] != 6684774";
  if(col[139] != 5570645) errors += "col[139] != 5570645";
  col=results[172];
  if(col[62] != 5570645) errors += "col[62] != 5570645";
  if(col[65] != 6684774) errors += "col[65] != 6684774";
  if(col[69] != 16711680) errors += "col[69] != 16711680";
  if(col[72] != 16711680) errors += "col[72] != 16711680";
  if(col[73] != 6684774) errors += "col[73] != 6684774";
  if(col[127] != 6684774) errors += "col[127] != 6684774";
  if(col[128] != 16711680) errors += "col[128] != 16711680";
  if(col[131] != 16711680) errors += "col[131] != 16711680";
  if(col[135] != 6684774) errors += "col[135] != 6684774";
  if(col[138] != 5570645) errors += "col[138] != 5570645";
  col=results[173];
  if(col[63] != 5570645) errors += "col[63] != 5570645";
  if(col[64] != 6684774) errors += "col[64] != 6684774";
  if(col[69] != 12255232) errors += "col[69] != 12255232";
  if(col[70] != 6684774) errors += "col[70] != 6684774";
  if(col[71] != 6684774) errors += "col[71] != 6684774";
  if(col[72] != 5570645) errors += "col[72] != 5570645";
  if(col[84] != 10027008) errors += "col[84] != 10027008";
  if(col[116] != 10027008) errors += "col[116] != 10027008";
  if(col[128] != 5570645) errors += "col[128] != 5570645";
  if(col[129] != 6684774) errors += "col[129] != 6684774";
  if(col[130] != 6684774) errors += "col[130] != 6684774";
  if(col[131] != 12255232) errors += "col[131] != 12255232";
  if(col[136] != 6684774) errors += "col[136] != 6684774";
  if(col[137] != 5570645) errors += "col[137] != 5570645";
  col=results[174];
  if(col[64] != 5570645) errors += "col[64] != 5570645";
  if(col[65] != 16711680) errors += "col[65] != 16711680";
  if(col[66] != 16711680) errors += "col[66] != 16711680";
  if(col[68] != 5570645) errors += "col[68] != 5570645";
  if(col[71] != 16711680) errors += "col[71] != 16711680";
  if(col[83] != 6684672) errors += "col[83] != 6684672";
  if(col[85] != 8912896) errors += "col[85] != 8912896";
  if(col[115] != 8912896) errors += "col[115] != 8912896";
  if(col[117] != 6684672) errors += "col[117] != 6684672";
  if(col[129] != 16711680) errors += "col[129] != 16711680";
  if(col[132] != 5570645) errors += "col[132] != 5570645";
  if(col[134] != 16711680) errors += "col[134] != 16711680";
  if(col[135] != 16711680) errors += "col[135] != 16711680";
  if(col[136] != 5570645) errors += "col[136] != 5570645";
  col=results[175];
  if(col[65] != 6684774) errors += "col[65] != 6684774";
  if(col[68] != 16711680) errors += "col[68] != 16711680";
  if(col[69] != 15597568) errors += "col[69] != 15597568";
  if(col[70] != 6684774) errors += "col[70] != 6684774";
  if(col[71] != 12255232) errors += "col[71] != 12255232";
  if(col[72] != 5570645) errors += "col[72] != 5570645";
  if(col[83] != 8912896) errors += "col[83] != 8912896";
  if(col[85] != 7798784) errors += "col[85] != 7798784";
  if(col[115] != 7798784) errors += "col[115] != 7798784";
  if(col[117] != 8912896) errors += "col[117] != 8912896";
  if(col[128] != 5570645) errors += "col[128] != 5570645";
  if(col[129] != 12255232) errors += "col[129] != 12255232";
  if(col[130] != 6684774) errors += "col[130] != 6684774";
  if(col[131] != 15597568) errors += "col[131] != 15597568";
  if(col[132] != 16711680) errors += "col[132] != 16711680";
  if(col[135] != 6684774) errors += "col[135] != 6684774";
  col=results[176];
  if(col[68] != 5570645) errors += "col[68] != 5570645";
  if(col[70] != 6684774) errors += "col[70] != 6684774";
  if(col[72] != 15597568) errors += "col[72] != 15597568";
  if(col[73] != 6684774) errors += "col[73] != 6684774";
  if(col[84] != 10027008) errors += "col[84] != 10027008";
  if(col[116] != 10027008) errors += "col[116] != 10027008";
  if(col[127] != 6684774) errors += "col[127] != 6684774";
  if(col[128] != 15597568) errors += "col[128] != 15597568";
  if(col[130] != 6684774) errors += "col[130] != 6684774";
  if(col[132] != 5570645) errors += "col[132] != 5570645";
  col=results[177];
  if(col[69] != 5570645) errors += "col[69] != 5570645";
  if(col[72] != 16711680) errors += "col[72] != 16711680";
  if(col[73] != 6684774) errors += "col[73] != 6684774";
  if(col[75] != 15597568) errors += "col[75] != 15597568";
  if(col[76] != 13369344) errors += "col[76] != 13369344";
  if(col[124] != 13369344) errors += "col[124] != 13369344";
  if(col[125] != 15597568) errors += "col[125] != 15597568";
  if(col[127] != 6684774) errors += "col[127] != 6684774";
  if(col[128] != 16711680) errors += "col[128] != 16711680";
  if(col[131] != 5570645) errors += "col[131] != 5570645";
  col=results[178];
  if(col[71] != 6684774) errors += "col[71] != 6684774";
  if(col[75] != 13369344) errors += "col[75] != 13369344";
  if(col[77] != 13369344) errors += "col[77] != 13369344";
  if(col[90] != 5570645) errors += "col[90] != 5570645";
  if(col[91] != 16711680) errors += "col[91] != 16711680";
  if(col[109] != 16711680) errors += "col[109] != 16711680";
  if(col[110] != 5570645) errors += "col[110] != 5570645";
  if(col[123] != 13369344) errors += "col[123] != 13369344";
  if(col[125] != 13369344) errors += "col[125] != 13369344";
  if(col[129] != 6684774) errors += "col[129] != 6684774";
  col=results[179];
  if(col[76] != 16711680) errors += "col[76] != 16711680";
  if(col[77] != 5570645) errors += "col[77] != 5570645";
  if(col[89] != 6684774) errors += "col[89] != 6684774";
  if(col[92] != 6684774) errors += "col[92] != 6684774";
  if(col[108] != 6684774) errors += "col[108] != 6684774";
  if(col[111] != 6684774) errors += "col[111] != 6684774";
  if(col[123] != 5570645) errors += "col[123] != 5570645";
  if(col[124] != 16711680) errors += "col[124] != 16711680";
  col=results[180];
  if(col[90] != 5570645) errors += "col[90] != 5570645";
  if(col[91] != 5570645) errors += "col[91] != 5570645";
  if(col[109] != 5570645) errors += "col[109] != 5570645";
  if(col[110] != 5570645) errors += "col[110] != 5570645";
  col=results[181];
  if(col[90] != 6684774) errors += "col[90] != 6684774";
  if(col[91] != 6684774) errors += "col[91] != 6684774";
  if(col[109] != 6684774) errors += "col[109] != 6684774";
  if(col[110] != 6684774) errors += "col[110] != 6684774";
  col=results[182];
  if(col[86] != 5570645) errors += "col[86] != 5570645";
  if(col[87] != 14483456) errors += "col[87] != 14483456";
  if(col[89] != 6684774) errors += "col[89] != 6684774";
  if(col[111] != 6684774) errors += "col[111] != 6684774";
  if(col[113] != 14483456) errors += "col[113] != 14483456";
  if(col[114] != 5570645) errors += "col[114] != 5570645";
  col=results[183];
  if(col[86] != 6684774) errors += "col[86] != 6684774";
  if(col[89] != 16711680) errors += "col[89] != 16711680";
  if(col[111] != 16711680) errors += "col[111] != 16711680";
  if(col[114] != 6684774) errors += "col[114] != 6684774";
  col=results[184];
  if(col[87] != 6684774) errors += "col[87] != 6684774";
  if(col[88] != 5570645) errors += "col[88] != 5570645";
  if(col[89] != 6684774) errors += "col[89] != 6684774";
  if(col[111] != 6684774) errors += "col[111] != 6684774";
  if(col[112] != 5570645) errors += "col[112] != 5570645";
  if(col[113] != 6684774) errors += "col[113] != 6684774";
  col=results[186];
  if(col[97] != 7798784) errors += "col[97] != 7798784";
  if(col[98] != 16776960) errors += "col[98] != 16776960";
  if(col[102] != 16776960) errors += "col[102] != 16776960";
  if(col[103] != 7798784) errors += "col[103] != 7798784";
  col=results[187];
  if(col[97] != 7798784) errors += "col[97] != 7798784";
  if(col[98] != 15658496) errors += "col[98] != 15658496";
  if(col[102] != 15658496) errors += "col[102] != 15658496";
  if(col[103] != 7798784) errors += "col[103] != 7798784";
  col=results[188];
  if(col[82] != 6684774) errors += "col[82] != 6684774";
  if(col[83] != 16711680) errors += "col[83] != 16711680";
  if(col[84] != 6684774) errors += "col[84] != 6684774";
  if(col[116] != 6684774) errors += "col[116] != 6684774";
  if(col[117] != 16711680) errors += "col[117] != 16711680";
  if(col[118] != 6684774) errors += "col[118] != 6684774";
  col=results[189];
  if(col[81] != 6684774) errors += "col[81] != 6684774";
  if(col[85] != 6684774) errors += "col[85] != 6684774";
  if(col[115] != 6684774) errors += "col[115] != 6684774";
  if(col[119] != 6684774) errors += "col[119] != 6684774";
  col=results[190];
  if(col[81] != 16711680) errors += "col[81] != 16711680";
  if(col[85] != 16711680) errors += "col[85] != 16711680";
  if(col[115] != 16711680) errors += "col[115] != 16711680";
  if(col[119] != 16711680) errors += "col[119] != 16711680";
  col=results[191];
  if(col[81] != 6684774) errors += "col[81] != 6684774";
  if(col[85] != 6684774) errors += "col[85] != 6684774";
  if(col[115] != 6684774) errors += "col[115] != 6684774";
  if(col[119] != 6684774) errors += "col[119] != 6684774";
  col=results[192];
  if(col[82] != 6684774) errors += "col[82] != 6684774";
  if(col[83] != 16711680) errors += "col[83] != 16711680";
  if(col[84] != 6684774) errors += "col[84] != 6684774";
  if(col[116] != 6684774) errors += "col[116] != 6684774";
  if(col[117] != 16711680) errors += "col[117] != 16711680";
  if(col[118] != 6684774) errors += "col[118] != 6684774";
  col=results[197];
  if(col[87] != 7798784) errors += "col[87] != 7798784";
  if(col[88] != 7798784) errors += "col[88] != 7798784";
  if(col[112] != 7798784) errors += "col[112] != 7798784";
  if(col[113] != 7798784) errors += "col[113] != 7798784";
  col=results[198];
  if(col[87] != 5570560) errors += "col[87] != 5570560";
  if(col[88] != 6684672) errors += "col[88] != 6684672";
  if(col[112] != 6684672) errors += "col[112] != 6684672";
  if(col[113] != 5570560) errors += "col[113] != 5570560";
  return errors;
}

