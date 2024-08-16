# Use the official Node.js image as a parent image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 5001
EXPOSE 5001

# Start the application
CMD ["node", "index.js"]