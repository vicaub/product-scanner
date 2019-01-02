import DBConnector from '../Database/DBConnector';

let userDB = DBConnector.objects('User');

let UserService = {
    findAll: () => { // will not be used
        return Array.from(userDB);
    },

    save: (user) => {
        if (userDB.filtered("username = '" + user.username + "'").length) return;

        DBConnector.write(() => {
            user.updatedAt = new Date();
            DBConnector.create('User', user);
        });
    },

    update: (user, callback) => {
        if (!callback) return;
        DBConnector.write(() => {
            user.updatedAt = new Date();
            DBConnector.create('User', user, true);
            callback();
        })
    }
};

export default UserService;