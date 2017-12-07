function TodoFactory(){
var factory = {
    mockToView:_mockToView
};
return factory;

function_mockToView(item){
    var result = {};

    if (angular.isUnderfined (item)){
        return;
    }

    if (angular.isUnderfined (item.Title) && typeof item.Title == String){
        result.titulo = item.Title; 
}
return result;
}
angular.module("todoApp").factory("TodoFactory", TodoFactory);