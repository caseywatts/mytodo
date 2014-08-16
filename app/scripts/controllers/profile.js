'use strict';

// a factory to create a re-usable profile object
// we pass in a username and get back their synchronized data
app.factory("Profile", ["$firebase", function($firebase) {
  return function(username) {
    // create a reference to the user's profile
    var ref = new Firebase("https://vivid-fire-3333.firebaseio.com/profiles/").child(username);

    // return it as a synchronized object
    return $firebase(ref).$asObject();
  }
}]);

app.controller("ProfileCtrl", ["$scope", "Profile",
  function($scope, Profile) {
    // put our profile in the scope for use in DOM
    $scope.profile = Profile("physicsmarie");
  }
]);