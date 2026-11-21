

## HAProxy Load Balancing & Access Control

A hands-on implementation of HAProxy with multiple Spring Boot instances running in Docker containers.

### Features

- **Load Balancing:** Distributes incoming requests across three backend servers using Round Robin or Source IP algorithms.
- **Health Checks:** Detects unavailable backend servers and excludes them from load balancing.
- **Path-Based Access Control:** Uses HAProxy ACLs to block `/admin` requests through the proxy while allowing direct backend access for testing.

### Run

```bash
docker compose up --build -d
```

### Test

```bash
# Load balancing
curl http://localhost:8080

# Blocked through HAProxy (403)
curl -i http://localhost:8080/admin

# Direct backend access
curl http://localhost:8081/admin
```

**Concepts explored:** Docker, Docker Compose, container networking, reverse proxies, load balancing, health checks and HAProxy ACLs.

