function p3(n) {
    for (let i = 0; i < n; i++) {
        let line = "";
        for (let j = 0; j <= i; j++) {
            line += j + 1;
        }
        console.log(line);
        line += "\n";
    }
}

p3(6);