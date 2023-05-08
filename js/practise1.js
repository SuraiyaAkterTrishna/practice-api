const loadComments = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
    .then(res => res.json())
    .then(data => displayComments(data.slice(0, 20)));
};
const displayComments = (comments) => {
    const commentsContainer = document.getElementById('comments-container');
    comments.forEach(comment => {
        console.log(comment);
        const commentsDiv = document.createElement('div');
        commentsDiv.innerHTML = `
            <h1>Title: ${comment.name}</h1>
            <h3>Email: ${comment.email}</h3>
            <p>Description: ${comment.body}</p>
        `;
        commentsContainer.appendChild(commentsDiv);
    });
};
loadComments();
