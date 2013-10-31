'use strict';

angular.module('alfApp').controller('MappingCtrl', function ($scope, $http) {

    $scope.id = 1;
    $scope.Mapping = "";
    $scope.lastSelectionIndex = 0;

    $http.get('/api/mapping/' + $scope.id).success(function (mapping) {
        $scope.Mapping = mapping;
        console.log($scope.Mapping);
    });

    $scope.addOnClick = function (event, index, type) {

        angular.forEach($scope.Mapping.rectangles, function (value, key) {
            if (value.show) {
                $scope.lastSelectionIndex = key;
            }
        });

        var ev = {
            type: type,
            index: index,
            x: event.offsetX,
            y: event.offsetY,
            newOverlay: $(event.currentTarget),
            newPicture: $("div.img").eq(index),
            oldOverlay: $("div.rect").eq($scope.lastSelectionIndex),
            oldPicture: $("div.img").eq($scope.lastSelectionIndex)
        };

        console.log(ev);

        $scope.Mapping.rectangles[$scope.lastSelectionIndex].show = false;
        $scope.Mapping.rectangles[ev.index].show = true;

    }
});