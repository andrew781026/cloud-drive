import {ref} from '@vue/composition-api';

export const mode = ref('list');

export const toggleMode = () => (mode.value === 'list') ? mode.value = 'grid' : mode.value = 'list';

export const setMode = (newMode) => mode.value = newMode;
