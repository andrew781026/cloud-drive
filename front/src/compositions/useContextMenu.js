import {reactive, onMounted, onBeforeUnmount} from '@vue/composition-api';

// 可能需要利用 object 模式 , 建立許多

// const useContextMenu = () => {

export const contextMenu = reactive({
    clientX: 0,
    clientY: 0,
    show: false,
})

export const closeContext = () => contextMenu.show = false;

export const useContextClose = () => {

    onMounted(() => {

        window.addEventListener('click', closeContext);
    });

    onBeforeUnmount(() => {

        window.removeEventListener('click', closeContext);
    });
}

export const openContext = ({clientX, clientY}) => {

    contextMenu.clientX = clientX;
    contextMenu.clientY = clientY;
    contextMenu.show = true;
}
