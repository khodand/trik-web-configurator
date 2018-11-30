#!/bin/sh

read params

if [[ $params = "ON" ]]
then
	modprobe mma845x
else
	rmmod mma845x
fi

echo "HTTP/1.1 200 Modified"
