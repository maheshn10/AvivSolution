# AVIV technical test solution

You can use this file to write down your assumptions and list the missing features or technical revamp that should
be achieved with your implementation.

## Notes

Write here notes about your implementation choices and assumptions.

List of implementations:

Frontend Development (React - Typescript)

- **Completed the functionality as mentioned.
- **Written few sample unit tests for the implemented functionality.
- **Can implement Redux if required 

Backend Development (C#.Net)

- **Implemented Repository Pattern
- **Implemented Generic Repository Pattern
- **Implemented Unit of Work
- **Implemented Automapper

## Questions

This section contains additional questions your expected to answer before the debrief interview.

- **What is missing with your implementation to go to production?**

ANS : Not all unit tests are covered at the moment. As a best practice I would ensure atleast 80% unit test coverage for delivering production-ready code. 
I would have also done Test Driven Development for both Frontend and Backend.

- **How would you deploy your implementation?**

ANS : I would use Azure DevOps for continous integration and deployment process with Docker to containerize the application for automated deployment.

- **If you had to implement the same application from scratch, what would you do differently?**

ANS : Based on the project complexity and the huge volume of data to be handled on the frontend I would have used Redux and Nest.js for Frontend and implemented microservices on backend.

- **The application aims at storing hundreds of thousands listings and millions of prices, and be accessed by millions
  of users every month. What should be anticipated and done to handle it?**
  
ANS : Following are some of the ways to handle potential perfomance issues encoutered due to high volume of data
       * Optimizing and adjusting the checkpoints to improve the performance of the database 
	   * Creating unlogged tables, indexes and triggers wherever required
	   * Optimizing the column order and space consumption

  NB : You can update the [given architecture schema](./schemas/Aviv_Technical_Test_Architecture.drawio) by importing it
  on [diagrams.net](https://app.diagrams.net/) 
