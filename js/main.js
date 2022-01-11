
const betaTesterEmail = document.getElementById("betatesterEmail");
const creatorTesterEmail = document.getElementById("creatortesterEmail");
const betaTesterButton = document.getElementById("betatesterEarlyAccessButton");
const userSentEmail = document.getElementById("userEmailInformation");
const creatorTesterButton = document.getElementById("creatortesterEarlyAccessButton");
const creatorSentEmail = document.getElementById("creatorEmailInformation");
const betaTesterMobileSystem = document.getElementById("mobileSystem");
const creatorMobileSystem = document.getElementById("creatorMobileSystem");

const defaultTextColor = userSentEmail.style.color
const apiUrl = "https://script.google.com/macros/s/AKfycbzJ10zmVu54qmBRU5q-8kPoEqooNrNPo55lbQ5BOh0RNPR1pJaTAJKY_kAVA1KMRATFWA/exec";

function submitBetaTester(event) {  
  event.preventDefault();  
  console.log("email: ", betaTesterEmail.value);    

  if(betaTesterMobileSystem.selectedOptions[0].value === "mobile") {
    userSentEmail.style.color = "red";
    userSentEmail.textContent = "Please, select mobile system";    
    return false
  } else {
    userSentEmail.style.color = defaultTextColor;
    userSentEmail.textContent = "";
  }

  betaTesterEmail.style.display = "none";  
  betaTesterMobileSystem.style.display = "none"  
  betaTesterButton.className = "button is-loading";

  fetch(apiUrl, {
    method: 'POST',
    redirect: 'follow',
    cache: 'no-cache',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: betaTesterEmail.value, type: 'user', system: betaTesterMobileSystem.selectedOptions[0].value })
  }).then(res => {
    betaTesterButton.style.display = "none";    
    userSentEmail.style.color = defaultTextColor;
    userSentEmail.textContent = "Submission received, you'll be the first one getting news about instantClip!"    
  }).error(error => {
    console.log(error)
    betaTesterEmail.style.display = "block";
    betaTesterButton.style.display = "block";
    betaTesterMobileSystem.style.display = "block"
    betaTesterButton.className = "";
    userSentEmail.textContent = "Ops error, try again";
  })
}

function submitCreatorTester(event) {  
  event.preventDefault();  
  console.log("email: ", creatorTesterEmail.value);  

  if(creatorMobileSystem.selectedOptions[0].value === "mobile") {
    creatorSentEmail.style.color = "red";
    creatorSentEmail.className = "is-size-6"
    creatorSentEmail.textContent = "Please, select mobile system";    
    return false
  } else {
    creatorSentEmail.style.color = defaultTextColor;
    creatorSentEmail.textContent = "";
    creatorSentEmail.className = "has-text-white is-size-6"
  }

  creatorMobileSystem.style.display = "none"    
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
    body: JSON.stringify({ email: creatorTesterEmail.value, type: 'creator', system: creatorMobileSystem.selectedOptions[0].value })
  }).then(res => {
    creatorTesterButton.style.display = "none";
    creatorSentEmail.className = "has-text-white is-size-6"
    creatorSentEmail.style.color = defaultTextColor;
    creatorSentEmail.textContent = "Submission received, you'll be the first one getting news about instantClip!"    
  }).error(error => {
    console.log(error)
    creatorTesterEmail.style.display = "block";
    creatorTesterButton.style.display = "block";
    creatorTesterButton.className = "";
    creatorSentEmail.textContent = "Ops error, try again";
  })
}

document.getElementById("betatesterEarlyAccessButton").addEventListener("click", submitBetaTester);
document.getElementById("creatortesterEarlyAccessButton").addEventListener("click", submitCreatorTester);
