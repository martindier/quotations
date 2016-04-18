



var getPic=function() {alert("testdisplaymessage");
  // window.imagePicker.getPictures(
  //   function(results) {
  //     for (var i = 0; i < results.length; i++) {
  //       console.log('Image URI: ' + results[i]);
  //     }
  //   }, function (error) {
  //     console.log('Error: ' + error);
  //   }, {
  //     maximumImagesCount: 10,
  //     width: 800
  //   }
  // );
}




// To allow a random picture to be chosen
var image=['aurora.jpg','aurora2.jpg','aurora4.jpg','cherrryblossom.jpg','cherryb2.jpg','cherryb3.jpg','cherryb4.jpg','f7R1ZH3.jpg','GMythicalIreland8.jpg','ionic.png','kerrry.jpg','lake.jpg','lake2.jpg','maxresdefault.jpg','mike.png','mountainf.jpg','Mountains.jpg','MythicalIreland11.jpg','MythicalIreland12.jpg','MythicalIreland3.jpg','nlights2752392b.jpg','NorthernLig.jpg','northernlights.jpg','Northernlights31.jpg','northernlightslarge.jpg','NorthernLightsWinter.jpg','notheights.jpg','passagelintel.jpg','skelligislandsire.jpg','skelligs.jpg','sunrise.jpg','sunrise2.jpg','tara.jpg','trees.jpg','water.jpg'
];
// Random shuffle items
image.sort(function() {return 0.5 - Math.random()})
// Get third item in randomised array
var itemImage = image[2]   
