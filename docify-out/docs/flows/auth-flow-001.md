---
id: auth-flow-001
title: Authentication Flow
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | auth-flow-001                   |
| **Name**            | Authentication Flow                 |
| **Description**     | Sequence of steps for passwordless authentication using Passkeys and WebAuthn.          |
</div>

## Sequence Diagram
```mermaid
sequenceDiagram
            Web Client ->> API Gateway: WebClient to APIGateway: Send authentication request
            API Gateway ->> Authentication Service: APIGateway to AuthService: Forward request
            Authentication Service ->> Passkey Manager: AuthService to PasskeyManager: Validate passkey
            Authentication Service ->> Identity Provider: AuthService to IdentityProvider: OIDC token exchange
            Identity Provider -->> Authentication Service: IdentityProvider to AuthService: Return token
            Authentication Service -->> API Gateway: AuthService to APIGateway: Return response
            API Gateway -->> Web Client: APIGateway to WebClient: Deliver authentication result
```
## Controls
    _No controls defined._

## Metadata
  _No Metadata defined._
