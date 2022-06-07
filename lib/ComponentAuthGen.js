class Component {
    static generate() {
        return `
<!-- --------------------------------------------- -->
<!-- -----Auth0 Login/Logout Button Component----- -->
<!-- --------------------------------------------- -->

<script context="module">
</script>

<script>
    import auth from ".src/lib/auth/auth0_service";
    import { user, isAuthenticated } from "./src/lib/auth/authStore";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    export let hideBtnIcon;

    export let _class;
    export let btn_login_text;
    export let btn_logout_text;
    export let imgSrcLogin;
    export let imgSrcLogout;
    export let iconSize;

    let auth0Client;

    onMount(async () => {
        auth0Client = await auth.createClient();

        isAuthenticated.set(await auth0Client.isAuthenticated());
        user.set(await auth0Client.getUser());
    });

    function login() {
        auth.loginWithPopup(auth0Client);
        goto(import.meta.env.VITE_LOGIN_REDIRECT_URL);
    }

    function logout() {
        auth.logout(auth0Client);
        goto(import.meta.env.VITE_LOGOUT_REDIRECT_URL);
    }
</script>

<!-- ICON & TEXT BUTTONS -->
<div class="">
    {#if $user}
        <button on:click={logout} class="btn {_class} flex place-items-center">
            <span> {btn_logout_text}</span>
            <span class="p-1" class:hidden={hideBtnIcon}
                ><img
                    src={imgSrcLogout}
                    alt="logout"
                    class="p-0.5 {iconSize} m-1 uppercase"
                /></span
            >
        </button>
    {/if}
    {#if !$user}
        <button on:click={login} class="btn {_class} flex place-items-center">
            <span> {btn_login_text}</span>
            <span class="p-1" class:hidden={hideBtnIcon}
                ><img
                    src={imgSrcLogin}
                    alt="login"
                    class="p-0.5 {iconSize} m-0.5 uppercase"
                /></span
            >
        </button>
    {/if}
</div>

<slot />

<style>
</style>

<!-- --------------------------------------------- -->

`
    }
}

module.exports = Component
