NoOfQuestions=3;
Questions = Array(NoOfQuestions);
Answers= new Array(NoOfQuestions);
Choosed= false;

for(var i=0;i <NoOfQuestions;i++){
Answers[i]= new Array(2);
}
CorrectAnswers= new Array(NoOfQuestions);
QuestionNo=0;
Marks=0;
OptionChoosed=0;
Answer=3;

function loadStep5Review(){

document.getElementById('ReviewFirstName').innerHTML=document.getElementById('FirstName').value;
document.getElementById('ReviewMiddleName').innerHTML = document.getElementById('MiddleName').value
document.getElementById('ReviewLastName').innerHTML=document.getElementById('LastName').value;
document.getElementById('ReviewQualification').innerHTML=document.getElementById('Qualification').value;

if(document.getElementById('CheckboxJava').checked == 1){
document.getElementById('ReviewJava').innerHTNL = 'Yes';
}
else {
document.getElementById('ReviewJava').innerHTNL = 'No';
}
if(document.getElementById('CheckboxSQL').checked == 1){
document.getElementById('ReviewSQL').innerHTNL = 'Yes';
}
else{
document.getElementById('ReviewSQL').innerHTNL = 'No';
}
if(document.getElementById('CheckboxJavaScript').checked == 1){
document.getElementById('ReviewJavaScript').innerHTNL = 'Yes';
}
else{
document.getElementById('ReviewJavaScript').innerHTNL = 'No';
}
if(document.getElementById('CheckboxHTML').checked == 1){
document.getElementById('Reviewhtml').innerHTNL = 'Yes';
}
else{
document.getElementById('Reviewhtml').innerHTNL = 'No';
}
}


 function AnswerChoosed(Ans)
 {
 Answer = Ans;
 Choosed = true;
 }
 
 
 function doValid() {
 var fname = document.getElementById("Firstname").value;
 if(fname == null)
 {
 document.getElementById("errFirstName").innerHTML= "please Enter firstname..... ";
 return;
 }
 else{
 document.getElementById("errFirstName").innerHTML= " ";
 }
 }
 
 
 function load()
 {
 var BG = Math.floor(Math.random()*3);
 if(BG==0){document.body.background = "images/image1.jfif";}
 else if (BG==1){document.body.background = "images/image2.jfif";}
  else if(BG==2){document.body.background = "images/image3.jfif";}
  else{document.body.background = "images/image1.jpg";}
  LoadQuestion();
  }
 
 
  function LoadQuestion()
  {

  var x = document.getElementById("previous");
  document.getElementById("submit").style.display = "none";
  document.getElementById("next").style.display = "inline";
  if(QuestionNo ==0){
  x.style.display = "none";
  }else {
  x.style.display = "inline";
  }
  if(QuestionNo == 2){
document.getElementById("submit").style.display = "inline";
  document.getElementById("next").style.display = "none";
  }
  if(QuestionNo == 3){
document.getElementById("submit").style.display = "inline";
  document.getElementById("next").style.display = "inline";
  }
  document.getElementById('HeaderTableStep2').style.backgroundColor = 'pink';
  Answer = 3;
  }
 
 
  function PreviousQuestion() {
  QuestionNo--;
  load();
  if(document.getElementById('previous').name == 'Step1'){
  document.getElementById('next').name = 'Step2';
  document.getElementById('previous').name = 'Step0';
  document.getElementById('Step1').style.display = 'inline';
  document.getElementById('Step2').style.display = 'none';
  document.getElementById('HeaderTableStep2').style.backgroundColor = 'pink';
  document.getElementById('HeaderTableStep3').style.backgroundColor = 'Silver';
  } else if (document.getElementById('previous').name == 'Step2') {
 
  document.getElementById('next').name ='Step3';
  document.getElementById('previous').name = 'Step1';
  document.getElementById('Step2').style.display ='inline';
  document.getElementById('Step3').style.display ='none';
  document.getElementById('HeaderTableStep3').style.backgroundColor = 'pink';
  document.getElementById('HeaderTableStep4').style.backgroundColor = 'Silver';
  document.getElementById('HeaderTableStep2').style.backgroundColor = 'Silver';
}else if (document.getElementById('previous').name == 'Step3') {
 

  document.getElementById('previous').name = 'Step2';
  document.getElementById('Step3').style.display = 'inline';
  document.getElementById('Step4').style.display = 'none';
  document.getElementById('HeaderTableStep5').style.backgroundColor = 'Silver';
  document.getElementById('HeaderTableStep4').style.backgroundColor = 'pink';
  document.getElementById('HeaderTableStep2').style.backgroundColor = 'Silver';
   document.getElementById('HeaderTableStep1').style.backgroundColor = 'Silver';
   
   }
   }
   
   
 function NextQuestion()
{
   if(document.getElementById('next').name == 'Step2'){
   var fname = document.getElementById("FirstName").value;
 if(fname == ''){
 document.getElementById("errFirstName").innerHTML= "Please Enter firstName..... ";
 return;
 }
 else{
 document.getElementById("errFirstName").innerHTML= " ";
 }
 var lname = document.getElementById("LastName").value;
 if(lname == ''){
 document.getElementById("errLastName").innerHTML= "Please Enter LastName..... ";
 return;
 }
 else{
 document.getElementById("errLastName").innerHTML= " ";
 }
  QuestionNo++;
 
  load();
  document.getElementById('next').name ='Step3';
   document.getElementById('previous').name ='Step1';
    document.getElementById('Step1').style.display ='none';
    document.getElementById('Step2').style.display = 'inline';
  document.getElementById('HeaderTableStep3').style.backgroundColor = 'pink';
  document.getElementById('HeaderTableStep2').style.backgroundColor = 'Silver'
  }else if (  document.getElementById('next').name =='Step3'){
  QuestionNo++;
  load();
  document.getElementById('next').name = 'Step4';
  document.getElementById('previous').name ='Step2';
  document.getElementById('Step2').style.display ='none';
    document.getElementById('Step3').style.display = 'inline';
      document.getElementById('HeaderTableStep4').style.backgroundColor = 'pink';
  document.getElementById('HeaderTableStep3').style.backgroundColor = 'Silver';
  document.getElementById('HeaderTableStep2').style.backgroundColor = 'Silver'
  }else if (  document.getElementById('next').name =='Step4'){
 
  QuestionNo++;
  load();
 
  document.getElementById('previous').name ='Step3';
  document.getElementById('Step3').style.display ='none';
    document.getElementById('Step4').style.display = 'none';
      document.getElementById('HeaderTableStep3').style.backgroundColor = 'pink';
  document.getElementById('HeaderTableStep2').style.backgroundColor = 'Silver';
  document.getElementById('HeaderTableStep1').style.backgroundColor = 'Silver';
  }
  }
   function Show() {
   load();
   QuestionNo++;
   document.getElementById('HeaderTableStep4').style.backgroundColor = 'Silver';
  document.getElementById('HeaderTableStep5').style.backgroundColor = 'pink';
  document.getElementById('HeaderTableStep2').style.backgroundColor = 'Silver';
 document.getElementById('Step3').style.display = 'none';
    document.getElementById('Step4').style.display = 'inline';
  document.getElementById('previous').style.display = 'inline';
   document.getElementById('submit').style.display = 'none';
  document.getElementById('previous').name ='Step3';
  loadStep5Review();
  }