<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Pokedex

<p align="center">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" width="160" alt="Bulbasaur" />
</p>

## Ejecutar en modo desarrollo

1. Clonar el repositorio

```
git clone git@github.com:JhonEduard26/pokedex.git
```

2. Ejecutar

```
pnpm install
```

3. Tener Nest CLI instalado

```
npm install -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo **.env.template** y renombrar la copia a **.env**

6. Colocar las variables de entorno definidas en el **.env**

7. Ejecutar la aplicacion en modo desarrollo

```
pnpm run start:dev
```

8. Reconstruir la base de datos con la semilla (solo en desarrollo)

```
http://localhost:3000/api/seed
```

## Stack usado

- NestJS
- MongoDB

## Production build

1. Crear el archivo

```
.env.prod
```

2. LLenar las variables de entonrno de prod

3. Crear la nueva imagen

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
