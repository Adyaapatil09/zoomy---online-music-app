var myApp = angular.module("Zoomy", []);

myApp.run(function ($rootScope) {
  $rootScope.txtSearch = "";
});

myApp.controller("loginSignupCtrl", function ($scope, $window, $rootScope) {
  $scope.showError = false;
  $scope.errorMsg = "";
  $scope.mode = "Login";

  $scope.toggleMode = function () {
    if ($scope.mode === "Login") {
      $scope.mode = "Signup";
      var el = document.querySelector(".loginSignupDeciderContainer");
      if (el) {
        el.style = "top: 90%";
      }
    } else {
      $scope.mode = "Login";
      var el = document.querySelector(".loginSignupDeciderContainer");
      if (el) {
        el.style = "top: 80%";
      }
    }
  };
});
