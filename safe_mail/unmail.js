jQuery(document).ready(function($){

	var url    = window.location.href;
	var regEx  = /([a-zA-Z0-9_\-\.]+)(@)([a-zA-Z0-9_\-\.]+)/;
  var regEx2 = /([a-zA-Z0-9_\-\.]+)(]tod[)([a-zA-Z0-9_\-\.]+)(]ta[)([a-zA-Z0-9_\-\.]+)/;
  var my_email = null;

$('a[href^="mailto:"]').each(function() {

  var email         = null;
  var current_mail  = this.href.match(regEx2);

  if (current_mail  != null) {
        email  = current_mail[0];
        email  = email.split("").reverse().join("");
        email  = email.replace('[at]', '@').replace('[dot]', '.');
  }
  my_email = email;
  this.href = "mailto:" + email;

 });

$('body a').filter(function() {
        return $(this).html().match(regEx2);
    }).each(function() { 
        res =  $(this).html($(this).html().replace(regEx2, my_email));
    })
})
