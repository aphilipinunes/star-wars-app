import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';


export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(400, style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate(0, style({ opacity: 0 }))
  ])
]);


export const fadeOut = trigger('fadeOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(0, style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate(600, style({ opacity: 0 }))
  ])
]);


export const listAnimation = trigger('listAnimation', [
  transition('* => *', [
    // each time the binding value changes
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger(400, [animate('0.5s', style({ opacity: 1 }))])
      ],
      { optional: true }
    )
  ])
]);
