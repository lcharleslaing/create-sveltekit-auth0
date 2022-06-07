class Store {
    static generateStore() {
        return `
// ----------------------------------------------------
// --------------------Auth0 Store---------------------
// ----------------------------------------------------

import { writable } from "svelte/store";

export const isAuthenticated = writable(false);
export const user = writable({});
export const popupOpen = writable(false);
export const error = writable();

// ----------------------------------------------------

`
    }
}

module.exports = Store
