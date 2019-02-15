#!/bin/sh

read params

IFS="${IFS}\."

set $params

number=$(ls /var/trik/log/ | grep -cE "$1") 

cat << EOF
HTTP/1.1 200 OK
Connection: close
Content-Type: text/plain, charset=us-ascii
Content-lenght: 10

EOF

if [[ number -gt 0 ]] then
	echo "True"
else
	echo "False"
fi
