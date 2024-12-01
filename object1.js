const student = {
    fullName : "Ankit Raj",
    age : 22,
    cgpa : 82.8,
    isPass : true
};
//if we have to update the student object age value //same syntax for name or other

student["age"] = student["age"] + 1;

console.log(student["age"]);