const db = require('../config/db');

//將Post建立成一個object，將function都設定在內
class Post {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  //新增user到database
  async save() {
    let sql = `
    INSERT INTO user(
        email,
        password
    )
    VALUES (
        '${this.email}',
        '${this.password}'
    )
    `;

    return await db.execute(sql);
  }

  //瀏覽所有資料用的
  static findAll() {
    let sql = 'SELECT * FROM user;';

    return db.execute(sql);
  }

  //查詢與對比相同email
  static findByEmail(email) {
    let sql = `SELECT * FROM user WHERE email = ${email};`;

    return db.execute(sql);
  }
}

module.exports = Post;
