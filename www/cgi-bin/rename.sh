#!/bin/sh

set -euxo pipefail

read params

echo "$params" > /etc/hostname

echo "HTTP/1.1 201 Modified"

