const { users } = require('./userData');

const postList = [
    {
        id: 'post_1740716126941',
        author: users[1],
        content: 'Excited to share that I have just completed my first blockchain project! #blockchain',
        image: '/posts/post_101.png',
        timestamp: 1740716126941,
        likes: 42,
        comments: [
            {
                id: 'comment_101',
                author: users[5],
                content: 'That\'s awesome! What did you build?',
                timestamp: '1h ago'
            },
            {
                id: 'comment_102',
                author: users[3],
                content: 'Congrats! blockchain is so much fun to work with.',
                timestamp: '30m',
            }
        ]
    },
    {
        id: 'post_1730726524041',
        author: users[2],
        content: 'Just published my article on product strategy for startups. Check it out in the comments!',
        image: null,
        timestamp: 1730726524041,
        likes: 18,
        comments: [
            {
                id: 'comment_103',
                author: users[4],
                content: 'Here\'s the link to my article example.com/article',
                timestamp: '3h ago',
            }
        ]
    },
    {
        id: 'post_1741695261455',
        author: users[3],
        content: 'Developed an application for Nagaland Govt. using Kotlin !',
        image: '/posts/post_102.png',
        timestamp: 1741695261455,
        likes: 32,
        comments: [
            {
                id: 'comment_104',
                author: users[0],
                content: 'Amazing work !!!',
                timestamp: '3h ago',
            }
        ]
    },
];

const timestampArr = [1741651200000, 1741478400000, 1741305600000, 1741132800000, 1740960000000, 
    1740787200000, 1740441600000, 1740268800000, 1740096000000, 1739923200000];

const contentArr = [
    {
        content: 'Happy to share that my team qualified for ICPC Amritapuri and Kanpur Regionals',
        image: '/posts/post_103.png',
    },
    {
        content: 'Had my first research paper published on Graceful Labeling of Trees in Journal of Graphs',
        image: '/posts/post_104.png',
    },
    {
        content: 'Received a certificate from Udemy on completing React course.',
        image: '/posts/post_105.png',
    },
    {
        content: 'Achived a global rank of 1328 in Codeforces Round 2000',
        image: '/posts/post_106.png',
    },
    {
        content: 'I\'m happy to share that I\'m starting a new position as Associate at Goldman Sachs',
        image: '/posts/post_107.png',
    },
    {
        content: 'Delighted to share that our project won the first position in ETHIndia - 2025',
        image: '/posts/post_108.png',
    },
    {
        content: 'Happy to have achieved Gaurdian rank on leetcode after the last contest',
        image: '/posts/post_109.png',
    },
    {
        content: 'Happy to share that I have successfully completed my GSOC journey!',
        image: '/posts/post_110.png',
    },
    {
        content: 'Glad to share that our college successfully conducted a hackathon with more than 20 colleges participating!',
        image: '/posts/post_111.png',
    },
    {
        content: 'Delighted to share that i have completed my project on ANNs.',
        image: '/posts/post_112.png',
    }
];

const likesArr = [12, 34, 45, 65, 78, 23, 15, 46, 97, 88];

module.exports = { postList, timestampArr, contentArr, likesArr };