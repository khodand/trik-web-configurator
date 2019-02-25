#!/bin/sh

if [ ! -e /etc/version ]; then
	. ./allVarsForUserTest
	export $(cut -d= -f1 allVarsForUserTest)
	notify-send "Process $1 is launched" "$*"

	echo "HTTP/1.1 200 Modified"
	kill $3
fi
