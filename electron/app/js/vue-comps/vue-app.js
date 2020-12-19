function MyEventEmitter() {

    const channels = {};

    // 註冊事件
    const on = (channel, func) => channels[channel] = func;

    // 呼叫事件
    const emit = (channel, args) => channels[channel](args);

    return {on, emit}
}

function openFile(filePath) {

    const totalFilePath = window.pathResolver(filePath);
    if (window.confirm(`請問您要開啟檔案 \n ${totalFilePath} 嗎 ?`)) {
        ipcRenderer.send('openFile-main', totalFilePath);
    }
}

const emitter = new MyEventEmitter();

Vue.component('app-title', {
    template: `<h1>取餐 / 出餐系統管理器 v{{version}}</h1>`,
    data() {
        return {
            version: '1.1.4'
        }
    },
})

// Define a new component called log-console at Vue Global
Vue.component('log-console', {
    template: `
        <div id="console-container" class="mt-20">
            <div class="flex text-20 text-white justify-between pl-10 bg-gray">
                <span id="console-title">Console - {{showType}}</span>
                <div class="flex mr-10 items-center">
                    <button class="console-btn" @click="showType = 'Nginx'">Nginx</button>
                    <button class="console-btn" @click="showType = 'Api'">API</button>
                </div>
            </div>
            <div class="api-logs">
                {{logs}}
            </div>
        </div>
    `,
    mounted() {

        emitter.on('clear-api-logs', () => this.apiLogs = '');
        emitter.on('clear-nginx-logs', () => this.nginxLogs = '');

        const ipcRenderer = window.ipcRenderer;

        ipcRenderer.on('api-logs-msg', (event, arg) => {

            console.log('api-logs-msg !!');

            this.apiLogs += arg;
            /*
            const strArray = arg.split('\n');

            for (let i = 0; i < strArray.length; i++) {
                const str = strArray[i];
                if (i === strArray.length - 1) apiLogsDiv.append(str);
                else {
                    apiLogsDiv.append(str);
                    apiLogsDiv.append(document.createElement("br"));
                }
            }
             */
        });

        ipcRenderer.on('nginx-logs-msg', (event, arg) => {

            console.log('nginx-logs-msg !!');

            this.nginxLogs += arg;
            /*
            const strArray = arg.split('\n');

            for (let i = 0; i < strArray.length; i++) {
                const str = strArray[i];
                if (i === strArray.length - 1) nginxLogsDiv.append(str);
                else {
                    nginxLogsDiv.append(str);
                    nginxLogsDiv.append(document.createElement("br"));
                }
            }
             */
        });

    },
    computed: {
        logs() {
            return (this.showType === 'Api') ? this.apiLogs : this.nginxLogs
        }
    },
    methods: {},
    data() {

        return {
            showType: 'Api',
            nginxLogs: '',
            apiLogs: '',
        }
    }
})

