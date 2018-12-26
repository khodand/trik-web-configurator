#!/bin/bash

function myNotify {
	if [ ! -e /etc/version ]; then
		#echo "HTTP/1.1 200 Modified" >> test.txt

		. ./allVarsForUserTest
		export $(cut -d= -f1 allVarsForUserTest)
		notify-send "Procces is launched" "It is not TRIK controller"
		return

		#echo "HTTP/1.1 200 Modified"
		#kill $$
	fi
}

