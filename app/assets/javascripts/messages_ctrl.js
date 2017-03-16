/* global angular */

(function() {
  angular.module("app").controller("messagesCtrl", function($scope, $http) {
    $scope.setup = function(id) {
      // var paramsHash = {chatroom_id: id};
      $http({method: "GET", url: "/api/v1/messages.json", params: {chatroom_id: id}}).then(function(response) {
        $scope.messages = response.data;
      });
    };

    $scope.createNewMessage = function(body, currentUserId, chatroomId) {
      var params = {
        body: body,
        user_id: currentUserId,
        chatroom_id: chatroomId
      };
      $http.post("/api/v1/messages.json", params).then(function(response) {
        $scope.newMessageBody = "";
      });
    };
  });
})();