let name = document.querySelector(".name");
let lastname = document.querySelector(".lastname");
let coursename = document.querySelector(".coursename");
let rollno = document.querySelector(".rollno");

let show = document.querySelector(".show");

let showname = document.querySelector(".showname");
let showlastname = document.querySelector(".showlastname");
let showcoursename = document.querySelector(".showcoursename");
let showrollno = document.querySelector(".showrollno");

function Sumbit(event) {
  if (name.value == "") {
    alert("please enter name");
    return;
  }
  if (lastname.value == "") {
    alert("please enter lastname");
    return;
  }
  if (coursename.value == "") {
    alert("please enter coursename");
    return;
  }
  if (rollno.value == "") {
    alert("please enter rollno");
    return;
  }
  event.preventDefault();
  show.style.display = "block";
  showname.innerText += name.value;
  showlastname.innerText += lastname.value;
  showcoursename.innerText += coursename.value;
  showrollno.innerText += rollno.value;

  name.value = "";
  lastname.value = "";
  coursename.value = "";
  rollno.value = "";
}
