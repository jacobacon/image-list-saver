const fs = require('fs');
const request = require('request');
const async = require('async');


//Takes a list of URLS, or a single URL as the first argument.
//Takes an optional destination as the second argument.
//Takes an optional callback as the third argument.

module.exports.download = (urls, destination, callback) => {
    if (!destination) {
        console.log('No Destination Given. Using Default Location: ' + __dirname);
        destination = __dirname;
    }

    //Check if destination exists, create it if not.

    if (!fs.existsSync(destination)) {
        console.log('Destination Does not exist');
        fs.mkdirSync(destination);
    }


    //If 'urls' is an array, download each item, otherwise download the only image.
    if (Array.isArray(urls)) {
        if (urls.length === 1) {
            console.log('Downloading One Image');
            downloadSingleImage(urls[0], destination, (err, data) => {
                if (callback)
                    callback(err, data);
            });
        } else {
            console.log('There are ' + urls.length + 'URLs');
            downloadImagesAsync(urls, destination, (err, data) => {
                if (callback)
                    callback(err, data);
            });
        }
    } else if ((typeof urls) === 'string') {
        downloadSingleImage(urls, destination, (err, data) => {
            if (callback)
                callback(err, data);
        });
    } else {
        callback(new TypeError("Expected a List, or String"), null);
    }

};

function downloadImagesAsync(urls, destination, callback) {

    let downloadStatus = {
        failed: [],
        success: []
    };

    async.forEachLimit(urls, 10, (url, callback) => {
        request.head(url, function (err, res, body) {

            if (!res) {
                callback(new Error("No Valid Response From The Server. Check Your Internet."));
            } else if (!err) {

                let ctype = res.headers['content-type'];

                if (ctype.includes('image')) {
                    console.log('Downloading Image: ' + url + ' to: ' + destination + url.split('/').pop());

                    request
                        .get(url)
                        .on('error', () => {
                            downloadStatus.failed.push(url);
                        })
                        .pipe(fs.createWriteStream(destination + '/' + url.split('/').pop()));

                    downloadStatus.success.push(url);
                } else {
                    console.log('The Requested URL is not A Direct Link to An Image. -- Attempting to Locate Image');

                    downloadStatus.failed.push(url);
                    //callback(new URIError("Indirect Links to Images Not Supported Yet"));

                    //TODO Handle indirect links.
                    /*

                                    if(url.includes('imgur')){
                                        console.log('Found an imgur Link');
                                        if(url.includes('gallery')){
                                            console.log('URL is an Album. This is not supported yet.');
                                            request(url, function (error, response, body) {
                                                //TODO Implement Scraping for URL
                                                //console.log(body);
                                                status.failed.push(url);
                                            })
                                        } else {
                                            let newURL = 'https://i.imgur.com/' + url.split('/').pop() + '.jpg';
                                            console.log(newURL);
                                            downloadSingleImage(newURL, destination, ()=>{

                                            });

                                        }
                                    } else if(url.includes('gfycat')){
                                        console.log('Found a Gfycat Link');
                                        let newURL = 'https://fat.gfycat.com/' + url.split('/').pop() + '.webm';
                                        console.log(newURL);
                                        downloadSingleImage(newURL, destination, ()=>{

                                        });
                                    } else {
                                        console.log('No Image Found');
                                        status.failed.push(url);
                                        callback(null);
                                    }

                                    */


                }

            } else {
                downloadStatus.failed.push(url);
                callback(err);
            }
            callback();

        });
    }, (err) => {
        console.log('All Done!!');
        callback(err, downloadStatus);
    });

}

function handleImgur(url, callback) {
    //TODO Handle Indirect Imgur links

}

function handleGycat(url, callback) {
    //TODO Handle Indirect Gfycat Links
}


function downloadSingleImage(url, destination, callback) {
    console.log('Downloading Single Image: ' + url + ' to: ' + destination + url.split('/').pop());

    var downloadStatus = {
        failed: [],
        success: []
    };

    request.head(url, function (err, res, body) {
        if (!res) {
            callback(new Error("No Valid Response From The Server. Check Your Internet."), null);
        } else {
            console.log(res.headers['content-type']);
            request(url).pipe(fs.createWriteStream(destination + '/' + url.split('/').pop()));
            if (!err) {
                downloadStatus.success.push(url);
            } else {
                downloadStatus.failed.push(url);
            }
            callback(err, downloadStatus);
        }
    });
}


