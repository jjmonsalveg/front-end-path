# Front end path

## Git 
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