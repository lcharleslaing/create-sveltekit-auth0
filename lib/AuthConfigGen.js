class Config {
    static generateConfig() {
        return `
// ----------------------------------------------------------------
// ------------------------Auth0 Config----------------------------
// ----------------------------------------------------------------

const config = {
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID
};

export default config;

// ----------------------------------------------------------------

`
    }
}

module.exports = Config
