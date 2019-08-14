import {scale}  from './helpfulLib.js';


var oldWidth = 0;
var newWidth = 0;
var firstChange = true;
var filler =  $("#filler");
var fillerHead = $("#filler-head");
var fnameSname = $("#fname, #sname");
var emailPassword = $("#email,#re_enter,#pswd");
var bWidth = $('body').width();
var divLogin = $("#div-login");

window.onload = function(){

    var email = document.getElementById('email');
    var emailJQ =  $("#email");
    var errorEmail = $("#error-email");
    var re_enter = document.getElementById('re_enter');
    var re_enter_div = document.getElementById("re-enter");
    var reErrorMessage = $("#reErrorMessage");
    var errorFname = $("#error-fname");
    var dobInfo = $("#q-dob");
    var genderInfo =  $("#q-gender");
    var pswd = $("#pswd");
    var option = $("option");
  
    setElementsOnLoad(divLogin);
   // Displays the re-enter email input field if a valid email has been input
   email.addEventListener("keyup", function (event){
    changeBorderIfInvalid(this, "div#div-email");
    dobInfo.css("display", "none");
    genderInfo.css("display", "none");
    if (email.checkValidity()){
      re_enter_div.style.display="block";
    }
    else{
      re_enter_div.style.display="none";
    }
  });

  email.addEventListener("change", function(event){
    changeBorderIfInvalid(this, "div#div-email");
    errorEmail.css("display", "none");
    dobInfo.css("display", "none");
    genderInfo.css("display", "none");
    email = document.getElementById('email');
    re_IsValid(email, re_enter, "div#re-enter");   
  });

  email.addEventListener("mouseout", function(event){
    changeBorderIfInvalid(this, "div#div-email");
    errorEmail.css("display", "none");
    dobInfo.css("display", "none");
    genderInfo.css("display", "none");
    email = document.getElementById('email');
    re_IsValid(email, re_enter, "div#re-enter");   
  });


  emailJQ.on("mouseenter", function (e) {
    dobInfo.css("display", "none");
    genderInfo.css("display", "none");
  });

  emailJQ.on("click", function (e){
    dobInfo.css("display", "none");
    genderInfo.css("display", "none");
    if(!emailJQ[0].checkValidity()){
    errorEmail.css("display", "block");

    }
  });

  // Re enter Email/Phone Number
  re_enter.addEventListener("keyup", function (event) {
    dobInfo.css("display", "none");
    genderInfo.css("display", "none");
    email = document.getElementById('email'); 
    re_IsValid(email, re_enter, "div#re-enter"); 
  });

  re_enter.addEventListener("click", function (event) {
    dobInfo.css("display", "none");
    genderInfo.css("display", "none");
    if(!re_enter.checkValidity()){
      reErrorMessage.css("display", "block");      
    }
  });

  re_enter.addEventListener("mouseout", function (event) {
    dobInfo.css("display", "none");
    genderInfo.css("display", "none");
    reErrorMessage.css("display", "none");
  });

 $("#re_enter").on("mouseenter", function(event){
  dobInfo.css("display", "none");
  genderInfo.css("display", "none");
 });
  //Checks if the first name is present
  $("#fname").on("mouseout", function (e){
    changeBorderIfInvalid(this, "div#div-fname");
    errorFname.css("display", "none");
    dobInfo.css("display", "none");
    genderInfo.css("display", "none");
  });
  $("#fname").on("mouseenter", function (e){
    dobInfo.css("display", "none");
    genderInfo.css("display", "none");
  });
  $("#fname").on("keyup", function(e){
    changeBorderIfInvalid(this, "div#div-fname");
    errorFname.css("display", "none");
    dobInfo.css("display", "none");
    genderInfo.css("display", "none");
  });

  $("#fname").on("click", function(e){
    if(!$("#fname")[0].checkValidity()){
      errorFname.css("display", "block");
      dobInfo.css("display", "none");
      genderInfo.css("display", "none");
    }
  });


  // checks if the last name is present
  $("#sname").on("mouseout", function (e){
    changeBorderIfInvalid(this, "div#div-sname");
    $("#error-sname").css("display", "none");
    dobInfo.css("display", "none");
    genderInfo.css("display", "none");
  });

  $("#sname").on("keyup", function(e){
    changeBorderIfInvalid(this, "div#div-sname");
    $("#error-sname").css("display", "none");
    dobInfo.css("display", "none");
    genderInfo.css("display", "none");
  });

  $("#sname").on("click", function (e){
    if(!$("#sname")[0].checkValidity()){
      $("#error-sname").css("display", "block");
      dobInfo.css("display", "none");
      genderInfo.css("display", "none");

    }
  });

  $("#sname").on("mouseenter", function (e){
    dobInfo.css("display", "none");
    genderInfo.css("display", "none");
  });

  // checks if the password is valid
  pswd.on("mouseout", function (e){
    dobInfo.css("display", "none");
    genderInfo.css("display", "none");
    changeBorderIfInvalid(this,"div#div-pswd");
    $("#passwordError").css("display","none");
  });

  pswd.on("mouseenter", function (e) {
    dobInfo.css("display", "none");
    genderInfo.css("display", "none");
  });
  
  pswd.on("change", function(e){
    dobInfo.css("display", "none");
    genderInfo.css("display", "none");
    changeBorderIfInvalid(this,"div#div-pswd");

  });

  pswd.on("keyup", function(e){
    dobInfo.css("display", "none");
    genderInfo.css("display", "none");
    changeBorderIfInvalid(this,"div#div-pswd");
    if(pswd[0].checkValidity()){
      $("#passwordError").css("display","none");
    }
 });

 pswd.on("click", function(e){
    if(!$("#pswd")[0].checkValidity()){
      $("#passwordError").css("display","block");
    }
});

// This happens when the form submits
$("#f1").on("submit", function (e){
  
  var day = $("#day").val() , month = $("#month").val(), year = $("#year").val();
  if((day+"-"+month+"-"+year) == "1-1-1990"){
   
    $("#myModal").modal("toggle");
    e.preventDefault();

    $('#yes').on("click",function(){
      $("#f1")[0].submit();
    });


 }
});

//The informative div that displays when the question mark icon next to dob is hovered over
$("#questionMark1").on("mouseenter", function (e){
  dobInfo.css("display", "block");
  genderInfo.css("display", "none");
});
$("#questionMark1").on("mouseout", function (e){
  });

$("#q-button1").on("click", function(e){
dobInfo.css("display", "none");
});

$("#questionMark2").on("mouseenter", function (e) {
genderInfo.css("display", "block");
dobInfo.css("display", "none");
});

$("#q-button2").on("click", function(e){
genderInfo.css("display", "none");
});
    //---------------------------------------//
   //-------------FUNCTIONS-----------------//
  //---------------------------------------//

  // generic border changer function
    function changeBorderIfInvalid(context, divId){
      if(!$(context)[0].checkValidity()){
        $(context).css("border","1px red solid");
        $(divId).addClass("error");
      }
      else{
        $(context).css("border","");
        $(divId).removeClass("error");
      }
  
    }

  // Checks if the re enter email is valid 
  function re_IsValid(email, re_enter, divId){
    var reg = /^([0-9]{9,12})|([A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})$/
    var invalidText = "Please input a valid email or phone number";
    var notEqualText = "Your emails or phone numbers do not match, please try again";

    if (!reg.test(re_enter.value)){
     re_enter.setCustomValidity(invalidText);
     re_enter.style.border="1px red solid";
     $(divId).addClass("error"); // Makes this div's position relative 
     $("#reContent").empty();
     $("#reContent").append(invalidText);


     return false;
    } 
    else if (email.value !== re_enter.value) {
     re_enter.setCustomValidity(notEqualText);
      re_enter.style.border="1px red solid";
      $(divId).addClass("error");
      $("#reContent").empty();
      $("#reContent").append(notEqualText);
      return false;
    } 
    else {
     re_enter.setCustomValidity("");
     re_enter.style.border="";
     $(divId).removeClass("error");
     $("#reContent").empty();
     $("#error").empty();
     reErrorMessage.css("display", "none"); 
     return true;
   
    }

  }



}
 
