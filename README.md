# Веб-конфигуратор [ТРИК](https://github.com/trikset)

Избавляет пользователя от сложного конфигурирования контроллера с использованием ssh, предоставляя удобный веб-интерфейс.

### Установка

Склонируйте к себе репозиторий.
Перед запуском lighttpd запустите скрипт install.sh.
Для запуска lighttpg необходимо вызвать 
```sh
$ lighttpd -f lighttpd.conf
```
Откройте в браузере страницу  http://127.0.0.1/index.lighttpd.html

### Todos
- Добавить в `rename.sh` отладку при помощи `notify-send`
- Вынести проверку `/etc/version` в отдельную функцию
- Вынести манипуляции с `notify-send` в отдельную функцию
- Удалить лишние файлы
- Исправить подключение гироскопа и акселерометра
- Избавиться от явного указания `.txt` в файлах
- Выложить пробную версию на [meta-trik](https://github.com/trikset/meta-trik)
