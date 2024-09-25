/// <reference types="vite/client" />

interface firebaseConfig {
  readonly VITE_APIKEY: string;
  readonly VITE_AUTHDOMAIN: string;
  readonly VITE_DATABASEURL: string;
  readonly VITE_PROJECT_ID: string;
  readonly VITE_STORAGEBUCKED: string;
  readonly VITE_MESSAGING_SENDER_ID: string;
  readonly VITE_APP_ID: string;
  readonly VITE_MEASUREMENT_ID: string;
}

interface xlsxConfig {
  readonly VITE_MIMETYPE: string;
}

interface adminAuth {
  readonly VITE_ADMIN_USERNAME: string;
  readonly VITE_ADMIN_PASSWORD: string;
}

type ImportMetaEnv = firebaseConfig & xlsxConfig & adminAuth;

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
