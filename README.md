# Login Website

A simple login webpage with a "Forgot Password?" text at the bottom.

## Usage

Open `index.html` in a web browser to view the login form. Use email and password to log in. Passwords are stored in localStorage. The email is remembered for future logins.

## Files

- `index.html`: The main HTML file containing the login form.
- `style.css`: CSS file for styling the login page.
- `login.js`: JavaScript for login authentication.
- `ForgotpassWeb/`: Folder with forgot password page.
- `Onlyformods/`: Folder with password change page for moderators.

## Sub-sites

- **Forgot Password**: `ForgotpassWeb/index.html` - Animated page with a form to send reset message.
- **Change Password**: `Onlyformods/index.html` - For moderators to update user passwords.

## Troubleshooting

- Ensure all files are in the correct directories.
- If the page doesn't load, check file paths and browser settings.
- Passwords and remembered email are stored locally; clearing browser data will reset them.