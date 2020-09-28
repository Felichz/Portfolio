import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { TimeLine } from '../components/Timeline';
import { timelineItems } from '../timelineItems';

export const Home = () => {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <h1 className={classes.title}>Felix Andersson</h1>
            <h2 className={classes.subtitle}>Portfolio</h2>
            <TimeLine items={timelineItems} />
        </>
    );
};

const useStyles = makeStyles({
    '@global': {
        body: {
            margin: '15px',
            background:
                '#007bff linear-gradient(180deg, rgb(0, 123, 255) 0%, rgb(0, 100, 208) 100%)',
            fontFamily: 'Roboto',
            overflowX: 'hidden',
        },
    },
    title: {
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: '60px',
        marginBottom: 0,
    },
    subtitle: {
        color: 'white',
        fontWeight: '400',
        textAlign: 'center',
        fontSize: '30px',
        marginTop: 0,
    },
});
