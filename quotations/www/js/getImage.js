// am attempting to make the chosen image reside in the background so buttons
//and quotes can hover over it...but no luck yet...url address  format
//....not sure if device ready code is necessary
// can this page see the stylesheet


// To allow a random picture to be chosen using a number between 0 and array length width="305" height="312"

var random_images_array=['aurora.jpg','aurora2.jpg','aurora4.jpg','cherrryblossom.jpg','cherryb2.jpg','cherryb3.jpg','cherryb4.jpg','f7R1ZH3.jpg','GMythicalIreland8.jpg','kerrry.jpg','lake.jpg','lake2.jpg','maxresdefault.jpg','mountainf.jpg','Mountains.jpg','MythicalIreland11.jpg','MythicalIreland12.jpg','MythicalIreland3.jpg','nlights2752392b.jpg','NorthernLig.jpg','northernlights.jpg','Northernlights31.jpg','northernlightslarge.jpg','NorthernLightsWinter.jpg','notheights.jpg','passagelintel.jpg','skelligislandsire.jpg','skelligs.jpg','sunrise.jpg','sunrise2.jpg','tara.jpg','trees.jpg','water.jpg'
];

function getRandomImage(imgAr, path) {
    path = path || 'img/'; 
    var num = Math.floor( Math.random() * random_images_array.length );
    var img = random_images_array[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "" width="100%" id="body"> ';
    document.write(imgStr); document.close();
}



//code for camera to take a picture....will need to store image in random_images_array


document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.camera);
}

navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);


function getImage(){getPictures(
    function(results) {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
    }, function (error) {
      console.log('Error: ' + error);
    }, {
      maximumImagesCount: 10,
      width: 800
    }
  );
}
  window.imagePicker.ge




