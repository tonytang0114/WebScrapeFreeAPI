import express from 'express';
import mongoose from 'mongoose';
import {mongoUrl} from './util/secrets';
import ScrapNike from './WebScraping/scrape_nike';

const app = express();

mongoose.connect(mongoUrl, {useNewUrlParser: true}).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
  ).catch((err) => {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
    // process.exit();
  });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    ScrapNike();
});
