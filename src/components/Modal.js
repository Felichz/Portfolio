import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { Carousel } from './Carousel';

export default function Modal({
    open,
    image,
    video,
    iframe,
    carouselImages,
    title,
    description,
    technologies,
    onCloseRequest,
}) {
    // const [scrollElement, setScrollElement] = useState(null);
    // const parentElementRef = useRef(null);
    const classes = useStyles();
    const scroll = ['paper', 'body'][0];

    return (
        <div>
            <Dialog
                open={open}
                onClose={onCloseRequest}
                scroll={scroll}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                className={classes.modal}
            >
                <div className={classes.modalContainer}>
                    <DialogContent>
                        {image && (
                            <div className={classes.mediaContent}>
                                <img
                                    src={image}
                                    alt={title}
                                    className={classes.image}
                                />
                            </div>
                        )}
                        {video && (
                            <div className={classes.mediaContent}>
                                <video src={video} autoPlay controls />
                            </div>
                        )}
                        {iframe && (
                            <div className={classes.mediaContent}>
                                <iframe
                                    title={title}
                                    src={iframe.url}
                                    width={iframe.width}
                                    height={iframe.height}
                                    frameborder="0"
                                    scrolling
                                    allowfullscreen
                                    className={classes.iframe}
                                ></iframe>
                            </div>
                        )}
                        {carouselImages && (
                            <Carousel
                                images={carouselImages}
                                autoPlay={true}
                                changeDelay={5000}
                            />
                        )}
                        <div className={classes.modalTextContent}>
                            <h2 id="modal-title" className={classes.title}>
                                {title}
                            </h2>

                            {description && (
                                <DialogContentText
                                    id="modal-description"
                                    tabIndex={-1}
                                    className={classes.description}
                                >
                                    {description}
                                </DialogContentText>
                            )}
                        </div>
                        <div className={classes.bottomContent}>
                            {technologies && (
                                <div className={classes.technologies}>
                                    {technologies.map((tech, idx) => (
                                        <Chip
                                            label={tech}
                                            className={classes.techChip}
                                            color="secondary"
                                            key={idx}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </DialogContent>
                </div>
                <IconButton
                    color="secondary"
                    aria-label="close modal"
                    className={classes.closeButton}
                    onClick={onCloseRequest}
                >
                    <CloseIcon />
                </IconButton>
            </Dialog>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    modal: {
        '& .MuiPaper-root': {
            minWidth: 0,
            maxWidth: '1000px',
            margin: '0 15px',
            maxHeight: '90%',
            overflow: 'unset',
            borderRadius: '5px',
            boxShadow: 'none',
        },
    },
    closeButton: {
        position: 'absolute',
        top: '-16px',
        right: '-8.5px',
        zIndex: 1,
        padding: '5px',
        background: 'white',
        '&:hover': {
            background: 'white',
        },
    },
    modalContainer: {
        overflowY: 'auto',
        '& .MuiDialogContent-root': {
            padding: '0',
            paddingBottom: '10px',
            borderRadius: '5px',
        },
    },
    mediaContent: {
        // backgroundColor: '#005cbf',
        backgroundColor: '#013e80',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px -10px 10px -13px inset',
        height: '100%',
    },
    image: {
        maxWidth: '100%',
    },
    iframe: {
        backgroundColor: 'white',
    },
    modalTextContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 10px',
    },
    title: {
        fontWeight: 400,
        textAlign: 'center',
        margin: '10px 0',
    },
    description: {
        color: '#111',
        outline: 'none',
        marginBottom: '15px',
        width: '0',
        minWidth: '100%',
    },
    bottomContent: {
        display: 'flex',
        justifyContent: 'center',
    },
    technologies: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '0 10px',
    },
    techChip: {
        margin: '3px',
    },
}));
