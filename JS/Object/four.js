let emp = { id: 101, name: 'Rahul', salary: 45000, email: "rahul@pm.com" }
/* 
console.log(emp.id)
console.log(emp.name)
console.log(emp.salary) */

for (property in emp) {
    //console.log(emp.property)
    console.log(emp[property])
}