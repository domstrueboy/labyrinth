import { writable } from 'svelte/store';

export const content = writable('');

export const commands = writable([]);

export const level = writable(1);

export const status = writable(null); // null | started | win | lose | unreached 