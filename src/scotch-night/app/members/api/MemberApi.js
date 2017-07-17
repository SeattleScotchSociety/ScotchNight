import Members from './Members';

export const createMember = username => {
    Members.push({
        username: memberName
    });

    // fetch('http://seattlescotchsocietyscotchnightapi20170429083006.azurewebsites.net/api/bottles', {
    //     Accept: 'application/json'
    // })
    //     .then(response => response.json())
    //     .then(bottles => {
    //         if (!bottles) {
    //             return;
    //         }
    //         this.setState({ bottles });
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
};

export const getMemberDetails = username => {
    members.find(member => member.username === username);
    // fetch('http://seattlescotchsocietyscotchnightapi20170429083006.azurewebsites.net/api/bottles', {
    //     Accept: 'application/json'
    // })
    //     .then(response => response.json())
    //     .then(bottles => {
    //         if (!bottles) {
    //             return;
    //         }
    //         this.setState({ bottles });
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
};

export const getAllMembers = () => {
    return Members;

    // fetch('http://seattlescotchsocietyscotchnightapi20170429083006.azurewebsites.net/api/bottles', {
    //     Accept: 'application/json'
    // })
    //     .then(response => response.json())
    //     .then(bottles => {
    //         if (!bottles) {
    //             return;
    //         }

    //         this.setState({ bottles });
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
};
