import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useDisableContextMenu } from '../hooks/useDisableContextMenu';
import Modal from './Modal';

export const ProjectCard = ({
    image,
    title,
    demoLink,
    sourceCodeLink,
    modal,
    align = 'left',
}) => {
    const [showModal, setShowModal] = useState(false);
    const classes = useStyles();

    const disableContextMenuRef = useDisableContextMenu();

    return (
        <>
            <Card className={classes.root}>
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
                            className={classes.cardTitle + ' ' + align}
                        >
                            {title}
                        </Typography>
                        {image && (
                            <img
                                src={image}
                                alt={title}
                                className={classes.cardImage}
                            />
                        )}
                    </CardContent>
                </CardActionArea>
                {(demoLink || sourceCodeLink) && (
                    <CardActions className={classes.cardActions}>
                        {demoLink && (
                            <a
                                href={demoLink}
                                target="blank"
                                style={{ textDecoration: 'none' }}
                            >
                                <Button
                                    size="small"
                                    color="secondary"
                                    className={classes.cardActionButton}
                                >
                                    See demo
                                </Button>
                            </a>
                        )}
                        {sourceCodeLink && (
                            <a
                                href={sourceCodeLink}
                                target="blank"
                                style={{ textDecoration: 'none' }}
                            >
                                <Button
                                    size="small"
                                    color="secondary"
                                    className={classes.cardActionButton}
                                >
                                    Source code
                                </Button>
                            </a>
                        )}
                    </CardActions>
                )}
            </Card>
            {modal && (
                <Modal
                    open={showModal}
                    onCloseRequest={() => setShowModal(false)}
                    title={title}
                    {...modal}
                />
            )}
        </>
    );
};

const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
    },
    media: {
        height: 140,
    },
    cardContent: {
        padding: 0,
    },
    cardTitle: {
        padding: '10px',
        margin: 0,
        textAlign: 'center',
        background: '#f50057',
        color: 'white',
        borderBottom: 'solid 5px #c10045',
        boxShadow: '12px 12px 18px rgba(255,255,255,.1) inset',
    },
    cardImage: {
        width: '100%',
        boxShadow: '0px 10px 5px black inset',
        marginBottom: '-4px',
        borderBottom: 'solid 6px #007bff'
    },
    cardActions: {
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
    },
    cardActionsToRight: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardActionButton: {
        padding: '10px',
        borderRadius: 0,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
