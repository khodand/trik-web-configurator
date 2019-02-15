#!/bin/sh

read params

. ./notify.sh
notifyThenKill

echo "$params" > /etc/hostname

echo "HTTP/1.1 201 Modified"

