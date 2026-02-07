// Count the number of properties.
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let count = 0;
for (let i in student) {
    count++;
}
console.log(count);