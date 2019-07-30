signUserOutButton.addEventListener("click", function () {
    // Signs out current user
    firebase.auth().signOut().then(function () {
        window.location = 'index.html';
    }).catch(function (error) {
        // An error happened.
    });
})