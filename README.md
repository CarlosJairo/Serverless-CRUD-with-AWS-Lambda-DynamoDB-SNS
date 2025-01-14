# Aplicación CRUD Serverless con AWS Lambda, DynamoDB y SNS

Este proyecto es una aplicación serverless construida con el framework Serverless. Utiliza AWS Lambda para la lógica de negocio, DynamoDB para el almacenamiento de datos, y SNS para notificaciones. La aplicación incluye un conjunto de APIs RESTful para gestionar datos de usuarios, junto con funcionalidades adicionales como notificaciones por correo electrónico y generación de tokens.

## Características

- **Operaciones CRUD**: Crear, Leer, Actualizar y Eliminar usuarios utilizando una tabla DynamoDB.
- **Notificaciones**: Envío de notificaciones por correo electrónico a través de AWS SNS.
- **Generación de Tokens**: Endpoint seguro para recuperar tokens de usuario.
- **Framework Serverless**: Simplificación del despliegue y gestión de infraestructura.
- **Variables de Entorno**: Gestionadas de forma segura con AWS Systems Manager Parameter Store.

## Tecnologías Utilizadas

- **Runtime**: Node.js 20.x
- **Infraestructura**: AWS Lambda, DynamoDB, SNS, SSM Parameter Store
- **Framework**: Serverless Framework
- **Gateway API**: HTTP APIs de AWS API Gateway

## Requisitos Previos

1. Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).
2. Configurar AWS CLI con las credenciales correspondientes.
3. Instalar el framework Serverless de manera global:
   ```bash
   npm install -g serverless