const editFormHandler = async function(event) {
    event.preventDefault();
    
    const title = document.getElementById('post-title');
    const content = document.getElementById('post-content');
    const post_id = document.getElementById('post-id')

    fetch("/api/posts/" + post_id.value, {
        method: "put", 
        body: JSON.stringify({
            title: title.value,
            content: content.value
        }),
        headers: { "Content-Type": "application/json"}
    })
        .then(function() {
            document.location.replace("/dashboard");
        })
        .catch(err => console.log(err))
}

document.querySelector("#edit-post-form").addEventListener("submit", editFormHandler);