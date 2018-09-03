let boxes = [];
let resBox;
let rows = [];
let resultRows;
let columns = [];
let resCol;
let nine = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let result;
let sudokuSolutionArray = [
                '2', '7', '5', '1', '9', '8', '3', '6', '4',
                '1', '4', '3', '5', '7', '6', '9', '2', '8',
                '8', '9', '6', '2', '4', '3', '1', '7', '5', 
                '3', '2', '8', '4', '6', '1', '7', '5', '9', 
                '4', '5', '7', '9', '8', '2', '6', '1', '3', 
                '6', '1', '9', '7', '3', '5', '4', '8', '2', 
                '7', '8', '1', '3', '2', '4', '5', '9', '6', 
                '5', '3', '2', '6', '1', '9', '8', '4', '7',
                '9', '6', '4', '8', '5', '7', '2', '3', '1'
                        ];

checkCol = (sudokuVal) => {
    for (let a = 0; a < 9; a++) {
        for (let i = a; i < 81; i = i + 9) {
            columns.push((sudokuVal[i]));
        }
        for (let j = 0; j < 9; j++) {
            if (nine.indexOf(columns[j]) !== -1) {
                nine.splice(nine.indexOf(columns[j]), 1);
            }
        }
        if (nine.length !== 0) {
            resCol = 'fail';
            return resCol;
        }
        nine = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        columns = [];
    }
}

checkRow = (sudokuVal) => {
    for (let i = 0; i < 81; i = i + 9) {
        for (let a = i; a < i + 9; a++) {
            rows.push((sudokuVal[a]));
        }
        for (let j = 0; j < 9; j++) {
            if (nine.indexOf(rows[j]) !== -1) {
                nine.splice(nine.indexOf(rows[j]), 1);
            }
        }
        if (nine.length !== 0) {
            resultRows = 'fail';
            return resultRows;
        }
        nine = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        rows = [];
    }
}

checkBox =(sudokuVal) => {
    for (let a = 0; a < 81; a = a + 27) {
        for (let i = a; i < a + 9; i = i + 3) {
            boxes.push(sudokuVal[i]);
            boxes.push(sudokuVal[i + 1]);
            boxes.push(sudokuVal[i + 2]);
            boxes.push(sudokuVal[i + 9]);
            boxes.push(sudokuVal[i + 10]);
            boxes.push(sudokuVal[i + 11]);
            boxes.push(sudokuVal[i + 18]);
            boxes.push(sudokuVal[i + 19]);
            boxes.push(sudokuVal[i + 20]);
            for (let j = 0; j < 9; j++) {
                if (nine.indexOf(boxes[j]) !== -1) {
                    nine.splice(nine.indexOf(boxes[j]), 1);
                }
            }
            if (nine.length !== 0) {
                resBox = 'fail';
                return resBox;
            }
            nine = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
            boxes = [];
        }
    }
}

checkSudoku = (sudokuVal) =>{
    checkCol(sudokuVal);
    checkRow(sudokuVal);
    checkBox(sudokuVal);
    if (resBox === 'fail') {
        result = 'fail';
        return result;
    } else if (resultRows === 'fail') {
        result = 'fail';
        return result;
    } else if (resCol === 'fail') {
        result = 'fail';
        return result;
    } else {
        result = 'success';
        return result;
    }
}

if (sudokuSolutionArray.length < 81) {
    console.log("insufficient array size... make sure your solutions has 81 elements")
}
else if (sudokuSolutionArray.length > 81)(
    console.log("array size is more than 81... make sure your solutions has 81 elements")
)
else {
    console.log(sudokuSolutionArray)
    let res = checkSudoku(sudokuSolutionArray);
    console.log(res)
}