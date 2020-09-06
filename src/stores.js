import { writable } from 'svelte/store';

export const content = writable('');

export const commands = writable([]);

export const level = writable(
  parseInt(localStorage.getItem('level'), 10) || 1,
);

level.subscribe(value => {
	localStorage.setItem('level', value);
});

export const status = writable(null); // null | started | win | lose