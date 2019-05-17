FROM alpine:latest
RUN apk add --no-cache nodejs npm

WORKDIR /app

COPY . /app

RUN npm install mysql express

EXPOSE 3000

ENTRYPOINT ["node"]

CMD ["server.js"]
