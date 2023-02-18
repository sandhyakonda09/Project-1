function vis()
 {  
 document.getElementById("a").removeAttribute("type")
 document.getElementById("b").setAttribute("src","../Asset/logos/visible.png")
 }
function hide()
 {
 document.getElementById("b").setAttribute("src","../Asset/logos/hiding.png")
 document.getElementById("a").setAttribute("type","password")
 }
function auth()
{
    var password="123"
    var email="sandhya98@gmail.com"
    var userpass=document.getElementById("a").value
    var useremail=document.getElementById("email").value
    if(useremail==email && userpass==password)
    {
        document.getElementById("good").setAttribute("action","./index.html")
        document.getElementById("login").setAttribute("type","submit")
        document.getElementById("result").innerHTML=""
    }
    else if(useremail!=email && userpass==password){
        document.getElementById("email").style.borderColor="red"
        document.getElementById("result").innerHTML="Entered the Wrong Email"
        document.getElementById("bg").style.backgroundImage="linear-gradient(95deg,hotpink,rgb(255,120,55))"
        document.getElementById("cont").style.borderColor="royalblue"
        document.getElementById("cont1").style.backgroundImage="linear-gradient(95deg,orange,gray,purple)"

    }
    else if(useremail==email && userpass!=password)
    {
        document.getElementById("cont").style.borderColor="red"
        document.getElementById("result").innerHTML="Entered the Wrong Password"
        document.getElementById("bg").style.backgroundImage="linear-gradient(95deg,rgb(255,17,120),blue)"
        document.getElementById("email").style.borderColor="royalblue"
        document.getElementById("cont1").style.backgroundImage="linear-gradient(95deg,purple,red)"
    }
    else{
        document.getElementById("email").style.borderColor="red"
        document.getElementById("cont").style.borderColor="red"
        document.getElementById("result").innerHTML="Entered the Wrong Email and Password"
        document.getElementById("bg").style.backgroundImage="linear-gradient(95deg,orangered,red)"
        document.getElementById("cont1").style.backgroundColor="black"

    }
}
