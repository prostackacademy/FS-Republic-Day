let emp = { id: 101, name: "Rahul" }
let user = {}

console.log(Object.keys(emp).length > 0)
console.log(Object.keys(user).length > 0)
if (Object.keys(user).length > 0) {
    console.log("Give Object is Not Empty")
}
else {
    console.log("Give Object is Empty")
}