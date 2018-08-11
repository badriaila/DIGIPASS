import { animation, style, animate } from '@angular/animations';

// re-usable animations starts

export let slideAnimation = animation([
    style({opacity:0, transform:'translateX(-100%)'}),
    animate(500)
]);

export let zoomInAnimation = animation([
    style({opacity:0, transform:'scale(3,3)'}),
    animate(500)
]);

export let dropInAnimation = animation([
    style({transform:'translateY(500px)'}),
    animate('0.8s cubic-bezier(0,.32,.46,1.73)')
]);

// re-usable animation ends