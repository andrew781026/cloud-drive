<template>
    <div class="root flex">
        <left_nav_bar/>
        <div class="flex flex-col w-full max-h-screen">
            <right_header/>
            <breadcrumb/>
            <div class="w-full overflow-y-auto">
                <pin_block/>
                <folder_block/>
                <file_block/>
            </div>
        </div>
    </div>
</template>

<script>
    import LeftNavBar from "./layout/LeftNavBar";
    import Breadcrumb from "./layout/Breadcrumb";
    import RightHeader from "./layout/RightHeader";
    import PinnedBlock from "./layout/PinnedBlock";
    import FolderBlock from "./layout/FolderBlock";
    import FileBlock from "./layout/FileBlock";
    // import FileService from "../graphql/service/file";
    import gql from 'graphql-tag';

    export default {
        name: 'Home',
        components: {
            'right_header': RightHeader,
            'left_nav_bar': LeftNavBar,
            'breadcrumb': Breadcrumb,
            'pin_block': PinnedBlock,
            'folder_block': FolderBlock,
            'file_block': FileBlock,
        },
        mounted() {

            /*
            FileService.listFiles('D:/ezoom/thaitown-call-system/front/src')
                .then(console.log)
                .catch(console.error)

             */

        },
        data() {

            return {
                directory: 'D:/ezoom/thaitown-call-system/front/src',
                hello: '',
                files: '',
            }
        },
        // Apollo-specific options
        apollo: {
            // Simple query that will update the 'hello' vue property
            hello: gql`{hello}`,
            // Query with parameters
            files: {
                // Query
                query: gql`query listFiles($directory: String!){
                      files(directory: $directory) {
                          name,
                          size,
                          createTime,
                          modifyTime,
                          isDirectory,
                          isFile,
                          isSymbolicLink,
                      }
                    }`,
                // Reactive parameters
                variables() {
                    // Use vue reactive properties here
                    return {
                        directory: this.directory,
                    }
                },
                update: data => data
            },
        },
        methods: {
            async listFiles(directory) {
                // Call to the graphql mutation
                return await this.$apollo.query({
                    // Query
                    query: gql`query listFiles($directory: String!){
                      files(directory: $directory) {
                          name,
                          size,
                          createTime,
                          modifyTime,
                          isDirectory,
                          isFile,
                          isSymbolicLink,
                      }
                    }`,
                    // Static parameters
                    variables: {
                        directory,
                    },
                })
            }
        }
    }
</script>

<style scoped lang="scss">

    .root {
        user-select: none;
        min-height: 100vh;
        overflow-x: hidden;
    }

</style>
