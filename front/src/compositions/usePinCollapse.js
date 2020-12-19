import {ref} from '@vue/composition-api';

export const collapse = ref(false);

export const toggleCollapse = () => collapse.value = !collapse.value;

export const setCollapse = (newCollapse) => collapse.value = newCollapse;