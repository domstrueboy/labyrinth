import { writable } from 'svelte/store';

export const isAppStarted = writable(false);

export const commands = writable([]);

export const win = writable(false);

export const level = writable(0);