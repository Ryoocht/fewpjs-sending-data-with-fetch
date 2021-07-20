// Add your code here
function submitData(name, email) {

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(resp => resp.json())
    .then(json => {
        document.querySelector("body").innerHTML = `<div><ul><li>${json.id}</li></ul></div>`
    })
    .catch(error => {
        alert("Something wrong");
        console.log(error.message);
        document.body.innerHTML = error;
    });
}

submitData("Steve", "steve@steve.com")
