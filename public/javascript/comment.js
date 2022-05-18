const commentFormHandler = async function(event) {
  event.preventDefault();

  const post_id = document.querySelector('input[name="post-id"]').value;
  const content = document.querySelector('textarea[name="comment-body"]').value;

  if (content) {
    await fetch('/api/comments', {
      method: 'post',
      body: JSON.stringify({
        post_id,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

document.querySelector('#new-comment-form').addEventListener('submit', commentFormHandler);