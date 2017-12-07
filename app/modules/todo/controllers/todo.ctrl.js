function TodoCtrl(TodoFactory) {
    var vm = this;
    vm.pageTitle = 'Todo<small>substitule</small>';
    vm.products = {
        Title: "Product Test",
        Sub: "Test",
        Price:13.54

    };

    _init();

    function _init() {
var calc = TodoFactory.calc();
    }


}

angular.module('todoApp')
    .controller('TodoCtrl', TodoCtrl);