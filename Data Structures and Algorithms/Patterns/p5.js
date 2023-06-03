function p5(n) {
    for (let i = n; i > 0; i--) {
        let line = "";
        for (let j = 0; j < i; j++) {
            line += j + 1;
        }
        console.log(line);
        line += "\n";
    }
}

p5(6);