module.exports = {
    docs: [
        {
            type: 'doc',
            id: 'index',
            label: 'Home',
        },
        {
            type: 'category',
            label: 'Nodes',
            items: [
                'nodes/web-client',
                'nodes/api-gateway',
                'nodes/auth-service',
                'nodes/passkey-manager',
                'nodes/identity-provider'
            ],
        },
        {
            type: 'category',
            label: 'Relationships',
            items: [
                'relationships/web-client-to-api-gateway',
                'relationships/api-gateway-to-auth-service',
                'relationships/auth-service-to-passkey-manager',
                'relationships/auth-service-to-identity-provider'
            ],
        },
        {
            type: 'category',
            label: 'Flows',
            items: [
                'flows/auth-flow-001'
            ],
        },
    ],
};

