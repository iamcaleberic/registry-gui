import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import morgan from "morgan";

const registry_REGISTRY_URL: string =
    process.env.registry_REGISTRY_URL || "https://registry.local:8443";

const PROXY_PORT: number = Number.isInteger(process.env.PROXY_PORT)
    ? parseInt(process.env.PROXY_PORT)
    : 9001;

// proxy middleware options
const options = {
    target: registry_REGISTRY_URL, // target host
    changeOrigin: true,
    secure: false,
};

// create proxy
const registryProxy = createProxyMiddleware(options);

const app = express();

// add basic logging
app.use(morgan("dev"));

// mount proxy
app.use("/v2", registryProxy);
app.use("/login", registryProxy);

app.listen(PROXY_PORT);
