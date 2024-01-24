export function rotLeft(a: Array<number>, d: number): Array<number> {
    if(a.length === 0) {
        return [];
    }

    if(a.length == d) {
        return a.reverse();
    }

    const firstElements = a.slice(0, d)
    a.splice(0, d);
    a = a.concat(firstElements);

    return a;
}