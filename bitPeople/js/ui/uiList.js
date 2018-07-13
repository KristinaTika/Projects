const container = document.querySelector(".root");

const pinkColor = (user) => {
    if (user.gender === "female") {
        return "card gender-color";
    } else {
        return "card";
    }
}

const countMaleFemale = (users) => {
    let males = 0;
    let females = 0;
    users.forEach((user) => {
        if (user.gender === "female"){
            females ++;
        } else {
            males ++;
        }
    });

    return `<i class="fas fa-male"></i> : ${males}    <i class="fas fa-female"></i> : ${females}`;
}

export const renderUserList = (users) => {

    const searchBar = document.querySelector(".search-bar");
    searchBar.classList.remove("class", "hide");
    searchBar.classList.add("class", "show");

    container.innerHTML= "";

    const stats = document.createElement("div");
    stats.innerHTML = `
        <p class="center">
            ${countMaleFemale(users)}
        </p>
    `;
    container.appendChild(stats);

    const userList = document.createElement("ul");
    userList.setAttribute("class", "collection user-list");
    container.appendChild(userList);

    users.forEach((user) => {
        let userLi = document.createElement("li");
        userLi.setAttribute("class", `user-li ${pinkColor(user)}`);
        userLi.setAttribute("id", `${user.name}`)
        userLi.innerHTML = `
            <img src="${user.picture}" alt="${user.name}" class="circle" />
            <span class="title">${user.name}</span>
            <p>
                <b> <i class="tiny material-icons ">email</i>email: </b> ${user.email}
            </p>
            <p>
            <b> <i class="tiny material-icons">cake</i></b> ${user.dob}
            </p>
        `;
        userList.appendChild(userLi);
    });
}


export const collectSearchData = () => {

    const searchInput = document.querySelector("#search");
    const search = searchInput.value;
    return search;
    searchInput.value = "";
}

export const clearSearchInput = () => {

    const searchInput = document.querySelector("#search");
    searchInput.value = "";
}




