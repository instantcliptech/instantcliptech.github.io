
const betaTesterEmail = document.getElementById("betatesterEmail");
const creatorTesterEmail = document.getElementById("creatortesterEmail");
const betaTesterButton = document.getElementById("betatesterEarlyAccessButton");
const userSentEmail = document.getElementById("userEmailInformation");
const creatorTesterButton = document.getElementById("creatortesterEarlyAccessButton");
const creatorSentEmail = document.getElementById("creatorEmailInformation");

const apiUrl = "https://script.google.com/macros/s/AKfycbyDGrea-3XNJJUrBjswLuw0j9k-grES5aiUyfekuoJcTjSShxVUHUMHIkNNAUbbAHfXpg/exec";

function submitBetaTester(event) {  
  event.preventDefault();  
  console.log("email: ", betaTesterEmail.value);  
  betaTesterEmail.style.display = "none";
  betaTesterButton.className = "button is-loading";

  fetch(apiUrl, {
    method: 'POST',
    redirect: 'follow',
    cache: 'no-cache',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: betaTesterEmail.value, type: 'user'})
  }).then(res => {
    betaTesterButton.style.display = "none";
    userSentEmail.textContent = "Submission received, you'll be the first one getting news about instantClip!"    
  }).error(error => {
    console.log(error)
    betaTesterEmail.style.display = "block";
    betaTesterButton.style.display = "block";
    betaTesterButton.className = "";
    userSentEmail.textContent = "Ops error, try again";
  })
}

function submitCreatorTester(event) {  
  event.preventDefault();  
  console.log("email: ", creatorTesterEmail.value);  
  creatorTesterEmail.style.display = "none";
  creatorTesterButton.className = "button is-loading";

  fetch(apiUrl, {
    method: 'POST',
    redirect: 'follow',
    cache: 'no-cache',
    mode: 'no-cors',    
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: creatorTesterEmail.value, type: 'creator' })
  }).then(res => {
    creatorTesterButton.style.display = "none";
    creatorSentEmail.textContent = "Submission received, you'll be the first one getting news about instantClip!"    
  }).error(error => {
    console.log(error)
    betaTesterEmail.style.display = "block";
    betaTesterButton.style.display = "block";
    betaTesterButton.className = "";
    creatorSentEmail.textContent = "Ops error, try again";
  })
}

document.getElementById("betatesterEarlyAccessButton").addEventListener("click", submitBetaTester);
document.getElementById("creatortesterEarlyAccessButton").addEventListener("click", submitCreatorTester);
