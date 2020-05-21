var torrentCollection = require('../index.js'),
    pkg = require('../package.json');

var search_terms = 'harry potter';

// == CPB ==
// var cpb = new torrentCollection.Cpb();
// cpb.Search(search_terms, {language: 'EN'}).then(function (data) {
//     console.log('# cpb results: \n', data.items.length);
// });

// == 1337x ==
/*var leet = torrentCollection.leet;
leet.search({query: search_terms}).then(data => {
  console.log('# leet results: \n',data.torrents.length);
});*/

// == Rarbg ==
/*var rbg = torrentCollection.rbg;
rbg.search(ua, {
    query: search_terms,
    category: '',
    sort: 'seeders',
    verified: false
}).then(function (results) {
    console.log('# rbg results: \n', results.length);
}).catch(function (err) {
    console.error('rbg error:', err);
});
*/


var rbg = torrentCollection.rbg;
rbg.search({
    query: search_terms,
    category: '',
    sort: 'seeders',
    verified: false
}).then(function (results) {
    console.log('rarbg search: %s results', results.length);
    results.forEach(function (item) {
        console.debug(item);
    });
}).catch(function (err) {
    console.error('rarbg search:', err);
});




// == TPB ==
//process.env['THEPIRATEBAY_DEFAULT_ENDPOINT'] = '';

/*var tpb = torrentCollection.tpb;
tpb.search({query:search_terms}).then(function (data) {
  console.log('# tpb results: \n', data.length);
}).catch(function (err) {
    console.error('tpb error:', err);
});*/


