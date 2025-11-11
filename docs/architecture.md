# Architecture

```
WS Scanner  ->  Analyzer  ->  Queue (BullMQ) ->  API -> Alerts/Webhooks
                 |                               |
                 +---- Risk Index (packages/core)+
```

**Metrics:** velocity (tx/min), wallet clustering, holders delta, social ignition.    **Infra:** Redis (BullMQ), Express API. Optional: Next.js dashboard.
