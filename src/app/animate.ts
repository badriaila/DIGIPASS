import { dropInAnimation, slideAnimation, zoomInAnimation } from './animations';
import { trigger, transition, query, animateChild, animation, useAnimation } from "@angular/animations";



export let dropin = trigger('dropin',[transition(':enter', useAnimation(dropInAnimation))]);