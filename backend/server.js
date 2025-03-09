const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const loggedInUser = {
    userId: 101,
    name: 'Sahaj Gupta',
    headline: 'ASE intern @Tekion Corp | ICPC regionalist \'23 | Expert @Codeforces | IIIT Guwahati \'25',
    avatar: '/loggedInUser/userAvatar.png',
    banner: '/loggedInUser/userBanner.png',
    location: 'Lucknow, Uttar Pradesh',
    organization: 'Tekion Corp',
    organizationLogo: '/loggedInUser/userOrganizationLogo.png',
    connections: 277,
    post: 12,
    profileViews: 143,
};

//middleware
app.use(cors());

//endpoints
app.get('/api/user', (req, res) => {
    res.json(loggedInUser);
});

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});