# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

   A stateful component is used for the purposes of modular behavior - mostly when using Class components, we will separate our state to be controlled and dictated by a single stateful component. The main reason why they are used so often in Class Components is because we cannot use a useEffect in Class Components. Functional components accept the use of useEffect, so stateful components are not necessary

2. When will a componentWillMount function be called? What about a componentWillUpdate?

   - componentWillMount and componentWillUpdate are not in use anymore -- i think the question is asking about componentDidMount/Update


   - componentDidMount and componentDidUpdate are functions that are mostly reserved for Class based components. Functional components dont need these because they can call useEffects and have functional purpose. 
   - componentDidMount is called after render is initialized 
   -componentDidUpdate is called when 

3. Define stateful logic.

   - Stateful logic refers to a programming logic that is used to discuss how a single device can both store, and manipulate logical operations. is anything that is used to manipulate state in one way or another. Stateful logic is used to create dry, modular code that can be used in multiple places in your App

4. What are the three step of creating a successful test? What is done in each phase?

   - ARRANGE: this is where we tell the test WHERE we are looking ==> render
   - ACT: This is where we DEFINE our elements which are being targeted and HOW to interact with said elements 
   - ASSERT: Telling the test what we are LOOKING for as an output

