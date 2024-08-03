# encryption
## [A Web App for Encrypting and Decrypting Classified Information with AES algorithm](https://kietpawpan.github.io/encryption)

Advanced Encryption Standard (AES) is the most secure encryption algorithm nowsaday.
```mermaid
flowchart LR
    A[Sender] --> B[plaintext]-->D
    C[private key]-->D[ENCRYPTION]-->E[ciphertext]
    F[Receipiant]
    C2[same private key]-->G[DECRYPTION]-->I[plaintect]-->F
     E-->G
```
