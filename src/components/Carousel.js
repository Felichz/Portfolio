import React, { useEffect, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const transitionTime = 1000;

export const Carousel = ({
    images,
    autoPlay,
    changeDelay = 10000,
    scrollParent,
}) => {
    const [autoPlaying, setAutoPlaying] = useState(autoPlay);
    const [currentImage, setCurrentImage] = useState(0);
    const classes = useStyles();

    const prevImage = () => {
        if (currentImage === 0) {
            setCurrentImage(images.length - 1);
        } else {
            setCurrentImage(currentImage - 1);
        }
    };

    const nextImage = useCallback(() => {
        if (currentImage + 1 === images.length) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    }, [currentImage, images]);

    function handleClickPrev() {
        prevImage();
        setAutoPlaying(false);
    }

    function handleClickNext() {
        nextImage();
        setAutoPlaying(false);
    }

    useEffect(() => {
        if (autoPlaying) {
            const timeoutId = setTimeout(nextImage, changeDelay);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [autoPlaying, images, currentImage, nextImage, changeDelay]);

    useEffect(() => {
        console.log(scrollParent);
    }, [currentImage, scrollParent]);

    return (
        <>
            <div className={classes.imageContainer}>
                {images.map((image, idx) => (
                    <img
                        src={image}
                        alt="carousel"
                        key={idx}
                        className={`
                      ${classes.image}
                       
                      ${currentImage === idx ? classes.currentImage : ''}
                    `}
                    />
                ))}
                <IconButton
                    color="secondary"
                    aria-label="close modal"
                    className={`${classes.actionButton} ${classes.prevButton}`}
                    onClick={handleClickPrev}
                >
                    <NavigateBeforeIcon />
                </IconButton>
                <IconButton
                    color="secondary"
                    aria-label="close modal"
                    className={`${classes.actionButton} ${classes.nextButton}`}
                    onClick={handleClickNext}
                >
                    <NavigateNextIcon />
                </IconButton>
            </div>
            <div className={classes.navigation}>
                {images.map((_, idx) => (
                    <Button
                        variant="contained"
                        color="primary"
                        key={idx}
                        className={`
                          ${classes.indicator}
                          
                          ${currentImage === idx ? classes.activeIndicator : ''}
                        `}
                        onClick={() => setCurrentImage(idx)}
                    />
                ))}
            </div>
        </>
    );
};

const useStyles = makeStyles({
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#004d9f',
        // backgroundColor: '#ba0042',
        position: 'relative',
    },
    image: {
        maxWidth: '100%',
        width: '0%',
        opacity: 0,
        transition: `${transitionTime}ms`,
    },
    currentImage: {
        width: 'initial',
        opacity: 1,
    },
    actionButton: {
        position: 'absolute',
        top: 'calc(50% - 17px)',
        zIndex: 1,
        padding: '5px',
        background: 'white',
        boxShadow: '0px 0px 5px rgba(0,0,0,.5)',
        '&:hover': {
            background: 'white',
        },
    },
    prevButton: {
        left: '10px',
    },
    nextButton: {
        right: '10px',
    },
    navigation: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
    },
    indicator: {
        margin: '0 1px',
        borderRadius: '50%',
        padding: 0,
        width: '12px',
        height: '12px',
        minWidth: 0,
        boxShadow: 'none',
        background: '#007bff',
    },
    activeIndicator: {
        background: '#f50057',
    },
});
