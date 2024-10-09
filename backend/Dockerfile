# Etapa 1: Compilação da aplicação
FROM maven:3.8.4-openjdk-17 AS build
WORKDIR /app

# Copia o arquivo pom.xml e baixa as dependências
COPY backend/pom.xml .
RUN mvn dependency:go-offline

# Copia o código fonte e compila a aplicação
COPY backend/src ./src
RUN mvn clean package -DskipTests

# Etapa 2: Imagem final de execução
FROM openjdk:17-jdk-alpine
WORKDIR /app

# Copia o arquivo JAR gerado na primeira etapa
COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar app.jar

# Porta onde a aplicação Spring Boot irá rodar
EXPOSE 8080

# Comando para rodar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]
