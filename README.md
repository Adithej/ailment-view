# Ailment View - Conatct Management App with Charts and Maps

## Build with React+TypeScipt.js, Tailwind CSS, TanStack Query, Redux, React Router and Recharts

Preview the project [Ailment View](https://ailment-view.vercel.app).

### Contact Page:

<img width="1434" alt="contact page" src="https://github.com/user-attachments/assets/3d8bd980-35bd-4aef-b089-ef138d7c1648">

### Create Contact Page

<img width="1434" alt="create contact" src="https://github.com/user-attachments/assets/1ed65626-b4f3-4e95-a7fe-b466409679a0">

### Individual User Contact Page

<img width="1434" alt="edit contact" src="https://github.com/user-attachments/assets/988c06f0-1303-40a2-aa51-ee1fa3063d49">

### Graphs Page

<img width="1434" alt="graph page" src="https://github.com/user-attachments/assets/58ceec6c-7729-4e25-a0ad-2206035faffe">

## Run Locally

clone the repo:

```
git clone https://github.com/Adithej/ailment-view.git
```

Go to Project Directory:

```
cd ailment-view
```

Install Dependencies

```
 npm install

```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

```

### API end points used :

Line graph to show data for cases with date
```

https://disease.sh/v3/covid-19/historical/all?lastdays=all

```

Data for overall cases , death and recovery :

```

https://disease.sh/v3/covid-19/all

```
Country specific data for map used for react leaflet :

```

https://disease.sh/v3/covid-19/countries

### Page Routes:

```
/contact  -- for contact page

/graphs -- for graphs page

/contact/new -- for new contact creation

/contact/:id -- for individual contact data

```
