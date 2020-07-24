const fs = require('fs');




let listarArchivo = (limite, base) => {

    return new Promise((resolve, reject) => {

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        console.log(data);
    })

}


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`${base}  No es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base} `)
        });

    });
}

module.exports = {
    crearArchivo,
    listarArchivo

}