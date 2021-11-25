const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id':1,
            'image':'https://placeimg.com/64/64/1' ,
            'name': '최미영',
            'birthday': '961224',
            'gender': '여자',
            'job': '개발자'
          },
          {
            'id':2,
            'image':'https://placeimg.com/64/64/2' ,
            'name': '함윤식',
            'birthday': '960204',
            'gender': '남자',
            'job': '개발자'
          },
          {
            'id':3,
            'image':'https://placeimg.com/64/64/3' ,
            'name': '송경애',
            'birthday': '701101',
            'gender': '여자',
            'job': '회사원'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
