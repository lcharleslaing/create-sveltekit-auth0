class Layout {
    static generate() {
        return `
<!-- -------------- Inject Code from here down --------------- -->
<!-- ------ in the event that this file already exists ------- -->
<!-- This was built with tailwindcss but SveltekitAuth0 component
---- can use CSS with the _class variable -------------------- -->

<script context="module">
</script>

<script>
    import NavbarAuth0 from "../lib/components/NavbarAuth0.svelte";
    import SveltekitAuth0 from "../lib/components/SveltekitAuth0.svelte";
</script>

<NavbarAuth0>

    <!-- This is setup with TailwindCSS but the _class can be used as normal class
    Placing this inside a slot within your Navbar makes the login and logout buttons accessible site wide -->

    <SveltekitAuth0
        btn_login_text="Login"
        btn_logout_text="Logout"
        imgsrclogin=""
        imgsrclogout=""
        iconsize="w-5"
        _class="m-2 btn btn-ghost uppercase btn-primary text-sm"
    />
</NavbarAuth0>
<slot />

<!-- -------------- Inject Code from here up ------------- -->
`
    }
}

module.exports = Layout
