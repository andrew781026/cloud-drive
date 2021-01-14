import {reactive, onMounted, onBeforeUnmount} from '@vue/composition-api';

// 可能需要利用 object 模式 , 建立許多

// const useContextMenu = () => {

export const contextMenu = reactive({
    clientX: 0,
    clientY: 0,
    show: false,
})

/*
const rightClickFn = event => {

    event.preventDefault();
    console.log(event);
    clientX.value = `${event.clientX}px`;
    clientY.value = `${event.clientY}px`;
    show.value = !show.value;
}

onMounted(() => {

    window.addEventListener('contextmenu', rightClickFn);
});

onBeforeUnmount(() => {

    window.removeEventListener('contextmenu', rightClickFn);
});

export const closeFn = () => show.value = false;

onMounted(() => {

    window.addEventListener('click', closeFn);
});

onBeforeUnmount(() => {

    window.removeEventListener('click', closeFn);
});

 */

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


// return {clientX, clientY, show, openContext}
// };

// export default useContextMenu;