const path = require('path');
const fs  = require('fs')

function readRec(folder) {
    fs.readdir(folder, (err, files) => {
        if(err) {
    
            console.log(err);
            return;
        }
        console.log(files);
        files.forEach(value => {
            // @TODO
            // Check the file type file
            // and only read file if it is .txt
            if(fs.lstatSync(`${folder}/${value}`).isDirectory()) {
                readRec(`${folder}/${value}`)
            } else {
                const ext = getExtension(`${folder}/${value}`)
                if(ext == 'txt'){
                    readFile(`${folder}/${value}`)
                }
                return
            }
           
        })
        // console.log(files);
    })
}

function readFile (path) {
    fs.readFile(path,(err, data) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(data.toString());
    })
}

function getExtension(filename) {
    var ext = path.extname(filename||'').split('.');
    return ext[ext.length - 1];
}

readRec('./files')