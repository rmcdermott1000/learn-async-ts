const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function LogNegatives(arr: number[]): Promise<number[]> {
    return new Promise((resolve, reject) => {
        let negs = []
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                console.log(`Negatives in array: ${arr[i]}`);
                negs.push(arr[i]);
            }
        }
        resolve(negs);
        
    });
}

const prom11 = LogNegatives(array2D_3[0]);
const prom21 = LogNegatives(array2D_3[1]);
const prom31 = LogNegatives(array2D_3[2]);

Promise.all([prom11, prom21, prom31])
    .then((negs: number[][]) => {
        console.log(`Negatives in 2D array rows: ${negs}`);
    })
    .catch((err) => {
        console.log(`Error: ${err}`);
    });