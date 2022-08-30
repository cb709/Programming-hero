const loadData = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => showData(data));
};

const showData = (data) => {
  const users = data.results;
  const userDiv = document.getElementById("random-user-container");

  for (const user of users) {
    const newUser = {
      ...user,
      fullName: function () {
        return this.name.title + " " + this.name.first + " " + this.name.last;
      },
      fullLocation: function () {
        return this.location.city + " , " + this.location.country;
      }
    };
    const userUl = document.createElement("ul");
    userUl.innerHTML = `
                    <li><b>Name:</b> ${newUser.fullName()} </li>
                    <li><b>Gender:</b> ${newUser.gender}</li>
                    <li><b>Email:</b> ${newUser.email}</li>
                    <li><b>Location:</b> ${newUser.fullLocation()}</li>
        `;
    userDiv.appendChild(userUl);
  }
};

function reset () {
    const userDiv = document.getElementById("random-user-container");
    userDiv.innerHTML = ''
}

