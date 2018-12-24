#!/bin/sh

# Directory for log files from lighttpd
mkdir tmp

# Export env variables to be able to run notify-send
env > www/cgi-bin/allVarsForUserTest.txt
