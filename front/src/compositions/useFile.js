import {computed, ref} from '@vue/composition-api';
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

export const getRandomTableData = (num) => {

    const nameArr = [

        '洪益',
        '利中',
        '長光',
        '皇鑫',
        '豐益',
        '安晶',
        '益飛',
        '飛中',
        '茂春',
        '益康',
        '復欣',
        '春盛',
        '正瑞',
        '輝浩',
        '進協',
        '協壽',
        '廣同',
        '裕復',
        '全謙',
        '巨昇',
        '美昇',
        '東優',
        '吉弘',
        '台廣',
        '協如',
        '茂多',
        '春吉',
        '生盛',
        '謙豐',
        '萬鑫',
        '益偉',
        '利匯',
        '和欣',
        '如滿',
        '公發',
        '厚長',
        '慶豐',
        '亨偉',
        '合洪',
        '復慶',
    ]

    const typeArr = [

        '檔案資料夾',
        '試算表',
        '文字檔',
        '安裝檔',
        'PDF',
        '其他檔案'
    ]

    const getRandom = (min, max) => Math.floor(Math.random() * max * 1000 + min) % (max + 1);

    const getSingle = () => {

        const nameIndex = getRandom(0, nameArr.length - 1);
        const typeIndex = getRandom(0, typeArr.length - 1);
        const timestamp = getRandom(1338974151296, 1638974151296);
        const size = getRandom(1296, 3161815296);
        const isDirectory = getRandom(0, 1) === 0;

        return {
            size,
            date: new Date(timestamp),
            name: nameArr[nameIndex],
            type: typeArr[typeIndex],
            fileType: isDirectory ? 'isDirectory' : 'isFile'
        }
    }

    // https://stackoverflow.com/questions/5501581/javascript-new-arrayn-and-array-prototype-map-weirdness#answer-35086350
    return new Array(num).fill(undefined).map(getSingle)
};

export const tableData = ref(getRandomTableData(30));
export const currPath = ref('/');

// 將現在所在位置做切分顯示
export const pathArr = computed(() => currPath.value ? currPath.value.split('\\') : [])

export const getTableData = (directory) => {

    currPath.value = directory;

    // 取得檔案數量 & 檔案
    FileService.listFile(directory)
        .then(files => {

            tableData.value = Transformer.file(files);
        })
        .catch(console.error)
};
