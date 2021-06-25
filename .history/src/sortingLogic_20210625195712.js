import Sortable from 'sortablejs/modular/sortable.complete.esm.js';

var left1=document.getElementById('sortable-1-left')
var right1=document.getElementById('sortable-1-right')


new Sortable(left1, {
    group: {
        name: 'shared',
        pull: 'clone',
        put: false // Do not allow items to be put into this list
    },
    animation: 150,
    sort: false // To disable sorting: set sort to false
});

new Sortable(right1, {
    group: 'shared',
    animation: 150
});