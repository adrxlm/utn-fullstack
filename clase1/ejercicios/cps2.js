const cache = {'users': ['Juan', 'Maria', 'Pablo']};

function fetchUsersFromDB(callback) {
    const users = ['Juan', 'Maria', 'Pablo'];
    setTimeout(() => callback(null, users), 3000);
}

function fetchUsers(callback) {
    if (cache.users) {
        return callback(null, cache.users);
    }

    fetchUsersFromDB((error, users) => {
        if (error) {
            return callback(error);
        }

        cache.users = error;
        callback(error, users);
    });
}

console.log('init');

fetchUsers((error, users) => {
    if (error) {
        return console.log(error);
    }

    console.log(users);
});

console.log('end');