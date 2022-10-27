function solution(start, finish) {
    return (finish - start) % 3 === 0 ? (finish - start) / 3 : Math.round((finish - start) / 3) + 1
}