	// This is called with the results from from FB.getLoginStatus().
  	function statusChangeCallback(response) {
    	console.log('statusChangeCallback');
    	console.log(response);

	    if (response.status === 'connected') {
	      	// Logged into your app and Facebook.
	      	console.log("logged into Facebook");

	    	var uid = response.authResponse.userID;
    		var accessToken = response.authResponse.accessToken;

    		console.log(uid);

    		// show divs for favorite & make a comment
    		document.getElementById("fav").style.visibility = "visible";
    		document.getElementById("lvComment").style.visibility = "visible";

    		
    		// onclick:
    		// if unselected, 
    		// toggle to selected & push to db
    		// else if selected
    		// toggle to unselected, and delete from db

    		// check to see if user favorited field
	    	// if fb user id == user id in ufavs array
	    	// then the star is selected
	    	// else
	    	// the star is deselected




	    } else {
	    	console.log("not logged in")
	    	document.getElementById("fav").style.visibility = "hidden";
    		document.getElementById("lvComment").style.visibility = "hidden";
	    }
	  }

	// This function is called when someone finishes with the Login
  	// Button.  See the onlogin handler attached to it in the sample
  	// code below.
  	function checkLoginState() {
  		console.log("checkLoginState");
    	FB.getLoginStatus(function(response) {
      		statusChangeCallback(response);
    	});
  	}

