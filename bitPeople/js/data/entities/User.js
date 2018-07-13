class User {
    constructor(name, email, dob, picture, gender) {

        const currentEmail = email.split("@");
        currentEmail[0] = currentEmail[0].slice(0, 3) + "...";
        let myEmail = currentEmail.join("@");

        let date = new Date(dob).toDateString().split(" ");
        let newDate = `${date[1]} ${date[2]} ${date[3]}`;
        
        this.name= name;
        this.email = myEmail;
        this.dob = newDate;
        this.picture = picture;
        this.gender = gender;
    }
}

export { User };

