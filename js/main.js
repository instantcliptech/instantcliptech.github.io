
const betaTesterEmail = document.getElementById("betatesterEmail");
const creatorTesterEmail = document.getElementById("creatortesterEmail");

const apiUrl = "https://script.google.com/macros/s/AKfycbyDGrea-3XNJJUrBjswLuw0j9k-grES5aiUyfekuoJcTjSShxVUHUMHIkNNAUbbAHfXpg/exec";

function submitBetaTester(event) {  
  //event.preventDefault();  
  console.log("email: ", betaTesterEmail.value);  

  fetch(apiUrl, {
    method: 'POST',
    redirect: 'follow',
    cache: 'no-cache',
    mode: 'no-cors',    
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: betaTesterEmail.value, type: 'user'})
  }).then(res => console.log(res))
}

function submitCreatorTester(event) {  
  //event.preventDefault();  
  console.log("email: ", creatorTesterEmail.value);  
  
  fetch(apiUrl, {
    method: 'POST',
    redirect: 'follow',
    cache: 'no-cache',
    mode: 'no-cors',    
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: creatorTesterEmail.value, type: 'creator' })
  }).then(res => console.log(res))
}

document.getElementById("betatesterEarlyAccessButton").addEventListener("click", submitBetaTester);
document.getElementById("creatortesterEarlyAccessButton").addEventListener("click", submitCreatorTester);
