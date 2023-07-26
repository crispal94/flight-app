# Use the Node.js image as the base
FROM node:lts-alpine as build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy the application files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

RUN npm run build

# ... (build-stage)
COPY nginx.conf /etc/nginx/conf.d/default.conf
# ... (production-stage)

# Set up a new image for production
FROM nginx:stable-alpine as production-stage

# Copy the build files from the build-stage to the container
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 to access the application
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
