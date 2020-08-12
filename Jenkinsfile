pipeline{
    agent any
    stages{
        stage("Getting code from repo")
        {
            steps{
                sh 'rm -rf node-app-inst '
                sh 'rm -rf /tmp/node-app-inst '
                sh'git clone https://github.com/Pavan-971/node-app-inst.git'
                
                sh 'bash noderestart.sh'
                sh 'cp -R node-app-inst /tmp'
                sh 'node /tmp/node-app-inst/Web-app/server.js'
                sh 'echo ohjjjlbbblfjjhhhdddfkhhk'
        
            }
        }
    }
}
