const loadUser = () => {
    const url = 'https://randomuser.me/api/?gender=female';
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data.results[0]));
};
const displayUser = (user) => {
    console.log(user);
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = `
    <img src = "${user.picture.thumbnail}" />
    <h3>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
    <p>Street: ${user.location.street.number} ${user.location.street.name}</p>
    <p>City: ${user.location.city}, ${user.location.country}</p>
    `;
};
loadUser();