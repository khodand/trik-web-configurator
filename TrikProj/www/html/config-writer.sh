#!/bin/sh

$(echo "Script is running" >> /home/andrei/site/logs.txt)

read params

echo "$params"

IFS="${IFS}&"
set params
Args="$*"

for i in $Args
do
	$(echo -e "$i" >> config.txt)
done
