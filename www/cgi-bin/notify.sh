#!/bin/bash

function notifyThenKill {
	if [ ! -e /etc/version ]; then
		. ./allVarsForUserTest
		export $(cut -d= -f1 allVarsForUserTest)
		notify-send "Procces is launched" "It is not TRIK controller"

		echo "HTTP/1.1 200 Modified"
		kill $$
	fi
}

