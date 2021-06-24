import axios from "axios";
// import config from "../../config";

// const registry_API = config.registry_registry_url;

const api = axios.create({
    // baseURL: registry_API,
    timeout: 1000,
});

export async function getCatalog() {
    try {
        const response = await api.get("/v2/_catalog");
        return response.data.repositories;
    } catch (error) {
        console.log(error);
    }
}

export async function getRepoTags({ repoName }: { repoName: string }) {
    try {
        const response = await api.get(`/v2/${repoName}/tags/list`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getManifest({
    repoName,
    reference,
}: {
    repoName: string;
    reference: string;
}) {
    try {
        const response = await api.get(
            `/v2/${repoName}/manifests/${reference}`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getBlob({
    repoName,
    digest,
}: {
    repoName: string;
    digest: string;
}) {
    try {
        const response = await api.get(`/v2/${repoName}/blobs/${digest}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
