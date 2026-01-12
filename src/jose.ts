import { generateKeyPair, exportJWK, exportSPKI, exportPKCS8 } from "jose";

// Get key pair
const { publicKey, privateKey } = await generateKeyPair("EdDSA");
console.log(`publicKey (SPKI PEM) ${await exportSPKI(publicKey)}`);

console.log(`privateKey (PKCS8 PEM) ${await exportPKCS8(privateKey)}`);

// Export to JWK
console.log(`publicKey JWK: ${await exportJWK(publicKey)}`);
