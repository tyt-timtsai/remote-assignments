const express = require('express');
const router = express.Router();
const { data } = require('../data/flashCardData.json');
const { cards } = data;

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

router.get('/:id', (req, res) => {
  const { side } = req.query;
  const { id } = req.params;

  if (!side) {
    res.redirect(`/cards/${id}?side=question`);
  }

  const name = req.cookies.username;
  const text = cards[id][side];
  const { hint } = cards[id];

  const templateData = { text };
  //   console.log(templateData);

  if (side === 'question') {
    templateData.hint = hint;
    templateData.sideToGo = 'answer';
    templateData.sideToGoText = 'Answer';
  } else if (side === 'answer') {
    templateData.sideToGo = 'question';
    templateData.sideToGoText = 'Question';
  }

  res.render('card', {
    id,
    side,
    name,
    sideToGo: templateData.sideToGo,
    sideToGoText: templateData.sideToGoText,
    text,
    hint: templateData.hint,
    colors,
  });
});

router.get('/', (req, res) => {
  const numberOfCards = cards.length;
  const randomID = Math.floor(Math.random() * numberOfCards);
  res.redirect(`/cards/${randomID}?side=question`);
});

module.exports = router;
