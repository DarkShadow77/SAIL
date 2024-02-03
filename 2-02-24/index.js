let response

const res = async () => {
    fetch("https://reqres.in/api/users", {
        method: "PUT",
        body: JSON.stringify({
            name: "Morpheous",
            job: "Leader"
        }),
        headers: {
            "Content-Type": "application/json"
        }

    })
    console.log(response)
    // .then(res => console.log(response));
}