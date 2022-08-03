# Build

```
docker build . --build-arg FLAG=flag{MYAWESOMEFLAG} -t ctf-j-mystery
```

# Run
```
docker run -p 8080:8080 -d --name ctf-j-mystery --rm ctf-j-mystery
```

# Get container ID
```
docker ps
```

# Print app output
```
docker logs <container id>
```

# App access
Running on http://localhost:8080

# Enter the container
```
docker exec -it <container id> /bin/bash
```

# Stop container
```
docker stop ctf-j-mystery
```