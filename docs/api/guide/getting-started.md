# Getting Started with JDoodle API

JDoodle provides powerful APIs for code compilation and execution. This guide will help you get started with integrating JDoodle into your applications.

## Authentication

To use the JDoodle API, you'll need:
- Client ID
- Client Secret

These credentials should be included in your API requests.

## Quick Start

### REST API Example

```bash
curl -X POST https://api.jdoodle.com/v1/execute \
  -H "Content-Type: application/json" \
  -d '{
    "clientId": "your_client_id",
    "clientSecret": "your_client_secret",
    "script": "print('Hello, World!')",
    "language": "python3",
    "versionIndex": "0"
  }'
```

### WebSocket API Example

```javascript
const ws = new WebSocket('wss://api.jdoodle.com/v1/ws');

ws.onopen = () => {
  ws.send(JSON.stringify({
    type: 'auth',
    token: 'your_bearer_token'
  }));
};

ws.onmessage = (event) => {
  console.log('Received:', event.data);
};
```

## Try it in Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/your-collection-id)

## API Reference

For detailed API documentation, check out our [OpenAPI specification](/api/guide/rest-api).

## Rate Limits

- Free tier: 100 requests/day
- Pro tier: 1000 requests/day
- Enterprise: Custom limits

## Next Steps

- [View the full API Reference](/api/guide/rest-api)
- [Learn about WebSocket API](/api/guide/websocket)
- [Explore Embedded IDE integration](/api/guide/embedded-ide)