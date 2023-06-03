function p1(n) {
    for (let i = 0; i < n; i++) {
        let line = "";
        for (let j = 0; j < n; j++) {
            line += "*";
        }
        console.log(line);
        line += "\n";
    }
}

p1(6)