Vue.component('nginx-row', {
    template:
        `<div class="flex mb-6">
            <div class="w-130">
                <button @click="openInstallGuide">管理器安裝教學</button>
            </div>
            <div class="w-100">
                <span class="name-padding"
                      :class="{ 'bg-green' : isStart , 'text-white' : isStart }" >
                      Nginx
                </span>
            </div>
            <span id='nginxPort' 
                  class="break-words w-200">
                {{nginxPort.join(',')}}
            </span>
            <div>
                <button @click="startNginx" :disabled="isStart">Start</button>
                <button @click="stopNginx" :disabled="!isStart">Stop</button>
                <button @click="openConfig">Config</button>
                <button @click="openLogs">Logs</button>
            </div>
        </div>`,
    mounted() {

        const ipcRenderer = window.ipcRenderer;

        emitter.on('startNginx-success', (ports) => {

            this.isStart = true;
            this.nginxPort = ports;
        });

        ipcRenderer.on('startNginx-success', (event, arg) => {

            emitter.emit('clear-nginx-logs');
            // window.nginxLogsDiv.innerHTML = '';

            console.log('startNginx-success !!');
            ipcRenderer.send('start-get-nginx-logs-main');
            ipcRenderer.send('get-nginx-port-main');

            this.isStart = true;
        });

        ipcRenderer.on('stopNginx-success', (event, arg) => {

            console.log('stopNginx-success !!');
            ipcRenderer.send('stop-get-nginx-logs-main');

            this.nginxPort = [];
            this.isStart = false;
        });

        ipcRenderer.on('get-nginx-port-success', (event, ports) => {

            console.log('get-nginx-port-success !! ports=', ports);
            this.nginxPort = ports;
        });
    },
    methods: {

        openInstallGuide() {

            window.ipcRenderer.send('openUrl-main', 'https://hackmd.io/@c36ICNyhQE6-iTXKxoIocg/BJucMFFRL');
        },

        startNginx() {

            console.log('startNginx-main 🚀🚀🚀');
            window.ipcRenderer.send('startNginx-main')
        },

        stopNginx() {

            console.log('🛑🛑🛑 stopNginx-main');
            window.ipcRenderer.send('stopNginx-main')
        },

        openConfig() {

            openFile('./nginx/conf/nginx.conf');
        },

        openLogs() {

            openFile('./nginx/logs/access.log');
        },
    },
    data() {

        return {
            // the nginx server status ( true = running / false = stop )
            isStart: false,
            // the ports that nginx serving
            nginxPort: [],
        }
    }
})

Vue.component('api-row', {
    template:
        `<div class="flex" style="margin-bottom: 6px">
            <div class="w-130">
                <button @click="openUseGuide">系統使用指南</button>
            </div>
            <div class="w-100">
                <span class="name-padding"
                      :class="{ 'bg-green' : isStart , 'text-white' : isStart }">
                      API
                </span>
            </div>
            <span id='apiPort' 
                  class="break-words w-200">
                {{apiPort.join(',')}}
            </span>
            <div>
                <button @click="startApi" :disabled="isStart">Start</button>
                <button @click="stopApi" :disabled="!isStart">Stop</button>
                <button @click="openConfig">Config</button>
                <button @click="openLogs">Logs</button>
            </div>
        </div>`,
    mounted() {

        const ipcRenderer = window.ipcRenderer;

        emitter.on('startApi-success', (ports) => {

            this.isStart = true;
            this.apiPort = ports;
        });

        ipcRenderer.on('startApi-success', (event, arg) => {

            console.log('startApi-success !!');

            // window.apiLogsDiv.innerHTML = '';
            emitter.emit('clear-api-logs');
            ipcRenderer.send('start-get-api-logs-main');
            ipcRenderer.send('get-api-port-main');

            this.isStart = true;
        });

        ipcRenderer.on('stopApi-success', (event, arg) => {

            console.log('stopApi-success !!');

            ipcRenderer.send('stop-get-api-logs-main');
            this.isStart = false;
            this.apiPort = [];
        });

        ipcRenderer.on('get-api-port-success', (event, ports) => {

            console.log('get-api-port-success !! ports=', ports);
            this.apiPort = ports;
        });
    },
    methods: {

        openUseGuide() {

            window.ipcRenderer.send('openUrl-main', 'https://hackmd.io/@c36ICNyhQE6-iTXKxoIocg/Sy9d5FrDP');
        },

        startApi() {

            console.log('startApi-main 🚀🚀🚀');
            window.ipcRenderer.send('startApi-main')
        },

        stopApi() {

            console.log('🛑🛑🛑 stopApi-main');
            window.ipcRenderer.send('stopApi-main')
        },

        openConfig() {

            openFile('./express/config.js');
        },

        openLogs() {

            openFile('./express/logs/access-3001.log');
        },
    },
    data() {

        return {
            // the api server status ( true = running / false = stop )
            isStart: false,
            // the ports that api serving
            apiPort: [],
        }
    }
})

