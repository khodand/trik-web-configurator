#!/bin/sh

read params

set $params

system_config=/home/root/trik/system-config.xml #путь к файлу может быть не верным
accel_path=/sys/class/misc/mma845x/
gyro_path=/sys/class/misc/l3g42xxd/


sed -i "2c${1} ${2} ${3} ${4} ${5} ${6}" current-params
sed -i 's!^\./ag-config\.sh.*$!./ag-config.sh ${1} ${2} ${3} ${4} ${5} ${6}!' $system_config


. ./notify.sh
myNotify 


if [[ $1 = "ON" ]]
then
	modprobe mma845x
	frequency=0
	range=0
	case $2 in 
		800)
			frequency=0
			;;
		400)
			frequency=1
			;;
		200)
			frequency=2
			;;
		100)
			frequency=3
			;;
		50)
			frequency=4
			;;
		12_5)
			frequency=5
			;;
		6_25)
			frequency=6
			;;
		1_56)
			frequency=7
			;;
		*)
			;;
	esac

	case $3 in 
		2G)
			range=0
			;;
		4G)
			range=1
			;;
		8G)
			range=2
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
		95)
			frequency=0
			;;
		190)
			frequency=1
			;;
		380)
			frequency=2
			;;
		760)	
			frequency=3
			;;
		*)
			;;
	esac

	case $6 in 
		250)
			range=0
			;;
		500)
			range=1
			;;
		2000)
			range=2
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
