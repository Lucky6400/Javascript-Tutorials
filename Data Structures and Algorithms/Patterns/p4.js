function p4(n) {
    for (let i = 0; i < n; i++) {
        let line = "";
        for (let j = 0; j <= i; j++) {
            line += i + 1;
        }
        console.log(line);
        line += "\n";
    }
}

p4(6);