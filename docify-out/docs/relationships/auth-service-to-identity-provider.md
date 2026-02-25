---
architecture: ../../../authn.calm.json
relationship-id: auth-service-to-identity-provider
id: "auth-service-to-identity-provider"
title: "Auth Service To Identity Provider"
---

# Auth Service To Identity Provider

## Details
<div class="table-container">
    <table>
        <tbody>
        <tr>
            <th>Unique Id</th>
            <td>auth-service-to-identity-provider</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>Authentication Service performs OIDC token exchange with Identity Provider.</td>
        </tr>
        <tr>
            <th>Protocol</th>
            <td>HTTPS</td>
        </tr>
        </tbody>
    </table>
</div>

## Related Nodes
```mermaid
graph TD;
auth-service -- Connects --> identity-provider;
classDef highlight fill:#f2bbae;
```

## Controls
### Tls

Protect token exchange with TLS.

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

Apply least privilege and continuous verification for token exchange.

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
            <th>Criticality</th>
            <td>high</td>
        </tr>
        <tr>
            <th>Sensitivity</th>
            <td>high</td>
        </tr>
        <tr>
            <th>ApplicationProtocol</th>
            <td>OIDC</td>
        </tr>
        <tr>
            <th>RequestedProtocol</th>
            <td>HTTPS/OIDC</td>
        </tr>
        </tbody>
    </table>
</div>
