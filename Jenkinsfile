node {
    
    stage('Checkout') {
        git branch: 'main', url: 'https://github.com/Michael-Hutz/tldp-team3-server-node.git'
    }
    
    stage('Install Dependencies') {
        sh 'npm install'
    }
    
    stage('Run') {
        sh 'node server &'
    }
    
    stage('Postman Tests') {
        sh 'npx newman run Playground.postman_collection.json'
    }
}
