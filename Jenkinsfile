pipeline{
    agent any
    stages{
        stage("Code Deployment")
        {
            steps{
               
                
                
                sh 'tar -zcvf  /tmp/NODEAPP.tar.gz /tmp/NodeAPP' 
               
                sh "#sshpass -p 'pavankumar' scp /tmp/NODEAPP.tar.gz root@18.220.35.224:/home"
                sh '#ansible-playbook /home/ansible/playbook.yml'
                sh '#echo oiiinnnnjiddddk'
                
                 


                
        
            }
        }
    }
}
