import {ref, onMounted} from '@vue/composition-api';
import FileService from '@/api/file';

const Transformer = {
    file: arr => {

        return arr && arr.map(item => ({
            size: item.size, // 檔案大小
            filePath: item.filePath, // 檔案位置 ( absolute )
            relativePath: item.relativePath, // 檔案位置 ( relative )
            name: item.name, // 檔案名稱
            createTime: item.createTime, // 建立時間
            modifyTime: item.modifyTime, // 最後修改時間
            date: item.modifyTime, // 最後修改時間
            fileType: item.fileType, // 檔案類型
            type: item.fileType, // 檔案類型
        }))
    }
}

const useFile = () => {

    const tableData = ref([]);
    const currPath = ref('/');

    const getTableData = (directory) => {

        currPath.value = directory;

        // 取得檔案數量 & 檔案
        FileService.listFile(directory)
            .then(files => {

                tableData.value = Transformer.file(files);
            })
            .catch(console.error)
    };

    onMounted(getTableData);

    return {
        tableData,
        currPath,
        getTableData
    }
}

export default useFile();