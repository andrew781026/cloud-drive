import {ref, onMounted, onBeforeUnmount} from '@vue/composition-api';


const useContextMenu = () => {

    const clientX = ref(0);
    const clientY = ref(0);

    const rightClickFn = event => {

        event.preventDefault();
        console.log(event);
        clientX.value = `${event.clientX}px`;
        clientY.value = `${event.clientY}px`;
    }

    onMounted(() => {

        window.addEventListener('contextmenu', rightClickFn);
    });

    onBeforeUnmount(() => {

        window.removeEventListener('contextmenu', rightClickFn);
    });

    return {clientX,clientY}
};

export default useContextMenu;