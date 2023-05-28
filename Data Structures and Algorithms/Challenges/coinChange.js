/** This function accepts two parameters: an array of denominations and a value and returns the number of ways you can obtain the value from the given collection of denominations. */
function coinChange(arr, val) {
    // add whatever parameters you deem necessary - good luck!
    let ways = new Array(val + 1).fill(0);
    ways[0] = 1;

    for (let i = 0; i < arr.length; i++) {
        let coin = arr[i];
        for (let j = coin; j <= val; j++) {
            ways[j] += ways[j - coin];
        }
    }

    return ways[val]
}