var loginemail=document.querySelector('.email')
var loginpassword=document.querySelector('.password')
var firstname=document.querySelector('#firstname')
var lastname=document.querySelector('#lastname')
var email=document.querySelector('#signupemail')
var password=document.querySelector('.signuppassword')
var signupbtn=document.querySelector('.signupbtn')
var loginbtn=document.querySelector('.loginbtn')
let date;
let month;
let year;
let gender;

const users = JSON.parse(localStorage.getItem('users')) || []

console.log(users)

loginbtn.addEventListener('click',loginhandler())
function loginhandler(){
    if(!loginemail.value||!loginpassword.value){
        return alert("please enter ur email")
       
    }
    const userfound=users.filter((user)=>{ 
         console.log("user email in userFound filter", user.email)
    return user.email === loginemail.value}
    )
    console.log(userfound, "==>>user found in login")

    if(!userfound.length) return alert("This user is not registered, kindly create an account first")


    console.log(loginpassword.value, "===>>> login password of input")
    console.log(userfound.password, "user password from local storage")

if(userfound[0].password == loginpassword.value) {
    alert("user is logging in")
    
    localStorage.setItem('isLoggedInUser', JSON.stringify(userfound[0]))


    window.location.href="./dashboard/index.html";


} else {
    alert("password is incorrect")
}
}

function signupHandler() {

    console.log("user email in our input", email.value)

    const userFound = users.filter((user) => {
        console.log("user email in userFound filter", user.email)
        return user.email === email.value
    })

    if (userFound.length) return alert("Email address already in use, please use another email address")

    // mobile number validation


    console.log("user mil gaya ==>>>", userFound)

    const modal = document.getElementById('exampleModal')

    console.log(modal)

    modal.classList.toggle('show')



    if (firstname.value !== "" && lastname.value !== ""  && password.value !== "" && date !== undefined && month !== undefined && year !== undefined && gender !== undefined) {
        if (password.value.length < 8) return alert("password should contain 8 characters")

        const userObj = {
            firstname: firstname.value,
            lastname: surname.value,
            mobileNum: mobNum.value,
            password: password.value,
            date: new Date(`${year}-${month}-${date}`),
            email: email.value,
            // gender: gender
            gender
        }



        users.push(userObj)

        localStorage.setItem('users', JSON.stringify(users))

        alert("User signup successfully")

        firstname.value = ""
        lastname.value = ""
        mobNum.value = ""
        password.value = ""
        email.value = ""





    } else {
        alert("insaan ban k saari fields fill up karlo")
    }
}
function getDateHandler(d) {
    console.log(d, "dateHandler working")
    date = d
}
function getMonthHandler(m) {
    console.log(m, "monthHandler working")
    month = m
}
function getYearHandler(y) {
    console.log(y, "yearHandler working")
    year = y
}
function getGenderHandler(g) {
    console.log(g, "genderHandler working")
    gender = g
}
c
