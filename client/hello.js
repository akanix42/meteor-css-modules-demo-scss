import styles from './hello.css';
console.dir(styles)
// counter starts at 0
Template.hello.helpers({
    styles: styles
});
