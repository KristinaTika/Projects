import * as data from "./data/data.js";
import * as uiList from "./ui/uiList.js";
import * as uiGrid from "./ui/uiGrid.js";
import { renderAbout } from "./ui/uiAbout.js";
import { renderLoader, noUser, renderLastUpdate } from "./ui/uiLoader.js";

const myUsers = [];

const loadAllUsers = () => {

    data.getUsers()
        .then((users) => {
            users.forEach((user) => {
                myUsers.push(user);
                localStorage.setItem("users", JSON.stringify(users));
                localStorage.setItem("updateTime", Date.now());
            });
        });
}

const loadUsers = () => {

    const myUsers = JSON.parse(localStorage.getItem("users"));
    uiList.renderUserList(myUsers);
    renderLastUpdate();
}

const loadUserListAfterRefresh = () => {

    data.getUsers()
        .then((users) => {
            uiList.renderUserList(users);
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("updateTime", Date.now());
        });
}

const loadUserGridAfterRefresh = () => {

    data.getUsers()
        .then((users) => {
            uiGrid.renderUserGrid(users);
            localStorage.setItem("updateTime", Date.now());
            localStorage.setItem("users", JSON.stringify(users));
        });
}

const loadUserGrid = () => {

    const myUsers = JSON.parse(localStorage.getItem("users"));
    renderLoader();
    uiGrid.renderUserGrid(myUsers);
}

const switchViewHandler = (event) => {

    event.preventDefault();
    if (event.target.textContent === "view_module") {
        event.target.textContent = "view_list";
        loadUserGrid();
    } else if (event.target.textContent === "view_list") {
        event.target.textContent = "view_module";
        loadUsers();
    }
}

const refreshHandler = (event) => {

    const view = document.querySelector(".set-view");
    if (event.target.textContent === "refresh" && view.textContent === "view_module") {
        renderLoader();
        loadUserListAfterRefresh();
        renderLastUpdate();
    } else if (event.target.textContent === "refresh" && view.textContent === "view_list") {
        renderLoader();
        loadUserGridAfterRefresh();
        renderLastUpdate();
    }
}

const aboutHandler = (event) => {

    event.preventDefault();
    if (event.target.className === "about") {
        renderAbout();
    }
}

const searchHandler = (event) => {

    const view = document.querySelector(".set-view");
    let searchValue = uiList.collectSearchData();

    let filterUsers = myUsers.filter((user) => {
        let userName = user.name.toLowerCase();
        return userName.includes(searchValue);
    });

    if (view.textContent === "view_module") {
        renderLoader();
        uiList.renderUserList(filterUsers);
    }
    else if (view.textContent === "view_list") {
        renderLoader();
        uiGrid.renderUserGrid(filterUsers);
    }
    noUser();
}

const closeSearchHandler = (event) => {

    event.preventDefault();
    const view = document.querySelector(".set-view");

    if (event.target.textContent === "close" && view.textContent === "view_module") {
        uiList.clearSearchInput();
        renderLoader();
        loadUsers();
    } else {
        uiList.clearSearchInput();
        renderLoader();
        loadUserGrid();
    }
}

export const init = () => {

    renderLoader();
    loadUsers();

    const body = document.querySelector("body");
    body.addEventListener("click", switchViewHandler);

    const refresh = document.querySelector(".refresh");
    refresh.addEventListener("click", refreshHandler);

    const about = document.querySelector(".about");
    about.addEventListener("click", aboutHandler);

    const search = document.querySelector("#search");
    search.addEventListener("keyup", searchHandler);

    const close = document.querySelector(".close");
    close.addEventListener("click", closeSearchHandler);

    const bitPeople = document.querySelector(".bit-people");
    bitPeople.addEventListener("click", loadUsers);
}
