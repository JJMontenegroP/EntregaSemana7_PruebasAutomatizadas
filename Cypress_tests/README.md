## Cypress 

Cypress es un framework de pruebas automatizadas para aplicaciones web. Se utiliza comúnmente para realizar pruebas de extremo a extremo en aplicaciones web. Permite simular interacciones de usuarios, como hacer clic en botones, ingresar texto en campos de formulario y navegar por diferentes páginas. Además, Cypress proporciona una amplia gama de funciones y comandos que facilitan la escritura de pruebas robustas y mantenibles.


## Aplicación Objetivo de pruebas![image](https://user-images.githubusercontent.com/124526219/236736518-0c9ae180-1e16-4704-a737-f1e26f336489.png)

- Ghost v 5.47.1 

 

## Librerías utilizadas: 

- Node v16.20.0 

- cypress v12.12.0



## Funcionalidades probadas 

- Editar información de la cuenta

- Importar miembros

- Personalizar información general

- Crear Tag

 

## Pasos para poder ejecutar los escenarios de pruebas con la herramienta Cypress 

 
### Preparación del ambiente 

1. Descargar el repositorio [EntregaSemana7_PruebasAutomatizadas](https://github.com/JJMontenegroP/EntregaSemana7_PruebasAutomatizadas) de la rama master 

2. Abrir la carpeta kraken_tests/cypress_tests/ con el IDE de su gusto 

3. Ejecutar en la raíz del proyecto:  npm install cypress --save-dev para descargar las librerías requeridas por cypress 

### Ejecución de pruebas 

1. Correr Ghost localmente 

2. Es importante saber que no se debe tener cuenta creada, ya que las pruebas hacen la creación automática de esta con los parametros que se encuentran en los scripts de cada uno de los escenariso de prueba. En caso de tener una cuenta anteriormente creada, es necesario borrar la base de datos del ghost de la siguiente forma:

  - Pararse en el directorio de la aplicación ghost
  - ejecutar el comando rm -f content/data/ghost-local.db

3. Ejecutar cypress: En la carpeta Cypress_tests ejecutar el comando **npx cypress open** para ejecutar cypress.

 - Dirigirse a la opción E2E Testing
![image](https://github.com/JJMontenegroP/EntregaSemana7_PruebasAutomatizadas/assets/124220935/7dec4148-8b63-4012-92f9-d077925f7722)

- Selecionar Chromium y posterior, Start E2E testing
- ![image](https://github.com/JJMontenegroP/EntregaSemana7_PruebasAutomatizadas/assets/124220935/e513010a-ddf2-4a13-96c5-d09e2611634a)

4. Ejecutar primeramente el escenario de crear cuenta que e encuentra fuera de las carpetas de las estrategias de generación de datos, luego ya se pueden ejecutar los otros escenarios en cualquier orden.

## Escenarios de pruebas
[Escenarios de pruebas](https://github.com/JJMontenegroP/EntregaSemana7_PruebasAutomatizadas/wiki/1.1.-Escenarios-de-pruebas-dise%C3%B1ado-y-ejecutados-con-Cypress)

## Estrategias de generación de data

