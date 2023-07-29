class Solution {
    // Helper function to find all valid paths from (i, j) to destination (n-1, n-1)
    static solve(i, j, a, n, ans, move, vis) {
        // If the current position is the destination, add the path to 'ans' and return
        if (i === n - 1 && j === n - 1) {
            ans.push(move);
            return;
        }

        // Check and explore possible movements in all four directions

        // Downward movement
        if (i + 1 < n && vis[i + 1][j] === 0 && a[i + 1][j] === 1) {
            vis[i][j] = 1; // Mark the current cell as visited
            this.solve(i + 1, j, a, n, ans, move + 'D', vis); // Recursive call for the next cell
            vis[i][j] = 0; // Unmark the current cell after returning from the recursive call
        }

        // Left movement
        if (j - 1 >= 0 && vis[i][j - 1] === 0 && a[i][j - 1] === 1) {
            vis[i][j] = 1;
            this.solve(i, j - 1, a, n, ans, move + 'L', vis);
            vis[i][j] = 0;
        }

        // Right movement
        if (j + 1 < n && vis[i][j + 1] === 0 && a[i][j + 1] === 1) {
            vis[i][j] = 1;
            this.solve(i, j + 1, a, n, ans, move + 'R', vis);
            vis[i][j] = 0;
        }

        // Upward movement
        if (i - 1 >= 0 && vis[i - 1][j] === 0 && a[i - 1][j] === 1) {
            vis[i][j] = 1;
            this.solve(i - 1, j, a, n, ans, move + 'U', vis);
            vis[i][j] = 0;
        }
    }

    // Function to find all possible paths in the given maze
    static findPath(maze, n) {
        let vis = Array.from({ length: n }, () => Array(n).fill(0)); // Initialize the visitation matrix (visited cells)
        let ans = []; // Array to store all valid paths

        // Check if the starting position is open (1), if so, start the backtracking process
        if (maze[0][0] === 1) {
            this.solve(0, 0, maze, n, ans, '', vis); // Start the recursive search from the top-left corner
        }

        return ans; // Return the array of valid paths
    }
}

// Example usage
const log = Solution.findPath([[1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1]], 4);
console.log(log);