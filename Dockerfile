# Descarrega la versió 16 de Node
FROM node:16
# Crea un directori en el container en la ruta indicada
RUN mkdir -p /usr/src/webserver
# Es situa en el directori
WORKDIR /usr/src/webserver
# Copia package.json en el directori creat
COPY package.json .
# Instal·la els mòduls a partir del que s'ha espcifiact a package.json
RUN npm install
# Copia el directori actual al directori creat
COPY . .
# Executa npm start
CMD ["npm", "start"]