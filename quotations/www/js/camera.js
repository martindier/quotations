
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.camera);
}




function getImage(){
  navigator.camera.getPicture(cameraSuccess, cameraError);
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
2 new functions success and error