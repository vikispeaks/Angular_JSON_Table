// JavaScript Document
angular.module('Testing')
    .factory('dataService', ['$http','$q', function($http,$q) {
        function _getData() {
            var deferred = $q.defer();
           // var portfolioID = portfolioService.getPortfolioId($location.path());
            var url = '../master/data/data.json';
            $http.get(url).then(
                function(response) {
                    deferred.resolve(response.data.table_data);
                },
                function(response) {
                    deferred.reject(response);
                }
            );
            return deferred.promise;
        }
        return {
            getData: _getData
        };
    }])