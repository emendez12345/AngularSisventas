var app = angular.module("myApp",["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
    .when("/",{
        templateUrl:"cajero.html",
        controller:"productoControlador"
    })
    .when("/productos",{
        templateUrl:"productos.html",
        controller:"productoControlador"
    });
});


app.controller("productoControlador",function ($scope) {
    
    var n=2;
    var nCarrito=1;

    $scope.productos=[
        {id:1,nombre:"Chaquetas",precio:"20000"},
        {id:2,nombre:"Zapatos",precio:"80000"}
    ]

    $scope.carrito=[];

    $scope.addProducto=function () {
        
   
        var nombre=$scope.nombre;
        var precio=$scope.precio;
        
        if (nombre!=""&&precio!=""&&!isNaN(precio)) {
            console.log($scope.productos);
            n++;

            $scope.productos.push({id:n,nombre:nombre,precio:precio});
        
            $scope.nombre="";
            $scope.precio="";
        }

    }


        $scope.addCarrito=function () {
             //  SELECCIONAR UN PRODUCTO
            var id=$scope.productoSeleccionado;
            var cantidad=$scope.cantidad;
            var producto=$scope.productos.find(function (obj) {
                return obj.id==id;
            });
            if (producto!=undefined&&cantidad>0) {
                  
                   $scope.carrito.push({id:nCarrito,nombre:producto.nombre,precio:producto.precio,cantidad:cantidad,total:producto.precio*cantidad});
                   console.log($scope.carrito);
                   nCarrito++; 
                
            }
        }

        $scope.getTotalCarrito=function () {
            var total=0;
            $scope.carrito.forEach(x => {
                total +=x.total;
            });

            return total;
        }
});