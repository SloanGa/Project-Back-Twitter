window.addEventListener("DOMContentLoaded", () => {
  bindTweet();
});

const bindTweet = () => {
  const elements = document.querySelectorAll(".btn-danger");
  const tweetContainer = document.querySelector("#tweet-list-container");
  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      const tweetId = e.target.getAttribute("tweetid");
      axios
        .delete("/tweets/" + tweetId)
        .then((res) => {
          tweetContainer.innerHTML = res.data;
          bindTweet();
        })
        .catch((err) => console.log(err));
    });
  });
};
