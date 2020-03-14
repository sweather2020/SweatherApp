# SweatherApp

## Problem & Related Work ## 
	Deciding what to wear during the day or for a night out can be a source of stress and lost time for many people. Things that are considered when planning an outfit include the type of style they want to express, what they will be doing in the outfit, and the weather throughout the day. While on average people take 5-10 minutes selecting their outfit (Figure 1), which may not sound like much, those minutes start to add up over time. According to a survey conducted by clothing company Matalan, the average woman spends about 287 days of her life choosing outfits for everything from work to parties. 
	Pre existing solutions on the market include mobile apps, such as Pureple Prep, Smart Closet, and Stylebook, but none of them successfully synthesize live weather data and user event data (e.g. calendar events) to provide appropriate outfit suggestions. Many of these apps either lack the outfit suggestion feature and focus on other features, such as the e-closet, or integrate the outfit suggestion feature but have a very unintuitive, buggy UI. Some of them also render too many pop-up ads when the user tries to click on things.


Figure 1: Graph of the average amount of time it takes men and women to pick an outfit




















Figure 2: e-Closet and Home pages of Smart Closet; lacks outfit suggestion feature and user personalization and is targeted more towards female users 

















Figure 3: Wardrobe (e.g. e-Closet) and Outfits Suggestion pages of Pureple Prep; inconsistent, difficult UI; footer would randomly disappear; buttons would move when user scrolls 

User Research
	In our user research, we had two main goals: to gauge who our primary users are and to identify possible primary features to include in our app. Our research approach consisted of sending out a simple survey to over 50 people in order to get a better idea of important aspects people take into account when choosing clothes, interviewing three people to learn more about their general habits when picking clothes, and conducting a contextual inquiry with one user using the Pureple Prep app. After completing our research, we identified a couple key user personas for our app:

College students
Fashion influencers/Fashionistas 
Young working professionals
Middle-aged adults 

Based on the insight we gained from the interviews and observation, we concluded three central needs across the different users:

To pick out an expressive yet appropriate outfit for the day that matches the occasion, weather, and user’s mood all in a timely manner
To organize and remember the clothes they own 
To get inspiration on how to improve their outfits and also gain confidence about their outfit choice
	
	A recurring pattern we noticed in our users’ responses was that many were open to switching up their styles but were deterred by lack of knowledge, fear, or insufficient time and energy. Many users also voiced their struggle to accurately match the temperature displayed on the weather app and the actual feeling of the weather with an appropriate outfit so that they are not too cold or too warm for the day. 

Paper Prototyping 
Link to Paper Prototype: https://m.youtube.com/watch?v=oZDp9HbBGVg&feature=youtu.be

	In our paper prototyping phase, we collected all of the information from our user research phase and implemented a rough physical sketch of our app. We had a total of three users test our prototype and had them attempt to complete three tasks: 

Create an account
Pick an outfit
Save the outfit

	All users completed the first two tasks relatively easily and found the flow of the app to be rather self-explanatory. The only pain point that we needed to address was whether users would be directed to the home page or sign up page once they sign up for a new account, and we decided it made the most sense to route them to a new home page. However, the last task posed some noticeable confusion when the user was not sure whether to press the heart icon or floppy disk icon to save the outfit. This difficulty indicated to us that we should minimize the number of buttons in order to maintain the simplicity of the app and avoid overwhelming the user with too many features. Similarly, users encountered some trouble in the closet page when they experimented with the add button in the top left hand corner next to the labels with the categories of clothes. Some users interpreted it as adding another category rather than adding a new article of clothing, so we thought of different ways to make that functionality simpler and visually cleaner. 
	Leveraging the feedback we received from our users, we decided to focus our attention to building out the closet page by developing a more consolidated filter function, personalized home pages based on the user login or signup, and simplifying the profile page. 

High-Fidelity Prototyping
	Moving into our high-fidelity prototype, we decided to pursue four main components:

