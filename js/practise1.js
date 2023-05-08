const loadComments = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
    .then(res => res.json())
    .then(data => displayComments(data.slice(0, 20)));
};
const displayComments = (comments) => {
    const commentsContainer = document.getElementById('comments-container');
    comments.forEach(comment => {
        // console.log(comment);
        const commentsDiv = document.createElement('div');
        commentsDiv.classList.add('comment');
        commentsDiv.innerHTML = `
            <h1>Title: ${comment.name}</h1>
            <h3>Email: ${comment.email}</h3>
            <p>Description: ${comment.body}</p>
            <button onclick = "loadDetails(${comment.postId})">Details</button>
        `;
        commentsContainer.appendChild(commentsDiv);
    });
};
const loadDetails = (postId) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data));
};
const displayDetails = (post) => {
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = `
        <h1>Post Details</h3>
        <h3>Title: ${post.title}</h1>
        <h3>Post No: ${post.id}</h3>
        <p>Description: ${post.body}</p>
    `;
}
loadComments();
