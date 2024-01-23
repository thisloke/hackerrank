
export function countInstanceOfCharInAString(char: string, s: string) {
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === char) {
            count++;
        }
    }
    return count;
}
export function countA(s: string, n: number): number {
    let count = 0;
    if(n <= s.length) {
        count = countInstanceOfCharInAString('a', s.slice(0, n));
    } else {
        const quotient = Math.floor(n/s.length)
        const reminder = n % s.length;
        count = (countInstanceOfCharInAString('a', s) * quotient)
            + countInstanceOfCharInAString('a', s.slice(0, reminder));
    }
    return count;
}