function cetakNama(nama){
    return nama;
}

const PI = 3.4;

const mhs = {
    nama : 'linda',
    umur : 23,
    cetakNama(){
        return `${this.nama} ${this.umur}`
    }
}

class Orang {
    constructor(){
        console.log (  `object created`)
    }
}


// module.exports.cetakNama = cetakNama;
// module.exports.Orang = Orang;
// module.exports.mhs = mhs;
// module.exports.PI = PI;


module.exports = {
  cetakNama,
  Orang,
  mhs,
  PI
};