FROM node:20-alpine3.17

# Definindo o diretório de trabalho dentro do contêiner
WORKDIR /app

# Definindo a timezone do sistema
RUN apk add tzdata
RUN cp /usr/share/zoneinfo/America/Boa_Vista /etc/localtime
RUN echo "America/Boa_Vista" > /etc/timezone

# Instalando as dependências do projeto
# RUN npm i

# Compilando o projeto
# RUN npm run build

# Expondo a porta padrão do Next.js
EXPOSE 3000