function p6(n) {
    for (let i = n; i > 0; i--) {
        let pattern = '';
        //print spaces to left
        for (let j = n - i; j > 0; j--) {
            pattern += ' ';
        }

        //print asterix 1,3,5 using 2 * i - 1
        for (let k = 2 * i - 1; k > 0; k--) {
            pattern += '*';
        }

        // print spaces to right
        for (let j = n - i; j > 0; j--) {
            pattern += ' ';
        }
        console.log(pattern);
    }
}

p6(6);