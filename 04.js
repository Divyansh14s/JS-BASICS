const stud = {
    gender: "male",
    "full name": "Romesh Sharma",
    email: "romesh@gmail.com",
    age: 18,
    location: "Ghaziabad",
    loginDays: ["Sat","Sun","Tues"],
    islogin: true,
};

console.log(stud);
console.log(typeof stud);

stud.name="Romesh Sharma";
console.log(stud);
console.table(stud);
console.log(stud.age);
console.log(stud["full name"]);
console.log(stud["email"]);

if(stud.islogin)
{
   console.log(stud.loginDays);
}

//In anything except false , null is true in js

if(stud.email) {
    console.log(stud.email)
}
else{
    console.log("not found")
} 


