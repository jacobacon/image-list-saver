Image List Saver

const image-saver = require('image-saver');


image-saver.download([urls], destination, (err, data)=>{
    console.log(data);
    console.log("Failed to download: " + data.failed.length);
    console.log("Success to download: " + data.success.length);
);