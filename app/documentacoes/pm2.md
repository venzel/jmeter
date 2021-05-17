# PM2

[README.md](../README.md)

> **Atencao:** desconsiderar o uso de acentos

## Add PATH .bashrc

```bash
# Edit .bashrc
$ nano ~/.bashrc
$ nano ~/.zshrc

    # INSERT
    export PATH="$(yarn global bin):$PATH"

# Reload
$ source ~/.bashrc
$ source ~/.zshrc
```

### Install pm2 global

```bash
$ yarn global add pm2
$ npm install pm2 -g
```

### Start server pm2

```bash
# Alert: before, enter folder behappy
$ sudo pm2 start /opt/project-test/dist/Server.js --name node-behappy-server
```

### Stop server pm2

```bash
# Stop
$ pm2 stop node-behappy-server

# Save, important!
$ pm2 save
```

### Add start pm2 init reboot system

```bash
$ pm2 startup ubuntu -u behappy

    # Copy result and execute
    # Require password

# Important: save all process for auto init
$ pm2 save
```

### commands pm2

```bash
# Monitore
$ pm2 monit

# List servers
$ pm2 list

# Logs
$ pm2 log
```

### Options pm2

```bash
# Start service
$ pm2 start node-behappy-server

# Stop service
$ pm2 stop node-behappy-server

# Delete service
$ pm2 delete node-behappy-server
```
