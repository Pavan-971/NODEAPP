pipeline{
    agent any
    stages{
        stage("Getting code from repo")
        {
            steps{
                
              
                sh '''
                     cd /tmp
                     rm -rf NODEAPP 
                     git clone https://github.com/Pavan-971/NODEAPP.git
                     
                   '''
              
                sh 'cp -R NODEAPP /tmp'
                sh 'forever start /tmp/NODEAPP/Web-app/server.js'
               
                sh 'echo ohjjjlbbhffhfbbbblfjjhhhffdddsssfkhhk'
        
            }
        }
    }
}



  
