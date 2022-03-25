## Paso 1 - Instalación de <a href="https://docs.portainer.io/v/ce-2.11/start/install/server/docker/linux">Portainer.io</a>

Primero, cree el volumen que Portainer Server usará para almacenar su base de datos:
<br>
<code>docker volume create portainer_data</code><br>

Luego, descargue e instale el contenedor del servidor Portainer:<br>
<code>docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:2.11.</code><br>

## Paso 2
Iniciar portainer.io en http://localhost:9443 y crear una red.

## Paso 3
Crear un proyecto en el directorio de la aplicación, copiar el archivo **package.json** y ejecutar:
<br>
<code>npm install</code><br>

## Paso 4
Situarnos en la raiz del proyecto, donde se encuentra el archivo **docker-compose.yml** y ejecutamos:
<br>
<code>docker-compose build </code><br>
<code> docker-compose up </code><br>

