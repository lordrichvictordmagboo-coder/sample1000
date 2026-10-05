//declaration area
const express=require('express') //API HTTP methods (POST, GET, PUT, DELETE)
const path=require('path');

const app=express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
