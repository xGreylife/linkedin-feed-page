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
        const randomTimestampIndex = Math.floor(Math.random() * 10);
        const randomContentIndex = Math.floor(Math.random() * 10);
        const randomLikesIndex = Math.floor(Math.random() * 10);
        const randomUserIndex = Math.floor(Math.random() * 10);
        dummyPosts.push({
            id: `post_${i}`,
            author: users[1],
            content: contentArr[randomContentIndex].content,
            image: contentArr[randomContentIndex].image,
            timestamp: timestampArr[randomTimestampIndex],
            likes: likesArr[randomLikesIndex],
        });
    }
    return dummyPosts;
}
const dummyPosts = generateDummyPosts(10);
const allPosts = [...postList, ...dummyPosts];

const getUserListBySearchQuery = (req, res) => {
    const search = req.query.search || '';
    if(search){ 
        const filteredUsers = _.filter(users, user => _.toLower(user.name).includes(_.toLower(search)));
        return res.json(filteredUsers);
    }
    res.json(users);
};

//endpoints
app.get('/api/user', (req, res) => {
    res.json(loggedInUser);
});

app.get('/api/users', getUserListBySearchQuery);

app.get('/api/posts', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const search = req.query.search || '';
    const userId = parseInt(req.query.userId) || null;
    const startDate = req.query.startDate ? parseInt(req.query.startDate) : 0;
    const endDate = req.query.endDate ? parseInt(req.query.endDate) : Number.MAX_SAFE_INTEGER;

    const params = {
        page: page,
        search: search,
        userId: userId,
        startDate: startDate,
        endDate: endDate,
    }

    // console.log('params : ', params);

    let filteredPosts = allPosts.filter((post) => {
        const isInDateRange = post.timestamp >= startDate && post.timestamp <= endDate;
        const isCorrectUser = userId ? post.author.userId === userId : true;
        const isMatchingSearch = search === '' || 
            post.author.name.toLowerCase().includes(search.toLowerCase()) ||
            post.content.toLowerCase().includes(search.toLowerCase());

        return (isInDateRange && isCorrectUser && isMatchingSearch);
    })

    filteredPosts.sort((postA, postB) => postA.timestamp - postB.timestamp);

    const batchSize = 10;
    const totalPosts = filteredPosts.length;
    const totalPages = Math.ceil(totalPosts / batchSize);
    const startIndex = (page - 1) * batchSize;
    const endIndex = startIndex + batchSize > totalPosts ? totalPosts : startIndex + batchSize;
    const slicedPosts = filteredPosts.slice(startIndex, endIndex);

    setTimeout(() => {
        res.json({
            posts: slicedPosts,
            currentPage: page,
            totalPages: totalPages,
            totalPosts: totalPosts,
        });
    }, 1000);
});

app.post('api/post', (req, res) => {

});

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});