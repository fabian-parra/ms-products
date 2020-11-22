# Microservicio de productos

Este servicio se encarga de únicamente la comunicación con la base de datos con los datos de productos

## Pre-requisitos

Para este proyecto se necesitan las siguientes tecnologías en tu computador:

* Docker \[[Mac](https://runnable.com/docker/install-docker-on-macos)\]\[[Linux](https://runnable.com/docker/install-docker-on-linux)\]
* NVM \[[Instalacion](https://github.com/nvm-sh/nvm)\]
* Descargar el proyecto https://github.com/walmartdigital/brand-discounts-db

## Instalacion

Sigue los siguientes pasos:

1. Ejecuta `nvm use` para utilizar la version node y npm configurada en el proyecto.
3. Realiza un `npm install`

## Ejecutar localmente

Como dependencias tenemos el proyecto brand-discounts-db, el cual debemos iniciar primero para que se levante la base de datos.
Luego se ejecuta el comando `npm start` el cual iniciará el servicio que escuchara por defecto en el puerto 8080.

## Construir imagen

Para contruir la imagen docker, solo se debe ejecutar el comando `npm build`

## Recursos disponibles

Se tienen los siguientes recursos accediendo con el método GET:

* /products/:id : Esto retornará un solo producto dado un id.
* /products?match=cadena: Esto buscara un listado de productos donde el parámetro match se usara para filtrar lo que coincida en los campos brand y description de los productos.

## Variables de entorno

Se debe tener encuenta que hay varias variables de entorno que deben ser asignadas si no se usan los valores por defecto:

* PORT: Puerto en el cual levantará el microservicio, por defecto es el 8080
* DB_HOST: Host de la base de datos, por defecto será 127.0.0.1
* DB_USER: Usuario de la base de datos, por defecto será brandDiscountsUse
* DB_PASSWORD: Contraseña del usuario de la base de datos.



