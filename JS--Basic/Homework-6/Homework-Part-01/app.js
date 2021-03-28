let firstDiv = document.getElementById("first");
let changeHeadingText = document.getElementById("myTitle").innerText = "New Heading" ;
let changeParagraphOneText = document.querySelector(".paragraph").innerText = "New exercise.";

let changeParagraphTwoText  = firstDiv.nextElementSibling.firstElementChild;
changeParagraphTwoText.innerHTML = "NEW Paragraph Text";

let changeTextInElement = changeParagraphTwoText.nextElementSibling;
changeTextInElement.innerHTML = "YEAH!";

let thirdHeadingChange = firstDiv.nextElementSibling.nextElementSibling.firstElementChild;
thirdHeadingChange.innerHTML = "This is changed";

let changeTextInHeadingThree = thirdHeadingChange.nextElementSibling;
changeTextInHeadingThree.innerHTML = "That last change";



