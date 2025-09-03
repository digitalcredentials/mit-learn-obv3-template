# mit-learn-ob-template

OBv3 credential samples for MIT Learn course certificates

Links to signed versions of the credentials, along with QR codes for each link, are available [here](certificates/certificates.md)

You can use those links to open the credentials in VerifierPlus or add them to the Learner Credential Wallet.


# Recommended properties

Verifiable credentials (VC's) for open badges follow the [OBV3 standard](https://www.imsglobal.org/spec/ob/v3p0).

VC's have many properties, but to ensure compatibility with the DCC's [Learner Credential Wallet](https://github.com/openwallet-foundation-labs/learner-credential-wallet), we recommend using the properties  reviewed below:

| Property | Description | Required? | More Info |
| :------- | --------: | :------: | :------: |
| context | Specified shared language in the form of URLs | Y | [More Info](https://www.imsglobal.org/spec/ob/v3p0) |
| id | Globally unique identifier | N | [More Info](https://www.imsglobal.org/spec/ob/v3p0) |
| type | Expresses Object type information | Y | [More Info](https://www.imsglobal.org/spec/ob/v3p0) |
| issuer | Property for expressing the issuer of a VC. See issuer section below | Y | [More Info](https://www.imsglobal.org/spec/ob/v3p0) |
| validFrom | Expresses the date and time when a credential becomes valid | Y | [More Info](https://www.imsglobal.org/spec/ob/v3p0) |
| validUntil | Expresses the date and time when a credential ceases to be valid | N | [More Info](https://www.imsglobal.org/spec/ob/v3p0) |
| name | Expresses name of credential | N | [More Info](https://www.imsglobal.org/spec/ob/v3p0) |
| description | Conveys specific details about a credential | N | [More Info](https://www.imsglobal.org/spec/ob/v3p0) |
| credentialSubject* |  Expression of claims about one or more subjects. See credentialSubject section below | Y | [More Info](https://www.imsglobal.org/spec/ob/v3p0) |


* Achievement Subject: the credentialSubject for VCs.  Open badges are VC's that are specified by a "type" of Achievement Subject under the credentialSubject. Please see section on Credential Subject


# Annotated Badge example
Below we have an example showing how these properties are defined:

```
{
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
    ],
    "id": "urn:uuid:19281fe8-90d2-4eao-a9da-67b188898a6c",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "issuer": {
        "id": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
        "type": [
            "Profile"
        ],
        "name": "MIT Learn",
        "image": {
            "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
            "type": "Image",
            "caption": "MIT Learn logo"
        }
    },
    "image": {
        "id": "https://github.com/digitalcredentials/test-files/assets/206059/01eca9f5-a508-40ac-9dd5-c12d11308894",
        "type": "Image",
        "caption": "MIT Learn Certificate logo"
    },
    "validFrom": "2025-02-24T00:00:00Z",
    "validUntil": "2030-01-01T00:00:00Z",
    "name": "Foundations of Universal AI",
    "description": "Course Certificate in Foundations of Universal AI.",
    "credentialSubject": {
        "id": "did:key:093093",
        "type": [
            "AchievementSubject"
        ],
        "activityStartDate": "2023-03-01T00:00:00Z",
        "activityEndDate": "2025-02-24T00:00:00Z",
        "name": "Lucas Delisle-Doray",
        "creditsEarned": 20,
        "achievement": {
            "id": "https://something.org/theCourse",
            "achievementType": "Course",
            "type": [
                "Achievement"
            ],
            "criteria": {
                "narrative": "If you wanted to add some kind of criteria, e.g. a list of courses or modules, etc."
            },
            "description": "Lucas Delisle-Doray has successfully completed all modules and earned a Course Certificate in Foundations of Universal AI.",
            "name": "Foundations of Universal AI"
        }
    },
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-07-07T21:35:36Z",
            "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "z4RTkXbHLGJxDGshNveL4vKFHPcQAKUq5nkhUtC5Yw4aLbcJqiXMMTYxopHcrw4VxCqLhJEkqCPKT2Zp16tRAadzF"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-07-07T21:35:36Z",
            "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
            "proofPurpose": "assertionMethod",
            "proofValue": "z4xja2GbX8j4NHnhTtwgkv8L96VcedGHRCuEHZQF5xjRZKi1UJf1Tt7ofcMjo44wofkaApVQUdCKHzmG7187EPKpa"
        }
    ]
}
```

# credentialSubject
A verifiable credential(VC) MUST contain a credentialSubject property. 

The OBV3 specification is based on the core VC specification, which has different property requirements. Neither the credentialSubject nor id are required for VC's, whereas for the OBV3 specification, credentialSubject IS required, but is is not.

| Specification | Property | Required? |
| :------- | --------: | :------: |
| VC | credentialSubject | N | 
| VC | id | N | 
| OBV3 | credentialSubject | Y |
| OBV3 | id | N |

The value of the credentialSubject property is a set of objects where each object MUST be the subject of one or more claims, which MUST be serialized inside the credentialSubject property. Each object MAY also contain an id property to identify the subject.

Open badges are VC's that are specified by a "type" of Achievement Subject under the credentialSubject.

| Property | Description | Required? | More Info |
| :------- | --------: | :------: | :------: |
| id | Description | N | link |
| type | Description | N | link |
| activityStartDate | Description | N | link |
| activityEndDate | Description | N | link |
| name | Description | N | link |
| creditsEarned | Description | N | link |
| achievement | Description | N | link |

In the example above, credentialSubject shows:
```
    "credentialSubject": {
        "id": "did:key:093093",
        "type": [
            "AchievementSubject"
        ],
        "activityStartDate": "2023-03-01T00:00:00Z",
        "activityEndDate": "2025-02-24T00:00:00Z",
        "name": "Lucas Delisle-Doray",
        "creditsEarned": 20,
        "achievement": {
            "id": "https://something.org/theCourse",
            "achievementType": "Course",
            "type": [
                "Achievement"
            ],
            "criteria": {
                "narrative": "If you wanted to add some kind of criteria, e.g. a list of courses or modules, etc."
            },
            "description": "Lucas Delisle-Doray has successfully completed all modules and earned a Course Certificate in Foundations of Universal AI.",
            "name": "Foundations of Universal AI"
        }
    }
```

In the example above for an open badge, the credentialSubject will have a type of "AchievementSubject".

(Please note, id is NOT required, but the credentialSubject object IS required.)


An example of a full Open Badge VC is below:

```
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "type": [
    "VerifiablePresentation"
  ],
  "verifiableCredential": [
    {
      "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/suites/ed25519-2020/v1"
      ],
      "id": "http://example.com/credentials/3527",
      "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
      ],
      "issuer": {
        "type": [
          "Profile"
        ],
        "name": "Goodwill Industries International and SkillRise",
        "url": "https://goodwill.org",
        "image": {
          "type": "Image",
          "id": "https://dcc-brand-6e8f40c02581a52e.s3.us-west-2.amazonaws.com/26284b45438363f0a55b2cf215413c238652d557/goodwill-skillrise-logo.png",
          "caption": "Goodwill-SkillRise partnership logo"
        },
        "id": "did:key:z6Mkqfv4hXbcAbDtam8v3DkpumyrxNaXBJJMcP3Mp7X1Ccwa"
      },
      "name": "Goodwill-SkillRise Digital Credentials Essentials",
      "credentialSubject": {
        "type": [
          "AchievementSubject"
        ],
        "achievement": {
          "id": "urn:uuid:910686a1-3743-4d52-9d2e-7bf62e1d745f",
          "type": [
            "Achievement"
          ],
          "achievementType": "Badge",
          "criteria": {
            "narrative": "To earn this credential, recipients successfully completed an assessment with a score of at least 80% (15 out of 18 points). The assessment evaluated the earner's understanding in key areas:\n\n - Knowledge of how digital credentials work and the various ways they can be earned\n - Comprehension of digital wallets and their role in storing and sharing credentials\n - Understanding of skills-based hiring principles and how employers evaluate candidates\n - Understanding how employers use skills-based approaches to evaluate candidates\n\nThe credential verifies that recipients can navigate the evolving landscape of skills documentation and presentation in today's job market."
          },
          "description": "This micro-credential certifies that the earner understands the three interconnected pillars of modern skills recognition: digital credentials, digital wallets, and skills-based hiring practices. Recipients have demonstrated knowledge of how these components work together to create new opportunities for job seekers to document, store, share, and leverage their skills in today's evolving labor market.",
          "name": "Goodwill-SkillRise Digital Credential Essentials",
          "image": {
            "type": "Image",
            "id": "https://dcc-brand-6e8f40c02581a52e.s3.us-west-2.amazonaws.com/26284b45438363f0a55b2cf215413c238652d557/badge-foundations.png",
            "caption": "Digital Credentials Essentials shield"
          }
        },
        "id": "did:key:z6MkqXjbx45MGTB5SKg4RY71Yez42DPkL91UWoVGULuBWou7"
      },
      "credentialStatus": {
        "id": "https://dev.status.prettygoodskills.com/3I9nI2MOA0HjxD1iDe8G#1",
        "type": "BitstringStatusListEntry",
        "statusPurpose": "revocation",
        "statusListCredential": "https://dev.status.prettygoodskills.com/3I9nI2MOA0HjxD1iDe8G",
        "statusListIndex": "1"
      },
      "proof": {
        "type": "Ed25519Signature2020",
        "created": "2025-06-18T15:26:11Z",
        "verificationMethod": "did:key:z6Mkqfv4hXbcAbDtam8v3DkpumyrxNaXBJJMcP3Mp7X1Ccwa#z6Mkqfv4hXbcAbDtam8v3DkpumyrxNaXBJJMcP3Mp7X1Ccwa",
        "proofPurpose": "assertionMethod",
        "proofValue": "z8G8RL3QHe9rjjLmmXiEYUNPfcmKaPtKDunbGbR1o34Bfm1SZdUtfgsRksg67UYSyR9rbCYcrqFWMuX521eoWKLc"
      }
    }
  ]
}
```




