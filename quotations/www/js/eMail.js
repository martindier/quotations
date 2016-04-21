// replace this with js not the angular below....go to gerards second link and click email......then copy and paste relevant section s of code


// var e_Mail=function(){cordova.plugins.email.open({
//     to:      'max@mustermann.de',
//     subject: 'Greetings',
//     body:    '<h1>Nice greetings from Leipzig</h1>',
//     isHtml:  true
// });}



var e_Mail=function(){
  module.controller('ThisCtrl', function($cordovaEmailComposer) {

 $cordovaEmailComposer.isAvailable().then(function() {
   // is available
 }, function () {
   // not available
 });

  var email = {
    to: 'martin.dier@gmail.com',
    cc: 'martin.dier@gmail.com',
    bcc: ['john@doe.com', 'jane@doe.com'],
    attachments: [
      'file://img/logo.png',
      'res://icon.png',
      'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
      'file://README.pdf'
    ],
    subject: 'Great Quotation',
    body: 'Hi. I saw this quotation on my quotations app and thought of you',
    isHtml: true
  };

 $cordovaEmailComposer.open(email).then(null, function () {
   // user cancelled email
 });
});
}