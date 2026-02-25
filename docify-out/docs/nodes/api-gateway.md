---
architecture: ../../../authn.calm.json
node-id: api-gateway
id: "api-gateway"
title: "API Gateway"
---

# API Gateway

## Details
<div class="table-container">
    <table>
        <tbody>
        <tr>
            <th>Unique Id</th>
            <td>api-gateway</td>
        </tr>
        <tr>
            <th>Name</th>
            <td>API Gateway</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>Edge gateway that terminates HTTPS and forwards authentication requests to backend services.</td>
        </tr>
        <tr>
            <th>Node Type</th>
            <td>service</td>
        </tr>
        </tbody>
    </table>
</div>

## Interfaces
<p class="empty-message">No interfaces defined.</p>

## Related Nodes
```mermaid
graph TD;
api-gateway[api-gateway]:::highlight;
web-client -- Connects --> api-gateway;
api-gateway -- Connects --> auth-service;
classDef highlight fill:#f2bbae;
```

## Controls
_No controls defined._

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
