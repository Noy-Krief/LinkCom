function renderPosts(data) {
    const accountPostsContainer = $('.account-posts');
    accountPostsContainer.empty();

    data.posts.forEach(function (post) {
      const postHtml = `
      <div class="col-md-6 offset-md-3">
          <div class="card mb-4">
              <div class="card-body">
                  <div class="d-flex align-items-center">
                      <div class="ms-3">
                          <div class="d-flex flex-wrap justify-content-between align-items-center">
                              <div class="author-avatar">
                                  <div class="row align-items-center">
                                      <div class="col-auto">
                                          <img src="/images/${post.author}.jpg" class="rounded-circle" width="40" height="40">
                                      </div>
                                      <div class="col">
                                          <h5 class="card-group"> ${post.group_name} </h5>
                                          <h6 class="card-author text-small me-2 mt-2"> ${post.author} </h6>
                                      </div>
                                  </div>
                              </div>
                              <div class="post-menu">
                                  <svg class="d-block mx-auto mb-2" width="12" height="12"><use xlink:href="#menu"/></svg>
                                  <ul id="menu" class="menu d-none">
                                      <li><a href="#"> Edit Post</a></li>
                                      <li><a href="#"> Delete Post</a></li>
                                  </ul>
                              </div>
                          </div>
                          <p class="card-text"> ${post.body}</p>
                          <div class="hates-box">
                              <div class="hates-icon">
                                  <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#hate"/></svg>
                              </div>
                              <div class="hates-number">
                                  ${post.hates}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      `;
      accountPostsContainer.append(postHtml);
    });
};

$(document).ready(function(){
    fetch('/posts', { method: 'POST',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({author: $('.profile-text').text()}),})
                            .then(async (response) => {
                                if (!response.ok) {
                                    throw new Error('Network response was not ok');
                                } else {
                                    const postsData = await response.json();
                                    renderPosts(postsData);
                                }
                            })
                            .catch((error) => {
                                console.error('Error fetching posts:', error);
                            });
});