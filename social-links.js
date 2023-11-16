// SOCIAL LINKS

// USE lowercase FOR ALL OPTIONS





var facebooki	= "yes"			// SHOW FACEBOOK

var facelink	= "https://www.facebook.com/allwebcodesign"


var twitteri	= "yes"			// SHOW TWITTER

var twitlink	= "http://twitter.com/allwebcodesign"


var linkedini	= "yes"			// SHOW LINKEDIN

var linkedlink	= "https://www.linkedin.com/"


var instagrami	= "yes"			// SHOW INSTAGRAM

var instalink	= "https://www.instagram.com/"


var contactusi	= "yes"			// SHOW CONTACT ICON

var contactlink	= "contact.htm"		// CONTACT ICON LINK


var homei	= "yes"			// SHOW HOME ICON

var homelink	= "index.html"		// HOME ICON LINK



// OTHER VARIABLES

var hidesoc	= "no"		// HIDE ALL ICONS | yes | no |
var linktype	= "_blank"	// SOCIAL LINK TYPE USE | _blank | _top |
var linktypec	= "_top"	// CONTACT LINK TYPE USE | _blank | _top |




// COPYRIGHT 2020 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law

// YOU DO NOT NEED TO EDIT BELOW THIS LINE


   if (hidesoc == "no") {

document.write('<div id="social-links">');

// FACEBOOK

   if (facebooki == "yes") {

document.write('<a href="'+facelink+'" target="'+linktype+'"><img src="picts/icons/social_facebook-white.png" class="socialicon soccolor-1" alt="Connect on Facebook"></a>');

}

// TWITTER

   if (twitteri == "yes") {

document.write('<a href="'+twitlink+'" target="'+linktype+'"><img src="picts/icons/social_twitter-white.png" class="socialicon soccolor-2" alt="Follow us on twitter"></a>');

}

// LINKEDIN

   if (linkedini == "yes") {

document.write('<a href="'+linkedlink+'" target="'+linktype+'"><img src="picts/icons/social_linkedin-white.png" class="socialicon soccolor-3" alt="Connect on LinkedIn"></a>');

}

// INSTAGRAM

   if (instagrami == "yes") {

document.write('<a href="'+instalink+'" target="'+linktype+'"><img src="picts/icons/social_instagram-white.png" class="socialicon soccolor-4" alt="Instagram"></a>');

}

// CONTACT OR LOCATION

   if (contactusi == "yes") {

document.write('<a href="'+contactlink+'" target="'+linktypec+'"><img src="picts/icons/icon_contact-white.png" class="socialicon soccolor-5" alt="Contact Us"></a>');

}

// HOME ICON

   if (homei == "yes") {

document.write('<a href="'+homelink+'" target="'+linktypec+'"><img src="picts/icons/icon_home-white.png" class="socialicon soccolor-6" alt="Home"></a>');

}

document.write('</div>');

}

else {
document.write('<br>');
}
