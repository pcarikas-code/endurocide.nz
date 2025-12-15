#!/bin/bash

# Deploy Script for Endurocide Website
# Usage: ./deploy.sh [port] [image_tag]

IMAGE_NAME="endurocide-web"
CONTAINER_NAME="endurocide-container"
PORT=${1:-3000}
TAG=${2:-latest}

echo "🚀 Deploying $IMAGE_NAME:$TAG on port $PORT..."

# Stop and remove existing container if it exists
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "🛑 Stopping existing container..."
    docker stop $CONTAINER_NAME
    echo "🗑️  Removing existing container..."
    docker rm $CONTAINER_NAME
fi

# Run the new container
echo "▶️  Starting new container..."
docker run -d \
  --name $CONTAINER_NAME \
  --restart unless-stopped \
  -p $PORT:3000 \
  $IMAGE_NAME:$TAG

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "   App is running at http://localhost:$PORT"
else
    echo "❌ Deployment failed."
    exit 1
fi
