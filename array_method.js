// concat ***********************************
var array_1 = [1, 2, 3, 4, 6];
var array_2 = [8, 9, 0, 2];

console.log(array_1.concat(array_2));

//copywithin ******************************

console.log(array_1.copyWithin(4, 1));

// (firstnameber is a index , secondnumber is demo value for copy)

console.log(array_2.entries);
console.log(array_1.every(x => x > 0))
console.log(array_1.fill(2));
var age = [12, 29, 57, 95]

var temp = age.filter(x => x > 18);
console.log(temp)


console.log(temp.find(x => x >24));

var temp = age.findIndex(x => x > 25)
console.log(temp)

var a = [1 , 2 ,[3, 4]];
console.log(a.flat())

var b = [1, 2 [3, 4 [5, 6, [7, 8 [9, 10]]]]];
console.log(b.flat(Infinity));

var a = [1, 2, 3];

console.log(a.flatMap(x => [x * 2]));
a.forEach(x => console.log(x));

console.log(a.includes(1))

console.log(a.includes(7));

console.log(a.indexOf(1));

console.log(a.indexOf(7));

var a = [1, 2, 3];
console.log(a.join());
console.log(a.join('-'));

var b = a.keys();
for (var x of b)
    console.log(x);

console.log(a.lastIndexOf(3));

var b = a.map(x => x *2)
console.log(b);

console.log(b.pop());
b.push(8);
console.log(b);
console.log(a)
console.log(a.reduce((x,y) => x + y ));
console.log(b);
console.log(b.reduceRight((x,y) => x + y));
console.log(b.reverse());
console.log(b.shift());
console.log(b.slice(0, 1));

var b = [1, 11, 3, 9, 5];
console.log(b.some(x => x % 2 === 0));

var a = ['jan', 'march', 'april', 'june'];

a.splice(1, 0 , 'feb');
console.log(a);

console.log(a.toString());
a.unshift('dec');
console.log(a);