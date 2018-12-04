#!/bin/sh

cat << EOF
HTTP/1.1 200 OK
Connection: close
Content-Type: text/plain, charset=us-ascii
Content-lenght: 10

EOF

response=`cat current_params.txt`
echo  "$response"

