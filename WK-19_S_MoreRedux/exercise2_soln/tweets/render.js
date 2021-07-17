const render = (state) => {
    const tweetsDOM = document.getElementById('tweetsContainer');

    const tweetsHTML = state.map(function (tweet) {
        return `
            <div class="bg-white p-2 m-2 w-50">
                <div class="d-flex align-items-center">
                    <img width="50" src="${tweet.user.profilePic}" />
                    <div class="mt-4 ml-2">
                        <b>${tweet.user.username}</b>
                        ${tweet.user.isVerified ? '<img width="15" src="twitterIcons/check-circle.svg" />' : ''}
                        <p>${tweet.user.handle}</p>
                        
                    </div>
                </div>
                <h3>${tweet.text}</h3>
                <hr />
                <div class="d-flex text-secondary">
                    <img style="opacity: 0.62" src="twitterIcons/message-circle.svg" />
                    <b class="mr-3 ml-1">${tweet.replies}</b>
                    <img style="opacity: 0.62" src="twitterIcons/repeat.svg" />
                    <b class="mr-3 ml-1">${tweet.retweets}</b>
                    <img style="opacity: 0.62" src="twitterIcons/heart.svg" />
                    <b class="mr-3 ml-1">${tweet.likes}</b>
                </div>
            </div>
        `
    });

    tweetsDOM.innerHTML = `
        <div class="d-flex flex-column justify-content-start align-items-center mt-5">
            ${tweetsHTML.join('')}
        </div>
    `
}
