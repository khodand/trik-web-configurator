const app = new Vue({
    el: '#app',
    data: {
        texts: {
            'ru': {
                'configurator': 'Конфигуратор',
                'home': 'Домой',
                'port': "Порты",
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
                'frequency': 'Частота',
                'range': 'Диапазон',
                'cancel': 'Отменить',
                'changeNameWifi': 'Поменять имя Wifi',
                'state': 'Состояние',
                'servoMotors': 'Сервомоторы',
                'powerMotors': 'Силовые моторы',
                'encoders': 'Энкодеры',
                'rangeSensors': 'Датчики дистанции',
                'analogSensors': 'Аналоговые сенсоры',
                'advancedSet' : 'Расширенные настройки',
                'infoSet': 'Данные настройки рассчитаны для опытных пользователей.',
                'network': 'Сеть',
                'submit' : 'Отправить',
                'accessPoint' : 'Точка доступа'
            },
            'en': {
                'configurator': 'Сonfigurator',
                'home': 'Home',
                'port': "Ports",
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
                'frequency': 'Frequency',
                'range': 'Range',
                'cancel': 'Cancel',
                'changeNameWifi': 'Edit wifi name',
                'state': 'State',
                'servoMotors': 'Servomotors',
                'powerMotors': 'Power motors',
                'encoders': 'Encoders',
                'rangeSensors': 'Range sensors',
                'analogSensors': 'AnalogSensor',
                'advancedSet' : 'Advanced settings',
                'infoSet': 'These settings are designed for advanced users.',
                'network': 'Network',
                'submit' : 'Submit',
                'accessPoint' : 'Access point'
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
        accelRange: "2G",
        wifiName: "",
        e1State: "true",  //
        e2State: "true",  // эти 4 переменные привязаны к ON и OFF в енкодерах используй эти переменные
        e3State: "true",  //
        e4State: "true",  //
        scriptPath: "/cgi-bin/",
        buttonChangeState: "false",
        buttonChangeLanguage: "",
        hostName: ""
    },
    created: function () {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", this.scriptPath + "get-current.sh", false);
        xhr.setRequestHeader('Content-Type', 'text-plain');
        xhr.send();
        var x = "asdas";
        if (xhr.status != 200) {
            alert('Error ' + xhr.status + ': ' + xhr.statusText);
        } else {
            var text = xhr.responseText;
            text = text.split('\n');
            ports = text[0].split(' ');
            ag = text[1].split(' ');
        }
        this.s1 = ports[0];
        this.s2 = ports[1];
        this.s3 = ports[2];
        this.s4 = ports[3];
        this.s5 = ports[4];
        this.s6 = ports[5];
        this.a1 = ports[6];
        this.a2 = ports[7];
        this.a3 = ports[8];
        this.a4 = ports[9];
        this.a5 = ports[10];
        this.a6 = ports[11];
        this.d1 = ports[12];
        this.d2 = ports[13];
        this.d3 = ports[14];
        this.e1 = ports[15];
        this.e1State = ports[16];
        this.e2 = ports[17];
        this.e2State = ports[18];
        this.e3 = ports[19];
        this.e3State = ports[20];
        this.e4 = ports[21];
        this.e4State = ports[22];
        this.m1 = ports[23];
        this.m2 = ports[24];
        this.m3 = ports[25];
        this.m4 = ports[26];
        this.video1 = ports[27];
        this.video2 = ports[28];
        this.gyroscope = ag[3];
        this.accelerometer = ag[0];
        this.gyroFreq = ag[4];
        this.gyroRange = ag[5];
        this.accelFreq = ag[1];
        this.accelRange = ag[2];


    },
    methods: {
        httpPostRequest(path, params) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", path);
            xhr.setRequestHeader('Content-Type', 'text-plain');

            xhr.send(params);
        },
        getPorts() {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", this.scriptPath + "config-writer.sh");
            xhr.setRequestHeader('Content-Type', 'text-plain');

            params = `S1=${this.s1}&S2=${this.s2}&S3=${this.s3}&S4=${this.s4}&S5=${this.s5}&S6=${this.s6}&A1=${this.a1}&A2=${this.a2}&A3=${this.a3}&A4=${this.a4}&A5=${this.a5}&A6=${this.a6}&D1=${this.d1}&D2=${this.d2}&D3=${this.d3}&E1=${this.e1}?${this.e1State}&E2=${this.e2}?${this.e2State}&E3=${this.e3}?${this.e3State}&E4=${this.e4}?${this.e4State}&M1=${this.m1}&M2=${this.m2}&M3=${this.m3}&M4=${this.m4}&video1=${this.video1}&video2=${this.video2}`

            xhr.send(params);
        },
        changeLang(lang) {
            this.lang = lang;
        },
        getGA() {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", this.scriptPath + "ag-config.sh");
            xhr.setRequestHeader('Content-Type', 'text-plain');
            xhr.send(`${this.accelerometer} ${this.accelFreq} ${this.accelRange} ${this.gyroscope} ${this.gyroFreq} ${this.gyroRange}`);
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
            this.e1State = "true";
            this.e2State = "true";
            this.e3State = "true";
            this.e4State = "true";
        },
        defaultGA() {
            this.gyroscope = "ON";
            this.accelerometer = "ON";
            this.gyroFreq = "95";
            this.gyroRange = "2000";
            this.accelFreq = "50";
            this.accelRange = "2G";
        },
        editWIFIName() {
            var xhr = new XMLHttpRequest();
            this.hostName = this.wifiName;
            xhr.open("POST", this.scriptPath + "rename.sh");
            xhr.setRequestHeader('Content-Type', 'text-plain');
            xhr.send(`${this.wifiName}`);
        },
        buttonSUP(){
            if(this.buttonChangeState === "true") this.buttonChangeState = "false";
            else this.buttonChangeState = "true";
        },
        regShowLanguage(){
            if(window.innerWidth > 993) return "true";
            else if(this.buttonChangeState === "true") return "true";
            else return "false";
        }

    }
});


