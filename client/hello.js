import styles from './hello.scss';
console.dir(styles)
// counter starts at 0
Template.hello.helpers({
    styles: styles
});
