pipeline {
  agent { docker { image 'node:10' } }
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/tutugodfrey/cicd-jenkins'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }      
  }
}