User Profiles
Data Collection Form
External Data Integration
Interactive Data Filter 

User Profiles
We created a login page to support two different users using PHP; once the users login into their respective accounts, they are directed to a home page customized with their personal information, such as their name and suggested outfit of the day. Within our user testing sessions, we received suggestions to establish our brand and tone within the login page given that it is the first page the user encounters. By using a clear color palette of faded navy, faded orange, light grey, and off-white pulled from the logo, sans-serif fonts, and rounded shapes, we tried to communicate values of simplicity, cleanliness, and empowerment. We realized that our login system wasn’t consistently supporting two users since once they would navigate away from the home page and come back, the system did not remember who logged in, so we refined the PHP code to take care of that situation. 






































































Figure 4: Login and the corresponding Home pages based on login info

Data Collection Form
We created a Sign Up form for new users with six fields of text and radio types that are validated upon submitting the form:

Username
Email
Phone
Password
Password confirmation
Gender

Some examples of our validation techniques include ensuring the user does not leave any fields blank, include ‘@...com’ within the ‘Email’ field, and type only integers for the ‘Phone’ field. Based on form design principles, we top-aligned our form labels to reduce form completion time for users. Once the user clicks on the ‘Sign Up’ button, it leads them to a home page for new users. 

























Figure 5: Navigate to ‘Create Account’ page by clicking on ‘Sign Up’ from Login page





























              Figure 6: New user home page

External Data Integration
We integrated data from two different APIs, a weather API and a random quote generator API, in the home page. One of the most important aspects that people take into account when considering their outfit for the day is weather, so it made sense to include live weather updates based on location for the user every time they access the app. Since we want our app to ultimately empower users to try a new style or start off the day right with the right outfit, we thought it would be fitting to have a quote to greet the user. In our first iteration of this component, it consisted of two columns of scrollable panels that were not clickable. However, the entire page in itself was also scrollable, which posed some haptic challenges for the user since it would be hard to distinguish what area they were scrolling in. Visually, it was cluttered and busy, so we decided to simplify the design to just one column with each panel spanning the width of the screen. Many users mentioned that the panels afforded clicking, so we linked each panel to an appropriate page. For instance, the weather panel routes the user to the API website we used, which displays a more comprehensive overview of the weather, and the events panel directs the user to Google Calendar. 


Figure 6: Home page first iteration




































Figure 7: Home page second iteration

Interactive Data Filter
For this category, we implemented two components: a filter function for the Closet page and a suggestion function that relies on filter to some degree for the StyleMe page. We wanted to enable the user to search through his or her closet based on certain aspects, such as color, type of clothing, and season, so the user can activate a side filter menu, where they can select their desired criteria and receive a subset of clothes that meet the criteria. Since we finalized our color scheme later in the process, we came back and incorporated some of the colors from the logo into this page and increased the size of the checkboxes in the filter menu since a user brought up it might be hard to click on small checkboxes. 




Figure 8: Closet page, filter menu, and resultant page after applying ‘Black’ color criteria

	On the StyleMe


Reflection
We managed to implement a rough draft of the interfaces for our clothing app within the 10 weeks we had. We built out some indispensable, basic functions such as logging in and creating an account, and experimented with some more advanced functions, such as filtering and suggesting based on user input. We tried to incorporate visual design principles by utilizing white space and paying attention to consistency in shapes, contrast and fonts. 

For future development, we hope to incorporate more backend development into this app, such as using a database with PHP to support more than two users and properly allow users to sign up without directing them to a default/generic home page, as well as allowing user to actually make CRUD requests to store and update information of items in their closet. Once equipped with the adequate skills, we discussed exploring into adding an augmented reality (AR) feature that allows the users to see what the outfit looks like on them. Currently, our StyleMe feature is not as advanced as it could be, and it would be worth taking the time to implement a more precise feature by leveraging principles of machine learning so that the suggestions become more specific to the user according to his or her past data. 
