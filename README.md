# encryption
## [A Web App for Encrypting and Decrypting Classified Information with AES algorithm](https://kietpawpan.github.io/encryption)

Advanced Encryption Standard (AES) is the most secure encryption algorithm nowsaday.
```mermaid
flowchart TD
    A[Sender] --> B[plaintext]-->D
    C[private key]-->D[ENCRYPTION]-->E[ciphertext]-->D
    E-->FN[Final round\nciphertext]-->F[Recipient]
    C2[same private key]-->G[DECRYPTION]-->I[same plaintext]-->F
     E-->G
A-->C
C-->RK[round keys]-->D
C-->RKL[round key length]-->RN[round number]-->D
FC[nonlinear data \nmodifying function]-->D
FC-->RK
```
