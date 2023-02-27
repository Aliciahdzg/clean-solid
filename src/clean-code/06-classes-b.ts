(() => {
    // Sin aplicar el principio de responsabilidad unica 
    type Gender = 'M'|'F'

    interface PersonProps {
        birthdate: Date;
        gender   : Gender; 
        name     : string;
    }

    

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;
        
        constructor({name, gender, birthdate}: PersonProps){
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        birthdate     : Date;
        email         : string;
        gender        : Gender;
        name          : string;
        role          : string,
    }

    class User extends Person {

        public lastAccessDate: Date;
        public email         : string;
        public role          : string;
        

        constructor({ 
            birthdate,
            email, 
            gender,
            name,
            role,
        }: UserProps) {
            super({name, gender, birthdate});

            this.lastAccessDate = new Date();
            this.email          = email;
            this.role           = role;
        }

        checkCredentials(){
            return true;
        }

    }

    interface UserSettingsProps {
        birthdate       : Date;
        email           : string;
        gender          : Gender;
        lastOpenFolder  : string;
        name            : string;
        role            : string;
        workingDirectory: string;
    }

    class UserSettings extends User {

        public lastOpenFolder   : string;
        public workingDirectory: string;

        constructor({
            birthdate,
            email,                
            gender,
            lastOpenFolder,
            name,
            role,       
            workingDirectory,
        }: UserSettingsProps 
            ){
                super({email, role, name, gender, birthdate})

                this.lastOpenFolder   = lastOpenFolder;
                this.workingDirectory = workingDirectory;

            }
    }

    const userSettings = new UserSettings({
        workingDirectory:'/usr/home',
        lastOpenFolder: '/home',
        email: 'alicia@google.com',
        role: 'Admin',
        name: 'Alicia',
        gender: 'F',
        birthdate: new Date('1991-03-23'),
    });

    console.log({userSettings})

    


})()