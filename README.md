# Ailment View - Conatct Management App with Charts and Maps

## Build with React+TypeScipt.js, Tailwind CSS, TanStack Query, Redux, React Router and Recharts

Preview the project
[Ailment View](https://github.com/facebook/create-react-app).

### Contact Page:

### Create Contact Page

### Individual User Contact Page

### Graphs Page

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

```

```

### Page Routes:

```
/contact  -- for contact page

/graphs -- for graphs page

/contact/new -- for new contact creation

/contact/:id -- for individual contact data

```
