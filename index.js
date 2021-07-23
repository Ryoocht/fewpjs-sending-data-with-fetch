// Solution 1
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

//Solution 2
// const form = document.querySelector("form");

// form.addEventListener("submit", event => {
//     const configurationObject = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             "dogName": dogName.value,
//             "dogBreed": dogBreed.value
//         })
//     }

//     fetch("http://localhost:3000/dogs", configurationObject)
// })
