# Simple Dockerfile for Node.js API
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies (copy package.json first)
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Bundle app source
COPY . .

# Environment
ENV NODE_ENV=production
ENV PORT=8080

# Expose port
EXPOSE 8080

# Use non-root user
USER node

# Start the app
CMD ["node", "app.js"]
