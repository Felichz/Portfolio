import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
// import CircularProgress from '@material-ui/core/CircularProgress';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import { useIsMobile } from '../hooks/useIsMobile';

export const TimeLine = ({ items }) => {
    const [isLoading, setIsLoading] = useState(false);
    const isMobile = useIsMobile(() => {
        // Show loading overlay on viewport breakpoint
        document.body.style.overflowY = 'hidden';
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflowY = 'scroll';
        }, 200);
    });

    const classes = useStyles();

    const closeLoadingOverlay = () => {
        setIsLoading(false);
    };

    return (
        <div>
            <Backdrop
                className={classes.backdrop}
                open={isLoading}
                onClick={closeLoadingOverlay}
            >
                <p>Changing interface</p>
                {/* <CircularProgress color="inherit" disableShrink thickness={2} /> */}
            </Backdrop>
            {items.map(([year, items]) => (
                <div key={year}>
                    <Fade bottom key={year + 'text'}>
                        <h3 className={classes.yearText}>{year}</h3>
                    </Fade>

                    <Timeline
                        align={isMobile ? 'right' : 'alternate'}
                        className={isMobile ? classes.timelineMobile : ''}
                        key={year + 'timeline'}
                    >
                        {items.map((item, idx) => {
                            const align = isMobile
                                ? 'left'
                                : idx % 2
                                ? 'left'
                                : 'right';
                            const alignIsLeft = align === 'left';
                            const alignIsRight = align === 'right';

                            return (
                                <TimelineItem
                                    className={
                                        isMobile
                                            ? classes.timelineItemMobile
                                            : ''
                                    }
                                    key={idx}
                                >
                                    {!isMobile && (
                                        <TimelineOppositeContent>
                                            <span className={classes.monthText}>
                                                {item.month}
                                            </span>
                                        </TimelineOppositeContent>
                                    )}
                                    <TimelineSeparator
                                        className={
                                            isMobile
                                                ? classes.timelineSeparatorMobile
                                                : ''
                                        }
                                    >
                                        {isMobile && (
                                            <span className={classes.monthText}>
                                                {item.month}
                                            </span>
                                        )}
                                        {item.month && (
                                            <TimelineDot
                                                color="secondary"
                                                className={classes.timelineDot}
                                            />
                                        )}
                                        <TimelineConnector
                                            className={classes.connector}
                                        />
                                    </TimelineSeparator>

                                    <TimelineContent
                                        className={`
                                            ${classes.timelineContent}
                                            
                                            ${
                                                alignIsLeft
                                                    ? classes.leftTimelineContent
                                                    : ''
                                            }
                                            
                                            ${isMobile ? classes.timelineContentMobile : ''}
                                            
                                            ${
                                                isMobile && item.month
                                                    ? classes.timelineContentMobileWithMonth
                                                    : ''
                                            }
                                        `}
                                    >
                                        <Zoom>
                                            {isMobile ? (
                                                <div>
                                                    {React.cloneElement(
                                                        item.content,
                                                        {
                                                            align,
                                                        }
                                                    )}
                                                </div>
                                            ) : (
                                                <Fade
                                                    left={alignIsLeft}
                                                    right={alignIsRight}
                                                >
                                                    <div>
                                                        {React.cloneElement(
                                                            item.content,
                                                            {
                                                                align,
                                                            }
                                                        )}
                                                    </div>
                                                </Fade>
                                            )}
                                        </Zoom>
                                    </TimelineContent>
                                </TimelineItem>
                            );
                        })}
                    </Timeline>
                </div>
            ))}
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
        background: '#007bff',
        flexDirection: 'column',
        fontSize: '24px',
        fontWeight: 100,
    },
    yearText: {
        textAlign: 'center',
        fontSize: '26px',
        fontWeight: 400,
        color: 'white',
        borderBottom: '2px solid white',
        width: '300px',
        margin: '0 auto',
        marginTop: '50px',
        marginBottom: '20px',
    },
    relative: {
        position: 'relative',
    },
    timelineMobile: {
        alignItems: 'flex-end',
        padding: '6px',
    },
    timelineItemMobile: {
        '&:before': {
            display: 'none',
        },
        position: 'relative',
    },
    timelineSeparatorMobile: {
        width: '70px',
        flex: 'none',
    },
    monthText: {
        color: 'white',
        textAlign: 'center',
    },
    timelineDot: {
        backgroundColor: 'white',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    timelineContent: {
        display: 'flex',
        marginTop: '3px',
    },
    leftTimelineContent: {
        justifyContent: 'flex-end',
        '& .course-icon': {
            left: '-27.5px',
            right: 0,
        },
    },
    timelineContentMobile: {
        marginRight: '-34px',
        '& .course-icon': {
            width: '40px',
            height: '40px',
            left: '-20px',
            right: 0,
        },
    },
    timelineContentMobileWithMonth: {
        marginTop: '22px',
    },
}));
