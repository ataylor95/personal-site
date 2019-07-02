# Personal Site
My personal site, see it at http://amltaylor.co.uk

Built with React on top of Typescript and SCSS. Hosted on AWS S3 and Cloudfront.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

### `yarn deploy`

Uploads the files to the S3 bucket. You must have the AWS cli installed and logged into an account with authorisation to push to the bucket specified.

### `yarn release`

Does a build and deploy in one command