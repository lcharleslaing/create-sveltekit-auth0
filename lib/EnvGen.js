class Env {
    static generateEnv() {
        return `
# Rename this file to .env if one does not exist
# Copy the contents and place in your existing .env
        
VITE_AUTH0_DOMAIN = <your-auth0-domain>
VITE_AUTH0_CLIENT_ID = <your-auth0-client-id>
VITE_LOGIN_REDIRECT_URL = "/"
VITE_LOGOUT_REDIRECT_URL = "/"
`
    }
}

module.exports = Env
