#!/bin/bash

# Deploy changes to server
sshpass -p $SERVER_PASS scp -r build/* $SERVER_USER@$SERVER_URL:~/homepage
