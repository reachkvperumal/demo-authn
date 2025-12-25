# CALM Architecture Specification for Passkey Authentication

## Metadata

- name: Passkey-WebAuthN-Architecture
- description: Passwordless authentication using Passkeys and WebAuthn
- owner: Identity Team
- environment: production
- costCenter: CC-1234
- compliance: PCI-DSS

## Nodes

- Web Client (webclient)
- API Gateway (service)
- Authentication Service (service) with WebAuthn interface
- Passkey Manager (service)
- Identity Provider (service) with OIDC interface

## Relationships

- Web Client → API Gateway (HTTPS)
- API Gateway → Authentication Service (HTTPS)
- Authentication Service → Passkey Manager (mTLS)
- Authentication Service → Identity Provider (HTTPS/OIDC)

## Controls

- MFA
- TLS
- ZeroTrust
- PhishingResistance

## ADRs

| ID      | Decision                                     | Status   |
|---------|----------------------------------------------|----------|
| ADR-001 | Use Passkeys for Passwordless Authentication | accepted |
| ADR-002 | Enforce TLS for all external communication   | accepted |

## Flows

### Authentication Flow

- WebClient ->> APIGateway: Send authentication request
- APIGateway ->> AuthService: Forward request
- AuthService ->> PasskeyManager: Validate passkey
- AuthService ->> IdentityProvider: OIDC token exchange
- IdentityProvider -->> AuthService: Return token
- AuthService -->> APIGateway: Return response
- APIGateway -->> WebClient: Deliver authentication result
