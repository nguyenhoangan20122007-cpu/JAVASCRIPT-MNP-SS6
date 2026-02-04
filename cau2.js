let Moneynumber = [100, 200, 300, 400];
let sum = 0;

for (let i = 0; i < Moneynumber.length; i = i + 2) {
    sum += Moneynumber[i];
        console.log(sum);

}
console.log(`Sử dụng vòng lặp for...of để duyệt qua mảng và in ra trực tiếp giá trị của từng phần tử.`);

for (const i of Moneynumber) {
    console.log(i);

}
console.log(`Sử dụng vòng lặp for...in để duyệt qua mảng và in ra vị trí (index) của từng phần tử.`);

for (let i in Moneynumber) {
    console.log(i);
}
