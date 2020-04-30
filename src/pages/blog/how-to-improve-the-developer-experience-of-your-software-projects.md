---
templateKey: blog-post
title: How to Improve the Developer Experience of Your Software Projects
date: 2020-02-27T04:18:46.016Z
description: Practices that bring you joy as you grow and scale your software projects
featuredpost: false
featuredimage: /img/1_aeqap7kx5zqwzp7abkmc0a.jpeg
tags:
  - Developer Experience
---
If you have the misfortune or fortune of working with me, one thing you will notice is I usually have more questions than answers. For the past few months, there have been a few questions that have been keeping me up at night.

* Why do a lot of software engineers over-complicate things?
* Why don’t we focus more on simplifying our software projects?
* What are the objective metrics that can be used to measure simplicity in software projects?
* What makes the top open-source projects gain traction?
* Why is working out and eating healthily so difficult? (Joke…that’s a topic for another day and publication!)

- - -

I would love to discuss all these questions. But the one thing I’ve been deliberating on recently is how to keep developers interested in a project. How do we ensure they enjoy contributing to the codebase?

One of the answers is to improve the developer experience. Think about: Apart from technical reasons, most successful open source projects gain traction because they’re a joy to use. They have good developer experience! How can one make working on a company or personal software project feel this way?

- - -

# Backstory

I work on a small scrum team that owns about 6+ micro services. One thing I have noticed is that there are some services that nobody on the team wants to touch. Initially, I thought it was only because not everyone had much experience working in those code bases but I noticed even my co-workers with much experience did not want to touch these services. What was actually wrong with these projects? The answer is — bad developer experience! Here are a few things that I think we can do as a team to make these services great again. (Well, if they were ever great).

- - -

# Time to Start or Run the Application Locally

If you’re new on a project, one of the first things you do is pull it from source control and try to run it locally. If this task is complicated, it can easily set the tone for how you feel about the project. Being able to run the project locally quickly makes it easy to understand what the project does and accelerates understanding of the codebase.

Apart from being useful for new engineers, it can also reduce the time it takes to debug and replicate problems. I’ve been in a good number of situations where it took me a while to find or replicate an error because running the project locally was a pain and I wanted to try every other option before running on my laptop.

Here are a few steps you can take to simplify the process of running the app on a local machine:

* **Ensure that the default start and build scripts work**: For a node application this is the npm start script and for Java application, this can be the Maven run or Gradle run command.
* **Custom shell scripts to set up and build in dev environment:**Some projects might have custom build steps. These can be abstracted away by having a shell script to build dependencies and setup environment variables
* **Utilize SDK and version management tools:**Some projects might require an older version of a language or framework. Using tools like [SDKMan](https://sdkman.io/) and [NVM](https://github.com/nvm-sh/nvm) make it easy to manage these dependency requirement differences.

- - -

# Easily Accessible Documentation

![Gif of someone reading though documentation](https://miro.medium.com/max/940/1*3tk4Q2aYPsgWvirMf0scAQ.gif)

As with many things in life, good documentation is a spectrum. Whether you’re writing self-documenting code or writing a white paper for every line of code, documentation to cover the questions developers will have while working on the project does a lot to improve the developer experience. Here are a few things that can be added to this documentation, in the form of a readme or wiki doc.

* Minimum language version and System requirements to run the project.
* External dependencies required for the project (if it cannot be automated).
* Where to find or add credentials for some external dependencies.
* Frequently occurring errors and how to fix them.
* Handy debugging tricks.

- - -

# Simplify Debugging or Have Some Simple Debugging Tools

Hopefully, you’ve written great software that never goes down or has bugs. But when the inevitable problems *do* occur, how easy is it to get to the root cause?

Setting up monitoring and meaningful logs is a good way to improve this. It’s not always easy but investing time and resources into this at some point in your project can save you a lot of pain in the future. These can have a profound effect on the time it takes to identify and resolve issues. If you want to take more steps to improve your experience, you can build or leverage already existing developer tools.

For example, we had some problems with processing items in our queues for some of our applications at work. This was a pain to debug sometimes since you had to jump thought a lot of hoops to detect what was actually going on. One of my coworkers, being the problem solver he is, wrote a simple CLI to check the health of queues, print the items that were stuck in the queue and added a simple command to reprocess items that were stuck in the queue for known issues.

This was a game-changer for us. It reduced the time to debug and it made it easy for junior developers and non-technical team members to identify and solve problems that previously required the attention of an experienced senior developer or someone who had domain expertise on the project.

- - -

# Meaningful Testing

How do you know you haven’t broken the existing functionality of the project if everything compiles and the application runs? With meaningful tests! Without meaningful tests, the best way to find out is in production. Developers hesitate to make changes to a project if they do not have confidence in the current tests.

If you’re confident in the automated tests that a project has, you’ll probably have more confidence in experimenting and adding changes to the code base. You know that the tests will yell at you when you mess up. That sounds like a great developer experience!

- - -

# Conclusion

*As software developers, we put a lot of effort into improving our user’s experience. I believe if we put as much effort into improving our developer experience, we will find more joy and increased productivity in our work.*