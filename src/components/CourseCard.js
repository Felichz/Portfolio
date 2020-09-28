import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useIsMobile } from '../hooks/useIsMobile';
import { useDisableContextMenu } from '../hooks/useDisableContextMenu';
import Modal from './Modal';

export const CourseCard = ({ title, icon, coursePage, modal }) => {
    const [showModal, setShowModal] = useState(false);
    const isMobile = useIsMobile();
    const classes = useStyles();
    const disableContextMenuRef = useDisableContextMenu();

    return (
        <>
            <Card className={classes.root}>
                {icon && (
                    <img
                        src={icon}
                        alt="Course icon"
                        className={`${classes.courseIcon} course-icon`}
                    />
                )}
                <CardActionArea>
                    <CardContent
                        className={classes.cardContent}
                        ref={disableContextMenuRef}
                        onClick={() => setShowModal(true)}
                    >
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className={`
                            ${classes.cardTitle}
                             
                            ${isMobile ? classes.cardTitleMobile : ''}
                        `}
                        >
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                    {modal && modal.image && (
                        <Button
                            size="small"
                            color="primary"
                            onClick={() => setShowModal(true)}
                            className={`
                        ${classes.cardActionButton}
                         
                        ${isMobile ? classes.cardActionButtonMobile : ''}
                    `}
                        >
                            {isMobile ? 'Certificate' : 'View certificate'}
                        </Button>
                    )}
                    {coursePage && (
                        <a
                            href={coursePage}
                            target="blank"
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                size="small"
                                color="primary"
                                className={`
                        ${classes.cardActionButton}
                         
                        ${isMobile ? classes.cardActionButtonMobile : ''}
                    `}
                            >
                                {isMobile ? 'Course page' : 'Go to course page'}
                            </Button>
                        </a>
                    )}
                </CardActions>
            </Card>
            {modal && (
                <Modal
                    open={showModal}
                    onCloseRequest={() => setShowModal(false)}
                    title={title}
                    image={modal.image}
                    description={modal.description}
                    technologies={modal.technologies}
                />
            )}
        </>
    );
};

const useStyles = makeStyles({
    root: {
        position: 'relative',
        overflow: 'unset',
    },
    courseIcon: {
        position: 'absolute',
        zIndex: 1,
        width: '55px',
        height: '55px',
        top: '-2px',
        right: '-27.5px',
        borderRadius: '50%',
        backgroundColor: 'transparent',
    },
    cardContent: {
        padding: 0,
    },
    cardTitle: {
        padding: '10px 34px',
        margin: 0,
        textAlign: 'center',
        background: '#27a8da',
        color: 'white',
        borderRadius: '3px 3px 0 0',
        borderBottom: 'solid 5px #1e7fa5',
        boxShadow: '12px 12px 18px rgba(255,255,255,.1) inset',
    },
    cardTitleMobile: {
        padding: '10px 25px',
        fontSize: '18px',
    },
    cardActions: {
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
    },
    cardActionButton: {
        padding: '10px',
        borderRadius: 0,
    },
    cardActionButtonMobile: {
        fontSize: '12px',
    },
});
