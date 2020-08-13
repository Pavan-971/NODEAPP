pipeline{
    agent any
    stages{
        stage("Getting code from repo")
        {
            steps{
                
                sh '#rm -rf NODEAPP '
                sh '#rm -rf /tmp/NODEAPP '
                sh'git clone https://github.com/Pavan-971/NODEAPP.git'
                
              
                sh 'cp -R NODEAPP /tmp'
                sh 'forever start /tmp/NODEAPP/Web-app/server.js'
               
                sh 'echo ohjjjlbbbbbblfjjhhhffdddsssfkhhk'
        
            }
        }
    }
}



  
