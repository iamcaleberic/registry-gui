const defaultRegistryURL: string = "https://registry.local:8443";

interface AppConfig {
    registry_registry_url: string;
    app: app;
}

interface app {
    authenticated: boolean;
}

const config: AppConfig = require("./config.json");

export default config;
