#!/bin/sh

read params

IFS="${IFS}&"
set $params

sed -i "2c${1} ${2} ${3} ${4} ${5} ${6}" current-params

. ./notify.sh
myNotify 

accel_path=/sys/class/misc/mma845x/
gyro_path=/sys/class/misc/l3g42xxd/

if [[ $1 = "ON" ]]
then
	modprobe mma845x
	case $2 in 
		800)
			echo 0 > ${accel_path}odr_selection
			;;
		400)
			echo 1 > ${accel_path}odr_selection
			;;
		200)
			echo 2 > ${accel_path}odr_selection
			;;
		100)
			echo 3 > ${accel_path}odr_selection
			;;
		50)
			echo 4 > ${accel_path}odr_selection
			;;
		12_5)
			echo 5 > ${accel_path}odr_selection
			;;
		6_25)
			echo 6 > ${accel_path}odr_selection
			;;
		1_56)
			echo 7 > ${accel_path}odr_selection
			;;
		*)
			;;
	esac

	case $3 in 
		2G)
			echo 0 > ${accel_path}fs_selection
			;;
		4G)
			echo 1 > ${accel_path}fs_selection
			;;
		8G)
			echo 2 > ${accel_path}fs_selection
			;;
		*)
			;;
	esac
else
	rmmod mma845x
fi



if [[ $4 = "ON" ]]
then
	modprobe l3g42xxd
	modprobe l3g42xxd_spi

	case $5 in 
		95)
			echo 0 > ${gyro_path}odr_selection
			;;
		190)
			echo 1 > ${gyro_path}odr_selection
			;;
		380)
			echo 2 > ${gyro_path}odr_selection
			;;
		760)	
			echo 3 > ${gyro_path}odr_selection
			;;
		*)
			;;
	esac

	case $6 in 
		250)
			echo 0 > ${gyro_path}fs_selection
			;;
		500)
			echo 1 > ${gyro_path}fs_selection
			;;
		2000)
			echo 2 > ${gyro_path}fs_selection
			;;
		*)
			;;
	esac
else
	rmmod l3g42xxd_spi
	rmmod l3g42xxd
fi

echo "HTTP/1.1 200 Modified"
