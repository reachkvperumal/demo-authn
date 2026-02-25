---
architecture: ../../../authn.calm.json
node-id: identity-provider
id: "identity-provider"
title: "Identity Provider"
---

# Identity Provider

## Details
<div class="table-container">
    <table>
        <tbody>
        <tr>
            <th>Unique Id</th>
            <td>identity-provider</td>
        </tr>
        <tr>
            <th>Name</th>
            <td>Identity Provider</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>OIDC Identity Provider used for token issuance and identity federation.</td>
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
                                oidc
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
                                OIDC
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
identity-provider[identity-provider]:::highlight;
auth-service -- Connects --> identity-provider;
classDef highlight fill:#f2bbae;
```

## Controls
### Tls

Protect OIDC endpoints and token exchanges with TLS.

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

Ensure token exchanges are authorized and continuously verified.

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
