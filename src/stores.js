import { writable } from 'svelte/store';

export const isAppStarted = writable(false);

export const commands = writable([]);