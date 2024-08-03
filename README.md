# encryption
## [A Web App for Advanced Encryption Standards Implementation](https://kietpawpan.github.io/encryption)

Advanced Encryption Standard (AES) is the most secure encryption algorithm nowsaday.
```mermaid
flowchart TD
    A[Sender] --> B[plaintext]-->FC
    C[private key]-->FC-->D[ENCRYPTION]-->E[ciphertext]-->D
    E-->FN[10th, 12nd, or 14th round\nciphertext]-->F[Recipient]
    C2[same private key]-->G[DECRYPTION]-->I[same plaintext]-->F
     FN-->G
A-->C
C-->RK[round keys]-->D
C-->RKL[round key length]-->RN[Round Number\n10 rounds for 128 bits\n12 rounds for 192 bits\n14 rounds for 256 bits]-->D
FC[nonlinear data \nmodifying function]-->D
FC-->RK
B-->D
C-->D
```
