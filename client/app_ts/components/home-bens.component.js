var cadpat;
(function (cadpat) {
    'use strict';
    var HomeBensController = (function () {
        function HomeBensController($http, $window) {
            this.$http = $http;
            this.$window = $window;
            this.nomePessoa = 'Chico Buarque';
            this.listar();
        }
        ////////////////
        HomeBensController.prototype.listar = function () {
            var _this = this;
            this.$http.get('/api/v1/bens')
                .success(function (response) {
                _this.bens = response;
            })
                .error(function (message) {
                _this.$window.alert(message);
            });
        };
        HomeBensController.prototype.excluir = function (id) {
            var _this = this;
            if (!this.$window.confirm('Confirma a exclusão do bem id: ' + id + '?')) {
                return;
            }
            this.$http.delete('/api/v1/bens/' + id)
                .success(function (response) {
                _this.$window.alert('Bem excluído com sucesso!');
                _this.listar();
            })
                .error(function (message) {
                _this.$window.alert(message);
            });
        };
        HomeBensController.$inject = ['$http', '$window'];
        return HomeBensController;
    }());
    angular.module('cadpat')
        .component('homeBens', {
        templateUrl: 'app_ts/components/home-bens.component.html',
        controller: HomeBensController,
        controllerAs: 'vm',
    });
})(cadpat || (cadpat = {}));
