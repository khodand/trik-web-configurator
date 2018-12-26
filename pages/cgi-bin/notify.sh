#!/bin/bash

#set -eoux 

. ./isOnTrik.sh

function myNotify {
	isOnTrikFunc
	if [ ! $? ]; then
		. ./allVarsForUserTest.txt
		export $(cut -d= -f1 allWarsForUserTest.txt)
		
		notify-send $1 "procces is launched"

		echo "HTTP/1.1 200 Modified"
		kill $$
	else
		echo "else insctruction"
	fi
}

notify "test"
