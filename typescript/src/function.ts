function calcArea(base: number, height: number): number {
    return base * height
}

const calcArea2 = (base: number, height: number): number => base * height

function somar(...number: number[]): void {
    console.log(number)
}

function tesk(): string | number {
    if (10 > 5) {
        return `Ten is more 5`
    } else {
        return 5
    }
}

const newTesk = tesk()