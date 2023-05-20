## Cypress 

Cypress es un framework de pruebas automatizadas para aplicaciones web. Se utiliza comúnmente para realizar pruebas de extremo a extremo en aplicaciones web. Permite simular interacciones de usuarios, como hacer clic en botones, ingresar texto en campos de formulario y navegar por diferentes páginas. Además, Cypress proporciona una amplia gama de funciones y comandos que facilitan la escritura de pruebas robustas y mantenibles.


## Aplicación Objetivo de pruebas![image](https://user-images.githubusercontent.com/124526219/236736518-0c9ae180-1e16-4704-a737-f1e26f336489.png)

- Ghost v 5.47.1 

 

## Librerías utilizadas: 

- Node v16.20.0 

- cypress v12.12.0



## Funcionalidades probadas 

- Crear cuenta nueva

- Crear Post nuevo

- Importar miembros

- Personalizar información general

- Crear Tag

- Elimiar tag

- Crear página

- Eliminar página

- Modulo de contraseñas olvidadas
 

## Pasos para poder ejecutar los escenarios de pruebas con la herramienta Cypress 

 
### Preparación del ambiente 

1. Descargar el repositorio https://github.com/danierazome/Pruebas-automatizadas de la rama master 

2. Abrir la carpeta kraken_tests/cypress_tests/ con el IDE de su gusto 

3. Ejecutar en la raíz del proyecto:  npm install cypress --save-dev para descargar las librerías requeridas por cypress 

### Ejecución de pruebas 

1. Correr Ghost localmente 

2. Es importante saber que no se debe tener cuenta creada, ya que las pruebas hacen la creación automática de esta con los parametros que se encuentran en los scripts de cada uno de los escenariso de prueba. En caso de tener una cuenta anteriormente creada, es necesario borrar la base de datos del ghost de la siguiente forma:

  - Pararse en el directorio de la aplicación ghost
  - ejecutar el comando rm -f content/data/ghost-local.db
 

## Escenarios de pruebas
[Escenarios de pruebas](https://github.com/JJMontenegroP/EntregaSemana7_PruebasAutomatizadas/wiki/1.1.-Escenarios-de-pruebas-dise%C3%B1ado-y-ejecutados-con-Cypress)

## Ejecucion de pruebas de regresion visual

1. Se ejucutan los escenarios de pruebas con la herramienta Cypress para la version antigua 3.41.1 generando asi reportes en la carpeta report en la raiz del proyecto cypress_tests/cypress donde se podra encontrar una carpeta por cada uno de escenarios de pruebas ejecutados y dentro de esta habrá un folder llamadado screenshots donde se puede encontrar un screenshot por cada paso perteneciente al escenario de prueba ejecutado
2. Se ejucutan los escenarios de pruebas con la herramienta kraken para la version nueva 5.47.1 generando asi reportes en la carpeta report en la raiz del proyecto cypress_tests/cypress donde se podra encontrar una carpeta por cada uno de escenarios de pruebas ejecutados y dentro de esta habrá un folder llamadado screenshots donde se puede encontrar un screenshot por cada paso perteneciente al escenario de prueba ejecutado
3. Se descarga de este repositorio el proyecto ReseambleJS para kraken el cual se encuenta en kraken_tests/ResembleJS_kraken
4. Se lanza el comando npm install para que descargue las librerias necesarias para compilar el proyecto de ResembleJS_kraken
5. Se copia los screenshots generados en el paso 1 para el escenario x en el proyecto de ResembleJS_kraken en la ubicación ResembleJS_kraken/scenario/old-version y los screenshots generados en el paso 2 para el escenario x en la carpeta ResembleJS_kraken/scenario/new-version
6. Se ejecuta el comando npm index.js para correr las pruebas de regresion visual
7. Se dirigue a ResembleJS_kraken/report/FechaDeEjecucionDeLaRegresionVisual
8. Se abre el report.html para visualizar el resultado de las pruebas
