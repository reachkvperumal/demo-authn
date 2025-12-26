# Authn Architecture Instructions

## Purpose
This document provides detailed instructions for generating a CALM 1.x–compliant architecture model for a passwordless authentication solution using **Passkeys** and **WebAuthn**.

# CALM Authn Model Instructions

- Generate `authn.calm.json` that **must** validate against:
  `https://calm.finos.org/release/1.1/meta/calm.json`.

- Always include the `$schema` property at the top-level:
  `"${schema}": "https://calm.finos.org/release/1.1/meta/calm.json"`.
  
- Follow the field names and structures from the CALM schema
  (`metadata`, `nodes`, `relationships`, `controls`, `adrs`, `flows`).


## Generation rules for Copilot

- Always include a `metadata` array on every node and relationship, at minimum with:
  - `owner`, `environment`, `compliance` for nodes
  - `sensitivity` or `criticality` for relationships
- Always include a `controls` object on:
  - All security-relevant nodes (`Authentication Service`, `Passkey Manager`, `Identity Provider`)
  - All relationships using `HTTPS`, `mTLS`, or `HTTPS/OIDC`
- Do NOT place `metadata` or `controls` only at the top-level; they MUST be defined inside each relevant `node` and `relationship` object.


## Output
Generate a single JSON file named **`authn.calm.json`**.  
It must be syntactically valid, CALM 1.x–compliant, and contain **no comments**.

## Structural Requirements
Follow the structural organization:
- `metadata`
- `nodes` (each with `type` and optional `interfaces`)
- `relationships` (each with `protocol`)
- `controls` (each using CALM control URLs)
- `adrs` (Architecture Decision Records)
- `flows` (with ordered communication steps)

## Metadata
| Field | Value |
|-------|--------|
| name | Passkey-WebAuthN-Architecture |
| description | Passwordless authentication using Passkeys and WebAuthn |
| owner | Identity Team |
| environment | production |
| costCenter | CC-1234 |
| compliance | PCI-DSS |

## Nodes
Define the following system nodes:

| Node | Type | Interface |
|------|------|------------|
| Web Client | webclient | — |
| API Gateway | service | — |
| Authentication Service | service | WebAuthn |
| Passkey Manager | service | — |
| Identity Provider | service | OIDC |

## Relationships
Establish these directional connections and their protocols:

1. Web Client → API Gateway — `HTTPS`
2. API Gateway → Authentication Service — `HTTPS`
3. Authentication Service → Passkey Manager — `mTLS`
4. Authentication Service → Identity Provider — `HTTPS/OIDC`

## Controls
Include the following CALM security controls:

- `https://controls.calm.dev/MFA`
- `https://controls.calm.dev/TLS`
- `https://controls.calm.dev/ZeroTrust`
- `https://controls.calm.dev/PhishingResistance`

## Architecture Decision Records (ADRs)
Document these accepted decisions:

| ADR ID | Title | Status |
|---------|--------|---------|
| ADR-001 | Use Passkeys for Passwordless Authentication | accepted |
| ADR-002 | Enforce TLS for all external communication | accepted |

## Authentication Flow
Model this sequential flow under the `"flows"` section:

1. WebClient → APIGateway: Send authentication request  
2. APIGateway → AuthService: Forward request  
3. AuthService → PasskeyManager: Validate passkey  
4. AuthService → IdentityProvider: OIDC token exchange  
5. IdentityProvider → AuthService: Return token  
6. AuthService → APIGateway: Return response  
7. APIGateway → WebClient: Deliver authentication result

---

Generate the `authn.calm.json` file by encoding these components according to the CALM 1.x schema, ensuring structural validity and schema compliance.