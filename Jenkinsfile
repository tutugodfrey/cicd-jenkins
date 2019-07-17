pipeline {
  agent { docker { image 'node:6.3' } }
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