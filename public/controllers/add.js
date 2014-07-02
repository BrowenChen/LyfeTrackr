angular.module('MyApp')
  .controller('AddCtrl', ['$scope', '$alert', 'Show', function($scope, $alert, Show) {
    
    $scope.addShow = function() {
      Show.save({ showName: $scope.showName },
        function() {
          $scope.showName = '';
          $scope.addForm.$setPristine();
          $alert({
            content: 'TV show has been added.',
            placement: 'top-right',
            type: 'success',
            duration: 3
          });
        },
        function(response) {
          $scope.showName = '';
          $scope.addForm.$setPristine();
          $alert({
            content: response.data.message,
            placement: 'top-right',
            type: 'danger',
            duration: 3
          });
        });
    };
  }]);



//TEST HACKS CONTROLLERS HERE ----------------


//Student 
function StudentController($scope){
  $scope.studentDescription = "Owen";
  $scope.action = "None Set";
  $scope.studentNumber = 0;
  $scope.rightNumber = 0;
  $scope.wrongNumber = 0;

  $scope.addRightCount = function(){
    this.rightNumber++;
  };

  $scope.addWrongCount = function(){
    this.wrongNumber++;
  };
};

