$(document).ready(function () {
   $(".thumbnail").click(function () {
       var readUrl = 'read.html';
        window.location.replace(readUrl);
   }).zoom();

   $("#register").click(function () {
       window.location.replace('register.html');
   });

});