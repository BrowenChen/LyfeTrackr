angular.module('MyApp')
  .controller('AddCtrl', ['$scope', '$alert', 'Show', function($scope, $alert, Show) {
    
    $scope.daily = "Daily";

    $scope.addTask = function(){
      alert("TaskASDssssA");
    }


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

//Task Contorllers here
function taskController($scope){
  $scope.daily = "daily";

  $scope.addTask = function(){
    $alert("ADDING TASK");
  }
};



//TEST HACKS CONTROLLERS HERE ----------------





//Student 
function StudentController($scope){

  $scope.studentDescription = "Owen";
  $scope.action = "None Set";
  $scope.studentNumber = 0;
  $scope.rightNumber = 0;
  $scope.wrongNumber = 0;

  $scope.studentList = []; 


  $scope.addRightCount = function(){
    this.rightNumber++;
  };

  $scope.addWrongCount = function(){
    this.wrongNumber++;
  };

  $scope.addStudent = function(student){
    this.studentList.push(student);
  };


  $scope.removeAllStudents = function(){
    this.studentList = [];
  }

  $scope.studentOwen = {
    name: "Owen",
    status: {rightNumber: 0, 
             wrongNumber: 0}
  };  
};



