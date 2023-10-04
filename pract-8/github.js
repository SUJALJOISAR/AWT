class Github{
    constructor(){
        this.client_id='dfeef27ddb692e62df02';
        this.client_secret='f2d895087d551704f8637f6a608a09b1bb527cd3';
        this.repos_count=5;//Sets the repos_count property to limit the number of repositories to fetch.
        this.repos_sort='create:asc';//Sets the repos_sort property to specify the sorting order of repositories.
    }

    async getUser(user){//Defines an asynchronous method getUser that takes a GitHub username (user) as a parameter.
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        // Fetches the user's profile data from the GitHub API using the provided user parameter and OAuth credentials.
       
       const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    //  Fetches the user's repository data from the GitHub API using the provided user parameter and OAuth credentials.
        
        const profile=await profileResponse.json();//parses the profile data from the JSON 
        const repos=await repoResponse.json();

        return{
            profile,repos
        }
}
}