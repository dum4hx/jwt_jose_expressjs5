import {
  SignJWT,
  jwtVerify,
  type JWTPayload,
  type JoseHeaderParameters,
} from "jose";

const AUDIENCE_A = "https/a.app.com/";
const AUDIENCE_B = "https/b.app.com/";

interface CustomPayload extends JWTPayload {
  role: string;
  tel: string;
}

// secret-based (HMAC)
const secret = new TextEncoder().encode("some-random-hmac-key");

const token = await new SignJWT({ role: "admin", tel: 31023232 })
  .setProtectedHeader({ alg: "HS256" })
  .setIssuer("PEPE")
  .setAudience(AUDIENCE_A)
  .setSubject("user:1230")
  .setIssuedAt()
  .setExpirationTime("1h")
  .sign(secret);

// Verify
const { payload, protectedHeader } = (await jwtVerify(token, secret, {
  issuer: "PEPE",
  audience: AUDIENCE_A,
  maxTokenAge: "1s",
})) as { payload: CustomPayload; protectedHeader: JoseHeaderParameters };

console.log(payload, protectedHeader);
