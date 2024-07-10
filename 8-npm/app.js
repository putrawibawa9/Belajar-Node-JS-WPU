const validator = require('validator');
const chalk = require('chalk');
const nama = validator.isEmail('putra@gmail.id');
const mobile = validator.isMobilePhone("0895623318043", "id-ID");

const pesan = chalk`Lorem, ipsum dolor sit amet {bgRed consectetur} adipisicing elit. Architecto, aut!`;
console.log(pesan);