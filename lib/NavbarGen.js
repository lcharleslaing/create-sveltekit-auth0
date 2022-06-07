class Navbar {
    static generate() {
        return `
<!-- --------------------------------------------- -->
<!-- --------------Navbar Component--------------- -->
<!-- --------------------------------------------- -->

<script context="module">
</script>

<script>
</script>

<div class="navbar-auth0">
    <slot />
</div>

<style>
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    .navbar-auth0 {
        display: flex;
        place-content: end;
        height: 68px;
        background-color: lightgray;
        padding: 2px 2px;
    }
</style>

<!-- --------------------------------------------- -->

`
    }
}

module.exports = Navbar
