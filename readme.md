инициализация репозиитория
git init

состояние
git status

добавить
git add .

создать коммит
git commit -m "some commit"

отправить в гит
git push <метка удаленного-репозитория> <ветка>
git push origin main

забрать с гит
git pull <метка удаленного-репозитория> <ветка>
git pull origin main

test
git merge

подключеие репозитория
git remote add origin git@github.com:ruslan1984/shop.git

Работа с ветками

на какой ветке
git branch

переключиться на ветку
git checkout <название ветки>

создать ветку и переключиться на нее
git checkout -b <название ветки>
git checkout -b develop
