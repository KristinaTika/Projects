import { userService } from "./services/userService.js";

export const getUsers = () => {

    return userService.fetchUsers();
}

