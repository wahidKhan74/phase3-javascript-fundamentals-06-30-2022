let userMap = new Map();

// set data values
userMap.set('id', 10001); // key is string value is number
userMap.set(10001, 'John Smith');  // key is number value is string
userMap.set(true, 'Married'); // key is boolean value is string
userMap.set(null, 'empty');  // key is null value is string
userMap.set({id: 10001},  'John Smith'); // key is an object & value is string
userMap.set([10,20],'data'); // key is an array & value is string

console.log(userMap);


// get data values from map
console.log(userMap.get(10001));
console.log(userMap.get(true));
console.log(userMap.get(null));

// get values from map
console.log(userMap.values());

// get keys from map
console.log(userMap.keys());

// iterate over map
for(let [key,value] of userMap.entries()) {
    console.log("Key : ", key , " Value : ", value);
}


console.log("----------------");
userMap.forEach((value,key) =>{
    console.log("Key : ", key , " Value : ",value);
})