#!/bin/sh

read params

if [[ $params = "ON" ]]
then
	modprobe l3g42xxd
	modprobe l3g42xxd_spi
else
	rmmod l3g42xxd_spi
	rmmod l3g42xxd
fi

echo "HTTP/1.1 200 Modified"
