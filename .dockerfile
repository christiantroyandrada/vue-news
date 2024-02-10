# Use a Node.js base image
FROM node:lts-alpine

# Set up a working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --quiet --no-progress

# Copy the rest of the application code
COPY . .

# Expose port if needed
EXPOSE 8080

# Run Vite
CMD ["sh", "-c", "npm run build && npm run preview"]
