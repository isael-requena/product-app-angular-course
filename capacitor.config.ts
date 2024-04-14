import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'product-app-angular-course',
  webDir: 'dist/product-app-angular-course/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
