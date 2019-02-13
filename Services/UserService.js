import DBConnector from '../Database/DBConnector';

let userDB = DBConnector.objects('User');

let UserService = {
    
    findAll: () => {
        return Array.from(userDB);
    },

    save: (user, callback) => {
        if (userDB.filtered("username = '" + user.username + "'").length) return;
        try {
            DBConnector.write(() => {
                try {
                    DBConnector.create('User', user);
                } catch(e) {
                    console.error(e);
                }
                callback();
            });
        } catch(e) {
            console.error(e);
        }
    },

    update: (user, callback) => {
        if (!callback) return;
        DBConnector.write(() => {
            user.updatedAt = new Date();
            DBConnector.create('User', user, true);
            callback();
        })
    },

    deleteAll: () => { // will not be used
        DBConnector.write(() => {
            DBConnector.delete(userDB);
        })
    }
};

export default UserService;