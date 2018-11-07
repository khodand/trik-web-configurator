#!/bin/sh

rm -f config.txt

read params

IFS="${IFS}&"
set $params

Args="$*"

for i in $Args
do
	$(echo "$i" >> config.txt)
done
