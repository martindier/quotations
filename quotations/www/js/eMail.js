// Add app alias
cordova.plugins.email.addAlias('gmail', 'com.google.android.gm');

 // Specify app by name or alias
cordova.plugins.email.open({
    app: 'gmail',
    subject: 'Sent from Gmail'
})





document.addEventListener('deviceready', function () {
    // cordova.plugins.email is now available
}, false);



cordova.plugins.email.isAvailable(
    function (isAvailable) {
        // alert('Service is not available') unless isAvailable;
    }
);




// document.addEventListener('deviceready', function () {
//    cordova.plugins.email.isAvailable(
//     function (isAvailable)
//         // alert('Service is not available') unless isAvailable;
//     }
// ); // cordova.plugins.email is now available
// }, false);


// cordova.plugins.email.isAvailable(
//     urischeme, function (isAvailable, withScheme) {
//         // alert('Service is not available') unless isAvailable;
//     }
// );


function open(){
  console.log("here1");
    cordova.plugins.email.open({
      to:      'martin.dier@gmail.com',
      cc:      '',
      bcc:     [''],
      subject: 'Great Quotation',
      body:    'I saw this Quotation on my quotations app and thought of you.'
  });
}
