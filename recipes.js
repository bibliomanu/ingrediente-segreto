/* Domande prototipo: 10 per categoria. Ogni domanda indica esplicitamente
   il tipo di ingrediente richiesto per evitare risposte ambigue. */
window.RECIPES = {
 italian: [
  {id:'it1', dish:'Pizza Margherita', emoji:'🍕', bg:'#ffe3a9', question:'Quale formaggio viene usato nella classica Margherita?', options:['Cheddar','Mozzarella','Gorgonzola','Brie'], correct:1},
  {id:'it2', dish:'Risotto alla milanese', emoji:'🍚', bg:'#ffde8e', question:'Quale spezia dà il tipico colore giallo?', options:['Paprika','Cannella','Zafferano','Pepe nero'], correct:2},
  {id:'it3', dish:'Pesto alla genovese', emoji:'🌿', bg:'#d9edb4', question:'Quale frutta secca prevede la ricetta tradizionale?', options:['Pinoli','Noci pecan','Arachidi','Anacardi'], correct:0},
  {id:'it4', dish:'Spaghetti alla carbonara', emoji:'🍝', bg:'#ffe6ac', question:'Quale di questi ingredienti è presente nella carbonara tradizionale?', options:['Panna','Pomodoro','Burro','Uovo'], correct:3},
  {id:'it5', dish:'Tiramisù', emoji:'🍰', bg:'#ecd7b4', question:'Quale formaggio fresco si usa per la crema?', options:['Ricotta salata','Mascarpone','Gorgonzola','Caprino stagionato'], correct:1},
  {id:'it6', dish:'Pasta alla Norma', emoji:'🍆', bg:'#f2c2b4', question:'Quale ortaggio è protagonista del condimento?', options:['Zucchina','Peperone','Melanzana','Carota'], correct:2},
  {id:'it7', dish:'Caprese', emoji:'🥗', bg:'#dcedc8', question:'Quale erba aromatica completa di solito pomodoro e mozzarella?', options:['Basilico','Rosmarino','Aneto','Salvia'], correct:0},
  {id:'it8', dish:'Bagna càuda', emoji:'🫕', bg:'#f1d39b', question:'Quale pesce è ingrediente caratteristico della salsa piemontese?', options:['Salmone','Tonno','Sgombro','Acciuga'], correct:3},
  {id:'it9', dish:'Pasta con le sarde', emoji:'🐟', bg:'#d5e8d5', question:'Quale aroma, spesso selvatico, caratterizza la ricetta siciliana?', options:['Menta','Finocchietto','Dragoncello','Timo limone'], correct:1},
  {id:'it10', dish:'Pizzoccheri alla valtellinese', emoji:'🥬', bg:'#d8e5b9', question:'Quale verdura compare comunemente nella ricetta tradizionale?', options:['Cavolo verza','Radicchio','Rucola','Lattuga'], correct:0}
 ],
 thai: [
  {id:'th1', dish:'Pad Thai', emoji:'🍜', bg:'#ffe4a2', question:'Quale tipo di pasta è comunemente usato?', options:['Spaghetti di grano','Tagliatelle all’uovo','Noodles di riso','Ravioli'], correct:2},
  {id:'th2', dish:'Tom Kha Gai', emoji:'🥥', bg:'#e4edc6', question:'Quale latte rende cremosa questa zuppa?', options:['Latte di cocco','Latte di mandorla','Latte vaccino','Latte di avena'], correct:0},
  {id:'th3', dish:'Som Tam', emoji:'🥗', bg:'#dbebbb', question:'Quale frutto acerbo è la base dell’insalata?', options:['Mango','Ananas','Guava','Papaya'], correct:3},
  {id:'th4', dish:'Tom Yum', emoji:'🍲', bg:'#f7c6a3', question:'Quale erba profumata è tipica del brodo?', options:['Prezzemolo','Citronella','Origano','Salvia'], correct:1},
  {id:'th5', dish:'Mango sticky rice', emoji:'🥭', bg:'#ffe4a7', question:'Quale cereale si serve con il mango?', options:['Riso glutinoso','Orzo','Miglio','Farro'], correct:0},
  {id:'th6', dish:'Green curry', emoji:'🍛', bg:'#cce2af', question:'Quale ingrediente aromatico dà parte del colore alla pasta di curry verde?', options:['Barbabietola','Peperoncini verdi','Zafferano','Pomodoro'], correct:1},
  {id:'th7', dish:'Pad Kra Pao', emoji:'🌶️', bg:'#f6d6b3', question:'Quale erba è caratteristica del piatto saltato?', options:['Menta piperita','Rosmarino','Basilico sacro','Alloro'], correct:2},
  {id:'th8', dish:'Massaman curry', emoji:'🍛', bg:'#f0d1a4', question:'Quale frutta secca compare spesso in questa preparazione?', options:['Pistacchi','Nocciole','Pinoli','Arachidi'], correct:3},
  {id:'th9', dish:'Larb', emoji:'🥬', bg:'#e2e9c2', question:'Quale erba fresca è spesso presente nell’insalata di carne?', options:['Menta','Salvia','Rosmarino','Dragoncello'], correct:0},
  {id:'th10', dish:'Khao Soi', emoji:'🍜', bg:'#f3d79b', question:'Quale ingrediente croccante viene spesso aggiunto sopra ai noodles?', options:['Crostini','Noodles fritti','Patatine','Popcorn'], correct:1}
 ]
};
