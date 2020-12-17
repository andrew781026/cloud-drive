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
    import useFile from '@/compositions/useFile';

    export default {
        name: "ListBlock",
        setup() {
            return useFile;
        },
        methods: {
            formatter(row, column) {
                return DateUtil.format(row[column.property], 'YYYY-MM-DD');
            },
            fzFormatter(row, column) {

                if (row.fileType === 'isDirectory') return '-';
                else return filesize(row[column.property], {round: 0});
            },
            selectFolder(row) {

                if (row.fileType === 'isDirectory') this.getTableData(row.relativePath);
                else console.log('filename = ', row.name);
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