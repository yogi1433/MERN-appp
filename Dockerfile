# Use a Node.js base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Expose the backend port
EXPOSE 3001

# Start the server
CMD ["node", "mongo.js"]

