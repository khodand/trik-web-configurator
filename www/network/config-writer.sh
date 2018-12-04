#!/bin/sh

read params

IFS="${IFS}&"
set $params

Args="$*"

model_config=model_config.xml
current_params=current_params.txt

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

	ports_config=$ports_config" "$device
	
	echo "	<$port>" >> $model_config
	echo "		<$device />" >> $model_config
	echo "	</$port>" >> $model_config
done

#echo "$ports_config" > test.txt

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

echo "HTTP/1.1 201 Modified"
