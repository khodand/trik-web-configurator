const app = new Vue({
    el: '#app',
    data: {
        texts: {
            'ru': {
                'configurator': 'Конфигуратор',
                'home': 'Домой',
                'port': "Конфигуратор портов",
                'develop': 'В разработке',
                'gyroscope': 'Гироскоп',
                'accelerometer': 'Акселерометр',
                'menu': 'Меню',
                'save': 'Сохранить',
                'en': 'Англ',
                'ru': 'Рус',
                'default': 'Станадартные настройки',
                'confirmOffer': 'Вы действительно хотите сохранить настройки?',
                'yes': 'Да',
                'no': 'Нет',
                'confirm': 'Подтверждение',
                'frequency' : 'Частота',
                'range' : 'Диапазон',

            },
            'en': {
                'configurator': 'Сonfigurator',
                'home': 'Home',
                'port': "Port Сonfigurator",
                'develop': 'in developing',
                'gyroscope': 'Gyroscope',
                'accelerometer': 'Accelerometer',
                'menu': 'Menu',
                'save': 'Save',
                'en': 'En',
                'ru': 'Ru',
                'default': 'Default settings',
                'confirmOffer': 'Do you really want to save the settings?',
                'yes': 'Yes',
                'no': 'No',
                'confirm': 'Confirm',
                'frequency' : 'Frequency',
                'range' : 'Range',
            }
        },
        lang: 'en',
        s1: "angularServomotor",
        s2: "angularServomotor",
        s3: "angularServomotor",
        s4: "angularServomotor",
        s5: "angularServomotor",
        s6: "manipulatorServomotor",
        a1: "sharpGP2Sensor",
        a2: "sharpGP2Sensor",
        a3: "touchSensor",
        a4: "touchSensor",
        a5: "lightSensor",
        a6: "lightSensor",
        d1: "sonarSensor",
        d2: "sonarSensor",
        d3: "volumeSensor",
        e1: "encoder95",
        e2: "encoder95",
        e3: "encoder95",
        e4: "encoder95",
        m1: "motor350",
        m2: "motor350",
        m3: "motor350",
        m4: "motor350",
        video1: "lineSensor",
        video2: "photo",
        gyroscope: "ON",
        accelerometer: "ON",
        gyroFreq: "95",
        gyroRange: "2000",
        accelFreq: "50",
        accelRange: "2G"
    },
    created: function () {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/cgi-bin/get_current.sh", false);
        xhr.setRequestHeader('Content-Type', 'text-plain');
        xhr.send();
        var x = "asdas";
        if (xhr.status != 200) {
            alert('Error ' + xhr.status + ': ' + xhr.statusText);
        } else {
            var text = xhr.responseText;
            x = text.split(' ');
        }
        this.s1 = x[0];
        this.s2 = x[1];
        this.s3 = x[2];
        this.s4 = x[3];
        this.s5 = x[4];
        this.s6 = x[5];
        this.a1 = x[6];
        this.a2 = x[7];
        this.a3 = x[8];
        this.a4 = x[9];
        this.a5 = x[10];
        this.a6 = x[11];
        this.d1 = x[12];
        this.d2 = x[13];
        this.d3 = x[14];
        this.e1 = x[15];
        this.e2 = x[16];
        this.e3 = x[17];
        this.e4 = x[18];
        this.m1 = x[19];
        this.m2 = x[20];
        this.m3 = x[21];
        this.m4 = x[22];
        this.video1 = x[23];
        this.video2 = x[24];


    },
    methods: {
        getHTTPS() {
            var xhr = new XMLHttpRequest();
            xhr.open("post", "/cgi-bin/config-writer.sh");
            xhr.setRequestHeader('Content-Type', 'text-plain');

            var params = `s1=${this.s1}&s2=${this.s2}&s3=${this.s3}&s4=${this.s4}&s5=${this.s5}&s6=${this.s6}&a1=${this.a1}&a2=${this.a2}&a3=${this.a3}&a4=${this.a4}&a5=${this.a5}&a6=${this.a6}&d1=${this.d1}&d2=${this.d2}&d3=${this.d3}&e1=${this.e1}&e2=${this.e2}&e3=${this.e3}&e4=${this.e4}&m1=${this.m1}&m2=${this.m2}&m3=${this.m3}&m4=${this.m4}&video1=${this.video1}&video2=${this.video2}`

            xhr.send(params);
        },
        changeLang(lang) {
            this.lang = lang;
        },
        getHTTPS1() {
            window.location.href = `https://google.com/gyroscope=${this.gyroscope}/accelerometer=${this.accelerometer}/gyroFreq=${this.gyroFreq}/gyroRange=${this.gyroRange}/accelFreq=${this.accelFreq}/accelRange=${this.accelRange}`
        },
        defaultPorts() {
            this.s1 = "angularServomotor";
            this.s2 = "angularServomotor";
            this.s3 = "angularServomotor";
            this.s4 = "angularServomotor";
            this.s5 = "angularServomotor";
            this.s6 = "manipulatorServomotor";
            this.a1 = "sharpGP2Sensor";
            this.a2 = "sharpGP2Sensor";
            this.a3 = "touchSensor";
            this.a4 = "touchSensor";
            this.a5 = "lightSensor";
            this.a6 = "lightSensor";
            this.d1 = "sonarSensor";
            this.d2 = "sonarSensor";
            this.d3 = "volumeSensor";
            this.e1 = "encoder95";
            this.e2 = "encoder95";
            this.e3 = "encoder95";
            this.e4 = "encoder95";
            this.m1 = "motor350";
            this.m2 = "motor350";
            this.m3 = "motor350";
            this.m4 = "motor350";
            this.video1 = "lineSensor";
            this.video2 = "photo";
        },
        defaultGA() {
            this.gyroscope = "ON";
            this.accelerometer = "ON";
            this.gyroFreq = "95";
            this.gyroRange = "2000";
            this.accelFreq = "50";
            this.accelRange = "2G";
        }

    }
});
