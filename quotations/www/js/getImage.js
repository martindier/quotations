// To allow a random picture to be chosen using a number between 0 and array length

var random_images_array = ['aurora.jpg', 'aurora2.jpg', 'aurora4.jpg', 'cherrryblossom.jpg', 'cherryb2.jpg', 'cherryb3.jpg', 'cherryb4.jpg', 'f7R1ZH3.jpg', 'GMythicalIreland8.jpg', 'kerrry.jpg', 'lake.jpg', 'lake2.jpg', 'maxresdefault.jpg', 'mountainf.jpg', 'Mountains.jpg', 'MythicalIreland11.jpg', 'MythicalIreland12.jpg', 'MythicalIreland3.jpg', 'nlights2752392b.jpg', 'NorthernLig.jpg', 'northernlights.jpg', 'Northernlights31.jpg', 'northernlightslarge.jpg', 'NorthernLightsWinter.jpg', 'notheights.jpg', 'passagelintel.jpg', 'skelligislandsire.jpg', 'skelligs.jpg', 'sunrise.jpg', 'sunrise2.jpg', 'tara.jpg', 'trees.jpg', 'water.jpg'];

function getRandomImage(imgAr, path) {
    path = path || 'img/';
    var num = Math.floor(Math.random() * random_images_array.length);
    var img = random_images_array[num];
    var imgStr = '<img src="' + path + img + '" alt = "" width="100%" id="bkgimg"> ';
    var imgStr = path + img;
console.log(imgStr)
   // document.body.style.backgroundImage = "url(imgStr)";

    $("#bkgimg").attr("src", imgStr); 
    $("#bkgimg").attr("width", "100%");
    // $("#bkgimg").attr("height", "50%");
}