$(window).on("resize", handleResize);
  
// Resize function
function handleResize() {
    var LoginLeftPos = divLogin.offset().left;
    bWidth = $('body').width();
    
    lengthHasChanged(bWidth,divLogin);

    if ( bWidth >= 550 && bWidth <= 768 ) //768
    {
      emailPassword.css("width", "446px");
      fillerHead.css("margin-top", "100px");
      fnameSname.css("width", "219px");
      
      
    }
    else if(bWidth>=473 && bWidth < 550){
      emailPassword.css("width", "446px");
      fillerResponsive(bWidth);
      fnameSname.css("width", "219px");
      
    }
    else if(bWidth<473){
      var widthOffset2 = bWidth-22;
      fillerResponsive(bWidth);
      fnameSname.css("width", widthOffset2+"px");
      emailPassword.css("width", widthOffset2+"px");
    }
    else
    {
      defaultVal();
    }
}

function defaultVal() {
  emailPassword.css("width", "446px");
  fillerHead.css("margin-top", "12px");
  filler.css("width","537px");
  fillerHead.css("width","450px");
  fnameSname.css("width", "219px");
  
}

function fillerResponsive(bWidth) {
  var offset = bWidth-5;
  filler.css("width",offset+"px"); //makes the image responsive 
  fillerHead.css("width",offset+"px"); 
  fillerHead.css("margin-top", "100px");   
}

function lengthHasChanged(bodyW,element){

  var range = 176;
  var speed = 0.00;

  if(firstChange){
    oldWidth = bodyW;
    newWidth= bodyW;
    firstChange = false;
  }
  else{
    oldWidth = newWidth
    newWidth = bodyW
  }



  if(bodyW >= 768 && bodyW <944){
    speed = scale(bodyW,767,943,90,1);
    //The screen's width is increasing...
    if((oldWidth - newWidth) < 0){
      element.css("right", speed+"px"); 

    }
    else if ((oldWidth - newWidth) > 0){
      element.css("right", speed+"px");   
    }
  }
  else{
    element.css("right", "0px"); 
  }

}

function setElementsOnLoad(element) {
  var speed = scale(bWidth,767,943,90,1);
  // Handles positioning of the filler header text
  if(bWidth >= 0 && bWidth <768){
    fillerHead.css("margin-top", "100px");
  }
  // Handles positioning of the login form
  if(bWidth>=768 && bWidth < 944){
      //The screen's width is increasing...
       element.css("right", speed+"px"); 

  }
}




