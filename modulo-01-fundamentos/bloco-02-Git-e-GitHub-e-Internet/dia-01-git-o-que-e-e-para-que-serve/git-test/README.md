# Como funciona o versionamento no Git

O primeiro passo é ter uma pasta versionada utilizando o comando `git init`. O segundo passo é criar uma branch nova com o comando `git checkout nome-da-branch` ou `git checkout -b nome-da-branch`. Em seguida, fazemos as alterações necessárias em nosso código e adicionamos os arquivos alterados à _staging area_ com o comando `git add .`. Realizamos então o _commit_ das alterações com o comando `git commit -m "mensagem de commit"`.

É importante realizar commits com frequência para verificar o progresso do projeto e criar checkpoints que podem ser úteis caso algo dê errado.

Ao realizar todas as alterações, fazemos o _push_ com o comando `git push -u origin "nome-da-branch"`.

_Let's Code_