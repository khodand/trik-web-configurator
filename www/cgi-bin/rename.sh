#!/bin/sh

process_name="rename"
. ./notify.sh
notifyThenKill

read params

echo "$params" > /etc/hostname

echo "HTTP/1.1 201 Modified"

