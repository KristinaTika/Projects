import { authorsEndpoint, singleAuthorEndpoint } from "../shared/constants";
import { Author } from "../entities/Author";
import { get } from "./APIService";

class AuthorService {

    fetchAuthors() {
        return get(authorsEndpoint)
            .then((response) => {
                return response.map(author => {
                    const id = author.id;
                    const name = author.name;
                    const username = author.username;
                    const email = author.email;
                    const phone = author.phone;
                    const street = author.address.street;
                    const city = author.address.city;
                    const zipcode = author.address.zipcode;
                    const comName = author.company.name;
                    const slogan = author.company.catchPhrase;
                    const address = {
                        street,
                        city,
                        zipcode
                    };
                    const company = {
                        comName,
                        slogan
                    };
                    const myAuthor = new Author(id, name, username, email, phone, address, company);

                    return myAuthor;
                })
            })
    }

    fetchSingleAuthor(authorId) {
        return get(`${singleAuthorEndpoint}${authorId}`)
    }
}

export const authorService = new AuthorService;