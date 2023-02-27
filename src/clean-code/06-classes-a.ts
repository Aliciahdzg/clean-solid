(() => {

    type Gender = 'M'|'F'

    class Person {
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate: Date){}
    }

    class User extends Person {

        public lastAccessDate: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ){
            super(name, gender, birthdate)
            this.lastAccessDate = new Date();
        }

        checkCredentials(){
            return true;
        }

    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lasOpenFolder   : string,
            email                  : string,
            role                   : string,
            name                   : string,
            gender                 : Gender,
            birthdate              : Date,
            ){
                super(email, role, name, gender, birthdate)
            }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'alicia@google.com',
        'Admin',
        'Alicia',
        'F',
        new Date('1991-03-23'),
    );

    console.log({userSettings})

    


})()