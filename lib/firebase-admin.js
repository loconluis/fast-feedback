import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: process.env.NEXT_PUBLIC_FIREBASE_SS_TYPE,
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      private_key_id: process.env.NEXT_PUBLIC_FIREBASE_SS_KEY_ID,
      private_key: process.env.NEXT_PUBLIC_FIREBASE_SS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.NEXT_PUBLIC_FIREBASE_SS_CLIENT_EMAIL,
      client_id: process.env.NEXT_PUBLIC_FIREBASE_SS_CLIENT_ID,
      auth_uri: process.env.NEXT_PUBLIC_FIREBASE_SS_AUTH_URI,
      token_uri: process.env.NEXT_PUBLIC_FIREBASE_SS_TOKEN_URI,
      auth_provider_x509_cert_url:
        process.env.NEXT_PUBLIC_FIREBASE_SS_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url:
        process.env.NEXT_PUBLIC_FIREBASE_SS_CLIENT_X509_CERT_URL,
    }),
  });
}

export default admin;
