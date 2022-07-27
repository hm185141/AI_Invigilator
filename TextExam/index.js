
function submit(){
    var text1 = document.getElementById("ans1").value;
    var text2 = document.getElementById("ans2").value;
    var text3 = document.getElementById("ans3").value;
    var text4 = document.getElementById("ans4").value;
    var text5 = document.getElementById("ans5").value;
    var name = document.getElementById("user_name").value;
    var email = document.getElementById("user_email").value;
    var aadhar = document.getElementById("aadhar").value;
    if(text1=="" || text2=="" || text3=="" || text4=="" || text5==""
       || name=="" || email=="" || aadhar==""){
        alert("Please answer all questions otherwise fill NIL in box");
    } else {

        var elems = document.getElementsByClassName('mainContainer');
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'block';
            elems[i].style.display = 'none'
        }
        // console.log(document.getElementsByClassName("mainContainer"));
        // document.getElementsByClassName("mainContainer").style.display = "none";
        // d.style.display="block";
    //    document.getElementsByClassName("mainContainer").style.display = "none"
        var templateParams = {
            name_user: name,
            email_user: email,
            aadhar_user: aadhar,
            ans1: text1,
            ans2: text2,
            ans3: text3,
            ans4: text4,
            ans5: text5
            
        };


        emailjs.send('Himanshu', 'template_q6enpda', templateParams,'NtksvLTYJ8MdTOzWo')
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
               alert("Your response has been submitted. Please close the tab");
            }, function(error) {
               console.log('FAILED...', error);
               alert("Try to submit again or check internet connection");
            }
        );

        
    }

}
