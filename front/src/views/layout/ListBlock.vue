<template>
    <div>
        Table
    </div>
</template>

<script>
    export default {
        name: "ListBlock",
        methods: {
            toggleFolder(index) {

                this.activeFolderIndex = index;
            }
        },
        data() {

            return {
                activeFolderIndex: -1,
                files: [
                    {
                        icon: 'word',
                        name: '探訪探訪大綱_Jay.doc'
                    },
                    {
                        icon: 'word',
                        name: '天心案規格書'
                    },
                    {
                        icon: 'excel',
                        name: '107年財報'
                    },
                    {
                        icon: 'word',
                        name: '企業修正案'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

    .folder-wrapper {
        padding: 20px;
        cursor: pointer;
        margin: 20px;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid transparent;
    }

    .folder-wrapper:hover {
        border: 1px solid black;
    }

    .folder-wrapper:active {
        /* offset-x | offset-y | blur-radius | spread-radius | color */
        box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.2);
        transform: translate(0, -2px);
    }

    .folder-wrapper.active {
        border: 1px solid black;
        background-color: #E8F0FE;
    }

    .folder-name {
        width: 100px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

</style>