import { writable } from 'svelte/store';

export const isAppStarted = writable(false);

export const content = writable('');

export const commands = writable([]);

export const win = writable(false);

export const level = writable(1);

export const result = writable(null); // null | win | lose