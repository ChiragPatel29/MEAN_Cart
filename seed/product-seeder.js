var Product =require('../models/product');
var mongoose =require('mongoose');
mongoose.connect("mongodb://localhost:27017/shopping", { useNewUrlParser: true })
var products=[
    new Product({
    imagePath: 'https://zdnet3.cbsistatic.com/hub/i/r/2018/02/16/8abdb3e1-47bc-446e-9871-c4e11a46f680/resize/370xauto/8a68280fd20eebfa7789cdaa6fb5eff1/mongo-db-logo.png',
    title:'MongoDB: The Definitive Guide',
    description:'Book by Kristina Chodorow',
    price:1769
}),
new Product({
    imagePath: 'https://amandeepmittal.gallerycdn.vsassets.io/extensions/amandeepmittal/expressjs/2.0.0/1509881293872/Microsoft.VisualStudio.Services.Icons.Default',
    title:'Express in Action',
    description:' Book by Evan Hahn',
    price:917
}),
new Product({
    imagePath: 'http://www.cenito.se/wp-content/uploads/2014/12/angularjs-xs.png',
    title:'AngularJS Up and Running',
    description:'Book By Brad Green ',
    price:814
}),
new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
    title:'Node.JS Web Development ',
    description:'Book by David Herron',
    price:727
})
];
var done=0;
for(var i=0;i<products.length;i++){
    products[i].save(function (err,result) {
        done++;
        if(done===products.length){
            exit();
        }

    });
}
function exit() {
    mongoose.disconnect();

}