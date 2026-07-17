console.log("Practice file loaded successfully.");
import fs from 'fs'

fs.writeFile('practice.txt', '\nThis is a practice files.', (err) => {
    if(err) {
        console.error('Error writing to file:', err);
    }else{
        console.log('File written successfully.');
    }
});