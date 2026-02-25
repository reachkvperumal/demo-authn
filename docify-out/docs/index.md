---
architecture: ../../authn.calm.json
id: index
title: Welcome to CALM Documentation
sidebar_position: 1
slug: /
---

# Welcome to CALM Documentation

This documentation is generated from the **CALM Architecture-as-Code** model.

## High Level Architecture
```mermaid
---
config:
  theme: base
  themeVariables:
    fontFamily: -apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', system-ui, 'Ubuntu', sans-serif
    darkMode: false
    fontSize: 14px
    edgeLabelBackground: '#d5d7e1'
    lineColor: '#000000'
---
%%{init: {"layout": "elk", "flowchart": {"htmlLabels": false}}}%%
flowchart TB
classDef boundary fill:#e1e4f0,stroke:#204485,stroke-dasharray: 5 4,stroke-width:1px,color:#000000;
classDef node fill:#eef1ff,stroke:#007dff,stroke-width:1px,color:#000000;
classDef iface fill:#f0f0f0,stroke:#b6b6b6,stroke-width:1px,font-size:10px,color:#000000;
classDef highlight fill:#fdf7ec,stroke:#f0c060,stroke-width:1px,color:#000000;


    api-gateway["API Gateway"]:::node
    auth-service["Authentication Service"]:::node
    identity-provider["Identity Provider"]:::node
    passkey-manager["Passkey Manager"]:::node
    web-client["Web Client"]:::node

    web-client -->|Web Client sends authentication request to API Gateway.| api-gateway
    api-gateway -->|API Gateway forwards request to Authentication Service.| auth-service
    auth-service -->|Authentication Service validates passkey using Passkey Manager.| passkey-manager
    auth-service -->|Authentication Service performs OIDC token exchange with Identity Provider.| identity-provider



```

## Nodes
- [Web Client](nodes/web-client)
- [API Gateway](nodes/api-gateway)
- [Authentication Service](nodes/auth-service)
- [Passkey Manager](nodes/passkey-manager)
- [Identity Provider](nodes/identity-provider)

## Relationships
- [Web Client To Api Gateway](relationships/web-client-to-api-gateway)
- [Api Gateway To Auth Service](relationships/api-gateway-to-auth-service)
- [Auth Service To Passkey Manager](relationships/auth-service-to-passkey-manager)
- [Auth Service To Identity Provider](relationships/auth-service-to-identity-provider)

## Flows
- [Authentication Flow](flows/auth-flow-001)

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
            <th>Name</th>
            <td>Passkey-WebAuthN-Architecture</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>Passwordless authentication using Passkeys and WebAuthn</td>
        </tr>
        <tr>
            <th>Owner</th>
            <td>Identity Team</td>
        </tr>
        <tr>
            <th>Environment</th>
            <td>production</td>
        </tr>
        <tr>
            <th>CostCenter</th>
            <td>CC-1234</td>
        </tr>
        <tr>
            <th>Compliance</th>
            <td>PCI-DSS</td>
        </tr>
        </tbody>
    </table>
</div>

## ADRs
- [instructions/ADR-001.md](instructions/ADR-001.md)
- [instructions/ADR-002.md](instructions/ADR-002.md)
