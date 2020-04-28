// 994. Rotting Oranges - leetcode.
// Both time and space complexity is O(n)

// In a given grid, each cell can have one of three values:

// the value 0 representing an empty cell;
// the value 1 representing a fresh orange;
// the value 2 representing a rotten orange.
// Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

// Example 1:

// Input: [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

// Example 3:

// Input: [[0,2]]
// Output: 0
// Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.

// Note:

// 1 <= grid.length <= 10
// 1 <= grid[0].length <= 10
// grid[i][j] is only 0, 1, or 2.

const grid = [
                [2,1,1],
                [1,1,0],
                [0,1,1]
            ];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const IMPOSSIBLE_TO_ROTTEN = -1;
    const EMPTY = 0;
    const FRESH = 1;
    const ROTTEN = 2;

    let freshOranges = 0;
    let rottenQueue = [];

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {

            if (grid[row][col] === FRESH) freshOranges++;

            if (grid[row][col] === ROTTEN) rottenQueue.push([row, col]);
        }
    }

    if (freshOranges === 0) return 0;

    let timeElapsed = 0;
    const rottingDirections = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    while(rottenQueue.length > 0) {

        timeElapsed++;
        const rottenOrangesCount = rottenQueue.length;

        for(let rottenOrangeIndex = 0; rottenOrangeIndex < rottenOrangesCount; ++rottenOrangeIndex) {

            const rottenPosition = rottenQueue.shift();

            rottingDirections.forEach(rottingDirection => {
                const possibleRottingX = rottenPosition[0] + rottingDirection[0];
                const possibleRottingY = rottenPosition[1] + rottingDirection[1];

                if (    possibleRottingX < 0 ||
                        possibleRottingX >= grid.length ||
                        possibleRottingY < 0 ||
                        possibleRottingY >= grid[0].length ||
                        grid[possibleRottingX][possibleRottingY] === ROTTEN ||
                        grid[possibleRottingX][possibleRottingY] === EMPTY
                ) return;

                grid[possibleRottingX][possibleRottingY] = ROTTEN;
                freshOranges--;
                rottenQueue.push([possibleRottingX, possibleRottingY]);
            });
        }
    }


    return freshOranges === 0 ? timeElapsed - 1 : IMPOSSIBLE_TO_ROTTEN;
};

console.log(orangesRotting(grid));