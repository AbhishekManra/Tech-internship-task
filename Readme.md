# Twitter Scraping with Selenium

This project sets up a **Node.js** server with a route (`/whatshappening`) that uses **Selenium** to scrape the top 4 trending topics from **X (formerly Twitter)**. The server is built with **Express** and utilizes the **Selenium WebDriver** to automate a headless Chrome browser to navigate and scrape data from Twitter's trending page.

## Prerequisites

Before running the project, ensure that you have the following installed on your system:

- **Node.js** (v14 or later)
- **npm** (Node Package Manager)
- **Docker** (if you plan to deploy the server in a containerized environment)

### Additional Tools for Scraping:
- **Chromium** or **Google Chrome** (with appropriate WebDriver)

## Getting Started

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/AbhishekManra/Tech-internship-task.git
cd twitter-scraper
```

### 2. Install Dependencies
Make sure you have Node.js and npm installed. If not, you can download and install them from here.

Once you have Node.js and npm set up, install the necessary dependencies for the project:

```bash
npm install
```
This will install Selenium WebDriver and any other required packages from the package.json file.

### 3. Set Up Environment Variables
Before running the server, you'll need to set up environment variables for your Twitter login credentials.

Create a .env file in the root of the project and add the following variables:

dotenv
```bash
TWITTER_EMAIL=your_email_here
TWITTER_USERNAME=your_username_here
TWITTER_PWD=your_password_here
```
Make sure to replace your_email_here, your_username_here, and your_password_here with your actual Twitter credentials.

### 4. Run the Server
Start the Node.js server by running the following command:

```bash
npm start
```
This will start the server on port 3000 by default. You should now be able to access the server via:

http://localhost:3000/whatshappening: This route triggers the scraping of the top 4 trending topics from X (Twitter).