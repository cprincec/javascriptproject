//url for student database
const url = "https://cprincec.github.io/javascriptproject/javascriptproject/students.json";

// student database object variable
var students;
var student = {};


//generate student object
async function getstudent(url) {
    let response = await fetch(url);
    students = await response.json();
};

// Create new student object in student database
// using information entered in registration form.
function createStudent() {
    let lastName = document.querySelector("#lname").value;
    let firstName = document.querySelector("#fname").value;
    let middleName = document.querySelector("#mname").value;
    let dateOfBirth = document.querySelector("#dob").value;
    let gender = document.querySelector("#gender").value;
    let address = document.querySelector("#raddress").value;
    let nationality = document.querySelector("#nationality").value;
    let stateOfOrigin = document.querySelector("#sorigin").value;
    let lga = document.querySelector("#lga").value;
    let sClass = document.querySelector("#class").value;

    student.firstName = firstName;
    student.middleName = middleName;
    student.lastName = lastName;
    student.dateOfBirth = dateOfBirth
    student.gender = gender;
    student.Address = address;
    student.nationality = nationality;
    student.state = stateOfOrigin;
    student.lga = lga;
    student.class = sClass;
    student.studentNumber = Math.random();
    
};




// function createProfile()    {
//     let genderHtml = document.querySelector("#profileGender")
//     let DOBHtml = document.querySelector("#profileDob")
//     let addressHtml = document.querySelector("#profileAddress")
//     let nationalityHtml = document.querySelector("#profileNationality")
//     let stateHtml = document.querySelector("#profileState")
//     let lgaHtml = document.querySelector("#profileLga")
//     let classHtml = document.querySelector("#profileClass")

    

// }

createStudent()
getstudent(url);
console.log(students)



