const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-body"]').value;
  
    const token = localStorage.getItem("token");
    await fetch('/api/posts', {
      method: "post",
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      }
    });
  
    document.location.replace("/dashboard");
  };
  
  document.querySelector("#new-post-form").addEventListener("submit", newFormHandler);