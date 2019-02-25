#!/bin/sh

read params

./notifyThenKill.sh $(basename -- "$0") $params $$

echo "$params" > /etc/hostname

echo "HTTP/1.1 201 Modified"

