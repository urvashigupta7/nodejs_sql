var modal = document.getElementById("myModal");
var create=document.getElementById("create");
var displaycreate=false;
var modalcontent=document.getElementById("modal-content");
// When the user clicks on the button, open the modal
function onClick(data){
  data=JSON.parse(data);
  var container=document.createElement("DIV");
  var heading=document.createElement("h1");
  heading.innerText="EDIT"
  heading.classList.add("form-heading");
  container.classList.add("container");
  var form=document.createElement("FORM");
  form.setAttribute("action",`/edit/${data.id}?_method=PUT`);
  form.setAttribute("method","POST");
  var labelfirstname=document.createElement("LABEL");
  labelfirstname.setAttribute("for","firstname");
  labelfirstname.innerText="FIRST NAME";
  var labellastname=document.createElement("LABEL");
  labellastname.setAttribute("for","lastname");
  labellastname.innerText="LAST NAME";
  var firstname=document.createElement("INPUT");
  firstname.setAttribute("type","text");
  firstname.setAttribute("name","firstname");
  firstname.setAttribute("value",data.firstname);
  firstname.setAttribute("id","firstname");
  var lastname=document.createElement("INPUT");
  lastname.setAttribute("type","text");
  lastname.setAttribute("name","lastname");
  lastname.setAttribute("value",data.lastname);
  lastname.setAttribute("id","lastname");
  form.appendChild(labelfirstname);
  form.appendChild(firstname);
  form.appendChild(labellastname);
  form.appendChild(lastname);
  var close=document.createElement("DIV");
  close.classList.add("close");
  close.innerHTML="&times;"
  var button=document.createElement("BUTTON");
  button.setAttribute("type","submit");
  button.innerText="SUBMIT";
  form.appendChild(button);
  modalcontent.innerHTML="";
  modalcontent.appendChild(close);
  modalcontent.appendChild(heading)
  container.appendChild(form);
  modalcontent.appendChild(container);
   modal.style.display="block"; 
   var div = document.getElementsByClassName("close")[0];
   div.onclick = function() {
    modal.style.display = "none";
  }
  
  }
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function displayCreate(){
  if(!displaycreate){
  create.style.display="block"
  }else{
    console.log("helo")
    create.style.display="none";
  
  }
  displaycreate=!displaycreate;
}
