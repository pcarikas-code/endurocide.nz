#!/bin/bash

# Build Script for Endurocide Website
# Usage: ./build.sh [image_tag]

IMAGE_NAME="endurocide-web"
TAG=${1:-latest}

echo "🏗️  Building Docker image: $IMAGE_NAME:$TAG..."

# Build the Docker image
docker build -t $IMAGE_NAME:$TAG .

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "   Image: $IMAGE_NAME:$TAG"
else
    echo "❌ Build failed."
    exit 1
fi
