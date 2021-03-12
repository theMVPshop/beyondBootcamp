DROP TABLE IF EXISTS users, emails, blogs;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(50),
  password VARCHAR(150),
  PRIMARY KEY (id)
);

CREATE TABLE emails (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE blogs (
  id INT NOT NULL AUTO_INCREMENT,
  date VARCHAR(50),
  title VARCHAR(500),
  description VARCHAR(5000),
  url VARCHAR(500),
  image VARCHAR(500),
  category VARCHAR(50),
  keyword VARCHAR(50),
  likes VARCHAR(50),
  PRIMARY KEY (id)
);

INSERT INTO users
	(email, password)
VALUES
  ("Ariel@gmail.com","Ariel123"),
  ("json@istheman.com","JsOn1234"),
  ("Dest@iny.com","ArielIsAwesome1"),
  ("Keith@indahouse.com","Papar0ach01");

INSERT INTO emails
	(email)
VALUES
  ("Ariel@gmail.com"),
  ("json@istheman.com"),
  ("Dest@iny.com"),
  ("Keith@indahouse.com");

INSERT INTO blogs
	(date, title, description, url, image)
VALUES
  ("April 2, 2019", "This free AI reads X-rays as well as doctors", "What happens when free, open-source software can diagnose us as well as doctors?", "https://www.fastcompany.com/90326445/this-free-ai-reads-x-rays-as-well-as-doctors", "./Zollege Chat_files/p-1-90326445-this-free-ai-reads-x-rays-as-well-as-doctors.jpg"),
  ("April 2, 2019", "The Well-Balanced Developer", "Some developers are worth more than others. The bigger impact you can make on the organization, the higher is your worth. To make a significant impact on the organization, the developer must keep 5 essential skills in balance: Technical skills Mentoring skills Process Organization skills Business skills Communication skills", "https://sizovs.net/2019/03/09/the-well-balanced-developer/", "./Zollege Chat_files/me.png"),
  ("April 2, 2019", "McDonald's Bites on Big Data With $300 Million Acquisition", "The fast-food giant's largest acquisition in 20 years is bringing machine learning to the drive-thru.", "https://www.wired.com/story/mcdonalds-big-data-dynamic-yield-acquisition", "./Zollege Chat_files/McDonalds-462767668.jpg"),
  ("April 2, 2019", "DIY Career Development for Startups", "Just because you’ve joined a startup, doesn’t mean you’ve been relegated to the career development wild west.", "https://medium.com/@joshsassoon/diy-career-development-for-startups-bff364f00c16" , "./Zollege Chat_files/1_Gest-rbyt0ZMGhqMY0E59Q.png"),
  ("April 2, 2019", "How To Align Things In CSS — Smashing Magazine", " " , "https://www.smashingmagazine.com/2019/03/css-alignment/", "undefined"),
  ("April 2, 2019", "40+ Amazing CSS3 Animation Examples For Inspiration - Templatefor", "we have picked up an amazing gathering of Creative CSS3 Animation Example. CSS3  is an interesting topic that most developers find out more about it and also have a developer do the projects on CSS3.", "https://templatefor.net/css3-animation-examples-for-inspiration/", "./Zollege Chat_files/CSS-Preloader.jpg"),
  ("April 2, 2019", "How to create a dark\light mode switch in CSS and Javascript | CodyHouse", "In this tutorial, we'll take a look at how to create a dark color theme by updating the values of your color variables (CSS custom properties), and how to apply this new theme to a web project.", "https://codyhouse.co/blog/post/dark-light-switch-css-javascript", "./Zollege Chat_files/dark-switch-article-preview.gif"),
  ("April 2, 2019", "The Truth About UX/UI Designers" , " " , "https://mailchi.mp/uie/what-is-your-mvp-214269" , "undefined"),
  ("April 3, 2019", "The Business of Your Face", "While you weren't looking, tech companies helped themselves to your photos to power a facial recognition boom. Here's how.", "http://fortune.com/longform/facial-recognition/", "./Zollege Chat_files/gettyimages-892452252.jpg"),
  ("April 3, 2019", "Managing Z-Index In A Component-Based Web Application — Smashing Magazine", " " , "https://www.smashingmagazine.com/2019/04/z-index-component-based-web-application/" , "undefined"),
  ("April 3, 2019", "Advanced Synthwave Scene" , " " , "https://codepen.io/H2xDev/pen/YMPJeP" , "./Zollege Chat_files/large(1).png"),
  ("April 3, 2019", "xtrct.io - Get ecommerce data now", "Extract relevant product data from any ecommerce site in seconds. No selectors or coding required.", "https://xtrct.io/","undefined"),
  ("April 3, 2019", "Deepfakes may ruin the world. And they can come for you, too", "But -- bright side! -- videos with your face on somebody else’s body usually aren't as tantalizing to bad guys as, say, creating political chaos.", "https://www.cnet.com/news/deepfakes-may-ruin-the-world-and-they-can-come-for-you-too/#ftag=CAD590a51e", "./Zollege Chat_files/gettyimages-102133016.jpg"),
  ("April 3, 2019", "Web inventor Tim Berners-Lee says you should own your data — not Facebook, Google or advertisers", "But in his internet vision, you'll have to pay for services no longer subsidized by advertising.", "https://www.cnet.com/news/web-inventor-tim-berners-lee-wants-to-give-you-your-data-back/#ftag=CAD590a51e", "./Zollege Chat_files/20190402-web-inventor-tim-berners-lee-01.jpg"),
  ("April 3, 2019", "My Opinionated git Cheat Sheet", "Ben Nadel creates a git cheat sheet for himself so that he can refer to it when he forgets how to execute certain git use cases. This git cheat sheet will also serve as a repository of the git information that he gathers over time.", "https://www.bennadel.com/blog/3587-my-opinionated-git-cheat-sheet.htm", "undefined"),
  ("April 3, 2019", "5 React Performance Tips", "Improve your React app performance with these simple tips", "https://www.strilliant.com/2019/03/25/5-react-performance-tips/", "https://www.strilliant.com/ms-icon-144x144.png"),
  ("April 3, 2019", "Make your Google Fonts render faster", "A tiny script that helps your text to appear a couple seconds earlier", "https://googlefonts.3perf.com/", "./Zollege Chat_files/social.png"),
  ("April 3, 2019", "Sophisticated Partitioning with CSS Grid | Rob Weychert", "Create compelling grid patterns by harnessing specificity.", "https://v6.robweychert.com/blog/2019/03/css-grid-sophisticated-partitioning/", "./Zollege Chat_files/generic-social.gif");