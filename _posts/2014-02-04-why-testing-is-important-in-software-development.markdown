---
layout: post
title: Why testing is important in software development
date: 2011-12-13 14:45:36
category: Other
tags: testing
---

Since I have started to write test scripts to perform automated tests in current work, I eventually learned how important testing is in software development.

1. Use the tests to help you write the code. Before writing actual code, write a test which verifies the expected set of data returned by a method. Let the test to guide your development. That is so called Test-driven development (TDD).

2. You can't say the development is done until all tests passed. If the software exposed any problems, you'd better to modify the tests to include that test cases. So the code and the tests are refined over time. Ideally you probably should have tests to cover most if not all of the publicly exposed methods of the model (methods called from outside the model).

3. Even after the development, the testing is still important. If you later changes a method (maybe to add a new feature) and modify its behaviour then the test reveals that change and forces you to check your understanding of the method.

To sum up, the tests to some extent define our expectations of how the methods should behave - the contract that they fulfil with the caller of the method.
You can look at the tests as also being a tool to assist you in developing the code - verifying the correct behaviour of the model methods. They play significant and irreplaceable roles during the whole software development life cycle.
