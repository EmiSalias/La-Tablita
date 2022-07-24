INTEGRANTES: Mariano , Emiliano Salias

3)
a) ¿Qué es una base de datos?

Es un conjunto de datos que comparten una o varias características en común y que se almacenan en formato digital para su consulta y explotación ya sea mediante un sistema informático de una empresa o negocio en particular.

b) ¿Qué es una tabla? ¿Cómo funciona?

Una tabla en base de datos es un tipo de modelado de datos donde se guarda una información recogida por un sistema. Es decir, son objetos o estructuras que contienen los datos organizados en filas y columnas. Cada fila representa un registro único, y cada columna un campo dentro del registro.
El campo se refiere al nombre de la columna, es un dato único y se le establece un tipo de dato.
El registro es cada fila que conforma la tabla, son los datos que nosotros almacenamos.

c) ¿Qué comandos de SQL conoces? Describe su utilidad.
•    CREATE DATABASE: crea una nueva base de datos vacía.
•    CREATE TABLE: crea  una nueva tabla, donde la información se almacena realmente.
•    ALTER TABLE: modifica una tabla ya existente.
•    SELECT: lee o selecciona tus datos.
•    INSERT: añade o inserta nuevos datos.
•    UPDATE: cambia o actualiza datos existentes.
•    DELETE : borra datos existentes.
•    REPLACE: cambia o reemplaza datos nuevos o ya existentes.

4)
En la consola ejecutamos npm init --yes
Luego npm install express mysql morgan
npm install nodemon -D
Agregamos en el script de package.json "dev": "nodemon index.js"
Creamos un index.js donde importamos los modulos
Pusimos los middlewares
Levantamos el servidor en el puerto 3000
Creamos database.js y lo vinculamos a la base de datos Tablita
En el index importamos una ruta por cada tabla
Rutas: En todas las rutas se agrego un .get para vizualizar por id los datos solicitados
    /categories - Inner Join mostrando en conjunto las categorias con los productos ordenados por ID
    /customers - En la base de datos hicimos un stored procedures llamado addCustomer donde se puede añadir un nuevo cliente
    /order_products - Se muestran los productos filtrados cuando la cantidad es menor a 5 y el total mayor a 300
    /orders - En la base de datos se hizo una columna nueva de proveedores, y realizamos updates, y luego se filtra por ordenes pedidas a traves de un boolean
    /positions - Se muestran los resultados donde el id sea mayor a 1 y el job sea diferente de Cajero
    /products - En la base de datos hicimos un stored procedures llamado editProduct donde se puede modificar solo el precio del producto
    /staff - Hicimos un right join donde se muestra el id y nombre del empleado y su puesto laboral
    /stocks - Se ordeno por cantidad de forma ascendente
    /stores - Hicimos un left join donde se muestra el id y nombre del empleado y la tienda donde trabaja
En la consola ejecutamos npm run dev para que se levante el servidor

SINTAXIS DE addCustomer (por si no se puede ver en La Tablita.sql)
CREATE DEFINER=`root`@`localhost` PROCEDURE `addCustomer`(
	IN _id INT,
    IN _name VARCHAR(50),
    IN _email VARCHAR(100)
)
BEGIN
	IF _id = 0 THEN
		INSERT INTO customers (name, email)
        VALUES (_name, _email);
        
        SET _id = LAST_INSERT_ID();
        
	ELSE
		UPDATE customers
		SET name = _name, email = _email
        WHERE id = _id;
        
	END IF;
    
    SELECT _id AS id;
END

SINTAXIS DE editProduct (por si no se puede ver en La Tablita.sql)
CREATE DEFINER=`root`@`localhost` PROCEDURE `editProduct`(
	IN _id INT,
    IN _price FLOAT
)
BEGIN
	IF _id = 0 THEN
		INSERT INTO prudcts (price)
        VALUE (_price);
        
        SET _id = LAST_INSERT_ID();
        
	ELSE
		UPDATE products
        SET price = _price
        WHERE id = _id;
        
	END IF;
    
    SELECT _id AS id;
END