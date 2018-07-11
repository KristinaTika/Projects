import { authorsEndpoint, singleAuthorEndpoint} from "../constants/constants.js";
import { get } from "./apiService.js";

class AuthorService {

    fetchAuthors() {
        return get(authorsEndpoint)
    }

    fetchSingleAuthor(authorId) {
        return get(`${singleAuthorEndpoint}${authorId}`)
    }

}

export const authorService = new AuthorService;