function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  } 

  function openTorm() {
    document.getElementById("myTorm").style.display = "block";
  }
  
  function closeTorm() {
    document.getElementById("myTorm").style.display = "none";
  };
  window.addEventListener ('mouseup',function(){
var form = document.getElementById('myTorm');
if (Event.target != form )
 { 
  form.style.display = "none";
} 
  });


