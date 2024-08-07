# Encryption:
## A Web App for Advanced Encryption Standard Implementation

[ENCRYPT 72](https://kietpawpan.github.io/encryption) is a prototype web app for implementing Advanced Encryption Standard (AES) with [CryptoJS (2019)](https://cryptojs.gitbook.io/docs) (v  4.2.0). AES is the most secure encryption algorithm in 2024 and probably in decades ahead. AES in ENCRYPT 72 works as follows:
```mermaid
flowchart TD
    A[Sender] --> B[Plaintext]-->FC
    C[Secret key]--PBKDF2-->AK[Acutal key\n512 bits]-->FC-->D[SYMMETRIC\nENCRYPTION]-->FC
    FN[Ciphertext at Round 14\nAES-256 Encrypted]-->F[Recipient]
    C2[Same secret key]-->G[DECRYPTION]-->I[Same plaintext]-->F
     FN-->G
A-->C-->D
RK[Round keys]-->D
AK-->RKL[Round key length]-->RN[Round Number\n14 rounds for 256 bits\nAES-256]-->D
FC[Nonlinear data \ntransforming function]
FC-->RK
FC-->SL[Salt]-->D
FC-->iv[iv]-->D
FC-->CFT[Ciphertext]-->D
CFT-->FN
```
ENCRYPT 72 gets a secret key as password/passphrase to the crypto-js function:

```
CryptoJS.AES.encrypt("Message", "your private key");
```
The strength of you password/passphrase is always validated by ENCRYPT 72 by checking the present of:
-  A lowercase letter
-  A capital (uppercase) letter
-  A number
-  A special characters
-  A space
-  Minimum 8 characters

## AES
ENCRYPT 72 supports only AES-256 (TOP SECRET). A secret key will generate a 256-bit key as the actual key. 
```
var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
​var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
```

### Block Modes and Padding
ENCRYPT 72 supports __CBC__ mode and use __Pkcs7__ padding scheme.
```
var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase", {
  /* mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7 */
});
```


### The Cipher Input
ENCRYPT 72 is coded in UTF-8. So,
1. The __plaintext__ is a UTF-8 string (or UTF-8 strings).
2. The __secret key__, must be a string, treated as a passphrase and used to derive an actual key, salt and iv. 


### The Cipher Output
The plaintext you get back after decryption is a WordArray object in an OpenSSL-compatible format.

ENCRYPT 72 also allows you access to all the parameters used during encryption, namely actual key, iv, salt, and ciphertext in a classic DOS style.
```
var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
​
encrypted.key
> "74eb593087a982e2a6f5dded54ecd96d1fd0f3d44a58728cdcd40c55227522223 ";
​
encrypted.iv
> "7781157e2629b094f0e3dd48c4d786115";
​
encrypted.salt
> "7a25f9132ec6a8b34";
​
encrypted.ciphertext
> "73e54154a15d1beeb509d9e12f1e462a0";
​
encrypted
> "U2FsdGVkX1+iX5Ey7GqLND5UFUoV0b7rUJ2eEvHkYqA=";
```

