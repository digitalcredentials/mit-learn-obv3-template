# mit-learn-obv3-template

Open Badges 3.0 credential samples for MIT Learn course certificates

Links to signed versions of the credentials, along with QR codes for each link, are available [here](certificates/certificates.md). These examples would be signed by the issuer and downloaded to be manually added to a mobile wlalet like the LCW, not issued ot the wallet speciifcally.

You can use those links to open the credentials in VerifierPlus or add them to the Learner Credential Wallet.

Example:

[(https://verifierplus.org/#verify?vc=https://raw.githubusercontent.com/digitalcredentials/mit-learn-ob-template/refs/heads/main/certificates/moduleCertificate.json)](https://verifierplus.org/#verify?vc=https://raw.githubusercontent.com/digitalcredentials/mit-learn-ob-template/refs/heads/main/certificates/moduleCertificate.json)

# How to use Open Badges (OBv3)

## Annotated Badge example
The JSON below is an example of an open badge for a course. Other examples of open badges can be found [here:](https://github.com/digitalcredentials/mit-learn-ob-template/blob/main/certificates) 

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
    "name": "Foundations of Universal AI",
    "description": "Course Certificate in Foundations of Universal AI.",
    "credentialSubject": {
        "id": "did:key:093093",
        "type": [
            "AchievementSubject"
        ],
        "activityStartDate": "2023-03-01T00:00:00Z",
        "activityEndDate": "2025-02-24T00:00:00Z",
        "identifier": [
            {
                "type": "IdentityObject",
                "identityHash": "Lucas Delisle-Doray",
                "identityType": "name",
                "hashed": false,
                "salt": "not-used"
            }
        ],
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
            "created": "2025-09-11T19:04:15Z",
            "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
            "cryptosuite": "eddsa-rdfc-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "zngzEHNaHQJV3dsRBS3pHg8gauCJ9TS4Jg2dEWoLdRHyFodTEszgKW9AjiLHhHHJezyXdNtNxBpQcHuh754n9cAX"
        },
        {
            "type": "Ed25519Signature2020",
            "created": "2025-09-11T19:04:15Z",
            "verificationMethod": "did:key:z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q#z6MknNQD1WHLGGraFi6zcbGevuAgkVfdyCdtZnQTGWVVvR5Q",
            "proofPurpose": "assertionMethod",
            "proofValue": "z2Bd6qucfs93pbhFViRPkVPKceLLuvS2K9rzqFSJMMz7sJNma2owVhmqHWRwfBMat6iXMgvDoykYaYg24GMpFbWq4"
        }
    ]
}
```

## Recommended properties

The DCC recommends using the [Open Badges 3.0 specification](https://www.imsglobal.org/spec/ob/v3p0). Open Badges 3.0 is compatible with [W3C Verifiable Credentials](https://www.w3.org/TR/vc-data-model-2.0/), but it has its own requirements and recommendations to support education credentials. 

The following Open Badges 3.0 properties are displayed in the DCC's [Learner Credential Wallet](https://github.com/openwallet-foundation-labs/learner-credential-wallet) and [Verifier Plus](https://github.com/digitalcredentials/web-verifier-plus).

| Property | Description | Required? | More Info |
| :------- | --------: | :------: | :------: |
| achievementCredential.context | Specified shared language in the form of URLs | Y | [More Info](https://www.imsglobal.org/spec/ob/v3p0#achievementcredential) |
| achievementCredential.id | Globally unique identifier | N, but recommended | [More Info](https://www.imsglobal.org/spec/ob/v3p0#achievementcredential) |
| achievementCredential.type | Expresses Object type information. For open badges, should specify both "VerifiableCredential" and "OpenBadgeCredential". | Y | [More Info](https://www.imsglobal.org/spec/ob/v3p0#achievementcredential) |
| achievementCredential.issuer | Property for expressing the issuer of a VC. | Y | [More Info](https://www.imsglobal.org/spec/ob/v3p0#achievementcredential) |
| achievementCredential.issuer.type | Must be set to Profile for the Issuer object | Y | [More Info](https://www.imsglobal.org/spec/ob/v3p0#achievementcredential) |
| achievementCredential.issuer.id | Signing DID of the issuer | Y | [More Info](https://www.imsglobal.org/spec/ob/v3p0#achievementcredential) |
| achievementCredential.issuer.name | Name of issuer | N, but recommended | [More Info](https://www.imsglobal.org/spec/ob/v3p0#achievementcredential) |
| achievementCredential.issuer.image | Image information for issuer | N, but recommended | [More Info](https://www.imsglobal.org/spec/ob/v3p0#achievementcredential) |
| achievementCredential.issuer.url | Issuer url | N, but recommended | [More Info](https://www.imsglobal.org/spec/ob/v3p0#achievementcredential) |
| achievementCredential.name | Name of credential | N, but recommended | [More Info](https://www.imsglobal.org/spec/ob/v3p0#achievementcredential) |
| achievementCredential.description | Description of credential | N, but recommended | [More Info](https://www.imsglobal.org/spec/ob/v3p0#achievementcredential) |
| achievementCredential.validFrom | Expresses the date and time when a credential becomes valid | Y | [More Info](https://www.imsglobal.org/spec/ob/v3p0#achievementcredential) |
| achievementCredential.validUntil | Expresses the date and time when a credential ceases to be valid | N, but recommended if credential expires | [More Info](https://www.imsglobal.org/spec/ob/v3p0#achievementcredential) |
| credentialSubject| Of type "AchievementSubject". The recipient of the achievement. | Y | [More Info](https://www.imsglobal.org/spec/ob/v3p0/#achievementcredential) |
| credentialSubject.type| Must be "AchievementSubject"| Y | [More Info](https://www.imsglobal.org/spec/ob/v3p0/#credentialschema) |
| credenitalSubject.identifier| A collection of information about the recipient of an achievement | N, but recommended | [More Info](https://www.imsglobal.org/spec/ob/v3p0/#identityobject) |
| credentialSubject.identifier[0].type| Type of Identifier, always "IdentityObject" | Y, if including `identifier` | [More Info](https://www.imsglobal.org/spec/ob/v3p0/#identityobject) |
| credentialSubject.identifier[0].identityHash| Name of earner | Y, if including `identifier` | [More Info](https://www.imsglobal.org/spec/ob/v3p0/#identityobject) |
| credentialSubject.identifier[0].identitytType| The identity type | Y, if including `identifier` | [More Info](https://www.imsglobal.org/spec/ob/v3p0/#identityobject) |
| credentialSubject.identifier[0].hashed| Whether or not the identityHash value is hashed | Y, if including `identifier` | [More Info](https://www.imsglobal.org/spec/ob/v3p0/#identityobject) |
| credentialSubject.identifier[0].salt| If the identityHash is hashed, this should contain the string used to salt the hash.  | Y, if including `identifier` and if `hashed` = "true" | [More Info](https://www.imsglobal.org/spec/ob/v3p0/#identityobject) |
| credentialSubject.achievement| Achievement object | Y | [More Info](https://www.imsglobal.org/spec/ob/v3p0/#achievementcredential) |
| credentialSubject.achievement.id | Unambiguous reference to the credential | Y, but not recommended | [More Info](https://www.imsglobal.org/spec/ob/v3p0/#achievementcredential) |
| credentialSubject.achievement.type | Type must be “Achievement” | Y | [More Info](https://www.imsglobal.org/spec/ob/v3p0/#achievementcredential) |
| credentialSubject.achievement.name | Achievement name | Y | [More Info](https://www.imsglobal.org/spec/ob/v3p0/#achievementcredential) |
| credentialSubject.achievement.description | Achievement description | Y | [More Info](https://www.imsglobal.org/spec/ob/v3p0/#achievementcredential) |
| credentialSubject.achievement.criteria | Achievement criteria | Y | [More Info](https://www.imsglobal.org/spec/ob/v3p0/#achievementcredential) |


Notes: 
- OpenBadgeCredential is an alias to AchievementCredential, which is defined under the parent/root level “type". This is why we define the `context`, `id`, `type`, issuer object, etc., as under `achievementCredential`.
- Open badges are VC's that are specified by a "type" of Achievement Subject under the credentialSubject. Achievement Subject is the credentialSubject for VCs.  Open badges are VC's that are specified by a "type" of Achievement Subject under the credentialSubject. In the example above for an open badge, the credentialSubject will have a type of "AchievementSubject".
- A verifiable credential(VC) MUST contain a credentialSubject property.
- The OBV3 specification is based on the core VC specification, which has different property requirements. Neither the credentialSubject nor id are required for VC's, whereas for the OBV3 specification, credentialSubject IS required, but is is not.
- The value of the credentialSubject property is a set of objects where each object MUST be the subject of one or more claims, which MUST be serialized inside the credentialSubject property. Each object MAY also contain an id property to identify the subject.






