# Use the official Node.js image as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variable for legacy OpenSSL provider
ENV NODE_OPTIONS=--openssl-legacy-provider

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
