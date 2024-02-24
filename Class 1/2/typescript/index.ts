function evenArray(arr: number[]): number[] {
    let x: number = 0
    let evnArr: number[] = [];

    for (x; x < arr.length; x++) {
        if (arr[x] % 2 == 0) {
            evnArr.push(arr[x])
        }
    }

    return evnArr;
}

console.log(evenArray([12, 45, 2,44, 33,44,55,334,445,432]))