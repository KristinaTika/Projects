import { userEndpoint } from "../shared/constants.js";
import { User } from "../entities/User.js";
import { get } from "./APIService.js";

class UserService {

  fetchUsers() {
    return get(userEndpoint)
      .then((response) => {
        const userData = response.results;
        return userData.map((user) => {
          const userName = user.name.first;
          const userSurname = user.name.last;
          let firstLetter = userName[0].toUpperCase();
          let lastLetter = userSurname[0].toUpperCase();
          const name = `${firstLetter}${userName.slice(1)} ${lastLetter}${userSurname.slice(1)}`;
          const myUser = new User(name, user.email, user.dob.date, user.picture.large, user.gender);
          return myUser;
        });
      });
  }
}

export const userService = new UserService;