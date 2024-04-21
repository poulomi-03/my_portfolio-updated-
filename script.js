function clicked() {
    var x = document.getElementById("navlist");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwUNpYMsG-YlxYMKwUCUOKP-vos20Yx4dIOEvMEaaOn4hQ11BfLeymkSr8e3Ls3WiY/exec'
const form = document.forms['submit-form']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML="Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})