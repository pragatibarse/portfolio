
 function myeducation(){
  var data=document.getElementById("check");
  if(data){
    document.getElementById('education_data').hidden=false;
    document.getElementById('experience_data').hidden=true;
  }
   
 }

 function myexperience(){
  var data=document.getElementById("check2");
  if(data){
    document.getElementById('education_data').hidden=true;
    document.getElementById('experience_data').hidden=false;

  }
   
 }
 function myproject(){
  var data1=document.getElementById("project");
  if(data1){
    document.getElementById('certificate_flex').hidden=true;
    document.getElementById('project_flex').hidden=false;
    document.getElementById('mini_project_flex').hidden=true;
 }
 }

function mycertificate(){
  var data2=document.getElementById("certificate");
  if(data2){
    document.getElementById('certificate_flex').hidden=false;
    document.getElementById('project_flex').hidden=true;
    document.getElementById('mini_project_flex').hidden=true;

  }
}

function miniproject(){
  var data2=document.getElementById("mini_project");
  if(data2){
    document.getElementById('certificate_flex').hidden=true;
    document.getElementById('project_flex').hidden=true;
    document.getElementById('mini_project_flex').hidden=false;

  }
}