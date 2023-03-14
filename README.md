# Front end path

## Git 
### Adding your SSH key to the ssh-agent

1. Comenzar el ssh-agent en segundo plano
```shell
eval "$(ssh-agent -s)"
```
2. Open the file ~/.ssh/config:
 ```shell
vim ~/.ssh/config
```

3. Per each ssh key add an entry similar to this one:

```shell
Host github.com
  HostName github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/github
```
4. Change file's permission:

```shell
chmod  600 ~/.ssh/config
``` 
6. Per each ssh key generated Add them to the ssh-agent and store your passphrase in the keychain i.e:

```shell
ssh-add --apple-use-keychain  ~/.ssh/github
```