"""
this is a program to check if the given sudoko solution is valid 
"""

print("hello")

valid_grid = [
    [2, 7, 5, 1, 9, 8, 3, 6, 4],
    [1, 4, 3, 5, 7, 6, 9, 2, 8],
    [8, 9, 6, 2, 4, 3, 1, 7, 5],
    [3, 2, 8, 4, 6, 1, 7, 5, 9],
    [4, 5, 7, 9, 8, 2, 6, 1, 3],
    [6, 1, 9, 7, 3, 5, 4, 8, 2],
    [7, 8, 1, 3, 2, 4, 5, 9, 6],
    [5, 3, 2, 6, 1, 9, 8, 4, 7],
    [9, 6, 4, 8, 5, 7, 2, 3, 1]
]

some_grid = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
]

def check_sudoku(sudoku_grid):
    if check_rows(sudoku_grid) == True:
        print("rows are okay")
        if check_cols(sudoku_grid) == True:
            print("cols are okay")
            if check_boxes(sudoku_grid) == True:
                print("Boxes are okay")
                return True

def check_rows(grid):
    print("Checking rows")
    for row in grid:
        if is_valid_rows(row) == False:
            return False
        return True

def is_valid_rows(row):
    required_numbers = [1,2,3,4,5,6,7,8,9]
    for number in required_numbers:
        if number not in row:
            return False
        return True

def check_cols(grid):
    print("Checking cols")
    columns = []
    for index in range(9):
        new_column = []
        for row in grid:
            new_column.append(row[index])
        columns.append(new_column)
    # print(columns)
    return check_rows(columns)

def check_boxes(grid):
    print("Checking Boxes")
    allBox = []
    for i in range(0,3):
        for j in range(0,3):
            d = {}
            box = []
            val2 = 0
            for ii in range(0,3):
                for jj in range(0,3):
                    row = (3*i)+ii
                    col = (3*j)+jj
                    val = grid[row][col]
                    val2 = val
                    # print("=======")
                    # print(val)
                    # if val  != 0 and val in d:
                    #     return False
                    # d[val] = 1
                # for v in range(9):
                    box.append(val2)
            # print(type(box))
            allBox.append(box)
    return check_rows(allBox)

# check_rows(valid_grid)
print(check_sudoku(valid_grid))
# print(check_sudoku(some_grid))
