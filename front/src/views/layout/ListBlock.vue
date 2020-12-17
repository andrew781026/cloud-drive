<template>
    <div class="list-root">
        <el-table
                height="100%"
                class="file-table"
                :data="tableData"
                :default-sort="{prop: 'date', order: 'descending'}"
        >
            <el-table-column
                    prop="name"
                    label="名稱"
                    sortable
                    width="180">
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
                    label="大小">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import DateUtil from '@/utils/dateUtil'

    export default {
        name: "ListBlock",
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

                const getRandom = (min, max) => {

                    return Math.floor(Math.random() * max + min) % (max + 1);
                }

                const getSingle = () => {

                    const nameIndex = getRandom(0, nameArr.length - 1);
                    const typeIndex = getRandom(0, typeArr.length - 1);
                    const timestamp = getRandom(1338974151296, 1638974151296);
                    const size = getRandom(1161296, 31638974151296);

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