# Front end path

## Git 

### Instalacion

#### Mac

1. Se instala Homebrew [click aquí](https://brew.sh/)

- Abrir el terminal de macOS
- Pegar el siguiente comando en el terminal:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

```

2. Se instala Git

- Luego de haber instlado Homebrew pegamos en la consola el siguiente comando:

```
brew install git
```
#### Ubuntu(Juan)

 ##### Pasos para instalar Git en sistema operativo Ubuntu.

- **1.** Desde tu consola , instala Git mediante el siguiente comando:

**Primero usar ---->** sudo apt-get update
**Luego ---->** sudo apt-get install git

- **2.** Escribe **git --version** para verificar la versión y que esta se haya instalado correctamente.

Debe salirte la version de git instalada. ejemplo: **git version 2.9.2**



### Configuracion(Vicky)

### Comandos(3 por persona)

- git add: añade cambios de archivos en tu directorio. En el siguiente ejemeplo se añaden todos los cambiaos realizados:
```
git add
```
- git commit: toma todos los cambios escritos en el index, crea un nuevo objeto de confirmación que apunta a él y establece la rama para que apunte a esa nueva confirmación. Ejemplo:
```
git commit -m ‘Comprometer cambios añadidos’
```
*El comentario que se haga se sugiere hacerlo como un mandato*
- git status: te muestra el estado de los archivos en el index en comparación con los del directorio de trabajo.
```
git status
```
- **git pull:** Fusiona todos los cambios que se han hecho en el repositorio remoto con el directorio de trabajo local.

- **git grep:** Le permite al usuario buscar frases y palabras específicas en los árboles de confirmación, el directorio de trabajo y en el área de preparación.

- **git log:** Se usa para ver el historial del repositorio listando ciertos detalles de la confirmación. 





### Añadiendo ssh keys al ssh-agent

1. Comenzar el ssh-agent en segundo plano
```shell
eval "$(ssh-agent -s)"
```
2. Abrir el archivo ~/.ssh/config:
 ```shell
vim ~/.ssh/config
```

3. Para cada ssh key añada una entrada similar a esta:

```shell
Host github.com
  HostName github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/github
```
4. Cambiar los permisos del archivo:

```shell
chmod  600 ~/.ssh/config
``` 
6. Por cada ssh key añadir al ssh-agent y almacenar su passphrase en la keychain ejemplo:

```shell
ssh-add --apple-use-keychain  ~/.ssh/github
```


## Recursos y referencias(Lo que consigan)

### Git


### videos


### Markdown



## Glosario (lo que consigan)

- **Comando whoami**: es un comando del tipo Unix, proviene de la concatenación de las palabras en inglés ¿Who am I? que significa, ¿Quién soy?. Es un comando simple, utilizado para imprimir el nombre de usuario efectivo del usuario actual cuando se invoca, que se entiende como el nombre del usuario en sesión.
- **HTTP**: significa Hyper Text Transfer Protocol (Protocolo de Transferencia de Hipertexto). Es el protocolo utilizado por tus dispositivos para comunicarse con las páginas web, pero no se encuentra protegido de forma segura.
- **SSH**: es un programa que permite acceder a otro ordenador a través de la red, ejecutar comandos en la máquina remota y mover ficheros entre dos.
- **¿Qué es el comando LS?**: Este comando nos permite listar un directorio determinado con todo su contenido. Al poner el comando ls nos mostrará todos los archivos y carpetas que existen dentro del directorio en el que nos encontramos.

- **Permisos UNIX- LINUX**: En los Sistemas Unix, la gestión de los permisos que los usuarios y los grupos de usuarios tienen sobre los archivos y las carpetas, se realiza mediante un sencillo esquema de tres tipos de permisos que son:


  -permiso de lectura **( r ) read**
  -permiso de escritura **(w) write**
  -permiso de ejecución **(x) execute**

- **¿Que es un usuario root?**: Es una cuenta de usuario especial que no pertenece a ningún grupo de acceso, el usuario root puede visualizar, editar o utilizar cualquier objeto de datos en el sistema. Prioridad: el usuario root es siempre un usuario de prioridad.

- **¿Que es markdown?**
Es una forma sencilla de agregar formato a textos en la web y funciona incorporando algunos caracteres a nuestro contenido.





  





