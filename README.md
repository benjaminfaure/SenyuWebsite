Senyu

créer un fichier .env à la racine (l'ensemble des clés nécessaires est dans .env.example)

Lancer l'application

```sh
docker build -t senyu/website .
docker run -d -p 5000:5000 senyu/website
```