Vue.component('html-row', {
    template:
        `<div class="flex" style="margin-bottom: 6px">
            <div class="w-130"></div>
            <div class="w-100">
                <span class="name-padding">Html</span>
            </div>
            <span id='htmlPort' class="break-words w-200"></span>
            <div>
                <button @click="openFolder">Folder</button>
                <button @click="openConfig">Config</button>
            </div>
        </div>`,
    methods: {

        openConfig() {

            openFile('./front/config.js');
        },

        openFolder() {

            openFile('./front');
        },
    },
})

Vue.component('container-panel', {
    template:
        `<div id="container-panel">
            <div class="flex">
                <span class="w-130">Guide</span>
                <span class="w-100">Module</span>
                <span class="w-200">Port(s)</span>
                <span>Action(s)</span>
            </div>
            <hr/>
            <nginx-row></nginx-row>
            <api-row></api-row>
            <html-row></html-row>
            <log-console></log-console>
        </div>`,
})

Vue.component('install-btn', {
    template:
        `<button id='installBtn' class="mr-12" @click="install">
            <img src="./assets/drivers-32x32.png" class="w-16" alt="folder">
            安裝
            <!--
              安裝前的準備步驟 :
                1. 將 dist 資料夾壓縮產生 front.zip
                2. 將 express 資料夾壓縮產生 express.zip
              安裝步驟 :
                1. 複製 nginx.zip 並解壓縮
                2. 複製 front.zip 並解壓縮
                3. 複製 express.zip 並解壓縮
            -->
        </button>`,
    mounted() {

        const ipcRenderer = window.ipcRenderer;

        ipcRenderer.on('install-success', (event, arg) => {

            console.log('install-success !!');
            this.$emit('success');
            this.$emit('end');

            alert('安裝成功 !!');
        });

        ipcRenderer.on('install-end', (event, arg) => {

            console.log('install-end !!');
            this.$emit('end');
        });
    },
    methods: {
        install() {

            console.log('installBtn click !!');
            this.$emit('start');

            ipcRenderer.send('install-main');
        }
    }
})

Vue.component('need-install-warn', {
    template:
        `<h1>請先 "安裝" 系統 , 之後用此面板做管理 🙂</h1>`,
})

Vue.component('root-folder', {
    template: `<span id="rootFolder" class="break-words">{{rootFolder}}</span>`,
    mounted() {

        this.rootFolder = window.getRootFolder();
    },
    data() {

        return {
            rootFolder: './zip/extract'
        }
    }
})

Vue.component('install-mask', {
    template:
        `<div id="install-mask" class="flex flex-col flex-center mask">
            <img src="./assets/installing.gif" alt="installing">
            <h1>安裝中.......</h1>
            <span id="install-extract-filename">Extracting ...</span>
        </div>`,
    mounted() {

        window.ipcRenderer.on('get-extract-filename', (event, fileName) => {

            console.log('get-extract-filename !! extract-filename=', fileName);
            document.getElementById('install-extract-filename').innerText = fileName;
        });
    }
})

new Vue({
    el: '#app',
    data: {
        showInstallMask: false,
        installed: false,
        loading: true,
    },
    mounted() {

        const ipcRenderer = window.ipcRenderer;

        ipcRenderer.on('show-err-msg', (event, err) => alert(err));

        ipcRenderer.on('get-nginx-api-status-success', (event, arg) => {

            console.log('get-nginx-api-status-success !!');
            const {installed, nginxPorts, apiPorts} = arg;
            this.installed = installed;
            this.loading = false;

            if (installed) {

                if (apiPorts.length > 0) emitter.emit('startApi-success', apiPorts);
                if (nginxPorts.length > 0) emitter.emit('startNginx-success', nginxPorts);
            }
        });

        ipcRenderer.on('hide-init-mask', (event, err) => {

            this.loading = false;
        });

        ipcRenderer.send('get-nginx-api-status-main');
    }
})
