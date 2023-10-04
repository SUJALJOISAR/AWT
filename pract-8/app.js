const github = new Github;
const ui=new UI;

//search input
const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup',(e)=>{
    //get input text
    const userText=e.target.value;

    if(userText!=''){
        github.getUser(userText).then(data=>{
            if(data.profile.message === 'Not Found'){
                //show Alert
                ui.showAlert('User not Found','alert alert-danger');
            }else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }else{
        //clear profile
        ui.clearProfile();
    }
});