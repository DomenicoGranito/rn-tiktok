# HelloWorld

# Screenshot
<img width="250" alt="Screen Shot 2022-08-07 at 2 58 27 PM" src="https://user-images.githubusercontent.com/17329299/183306912-9f80930c-61bb-44f6-b677-5dba4a764d2d.png">
<img width="250" alt="Screen Shot 2022-08-07 at 3 00 45 PM" src="https://user-images.githubusercontent.com/17329299/183306914-104cd51e-5369-4612-82cc-e093a0eb7bed.png">
<img width="250" alt="Screen Shot 2022-08-07 at 2 59 02 PM" src="https://user-images.githubusercontent.com/17329299/183306916-e8454738-59cf-4428-a729-64c1f6c2bc8e.png">
<img width="250" alt="Screen Shot 2022-08-07 at 2 58 45 PM" src="https://user-images.githubusercontent.com/17329299/183306917-f78ebf9f-e79c-4f8b-8ac9-fbd3db2a41b9.png">

# Setup

- Setup development environment [React Native CLI](https://reactnative.dev/docs/environment-setup)
- We recommended to use [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

# Importance before commit

>### <strong>You must fix all bug of ESLint </strong>

>### <strong>You must config git Username/Email</strong>

# Command

> <strong>Before run script, you must navigate to your project</strong> :``` cd <your_project_folder> ```

- Install dependencies: ``` yarn ```
- Run Android: ``` yarn android:dev ``` (dev/prod by default)
- Run IOS: ``` yarn ios:dev ``` (dev/prod by default)
- Build apk Android: ``` yarn apk:dev ``` (dev/prod by default)
- Build aab Android; ``` yarn aab:dev ``` (dev/prod by default)
- Start server: ``` yarn start ```
- Install library then pods IOS: ``` yarn add <your_library> ```
- Change splash logo
  - Step 1: Get file .PNG to change then rename it to splash.PNG
  - Step 2: Copy and pate to splash folder
  - Step 3: Run command: ``` yarn splash ```
  -
- ...

> #### Detail command: Read script of package.json file

## Base config (Now u can config on env)

- Change App name ``` APP_DISPLAY_NAME ``` on ``` env/(.dev/.prod) ```
- Change App id ``` BUNDLE_IDENTIFIER ``` on ``` env/(.dev/.prod) ```
- Change App version ``` VERSION_NAME ``` on ``` env/(.dev/.prod) ```
- Change App build number ``` VERSION_CODE ``` on ``` env/(.dev/.prod) ```
- Change App URL ``` API_URL ``` on ``` env/(.dev/.prod) ```

### Change app icon by env

- Android [Source sets](https://developer.android.com/studio/build/build-variants#sourcesets)
- IOS follow below step:
  - Create new App Icon assets
  - Go to Target => Build Settings => Assets Catalog Compiler - Options
  - Change Primary App Icon Set Name (App Icon assets name)
  - This will change icon for current schema
