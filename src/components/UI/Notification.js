import classes from './Notification.module.css';

const Notification = ({ data }) => {
    const { status, title, msg } = data;
    let specialClasses = '';

    if (status === 'error') {
        specialClasses = classes.error;
    }
    if (status === 'success') {
        specialClasses = classes.success;
    }

    const cssClasses = `${classes.notification} ${specialClasses}`;

    return (
        <section className={cssClasses}>
            <h2>{title}</h2>
            <p>{msg}</p>
        </section>
    );
};

export default Notification;