var app = angular.module("app.lands");

app.factory("svLands", ["$http", ($http) => {
    return {
        get: () => {
            return $http.get("/api/lands");
        },
        create: (landData) => {
            return $http.post("/api/lands/land", landData);
        },
        update: (landData) => {
            return $http.put("/api/lands/land", landData);
        },
        delete: (id) => {
            return $http.delete("/api/lands/land/"+id);
        }
    }
}]);
