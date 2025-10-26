// Build Application Info
const app_config = Object.freeze({
    app_name: import.meta.env.VITE_APP_NAME,
    app_description: import.meta.env.VITE_APP_DESCRIPTION,
    app_author_name: import.meta.env.VITE_APP_AUTHOR_NAME,
    app_author_email: import.meta.env.VITE_APP_AUTHOR_EMAIL,
    app_version: import.meta.env.VITE_APP_VERSION,
    app_environment: import.meta.env.VITE_APPLICATION_ENVIRONMENT,
    app_buildTime: new Date().toISOString(),
    firebase_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    firebase_url: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    firebase_storage: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
});

export default app_config;