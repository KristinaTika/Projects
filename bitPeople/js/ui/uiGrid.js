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
        if (user.gender === "female") {
            females++;
        } else {
            males++
        }
    });

    return `<i class="fas fa-male"></i> : ${males}    <i class="fas fa-female"></i> : ${females}`;
}

export const renderUserGrid = (users) => {

    const searchBar = document.querySelector(".search-bar");
    searchBar.classList.remove("class", "hide");
    searchBar.classList.add("class", "show");

    container.innerHTML = "";

    const stats = document.createElement("div");
    stats.innerHTML = `
        <p class="center">
            ${countMaleFemale(users)}
        </p>
    `;
    container.appendChild(stats);

    const userGrid = document.createElement("div");
    userGrid.setAttribute("class", "card user-list");
    container.appendChild(userGrid);

    const rowLi = document.createElement("div");
    rowLi.innerHTML = `
    <div class="container">
        <div class="row add-grid">
        </div>
    </div>
    `;
    userGrid.appendChild(rowLi);

    users.forEach((user) => {

        let userLi = document.createElement("div");
        userLi.setAttribute("class", "card-image li-grid");
        userLi.innerHTML = `
            <div class="col s4">
                <div class="${pinkColor(user)}">
                    <div class="card-image">
                        <img src="${user.picture}" alt="user-img" />
                        <span class="card-title">${user.name}</span>
                    </div>
                    <div class="card-content">
                        <p>
                            <b><i class="tiny material-icons">email</i>email:</b>${user.email}
                        </p>
                            <b><i class="tiny material-icons">cake</i>Birth date: </b>${user.dob}
                        </p>
                    </div>
                </div>
            </div>
        `;
        const addGrid = document.querySelector(".add-grid")
        addGrid.appendChild(userLi);
    });
}

