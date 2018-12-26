#!/bin/sh

read params

IFS="${IFS}&"
set $params

. ./notify.sh
myNotify "acc and ggee"

Args="$*"

model_config=model-config.xml
rm $model_config

current_params=current-params.txt

cat > $model_config << EOF
<config>
	<initScript>
	</initScript>

EOF


ports_config=""

for i in $Args
do
	port=${i%=*}
	device=${i#*=}

	echo "	<$port>" >> $model_config

	if [ $port = "E1" ] || [ $port = "E2" ] || [ $port = "E3" ] || [ $port = "E4" ]
	then
		encoder=${device%\?*}
		invert=${device#*\?}
		ports_config=$ports_config" "$encoder" "$invert
		echo "		<$encoder invert=\"$invert\" />" >> $model_config 
	else
		ports_config=$ports_config" "$device
		echo "		<$device />" >> $model_config
	fi

	echo "	</$port>" >> $model_config
done


sed -i "1c${ports_config}" $current_params


cat >> $model_config << EOF
<!-- On-board sensors. -->
	<!-- If model is not using those, they can be turned off to save system resources, by deleting them or
		 commenting them out. -->
	<accelerometer />
	<gyroscope />

	<!-- Optional modules -->
	<gamepad />
	<mailbox />

	<!-- Example of custom FIFO sensor -->
	<!--
	<soundSensor>
		<fifo />
	</soundSensor>
	-->
</config>
EOF

if [ ! -e /etc/version ]; then

  . ./allVarsForUserTest.txt
  export $(cut -d= -f1 allVarsForUserTest.txt)

  notify-send "model-config.xml" "`cat model-config.xml`"
else
	cp model-config.xml /home/root/trik/	
fi


echo "HTTP/1.1 201 Modified"

