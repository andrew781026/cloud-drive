import {ref, onMounted, onBeforeUnmount} from '@vue/composition-api';

// 可能需要利用 object 模式 , 建立許多

const useContextMenu = () => {

    const clientX = ref(0);
    const clientY = ref(0);
    const show = ref(false);

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

    return {clientX, clientY, show}
};

export default useContextMenu;