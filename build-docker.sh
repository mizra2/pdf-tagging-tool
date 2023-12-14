#!/bin/bash
docker build --file=Dockerfile  --platform=linux/amd64 -t nishitproject/backend:frontend-dev .
