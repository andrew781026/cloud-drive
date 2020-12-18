import {ref} from '@vue/composition-api';
import FileService from '@/api/file';

export const rootPath = ref('');

export const getRootPath = () => {

    return FileService.getRootPath()
        .then(res => rootPath.value = res)
        .catch(console.error)
}

export const setRootPath = (newRootPath) => {

    return FileService.setRootPath(newRootPath)
        .then(() => rootPath.value = newRootPath)
        .catch(console.error)
}