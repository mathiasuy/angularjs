# Notas

*Enlazado unidireccional* Modificamos el modelo y se actualiza automaticamente lo que la vista muestra de ese modelo

*Enlazado bidireccional* Modificamos el modelo o la vista y se actualiza automaticamente lo que la vista muestra de ese modelo


### ng-

* **ng-click** para ejecutar métodos.
* **ng-controller** para asociar a un controlador
* **ng-repeat** es como un foreach, por dentro se pone por ejemplo "*item* in *items*" donde *items* es el nombre de la variable en el ambito el cual corresponde a una coleccion e *item* cada item de ese array.
* "*expense* in *expenses*" Para cada expense (esto puede llamarse x, a lo que sea) en expenses (nombre del arreglo) .


### FILTROS:


En la vista, se agrega a las variables de esta forma:

```
{{numeroDecimal}} --> se vería así: 11,1899
```

Para ver solo dos decimales se aplica el filtro *number:2*:

```
{{numeroDecimal | number:2}} --> se vería así: 11,18
```

Para poner todo en mayúscula:

```
{{texto | uppercase}}
```

[Más info](docs.angular.org/api/ng/filter)

