var app = angular.module("app.lands", ["xeditable"]);

app.controller("landController", ['$scope', 'svLands', ($scope, svLands) => {
    $scope.appName = "Quoc Bao Real Estate";
    $scope.tableData = {};
    $scope.loading = true;
    $scope.lands = [];

    // load data from API
    svLands.get().then((response) => {
        $scope.lands = response.data;
        $(document).ready( function () {
            $('#landTable').DataTable({
                data: $scope.lands - 1
            });
        });
        $scope.loading = false;
    });

    $scope.updateLand = (land) =>  {
        console.log("Update land: ", land);
        $scope.loading = true;
        svLands.update(land).then((response) => {
            $scope.lands = response.data;
            location.reload();
            $(document).ready( function () {
                $('#landTable').DataTable({
                    data: $scope.lands - 1
                });
            });
            $scope.loading = false;
        });
    };

    $scope.deleteLand = (land) => {
        console.log("Delete land: ", land);
        $scope.loading = true;
        var result = confirm("Xác nhận xoá?");
        if (result) {
            svLands.delete(land._id).then((response) => {
                $scope.lands = response.data;
                location.reload();
                $(document).ready( function () {
                    $('#landTable').DataTable({
                        data: $scope.lands - 1
                    });
                });
                $scope.loading = false;
            });
        }
    };
    // $scope.createTodo = () => {
    //     $scope.loading = true;

    //     var todo = {
    //         text: $scope.formData.text,
    //         isDone: false
    //     }

    //     svTodos.create(todo).then((response)=>{
    //         $scope.todos = response.data;
    //         $scope.formData.text = "";
    //         $scope.loading = false;
    //     });
    // };

    // $scope.updateTodo = (todo) =>  {
    //     console.log("Update todo: ", todo);
    //     $scope.loading = true;
    //     svTodos.update(todo).then((response) => {
    //         $scope.todos = response.data;
    //         $scope.loading = false;
    //     });
    // };

    // $scope.deleteTodo = (todo) => {
    //     console.log("Delete todo: ", todo);
    //     $scope.loading = true;
    //     svTodos.delete(todo._id).then((response) => {
    //         $scope.todos = response.data;
    //         $scope.loading = false;
    //     });
    // };
}]);