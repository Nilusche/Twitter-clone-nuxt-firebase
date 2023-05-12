# Twitter Clone
<img width="1245" alt="image" src="https://user-images.githubusercontent.com/73897941/224555421-8e1c59b7-0985-428b-a1e1-f8f04c3d24f3.png">

This is a full-stack Twitter clone built with Nuxt.js and Firebase. The project replicates key features including user accounts, timelines, notifications, and messaging. <br> It also utilizes natural language processing (NLP) for tweet recommendation and trend extraction with the RAKE algorithm, LDA, and TF-IDF. Redis caching techniques are applied to reduce database usage by 60% for efficient resource utilization.
Refer to the [software requirements specification](https://github.com/Nilusche/Twitter-clone-nuxt-firebase/blob/master/Twitter_clone_Software_Requirements_Specification_%20(1).pdf) for more details.

## Features

- User authentication with Firebase
- Tweet creation, editing, and deletion
- Like and reply functionality for tweets
- Follow and unfollow users
- Notifications for new followers, likes, and replies
- Private messaging between users
- Trending topics based on tweet content
- Tweet recommendation based on user interests

## Architecture
<img width="450" alt="image" src="https://github.com/Nilusche/Twitter-clone-nuxt-firebase/assets/73897941/37b584b4-34f8-4f58-931c-016052d723a5">

The Twitter clone is built using Nuxt.js and Firebase. Nuxt.js is a framework for building server-side rendered (SSR) Vue.js applications. It provides a number of features that simplify development, including automatic code splitting, server-side rendering, and static site generation. Firebase is a platform for building mobile and web applications. It provides a number of services, including authentication, database, storage, and hosting.

The front-end of the Twitter clone is built using Vue.js and Vuex. Vue.js is a progressive framework for building user interfaces, while Vuex is a state management library for Vue.js applications. The back-end of the Twitter clone uses Firebase's Authentication, Cloud Firestore, Cloud Functions, and Cloud Messaging services.

The Twitter clone also uses Natural Language Processing (NLP) for tweet recommendation and trend extraction. The RAKE-Algorithm, LDA, and TF-IDF are used for this purpose.

Finally, Redis caching techniques are applied to reduce database usage by 60% to enable efficient resource utilization.



## Getting Started

To get started with the project, you'll need to clone the repository and install the dependencies. You'll also need to set up a Firebase project and configure the app with your Firebase credentials. 

### Prerequisites

- Node.js
- Nuxt.js
- Firebase account and project

### Installing

1. Clone the repository
```
git clone https://github.com/Nilusche/Twitter-clone-nuxt-firebase.git
```
2. Install dependencies
```
cd Twitter-clone-nuxt-firebase
npm install
```
3. Run the app
```
npm run dev
```

## Deployment

The app can be deployed to various hosting services such as Vercel, Netlify, or Firebase Hosting. Refer to the documentation of your chosen hosting service for more details.

## Built With

- [Nuxt.js](https://nuxtjs.org/) - The web framework used
- [Firebase](https://firebase.google.com/) - The backend and database
- [Redis](https://redis.io/) - The caching system



## Acknowledgments

- The RAKE algorithm, LDA, and TF-IDF are implemented using the [Natural library](https://github.com/NaturalNode/natural) for Node.js.
- Redis caching techniques which i explained here [blog post](https://www.linkedin.com/pulse/building-clone-twitter-caching-timelines-tweets-redis-liyanaarachchi%3FtrackingId=AtdxJEJoZ0IiKfFDoG%252BN%252FQ%253D%253D/?trackingId=AtdxJEJoZ0IiKfFDoG%2BN%2FQ%3D%3D).
- I have written some blogpost about this project [tutorial series](https://www.linkedin.com/pulse/building-clone-twitter-vuenuxt-js-firebase-part-1-liyanaarachchi-1e%3FtrackingId=U8X7qve5Pq2gTc0XrSJxQg%253D%253D/?trackingId=U8X7qve5Pq2gTc0XrSJxQg%3D%3D).


