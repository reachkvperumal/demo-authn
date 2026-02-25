---
architecture: ../../../authn.calm.json
node-id: auth-service
id: "auth-service"
title: "Authentication Service"
---

# Authentication Service

## Details
<div class="table-container">
    <table>
        <tbody>
        <tr>
            <th>Unique Id</th>
            <td>auth-service</td>
        </tr>
        <tr>
            <th>Name</th>
            <td>Authentication Service</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>Core authentication service that verifies WebAuthn assertions, validates passkeys, and performs OIDC token exchange.</td>
        </tr>
        <tr>
            <th>Node Type</th>
            <td>service</td>
        </tr>
        </tbody>
    </table>
</div>

## Interfaces
<div class="table-container">
    <table>
        <thead>
        <tr>
            <th>Key</th>
            <th>Value</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><b>Unique Id</b></td>
            <td>
                <table class="nested-table">
                        <tbody>
                        <tr>
                            <td><b>Value</b></td>
                            <td>
                                webauthn
                                    </td>
                        </tr>
                        <tr>
                            <td><b>Unique Id</b></td>
                            <td>
                                unique-id
                                    </td>
                        </tr>
                        </tbody>
                    </table>
            </td>
        </tr>
        <tr>
            <td><b>Interface Type</b></td>
            <td>
                <table class="nested-table">
                        <tbody>
                        <tr>
                            <td><b>Value</b></td>
                            <td>
                                WebAuthn
                                    </td>
                        </tr>
                        <tr>
                            <td><b>Unique Id</b></td>
                            <td>
                                interface-type
                                    </td>
                        </tr>
                        </tbody>
                    </table>
            </td>
        </tr>
        </tbody>
    </table>
</div>

## Related Nodes
```mermaid
graph TD;
auth-service[auth-service]:::highlight;
api-gateway -- Connects --> auth-service;
auth-service -- Connects --> passkey-manager;
auth-service -- Connects --> identity-provider;
classDef highlight fill:#f2bbae;
```

## Controls
### Tls

Encrypt all inbound and outbound authentication traffic.

<div class="table-container">
    <table>
        <thead>
        <tr>
            <th>Key</th>
            <th>Value</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><b>0</b></td>
            <td>
                <table class="nested-table">
                        <tbody>
                        <tr>
                            <td><b>Requirement Url</b></td>
                            <td>
                                https://controls.calm.dev/TLS
                                    </td>
                        </tr>
                        <tr>
                            <td><b>MinimumVersion</b></td>
                            <td>
                                TLS1.2
                                    </td>
                        </tr>
                        </tbody>
                    </table>
            </td>
        </tr>
        </tbody>
    </table>
</div>

### Zero Trust

Use strong identity and continuous verification for service calls.

<div class="table-container">
    <table>
        <thead>
        <tr>
            <th>Key</th>
            <th>Value</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><b>0</b></td>
            <td>
                <table class="nested-table">
                        <tbody>
                        <tr>
                            <td><b>Requirement Url</b></td>
                            <td>
                                https://controls.calm.dev/ZeroTrust
                                    </td>
                        </tr>
                        <tr>
                            <td><b>ServiceIdentity</b></td>
                            <td>
                                mTLS
                                    </td>
                        </tr>
                        <tr>
                            <td><b>LeastPrivilege</b></td>
                            <td>
                                true
                                    </td>
                        </tr>
                        <tr>
                            <td><b>ContinuousVerification</b></td>
                            <td>
                                true
                                    </td>
                        </tr>
                        </tbody>
                    </table>
            </td>
        </tr>
        </tbody>
    </table>
</div>

### Phishing Resistance

Require WebAuthn authentication bound to relying party origin.

<div class="table-container">
    <table>
        <thead>
        <tr>
            <th>Key</th>
            <th>Value</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><b>0</b></td>
            <td>
                <table class="nested-table">
                        <tbody>
                        <tr>
                            <td><b>Requirement Url</b></td>
                            <td>
                                https://controls.calm.dev/PhishingResistance
                                    </td>
                        </tr>
                        <tr>
                            <td><b>Mechanism</b></td>
                            <td>
                                webauthn
                                    </td>
                        </tr>
                        <tr>
                            <td><b>OriginBound</b></td>
                            <td>
                                true
                                    </td>
                        </tr>
                        <tr>
                            <td><b>UserVerification</b></td>
                            <td>
                                required
                                    </td>
                        </tr>
                        </tbody>
                    </table>
            </td>
        </tr>
        </tbody>
    </table>
</div>


## Metadata
<div class="table-container">
    <table>
        <thead>
        <tr>
            <th>Key</th>
            <th>Value</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th>Owner</th>
            <td>Identity Team</td>
        </tr>
        <tr>
            <th>Environment</th>
            <td>production</td>
        </tr>
        <tr>
            <th>Compliance</th>
            <td>PCI-DSS</td>
        </tr>
        </tbody>
    </table>
</div>
