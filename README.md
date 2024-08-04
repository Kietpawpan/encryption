# Encryption:
## [A Web App for Advanced Encryption Standard Implementation](https://kietpawpan.github.io/encryption)

Advanced Encryption Standard (AES) is the most secure encryption algorithm nowsaday.
```mermaid
flowchart TD
    A[Sender] --> B[plaintext]-->FC
    C[private key]-->FC-->D[ENCRYPTION]-->E[ciphertext]-->D
    E-->FN[10th, 12nd, or 14th round\nciphertext]-->F[Recipient]
    C2[same private key]-->G[DECRYPTION]-->I[same plaintext]-->F
     FN-->G
A-->C-->D
RK[round keys]-->D
C-->RKL[round key length]-->RN[Round Number\n10 rounds for 128 bits\n12 rounds for 192 bits\n14 rounds for 256 bits]-->D
FC[nonlinear data \nmodifying function]
FC-->RK
B-->D

```
ENCRYPT 72 get a private key as password/passphrase, e.g., "Password", to the crypto-js function:

```
CryptoJS.AES.encrypt("Message", "Password");
```
Therfore, CryptoJs derives a 32 byte long encryption key for AES-256 and a 16 byte long initialization vector (iv) from the password, encrypts the "Message" using this key, iv in AES mode CBC and (default) padding Pkcs7 [(Michael Fehr, 2020)](https://stackoverflow.com/a/64802091)
