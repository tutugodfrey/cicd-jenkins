# Create image from nodejs base image
FROM node:6

# Clone the repo from github
RUN git clone https://github.com/tutugodfrey/cicd-jenkins.git

# Change workind directory to the cloned repo
WORKDIR /cicd-jenkins

# Install all the dependencies
RUN npm install

# Expose port
EXPOSE 4000

# Run the application
CMD ["npm", "start"]