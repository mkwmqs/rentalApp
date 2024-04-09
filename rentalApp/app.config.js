module.exports = {
  extra: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MSG_SENDER_ID: process.env.MSG_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
    TESTE: process.env.TESTE
  },
  plugins: [
    [
      'expo-image-picker',
      {
        pickerOptions: {
          mediaTypes: ['photo'], // Adjust this as needed
        },
      },
    ],
  ],
};