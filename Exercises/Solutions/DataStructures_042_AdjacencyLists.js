
var undirectedAdjList = {};
undirectedAdjList['James'] = ['Jeff'];
undirectedAdjList['Jill'] = ['Jenny'];
undirectedAdjList['Jenny'] = ['Jill','Jeff'];
undirectedAdjList['Jeff'] = ['James','Jenny'];

/* or, alternatively, having gone like this

var undirectedAdjList = {
 James: ['Jeff'],
 Jill : ['Jenny'],
 Jenny: ['Jill','Jeff'],
 Jeff : ['James','Jenny']
};

*/

