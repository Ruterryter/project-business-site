
const question1 = document.getElementById("question1")
const question2 = document.getElementById("question2")
const question3 = document.getElementById("question3")


function toggleActive() {
  this.classList.toggle('active')
}

question1.onclick = toggleActive
question2.onclick = toggleActive
question3.onclick = toggleActive

