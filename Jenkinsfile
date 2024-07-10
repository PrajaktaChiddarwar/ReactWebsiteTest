pipeline
{
    agent{
        docker
        {
            image 'node:6-alpine'
            arg '-p 3000:3000'

        }
    }

    stages{
        stage('Build')
        {
            steps
            {
                bat 'npm install'
            }
        }
    }
}