


function validacia() {

    var input2 = document.getElementById("input2");
    var input3 = document.getElementById("input3");

    if (input2.value == "" || input2.length == 0) {

        window.alert("forgot email?")
        return false;

    } else if (input3.value == "" || input3.length == 0) {
        window.alert("forgot password?")

        return false;
    } else {
        window.alert("registration was saccessful");

        return false;

    }
}

function night() {
    document.body.style.backgroundColor = "black";
    document.getElementById("im").style.display = "none";
    document.getElementById("im1").style.display = "flex";
    document.getElementById("h-title").style.color = "#FFFFFF";
    document.getElementById("wel").style.color = "white";
    document.getElementById("wel").innerHTML = "Create new account";
    document.getElementById("pw").style.color = "#FFFFFF";
    document.getElementById("pw").innerHTML = "Gave us some of your information to get free access to fieldly";
    document.getElementById("input1").style.display = "block";


    document.getElementById("em-l").style.color = "#FFFFFF";

    document.getElementById("pass-1").style.color = "#FFFFFF";
    document.getElementById("remember").style.display = "none";
    document.getElementById("recd").style.display = "none";
    document.getElementById("rec").style.display = "none";
    document.getElementById("rem").style.display = "none";
    document.getElementById("for").style.color = "white";
    document.querySelector('#sig').innerHTML = 'Create Account';
    document.querySelector('#dont').innerHTML = "Already have an account? Sign in";
    document.querySelector('#dont').style.color = "gray";


}


function day() {

    document.body.style.backgroundColor = "white";
    document.getElementById("im").style.display = "flex";
    document.getElementById("im1").style.display = "none";
    document.getElementById("wel").style.color = "black";
    document.getElementById("h-title").style.color = "black";
    document.getElementById("wel").innerHTML = "Welcome back";
    document.getElementById("pw").style.color = "black";
    document.getElementById("pw").innerHTML = "Welcome back! Please enter your details";
    document.getElementById("input1").style.display = "none";


    document.getElementById("em-l").style.color = "#000000";


    document.getElementById("input1").style.display = "none";




    document.getElementById("pass-1").style.color = "black";
    document.getElementById("remember").style.display = "flex";
    document.getElementById("recd").style.display = "flex";
    document.getElementById("rec").style.display = "flex";
    document.getElementById("rem").style.display = "flex";
    document.getElementById("for").style.color = "black";
    document.querySelector('#sig').innerHTML = 'Sign in';
    document.getElementById("dont").style.color = "black";
    document.querySelector('#dont').innerHTML = "Dont have an account? <b>Sign up for free</b>";

}


