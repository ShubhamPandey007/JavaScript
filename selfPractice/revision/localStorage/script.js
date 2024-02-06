const button = document.getElementById("clickButton");
const uname = document.getElementById("entername");
const username = document.getElementById("username");

button.addEventListener("click", () => {
    const value = uname.value;
    localStorage.setItem("name", value)

    location.reload(); //pura page update ho jayega aur get the value
})

window.addEventListener('load', () => {
    const value = localStorage.getItem('name');
    username.innerText = value;
});