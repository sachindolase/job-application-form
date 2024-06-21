# Surdeep singh React.js Developement Assignment

# Level 2: 
Intermediate Dynamic Form with Nested Conditional Logic and Multiple Field Types.

# Objective: 
Build a more complex form with nested conditional fields, multiple field types, and enhanced validation.

# Form Type: Job Application Form

# Tasks:

1. Form Fields:
○ Full Name (Text)
○ Email (Email)
○ Phone Number (Number)
○ Applying for Position (Dropdown: Developer, Designer, Manager)
○ Relevant Experience (Number of years, visible if "Developer" or "Designer"
is selected)
○ Portfolio URL (Text, visible if "Designer" is selected)
○ Management Experience (Text, visible if "Manager" is selected)
○ Additional Skills (Multiple checkboxes: JavaScript, CSS, Python, etc.)
○ Preferred Interview Time (Date and Time Picker)

2. Conditional Logic:
○ Show "Relevant Experience" if "Developer" or "Designer" is selected.
○ Show "Portfolio URL" if "Designer" is selected.
○ Show "Management Experience" if "Manager" is selected.

3. Validation:
○ Full Name: Required
○ Email: Required and must be a valid email format
○ Phone Number: Required and must be a valid number
○ Relevant Experience: Required if "Developer" or "Designer" is selected, and
must be a number greater than 0
○ Portfolio URL: Required if "Designer" is selected, and must be a valid URL
○ Management Experience: Required if "Manager" is selected
○ Additional Skills: At least one skill must be selected
○ Preferred Interview Time: Required and must be a valid date and .

4. Submission:
○ On form submission, display a summary of the entered data.

Requirements:
● Use React functional components and hooks (useState, useEffect).
● Implement custom hooks for form validation and management.
● Ensure a clean and user-friendly interface with clear error messages.

# Screenshots: 
![Screenshot (680)](https://github.com/sachindolase/job-application-form/assets/125812863/3e2f4d78-a75a-419b-99b9-b97477b80a67)
![Screenshot (681)](https://github.com/sachindolase/job-application-form/assets/125812863/d55431a3-b33a-416f-bdef-bf4dc4a053da)

# Live Demo :- https://job-application-form-one.vercel.app/



