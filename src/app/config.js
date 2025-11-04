// Import into App.jsx to run:

// Print Configuration Log to Console
// (VITE_VERBOSE_LOG = true/false) in src/.env
//   useEffect(() => {
//     if (config.app_verbose_log === "true") {
//       console.log(config.log());
//     }
//   }, []);

// Build Configuration Info
const config = Object.freeze({
  app_name: import.meta.env.VITE_APP_NAME,
  app_author_name: import.meta.env.VITE_APP_AUTHOR_NAME,
  app_author_email: import.meta.env.VITE_APP_AUTHOR_EMAIL,
  app_verbose_log: import.meta.env.VITE_VERBOSE_LOG,
  app_version: import.meta.env.VITE_APP_VERSION,
  app_environment: import.meta.env.VITE_APPLICATION_ENVIRONMENT,
  app_build_date: new Date().toISOString(),
  firebase_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  firebase_url: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  firebase_storage: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
});

// Build String Literal
const configLog = () => `
\x1b[1mStarPet - Application Configuration\x1b[0m

Name: ${config.app_name}
Author: ${config.app_author_name}
Author Email: ${config.app_author_email}
Environment: ${config.app_environment}
Verbose Log: ${config.app_verbose_log}
Version: ${config.app_version}
Build Time: ${config.app_build_date}
Firebase ID: ${config.firebase_ID}
Firebase URL: ${config.firebase_url}
Firebase Storage: ${config.firebase_storage}

`;

// Export Module
export default Object.freeze({
  ...config,
  log: configLog, // function, not string
});
