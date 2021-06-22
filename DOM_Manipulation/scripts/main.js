/*
  FUNCTION DEFINITIONS
*/

function alteration1(){
  document.body.style.background = "red";
  setTimeout(
    () => {document.body.style.background = "";},
    2500
  )
}

/*
  VARIABLE DEFINITIONS
*/

const ACT_ALTER1 = document.querySelector("#alter1");
ACT_ALTER1.addEventListener(
  "click",
  (e) => {
    alteration1();
  } 
)