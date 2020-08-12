pipeline{
    agent any
    stages{
        stage("Code Deployment")
        {
            steps{
               
                
               
                sh 'tar -zcvf /tmp/node-app-inst.tar.gz /tmp/node-app-inst' 
               
                sh "sshpass -p 'pavankumar' scp /tmp/node-app-inst.tar.gz root@18.220.35.224:/home"
                sh 'ansible-playbook /home/ansible/playbook.yml'
                sh 'echo oiiiknnnjk'
                
                 


                
        
            }
        }
    }
}
