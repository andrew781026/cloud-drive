const {ipcRenderer} = require('electron');
const path = require('path');

const RootFolderClass = function () {

    let rootFolder;

    return () => {

        if (!rootFolder) {

            rootFolder = ipcRenderer.sendSync('get-root-folder-main');
        }

        return rootFolder;
    };
}

window.getRootFolder = new RootFolderClass();
window.apiLogsDiv = null;
window.nginxLogsDiv = null;
window.ipcRenderer = ipcRenderer;
window.pathResolver = filePath => path.resolve(window.getRootFolder(), filePath);
