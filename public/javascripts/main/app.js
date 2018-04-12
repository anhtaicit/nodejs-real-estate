var app = angular.module("app.lands", ["xeditable"]);

app.controller("landController", ['$scope', 'svLands', ($scope, svLands) => {
    $scope.appName = "Quoc Bao Real Estate";
    $scope.soldStatus = [
        {value: true, text: "Đã bán"},
        {value: false, text: "Chưa bán"}
    ];
    $scope.loading = true;
    $scope.lands = [];
    // load data from API
    svLands.get().then((response) => {
        $scope.lands = response.data;
        $(document).ready( function () {
            if ( $.fn.dataTable.isDataTable( '#landTable' ) ) {
                table = $('#landTable').DataTable({
                    aaSorting: [[13, 'desc']]
                });
            }
            else {
                table = $('#landTable').DataTable( {
                    aaSorting: [[13, 'desc']],
                    retrieve: true
                } );
            }
            $scope.$apply();
        });
        $scope.loading = false;
    });

    $scope.updateLand = (land) =>  {
        console.log("Update land: ", land);
        $scope.loading = true;
        svLands.update(land).then((response) => {
            $scope.lands = response.data;
            $(document).ready( function () {
                if ( $.fn.dataTable.isDataTable( '#landTable' ) ) {
                    table = $('#landTable').DataTable();
                    location.reload();
                }
                else {
                    table = $('#landTable').DataTable( {
                        retrieve: true,
                    } );
                    location.reload();
                }
                $scope.$apply();
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
                $(document).ready( function () {
                    if ( $.fn.dataTable.isDataTable( '#landTable' ) ) {
                        table = $('#landTable').DataTable();
                        location.reload();
                    }
                    else {
                        table = $('#landTable').DataTable( {
                            retrieve: true,
                        } );
                        location.reload();
                    }
                    $scope.$apply();
                });
            });
        }
        $scope.loading = false;
    };
    $scope.createLand = () => {
        $scope.loading = true;

        var land = {
            area: $scope.formData.area,
            block: $scope.formData.block,
            portion: $scope.formData.portion,
            owner: $scope.formData.owner,
            ownerPhone: $scope.formData.ownerPhone,
            referrer: $scope.formData.referrer,
            referrerPhone: $scope.formData.referrerPhone,
            depositDate: $scope.formData.depositDate,
            price: $scope.formData.price,
            note: $scope.formData.note,
            isSold: $scope.formData.isSold,
            soldDate: $scope.formData.soldDate,
            addedDate: Date.now()
        }

        svLands.create(land).then((response)=>{
            $scope.lands = response.data;
            $scope.formData.area = "";
            $scope.formData.block = "";
            $scope.formData.portion = "";
            $scope.formData.owner = "";
            $scope.formData.ownerPhone = "";
            $scope.formData.referrer = "";
            $scope.formData.referrerPhone = "";
            $scope.formData.depositDate = "";
            $scope.formData.price = "";
            $scope.formData.note = "";
            $scope.formData.isSold = "";
            $scope.formData.soldDate = "";
            $(document).ready( function () {
                if ( $.fn.dataTable.isDataTable( '#landTable' ) ) {
                    table = $('#landTable').DataTable();
                    location.reload();
                }
                else {
                    table = $('#landTable').DataTable( {
                        retrieve: true,
                    } );
                    location.reload();
                }
                $scope.$apply();
            });
            $scope.loading = false;
        });
    };
}]);