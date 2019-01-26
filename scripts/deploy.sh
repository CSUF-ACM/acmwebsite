#!/bin/bash

# Deploy changes to server
sshpass -p $SERVER_PASS scp -v -r build/* $SERVER_USER@$SERVER_URL:~/homepage
