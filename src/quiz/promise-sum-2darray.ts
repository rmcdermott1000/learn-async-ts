const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sum2DArrayRow(arr: number[]): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log('Sum called ...');
        setTimeout(() => {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                console.log(`Adding ${arr[i]} to sum`);
                sum += arr[i];
            }
            resolve(sum);
        }, 0);
        console.log('returning from sum');
    });
}

const prom1 = sum2DArrayRow(array2D_1[0]);
const prom2 = sum2DArrayRow(array2D_1[1]);
const prom3 = sum2DArrayRow(array2D_1[2]);

Promise.all([prom1, prom2, prom3])
    .then((sums: number[]) => {
        let sum = 0;
        for (let i = 0; i < sums.length; i++) {
            sum += sums[i];
            console.log(`Adding SUM: ${sums[i]} to sum`);
        }
        console.log(`Sum: ${sum}`);
    })
    .catch((err) => {
        console.log(`Error: ${err}`);
    });
