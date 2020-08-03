const Purgecss = require('purgecss').default;
const fs = require('fs');

const purgecssResult = new Purgecss().purge({
    content: ['build/static/js/*.js'],
    css: ['build/static/css/*.css']
});

purgecssResult
    .then(arr => {

        arr.forEach((result) => {
            const file = result.file;
            const css = result.css;

            fs.stat(file, (error, originalFileStats) => {
                console.log(originalFileStats);
                fs.writeFileSync(file, css);
                const newFileStats = fs.statSync(file);
                console.log('\x1b[32m', `Purge CSS saved ${Math.round((originalFileStats.size - newFileStats.size) / 1000)}kb on ${file}`);
            });
        });
    })
    .catch(err => console.error(err))