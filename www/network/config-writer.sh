#!/bin/sh

read params

IFS="${IFS}&"
set $params

Args="$*"

cat > model_config.xml << EOF
<config>
	<initScript>
	</initScript>

EOF

$(echo -n > current_params.txt)

for i in $Args
do
	port=${i%=*}
	device=${i#*=}
	$(echo -n "$device "  >> current_params.txt)
	
	$(echo "	<$port>" >> model_config.xml)
	$(echo "		<$device />" >> model_config.xml)
	$(echo "	</$port>" >> model_config.xml)
done

cat >> model_config.xml << EOF

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

echo "HTTP/1.1 200 Modified"
