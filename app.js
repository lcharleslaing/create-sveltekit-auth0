const inquirer = require("inquirer")
const MarkDown = require("./lib/ReadmeGen")
const Env = require("./lib/EnvGen")
const Config = require("./lib/AuthConfigGen")
const Service = require("./lib/AuthServiceGen")
const Store = require("./lib/AuthStoreGen")
const Component = require("./lib/ComponentAuthGen")
const Layout = require("./lib/LayoutFileGen")
const Navbar = require("./lib/NavbarGen")
const fs = require("fs")
const path = require('path');
const prependFile = require('prepend-file');

// App Questions
const questions = [
    {
        type: "input",
        name: "title",
        message: "Project Title?",
        default: "Sample Cool Project"
    },
    {
        type: "input",
        name: "description",
        message: "Project Description?",
        default: "Sample Cool Project Description"

    },
    {
        type: "input",
        name: "installation",
        message: "Installation instructions?",
        default: "npm i sample-cool-project"

    },
    {
        type: "input",
        name: "usage",
        message: "Project Usage?",
        default: "npm run sample-coool-project"

    },
    {
        type: "input",
        name: "contribution",
        message: "Contribution Information?",
        default: "John Henry Doe, Sara Sue Doe"

    },
    {
        type: "input",
        name: "firstname",
        message: "First name?",
        default: "Lee"
    },
    {
        type: "input",
        name: "middlename",
        message: "Middle name?",
        default: "Charles"
    },
    {
        type: "input",
        name: "lastname",
        message: "Last name?",
        default: "Laing"
    },
    {
        type: "input",
        name: "website",
        message: "My Website that uses this package?",
        default: "https://www.my-website.com"
    },
    {
        type: "input",
        name: "email",
        message: "Email me @ ?",
        default: "my-email@gmail.com"
    },
    {
        type: "input",
        name: "github",
        message: "Check out my Github @ ?",
        default: "lcharleslaing"
    },
    {
        type: "input",
        name: "patreon",
        message: "Patreon username?",
        default: "Lee Charles Laing"
    },
    {
        type: "input",
        name: "twitter",
        message: "Twitter username?",
        default: "IAmLeeCharles"
    },
    {
        type: "input",
        name: "linkedin",
        message: "LinkedIn username?",
        default: "lee-charles-laing"
    },
    {
        type: "list",
        name: "license",
        message: "License?",
        default: "MIT",
        choices: ['MIT', 'ISC'],
        filter(val) {
            return val.toLowerCase()
        },
    },
]

const makeDir = (path) => {
    fs.mkdir(path,
        {
            recursive: true
        }, (err) => {
            if (err) {
                console.log("error occurred in creating new directory", err);
                return;
            }

            console.log("New directory created successfully");
        });
}

const createFile = (file, data) => {
    if (!file) {
        fs.writeFile(file, data, (err) => {
            if (err) {
                console.log(`Could not save your README.md file`);
            } else {
                console.log("Successfully create your README.md file")
            }
        })

    } else {
        prependFile(file, data)
    }
}

// Run query function
async function runQuery() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const markdown = MarkDown.generateReadme(answers)
            const envfile = Env.generateEnv()
            const auth0Configfile = Config.generateConfig()
            const auth0Servicefile = Service.generateService()
            const auth0Storefile = Store.generateStore()
            const layoutfile = Layout.generate()
            const componentfile = Component.generate()
            const navbarfile = Navbar.generate()

            const auth0ServiceFileDir = `./src/lib/auth`
            const auth0ConfigFileDir = `./src/lib/auth`
            const auth0StoreFileDir = `./src/lib/auth`
            const componentsDir = `./src/lib/components`
            const routesDir = `./src/routes`

            makeDir(auth0ConfigFileDir)
            makeDir(auth0ServiceFileDir)
            makeDir(auth0StoreFileDir)
            makeDir(componentsDir)
            makeDir(routesDir)

            createFile("NEW-README.md", markdown)
            createFile("AUTH0.env", envfile)
            createFile(`${auth0ConfigFileDir}/auth0_config.js`, auth0Configfile)
            createFile(`${auth0ServiceFileDir}/auth0_service.js`, auth0Servicefile)
            createFile(`${auth0StoreFileDir}/authStore.js`, auth0Storefile)
            createFile(`${componentsDir}/SveltekitAuth0.svelte`, componentfile)
            createFile(`${componentsDir}/NavbarAuth0.svelte`, navbarfile)
            createFile(`${routesDir}/__layout.svelte`, layoutfile)
        })
        .catch((error) => { console.log("error: ", error); })
}
runQuery()
