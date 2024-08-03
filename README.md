# encryption
## [A Web App for Encrypting and Decrypting Classified Information with AES algorithm](https://kietpawpan.github.io/encryption)

Advanced Encryption Standard (AES) is the most secure encryption algorithm nowsaday.
```mermaid
flowchart TD
    A[Sender] --> B[plaintext]-->FC
    C[private key]-->FC-->D[ENCRYPTION]--output-->E[ciphertext]--input-->D
    E-->FN[10th, 12nd, or 14th round\nciphertext]-->F[Recipient]
    C2[same private key]-->G[DECRYPTION]-->I[same plaintext]-->F
     FN-->G
A-->C
C-->RK[round keys]-->D
C-->RKL[round key length]-->RN[round number\n10 roundd for 128 bits\n12 rounds for 223 bits\n14 rounds for 256 bits]-->D
FC[nonlinear data \nmodifying function]-->D
FC-->RK
B-->D
C-->D
```
