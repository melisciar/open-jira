# Next.js OpenJira App

Para correr localmente, se necesita la base de datos

```
    docker-compose up -d
```

El -d significa **detached**

## Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

- MongoDB URL Local:

```
    mongodb://localhost:27017/entriesdb
```

## Reconstruir los módulos de Node y levantar Next

```
   npm install
   npm run dev
```

## Llenar la base de datos con información de pruebas

Llamar a

```
    http://localhost:3000/api/seed
```
