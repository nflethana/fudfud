fudfud
======
docs/

docs/REAMDE.md
YOU ARE HERE

This folder contains all the documents related the the planning and overall structure of our project

docs/Flow Diagrams/
Here one can find flow diagrams from both the runner and eater's perspectives.

docs/mockups/views/
Here one can find the front end of the website.  All of the information and user data is static, but will soon be connected to the backend.

data/
Here you can find fake data to match the QC input and ouptut.  Sample data for the user aggregation can actually be found in the docs/mockups/views and src/Aggregation directories.

src/
Here you can find all of the source code files (aside from those in the docs/mockups/views directory).  This contains a working version of the PHP and SQL backend tied to an older version of the front end.

src/Aggregation/
This folder contains the sign in/up, and fud run creation pages along with the scripts to save the associated user data in a SQL database.  This is the meat of the backend application right now.

src/QC/
This folder contains the PHP and SQL code for quality control.  This code will become more robust after we can tie the backend into the new front end.  This will implement the schema for QC outlined in the data/ directory.