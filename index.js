const Api_url = "https://jsonplaceholder.typicode.com";

const HTMLResponse = document.querySelector("#app");

fetch(`${Api_url}/users`)
.then(response => response.json())
.then(users => {
    const tpl = users.map(user => `<li>${user.name} ${user.email}</li>`);
    HTMLResponse.innerHTML = `<ul class="lista">${tpl}</ul>`
})
.then(response =>console.log(response))
// const xhr = new XMLHttpRequest();

// function onrequest() {
//     if(this.readyState === 200 && this.status===4) {
//         console.log(this.response);
//     }
// }

// xhr.addEventListener("load",onrequest)
// xhr.open("GET",`${Api_url}/users/1`)
// xhr.send()
