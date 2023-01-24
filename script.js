const tweets = [
      {
          id: 1,
          text: "Hello, world!",
          username: "BSCGraduate",
          createdAt: "2022-01-01 12:00:00",
          likes: 0
      },
      {
          id: 2,
          text: "Just finished building my first Twitter clone!",
          username: "JamesRoskellBSC",
          createdAt: "2022-01-02 18:00:00",
          likes: 0
      },
      {
          id: 3,
          text: "Excited to see what the future holds for this project!",
          username: "RoskellJamesBSC",
          createdAt: "2022-01-03 9:00:00",
          likes: 0
      }
  ];
  
  // tweet container section
  const tweetContainer = document.querySelector('#tweet-container');
  
  // function to create and add tweets to the container
  const addTweet = (tweet) => {
      const newTweet = document.createElement('section');
      newTweet.classList.add('tweet');
      newTweet.innerHTML = `
          <p>${tweet.text}</p>
          <div class="tweet-info">
              <span class="username">@${tweet.username}</span>
              <span class="created-at">${tweet.createdAt}</span>
          </div>  
          <div class="tweet-actions">
          <button class="like-tweet" data-tweet-id="${tweet.id}">Like</button>
          <span class="likes-count">${tweet.likes}</span>
      </div>
      `;
      tweetContainer.appendChild(newTweet);
  };
  
  // loop through tweets array and add each tweet to the container
  tweets.forEach(addTweet);
  tweetContainer.addEventListener('click', (event) => {
      if (!event.target.classList.contains('like-tweet')) {
          return;
      }
      const tweetId = event.target.getAttribute('data-tweet-id');
      const tweet = tweets.find((tweet) => tweet.id === Number(tweetId));
      if (tweet) {
          tweet.likes += 1;
          event.target.nextElementSibling.innerText = tweet.likes;
      }
  });
  