const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const app = express();
const port = 5000;
const { loggedInUser, users } = require('./data/userData');
const { postList, timestampArr, contentArr, likesArr } = require('./data/postData');

//middleware
app.use(cors());
app.use(express.json());

// utils 
function generateDummyPosts(count){
    const dummyPosts = [];
    for(let i = 1; i<=count; i++){
        const randomTimestampIndex = _.random(0, 9);
        const randomContentIndex = _.random(0, 9);
        const randomLikesIndex = _.random(0, 9);
        const randomUserIndex = _.random(0, 9);
        dummyPosts.push({
            id: `post_${i}`,
            author: users[randomUserIndex],
            content: contentArr[randomContentIndex].content,
            image: contentArr[randomContentIndex].image,
            timestamp: timestampArr[randomTimestampIndex],
            likes: likesArr[randomLikesIndex],
        });
    }
    return dummyPosts;
}
const dummyPosts = generateDummyPosts(30);
const allPosts = [...postList, ...dummyPosts];

const getUserListBySearchQuery = (req, res) => {
    const search = req.query.search || '';

    const filterUsersBySearchQuery = user => _.includes(_.toLower(user.name), _.toLower(search));

    if(search){ 
        const filteredUsers = _.filter(users, filterUsersBySearchQuery);
        return res.json(filteredUsers);
    }
    res.json(users);
};

const getPostsUsingFilters = (req, res) => {
    const page = _.parseInt(req.query.page) || 1;
    const search = req.query.search || '';
    const userId = _.parseInt(req.query.userId) || null;
    const startDate = req.query.startDate ? _.parseInt(req.query.startDate) : 0;
    const endDate = req.query.endDate ? _.parseInt(req.query.endDate) : Number.MAX_SAFE_INTEGER;

    const filterPostsUsingFilters = (post) => {
        const isInDateRange = post.timestamp >= startDate && post.timestamp <= endDate;
        const isCorrectUser = userId ? post.author?.userId === userId : true;
        const isMatchingSearch = search === '' || 
            _.includes(_.toLower(post.author.name), _.toLower(search)) ||
            _.includes(_.toLower(post.content), _.toLower(search));

        return (isInDateRange && isCorrectUser && isMatchingSearch);
    };

    // const params = {
    //     page: page,
    //     search: search,
    //     userId: userId,
    //     startDate: startDate,
    //     endDate: endDate,
    // };
    // console.log('params : ', params);

    let filteredPosts = _.filter(allPosts, filterPostsUsingFilters);

    if(startDate !== 0 || endDate !== Number.MAX_SAFE_INTEGER)
        filteredPosts = _.sortBy(filteredPosts, post => post.timestamp);

    const batchSize = 10;
    const totalPosts = filteredPosts.length;
    const totalPages = _.ceil(totalPosts / batchSize);
    const startIndex = (page - 1) * batchSize;
    const endIndex = startIndex + batchSize > totalPosts ? totalPosts : startIndex + batchSize;
    const slicedPosts = _.slice(filteredPosts, startIndex, endIndex);

    setTimeout(() => {
        res.json({
            posts: slicedPosts,
            currentPage: page,
            totalPages: totalPages,
            totalPosts: totalPosts,
        });
    }, 1000);
};

//endpoints
app.get('/api/user', (req, res) => {
    res.json(loggedInUser);
});

app.get('/api/users', getUserListBySearchQuery);

app.get('/api/posts', getPostsUsingFilters);

app.post('/api/post', (req, res) => {

});

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});