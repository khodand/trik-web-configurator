#!/bin/sh

read params

process_name="rename"
. ./notify.sh
notifyThenKill

echo "$params" > /etc/hostname

echo "HTTP/1.1 201 Modified"

