// Create new student object in student database
// using information entered in registration form.
function createStudent() {
    const student = {
        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        Address: "",
        nationality: "",
        state: "",
        lga: "",
        class: "",
        studentNumber: ""
    }
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
    student.studentNumber = Math.floor(Math.random() * 100) + 1;
    createProfile(student);
};


function createProfile(student)    {
    let studentNameHtml = document.querySelector("#studentName");
    let genderHtml = document.querySelector("#profileGender");
    let DOBHtml = document.querySelector("#profileDob");
    let addressHtml = document.querySelector("#profileAddress");
    let nationalityHtml = document.querySelector("#profileNationality");
    let stateHtml = document.querySelector("#profileState");
    let lgaHtml = document.querySelector("#profileLga");
    let classHtml = document.querySelector("#profileClass");
    let studentNoHtml = document.querySelector("#studentNo");

    studentNameHtml.textContent = student.firstName + " " + student.middleName 
                                  + " " + student.lastName;
    genderHtml.textContent = student.gender;
    DOBHtml.textContent = student.dateOfBirth;
    addressHtml.textContent = student.Address;
    nationalityHtml.textContent = student.nationality;
    stateHtml.textContent = student.state;
    lgaHtml.textContent = student.lga;
    classHtml.textContent = student.class;
    studentNoHtml.textContent = student.studentNumber;
};

document.querySelector(".submit").addEventListener("click", createStudent);






