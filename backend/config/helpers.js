const Mysqli = require('mysqli');

let conn = new Mysqli({
    Host: 'localhost', // IP/domain name 
    post: 3306, // port, default 3306 
    user: 'mega_user', // username 
    passwd: '123456', // password 
    db: 'mega_shop'
});

let db = conn.emit(false, '');

