const set1 = new Set([1,2,3]);

const set2 = new Set ();
set2.add(1);
set2.add(2);
set2.add(3);

const newArr = [1,2,3];
const set3 = new Set(newArr);

let hasElem3, hasElem4;
hasElem3 = set1.has(3);
hasElem4 = set1.has(4);
console.log(hasElem3, hasElem4);
console.log(set1.has(1));
set1.add(4);
set1.add(5);
for (let elem of set1){
    console.log(elem);
}

let sum=0;
for (let elem of set1){
    sum +=elem;
}
console.log(sum);

set1.delete(2);

set1.clear();
/* Map*/

const arr1 = ['user1','user2','user3','user4'];
const arr2 = [20,18,20,36];
//set
function mapFromArrays(array1, array2){
const myMap = new Map();
let counter =0;
for (let i of array1){
    myMap.set(counter,i)
counter++;
}
for (let i of array2) {
    myMap.set(counter,i)
    counter++;
}
}
let map1 = new Map();
map1.set(arr1, arr2);

function mapFromArrays(array1, array2){
    const map1 = new Map();
    let counter = 0;
    for (let i of array1){
        map1.set(counter,1);
        counter++;
    }
    for (let i of array2) {
        map1.set(counter,i);
        counter++;
    }
    return (map);
}
