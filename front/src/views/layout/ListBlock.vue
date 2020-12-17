<template>
    <div class="list-root">
        <el-table
                height="100%"
                class="file-table"
                @row-click="selectFolder"
                row-class-name="cursor-pointer"
                :data="tableData"
                :default-sort="{prop: 'date', order: 'descending'}"
        >
            <el-table-column
                    prop="name"
                    label="名稱"
                    sortable
                    width="230">
                <template slot-scope="scope">
                    <i class="material-icons" style="font-size: 18px;transform: translateY(3px);margin-right: 3px">
                        {{ scope.row.fileType === 'isDirectory'? 'folder':'library_books' }}
                    </i>
                    <span>{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="修改日期"
                    sortable
                    :formatter="formatter"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="type"
                    sortable
                    width="180"
                    label="類型">
            </el-table-column>
            <el-table-column
                    prop="size"
                    sortable
                    :formatter="fzFormatter"
                    label="大小">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import DateUtil from '@/utils/dateUtil';
    import filesize from 'filesize';
    import FileService from '@/api/file';

    const Transformer = {
        file: arr => {

            return arr && arr.map(item => ({
                size: item.size, // 檔案大小
                filePath: item.filePath, // 檔案位置
                name: item.name, // 檔案名稱
                createTime: item.createTime, // 建立時間
                modifyTime: item.modifyTime, // 最後修改時間
                date: item.modifyTime, // 最後修改時間
                fileType: item.fileType, // 檔案類型
                type: item.fileType, // 檔案類型
            }))
        }
    }

    export default {
        name: "ListBlock",
        mounted() {

            this.getTableData();
        },
        data() {

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

            // 隨機產生資料
            const generateData = num => {

                const getRandom = (min, max) => Math.floor(Math.random() * max + min) % (max + 1);

                const getSingle = () => {

                    const nameIndex = getRandom(0, nameArr.length - 1);
                    const typeIndex = getRandom(0, typeArr.length - 1);
                    const timestamp = getRandom(1338974151296, 1638974151296);
                    const size = getRandom(1296, 3161815296);

                    return {
                        size,
                        date: new Date(timestamp),
                        name: nameArr[nameIndex],
                        type: typeArr[typeIndex],
                    }
                }

                // https://stackoverflow.com/questions/5501581/javascript-new-arrayn-and-array-prototype-map-weirdness#answer-35086350
                return new Array(num).fill(undefined).map(getSingle)
            }

            return {
                tableData: generateData(30)
            }
        },
        methods: {
            formatter(row, column) {
                return DateUtil.format(row[column.property], 'YYYY-MM-DD');
            },
            fzFormatter(row, column) {

                if (row.fileType === 'isDirectory') return '-';
                else return filesize(row[column.property], {round: 0});
            },
            getTableData(directory) {

                // 取得檔案數量 & 檔案
                FileService.listFile(directory)
                    .then(files => {

                        console.log('getTableData , files=', files);
                        this.tableData = Transformer.file(files);
                    })
                    .catch(console.error)
            },
            selectFolder(row) {

                console.log('selectFolder , row=', row);

                if (row.fileType === 'isDirectory') {

                    this.getTableData(row.filePath);

                } else console.log('filename = ', row.name);
            }
        }
    }
</script>

<style scoped>

    .file-table {
        width: calc(100% - 20px);
    }

    .list-root {
        padding-left: 2rem;
        height: calc(100vh - 400px);
    }
</style>