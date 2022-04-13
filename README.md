# Diet form with calculator BMI

&nbsp;

## Table of contents

[⭐ Overview](#⭐-overview)
  - [Instalation](#Installation-💿)
  - [Links](#links)

[💡 My process](#💡-my-process)
  - [Technologies](#Technologies)
  - [Solutions provided in the project](#Solutions-provided-in-the-project)
  - [Ideas to develop the app](#Ideas-to-develop-the-app)
  - [Useful resources](#useful-resources)

[Screenshot](#screenshot)

[🙋‍♂️ Author](#🙋‍♂️-author)

[👏 Special Thanks](#👏-special-thanks)

&nbsp;

## ⭐ Overview

&nbsp;


### **Installation 💿**

The project uses [node](https://nodejs.org/en/), [npm](https://www.npmjs.com/), [CRA](https://create-react-app.dev/) [JSON-server](https://www.npmjs.com/package/json-server) and [whatwg-fetch](https://github.com/github/fetch).

Having them installed, type into the terminal: 
```
npm i
```
Then, you may run webpack typing in the terminal:

```
npm start
```

You do not have to install JSON-Server, fake-server is created thanks to [Heroku](https://www.heroku.com/)

``` 
App is available using the following addresses:

http://localhost:3000

&nbsp;

### **Links:**
- [GitHub](https://github.com/kowackag/calc-price-of-workstation)
- [live](https://calc-app-mdb.herokuapp.com/)

&nbsp;

### **Technologies:**

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)


&nbsp;
  
### **Solutions provided in the project:**
- HTML:
    - The project was built using semantic HTML5 markup.
- CSS:
    - The css styles are created using `styled-components`.
    - The `Custom Checkbox` and `Dropdown` was created.
    
- JS:
    - ES2015+ (arrow functions, destructuring, spread operator) was used.
    - To store all communication with the API in one place, the function DataAPI was created (in the separated file `DataAPI.js`).
    - Communication with API is based on `fetch()` method.
    - To run the project using browsers that do not support `fetch()` method, package `whatwg-fetch` was used.
    - All fields are validated .
- React:
    - The following hooks were used: `useState`, `useEffect`, `useRef`, `useContext` and `Custom Hook`.
    - Components are split and kept in smaller ones.
    - `Font Awesome` ikons was used in  React app thanks to `@fortawesome/react-fontawesome`.
    - I used from `react-to-print` to add possibility to print effects of application.


I had opted to use `styled-components` as a solution for managing the CSS.

To make coding with `styled-component` more comfortable, I used a special Extension in Visual Studio Code `vscode-styled-components`.

I used the `createGlobalStyle` function from styled-components and added reset style and some global styles (`Reset.js` and `Global.js`)

```
import {createGlobalStyle} from 'styled-components';
import robotoRegularWoff from "./../fonts/roboto-regular-webfont.woff";
import robotoRegularWoff2 from "./../fonts/roboto-regular-webfont.woff2";
 .....
const GlobalStyle = createGlobalStyle
    ...
    @font-face {
        font-family: "Roboto";
        font-style: regular;
        font-weight: 400;
        src:
        url(${robotoRegularWoff2}) format('woff2'),
        url(${robotoRegularWoff}) format('woff');
    }
```

#### Data storage

 &nbsp;

The data (categories, possible products saved in data.json file) are loaded from API, communication is based on `fetch()` method. Also the results of app are send to API.

Data during working app are saved and store in [localStorage](http://kursjs.pl/kurs/storage/storage.php) built into a web browser.

&nbsp;

The custom hook `useStorage` was created, to provide methods for saving and reading data from localStorage:
```
const useStorage = () => {
    const setItem = (ob, name) => {
        localStorage.setItem(name, JSON.stringify(ob))
    }
    const getItem = (name) => {
        const retrivedObject = JSON.parse(localStorage.getItem(name));
        return retrivedObject;
    }
    return [getItem, setItem];
```

The hook `useStorage` was used in `<App/>`:
```
const [getItem, setItem] = useStorage();
```

### **Useful resources:**

- [Google Font](https://fonts.google.com/specimen/Roboto) - `Roboto`
- [Font Avesome](https://fontawesome.com/)
- 

&nbsp;

## 🙋‍♂️ Author

The project was made by Małgorzata Kowacka.
- kowackag@gmail.com
- GitHub - [kowackag](https://github.com/kowackag)
- Linked - [Małgorzata Kowacka](https://www.linkedin.com/in/malgorzata-kowacka)

 **If you have any questions do not hesitate to contact me.**

&nbsp;
