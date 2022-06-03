const aStudent = {};

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

    aStudent.studentName = firstName + " " + middleName + " " + lastName
    aStudent.studentDOB = dateOfBirth
    aStudent.studentGender = gender
    aStudent.studentAddress = address
    aStudent.studentNationality = nationality
    aStudent.studentState = stateOfOrigin
    aStudent.studentLga = lga
    aStudent.studentClass = sClass
    aStudent.studentNumber = students.length
    
    createProfile(aStudent)
}


function createProfile()    {
    let genderHtml = document.querySelector("#profileGender")
    let DOBHtml = document.querySelector("#profileDob")
    let addressHtml = document.querySelector("#profileAddress")
    let nationalityHtml = document.querySelector("#profileNationality")
    let stateHtml = document.querySelector("#profileState")
    let lgaHtml = document.querySelector("#profileLga")
    let classHtml = document.querySelector("#profileClass")

    

}

document.querySelector(".submit").addEventListener("click", createStudent);
console.log(students);