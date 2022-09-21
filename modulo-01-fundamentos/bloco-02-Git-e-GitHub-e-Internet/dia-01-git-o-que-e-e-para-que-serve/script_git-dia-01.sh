#!/bin/sh

# Cria um diretório no computador
mkdir git-test

# Acessa a pasta criada
cd git-test

# Versiona o diretório criado
git init

# Abre a pasta no VSCode
code .

# Cria arquivo README
touch README.md

# Adiciona o arquivo criado a staging area e realiza um commit
git add README.md
git commit -m "Adiciona README.md"

# Cria uma nova branch
git checkout -b add-readme-file

# Altera o README e retorna para a branch main. Depois, realiza o merge das alterações
echo teste >> README.md
git checkout main
git merge add-readme-file

# Cria e acessa uma branch nova chamada update-readme
git checkout -b update-readme

# Cria o arquivo infos.txt
touch infos.txt

# Adiciona as alteraçõesem staging e realiza um commit
git add .
git commit -m "Adiciona arquivo infos.txt"

# Adiciona meu nome e sobrenome ao arquivo infos.txt
echo "Marlon Couto" >> infos.txt

# Adiciona novamente as alteraçṍes em staging e realiza um commit
git add.
git commit -m "Atualiza arquivo infos.txt"

# Cria uma branch nova a partir dessa, chamada add-infos
git checkout -b add-infos

# Escreva um resumo no README de como funciona o versionamento
code README.md

# Adiciona as alterações em staging e realiza o commit
git add .
git commit -m "Atualiza arquivo README"

# Volta para a branch update-readme e realiza o merge
git checkout update-readme && git merge add-infos

# Retorna para a branch main e realiza o mege
git checkout main && git merge update-readme