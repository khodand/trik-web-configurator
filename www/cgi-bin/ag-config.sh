#!/bin/sh

read params

set $params

system_config=/home/root/trik/system-config.xml
accel_path=/sys/class/misc/mma845x/
gyro_path=/sys/class/misc/l3g42xxd/


sed -i "2c${1} ${2} ${3} ${4} ${5} ${6}" current-params
sed -i 's!^\./ag-config\.sh.*$!./ag-config.sh ${1} ${2} ${3} ${4} ${5} ${6}!' $system_config


. ./notify.sh
notifyThenKill 


if [[ $1 = "ON" ]]
then
	modprobe mma845x
	local_frequency=0
	local_range=0
	case $2 in 
		800)
			local_frequency=0
			;;
		400) local_frequency=1
			;;
		200) local_frequency=2
			;;
		100) local_frequency=3
			;;
		50) local_frequency=4
			;;
		12_5) local_frequency=5
			;;
		6_25) local_frequency=6
			;;
		1_56) local_frequency=7
			;;
		*)
			;;
	esac

	case $3 in 
		2G)	local_range=0
			;;
		4G)	local_range=1
			;;
		8G)	local_range=2
			;;
		*)
			;;
	esac

	echo $frequency > ${accel_path}odr_selection
	echo $range > ${accel_path}fs_selection
else
	rmmod mma845x
fi



if [[ $4 = "ON" ]]
then
	modprobe l3g42xxd
	modprobe l3g42xxd_spi
	frequency=0
	range=0
	case $5 in 
		95) local_frequency=0
			;;
		190) local_frequency=1
			;;
		380) local_frequency=2
			;;
		760) local_frequency=3
			;;
		*)
			;;
	esac

	case $6 in 
		250)	local_range=0
			;;
		500)	local_range=1
			;;
		2000)	local_range=2
			;;
		*)
			;;
	esac

	echo $frequency > ${gyro_path}odr_selection
	echo $range > ${gyro_path}fs_selection
else
	rmmod l3g42xxd_spi
	rmmod l3g42xxd
fi

echo "HTTP/1.1 200 Modified"
