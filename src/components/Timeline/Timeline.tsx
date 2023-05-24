import { ReactNode } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Typography from '~@system/Typography';
import { DesignerIcon, HistoryIcon, LaptopIcon, SchoolIcon } from '~@components/icons';
import * as classes from './Timeline.css';

export type TimelineList = {
  alt: string;
  images: {
    src: string;
    width: number;
    height: number;
  }[];
  logo?: {
    src: string;
    width: number;
    height: number;
  };
  year: number;
  highlightVariants?: 'target' | 'default' | 'current';
  icon?: ReactNode;
  iconText?: 'UX Designer' | 'Graduação' | 'UX/UI Designer' | 'UX Lead' | 'Pós-graduação';
  logoVariant?: 'target' | 'contrast' | 'default';
  className?: string;
}[];

const timeline: TimelineList = [
  {
    alt: 'integra commerce',
    images: [
      {
        src: '/images/timeline/Eduardo_Silveira_integracommerce.png',
        width: 173,
        height: 123,
      },
    ],
    logo: {
      src: '/images/logos/Eduardo_Silveira_integracommerce-2.png',
      width: 120,
      height: 48,
    },
    logoVariant: 'contrast',
    year: 2014,
    highlightVariants: 'target',
    icon: <DesignerIcon />,
    iconText: 'UX Designer',
  },
  {
    alt: 'univas',
    images: [
      {
        src: '/images/timeline/Eduardo_Silveira_univas.png',
        width: 173,
        height: 123,
      },
    ],
    logo: {
      src: '/images/logos/Eduardo_Silveira_univas-2.png',
      width: 80,
      height: 28,
    },
    logoVariant: 'target',
    year: 2015,
    highlightVariants: 'default',
    icon: <SchoolIcon />,
    iconText: 'Graduação',
  },
  {
    alt: 'riachuelo-2016',
    images: [
      {
        src: '/images/timeline/Eduardo_Silveira_riachuelo.png',
        width: 173,
        height: 173,
      },
    ],
    year: 2016,
    highlightVariants: 'default',
  },
  {
    alt: 'luizalabs',
    images: [
      {
        src: '/images/timeline/Eduardo_Silveira_riachuelo--2.png',
        width: 173,
        height: 116,
      },
    ],
    logo: {
      src: '/images/logos/Eduardo_Silveira_luizalabs.png',
      width: 120,
      height: 48,
    },
    logoVariant: 'default',
    year: 2017,
    highlightVariants: 'target',
    icon: <DesignerIcon />,
    iconText: 'UX Designer',
  },
  {
    alt: 'magalu',
    images: [
      {
        src: '/images/timeline/Eduardo_Silveira_riachuelomais.png',
        width: 173,
        height: 173,
      },
      {
        src: '/images/timeline/Eduardo_Silveira_riachuelomais--2.png',
        width: 173,
        height: 86,
      },
    ],
    logo: {
      src: '/images/logos/Eduardo_Silveira_magalu.png',
      width: 120,
      height: 48,
    },
    logoVariant: 'default',
    year: 2018,
    highlightVariants: 'default',
    icon: <DesignerIcon />,
    iconText: 'UX Designer',
  },
  {
    alt: 'riachuelo-2019',
    images: [
      {
        src: '/images/timeline/Eduardo_Silveira_simplifique.png',
        width: 173,
        height: 86,
      },
      {
        src: '/images/timeline/Eduardo_Silveira_simplifique--2.png',
        width: 173,
        height: 173,
      },
    ],
    logo: {
      src: '/images/logos/Eduardo_Silveira_riachuelo.png',
      width: 120,
      height: 48,
    },
    logoVariant: 'contrast',
    year: 2019,
    highlightVariants: 'target',
    icon: <DesignerIcon />,
    iconText: 'UX Designer',
  },
  {
    alt: 'riachuelo-2021',
    images: [
      {
        src: '/images/timeline/Eduardo_Silveira_ux_lead.png',
        width: 173,
        height: 76,
      },
      {
        src: '/images/timeline/Eduardo_Silveira_ux_lead--2.png',
        width: 173,
        height: 86,
      },
    ],
    year: 2021,
    highlightVariants: 'default',
    icon: <LaptopIcon />,
    iconText: 'UX Lead',
  },
  {
    alt: 'espm',
    images: [
      {
        src: '/images/timeline/Eduardo_Silveira_espm.png',
        width: 173,
        height: 123,
      },
    ],
    logo: {
      src: '/images/logos/Eduardo_Silveira_espm-2.png',
      width: 80,
      height: 28,
    },
    logoVariant: 'target',
    year: 2022,
    highlightVariants: 'current',
    icon: <HistoryIcon />,
    iconText: 'Pós-graduação',
  },
];

function Timeline() {
  return (
    <div className={classes.root}>
      <span className={classes.timelineContainer}>
        <ul className={classes.timeline}>
          {timeline.map(
            ({
              alt,
              images = [],
              logo,
              year,
              highlightVariants = 'default',
              icon,
              iconText,
              logoVariant = 'default',
              className,
            }) => (
              <li className={clsx(classes.timelineMilestoneContainer, className)} key={year}>
                <div className={classes.timelineImageContainer}>
                  {images.map(({ src, width, height }) => (
                    <Image
                      key={src}
                      className={classes.timelineImage}
                      alt={alt}
                      src={src}
                      width={width}
                      height={height}
                    />
                  ))}
                </div>
                <div
                  className={clsx(classes.timelineLogoContainer, classes.timelineLogoContainerVariant?.[logoVariant])}
                >
                  {logo && <Image alt={alt} src={logo?.src} width={logo?.width} height={logo?.height} />}
                </div>
                <div className={classes.timelineHighlightVariants?.[highlightVariants]}>
                  <span className={classes.timelineSpot} />
                </div>
                <Typography variant="span" className={classes.timelineYearText}>
                  {year}
                </Typography>
                <div className={classes.iconContainer}>
                  {icon}
                  <Typography variant="span" className={classes.iconContainerText}>
                    {iconText}
                  </Typography>
                </div>
              </li>
            ),
          )}
        </ul>
      </span>
    </div>
  );
}

export default Timeline;
