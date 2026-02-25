---
architecture: ../../../authn.calm.json
flow-id: auth-flow-001
id: "auth-flow-001"
title: "Authentication Flow"
---

# Authentication Flow

## Details
<div class="table-container">
    <table>
        <tbody>
        <tr>
            <th>Unique Id</th>
            <td>auth-flow-001</td>
        </tr>
        <tr>
            <th>Name</th>
            <td>Authentication Flow</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>Sequence of steps for passwordless authentication using Passkeys and WebAuthn.</td>
        </tr>
        </tbody>
    </table>
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
<p class="empty-message">No metadata defined.</p>
