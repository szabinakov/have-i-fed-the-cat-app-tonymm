# have-i-fed-the-cat-app

This Express application was part of a lecture/practical on an introduction to Sequelize. We built a simple web app to track when the cat was last fed!
It was a mob programming session with me as the 'driver' with the essential support of David Cheung, Rachmann, Abdi Issa, Jo Redmond, Jack Mills and Karen Coston.
The practical utilised Create, Read, Update, Delete (CRUD) functionality.

The lecture was delivered by Ian King, Backend Tutor. 

Link to the practical on HackMD:
https://hackmd.io/k9O1pQE0TuOVN4lcgpAlYQ?both

User Stories
As a cat owner
So I can organise my cat's feeding
I want to be able to create a cat with description in the database

As a cat owner
So I can keep track of feedings
I want to be able to record the last time I fed the cat 

As a cat onwer
So I can check when the cat was last fed
I want to be able to read the last time I fed the cat

Requirements
From the user stories, we can infer some requirements on what sort of information our app should store. The main thing we want to keep track of is when a cat was last fed, but to prevent confusion, we should also have a few ways to differentiate between cats.
{
    name: STRING,
    breed: STRING,
    markings: STRING,
    lastFed: DATE
}
We can also see from the user stories that we are going to want to be able to CREATE, READ and UPDATE cats. DELETE might also be useful, but isn’t nessesary for this practical.
