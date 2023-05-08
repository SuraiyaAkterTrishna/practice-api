const loadComments = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
    .then(res => res.json())
    .then(data => displayComments(data));
};
const displayComments = (comments) => {
    console.log(comments);
};
loadComments();
