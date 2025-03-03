import { users } from "./userData";

export const postList = [
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
];
  