const image = require('./image-saver');


image.download(['https://i.redd.it/3g6423s33ihz.jpg',
    'http://i.imgur.com/aagwOQk.jpg',
    'https://i.redd.it/74bxqfo1uahz.jpg',
    'https://i.redd.it/zuat31e0hbhz.jpg',
    'https://i.redd.it/cgfn9i11c6hz.jpg',
    'https://i.redd.it/qis409tsxq2y.jpg',
    'https://i.redd.it/lax1h4a1dbgz.jpg',
    'https://i.redd.it/bd1cssaoh6gz.png',
    'https://i.redd.it/gvja5cfy06gz.jpg',
    'http://i.imgur.com/Xx7j4Zq.png',
    'https://i.redd.it/r8vmo6cvpifz.jpg',
    'https://i.redd.it/3y95akbzgxfz.jpg',
    'https://i.redd.it/3i0grf6rxifz.jpg',
    'https://i.redd.it/v2ejgm0psffz.jpg',
    'https://i.redd.it/ls9zz150x7fz.jpg',
    'http://i.imgur.com/01v3bw0.jpg',
    'http://atlasthestudio.com/hiddenmeme/secret.png',
    'https://i.redd.it/b3shgw5on2fz.png',
    'https://i.redd.it/khgn99xd0xez.jpg',
    'https://i.redd.it/wgtkvxb88wez.png',
    'https://i.redd.it/g3b0dkd1iqez.jpg',
    'https://i.redd.it/kreiwznkt5ez.jpg',
    'https://i.redd.it/pdnthczn37ez.jpg',
    'https://i.redd.it/0vmtvz7lc3ez.jpg',
    'https://i.redd.it/9paqpdeiwzdz.jpg',
    'https://i.redd.it/p0gtfnpsaydz.jpg',
    'https://i.redd.it/cbn1laszaqdz.jpg',
    'https://i.imgur.com/b8zfpXm.png',
    'https://i.redd.it/sh64bnkwbjdz.jpg',
    'http://i.imgur.com/LpwHB88.jpg',
    'https://i.redd.it/e1hw69xgd4dz.jpg',
    'http://imgur.com/PP6SCso.jpg',
    'https://i.redd.it/ddv8npwvvxcz.png',
    'https://i.imgur.com/4gJ0Lez.jpg'], __dirname + '/downloads', (err, data)=>{
    console.log(data);

    console.log(data.failed.length);
    console.log(data.success.length);
});




/*
image.download(['https://i.redd.it/3g6423s33ihz.jpg',
    'http://i.imgur.com/aagwOQk.jpg',
    'https://i.redd.it/74bxqfo1uahz.jpg',
    'https://i.redd.it/zuat31e0hbhz.jpg'], __dirname + '/downloads', (err, data)=>{
    console.log(data);
});

*/

//image.download({}, __dirname + '/downloads');
// image.download(['https://i.redd.it/3g6423s33ihz.jpg'], __dirname + '/downloads');
//image.download(['https://fat.gfycat.com/SpitefulFittingBongo.webm'], __dirname);
// image.download(['https://imgur.com/Fm1Ya','https://imgur.com/HtQVvPd','https://gfycat.com/SpitefulFittingBongo', 'https://imgur.com/gallery/QO19T'], __dirname + '/downloads', (err, data)=>{
//     console.log(data);
// });

/*image.download('http://i.imgur.com/aagwOQk.jpg', __dirname + '/downloads', (err, data)=>{
    console.log(err);
    console.log(data);
});
*/