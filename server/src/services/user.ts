import fs from 'fs';

type UserRequest = {
    company_name: string;
    logo_url: string;
    email: string;
    password: string;
};

export class UserService {
    public basePath = './src/database';

    saveUser = (data: UserRequest) => {
        const users = this.getUsers();

        const alreadyExists = users.some((userItem) => {
            const newUserDataEmail = data.email.toLocaleLowerCase();
            const newUserEmail = userItem.email.toLocaleLowerCase();

            if (newUserDataEmail === newUserEmail) {
               return true;
            }

            return false;
        });

        if (alreadyExists) {
            return new Error('Já existe um usuário cadastrado com esse email.');
        }

        users.push(data);
        const newUsers = JSON.stringify(users, null, ' ');
        fs.writeFileSync(`${this.basePath}/users.json`, newUsers, 'utf8');

        return data;
    };

    authenticateUser = (data: Omit<UserRequest, 'logo_url' | 'company_name'>) => {
        const users = this.getUsers();

        const filteredUser = users.filter((userItem) => userItem.email === data.email 
            && userItem.password === data.password);

        if (filteredUser.length === 0) {
            return new Error('Email ou senha incorretos.');
        }

        return 'Usuário autenticado com sucesso!';
    };

    getUsers = (): UserRequest[] => {
        try {
            const jsonString = fs.readFileSync(`${this.basePath}/users.json`, 'utf8');

            if (jsonString.length === 0) {
                return [];
            }

            const data = JSON.parse(jsonString);

            return data;
        } catch (err) {
            console.log(err);
            return err;
        }
    };
}