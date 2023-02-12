import clsx from 'clsx';
import Button from '~@components/Button';
import * as classes from './HeroLinkedIn.css';
import { LinkedInIcon } from '~@components/icons';
import Typography from '~@system/Typography';
import { useDesktop } from '~@system';

function HeroLinkedIn() {
  const isDesktop = useDesktop();
  return (
    <Button variant="floated" className={clsx(classes.root)}>
      <a
        href="https://www.linkedin.com/in/silveiraeduardo"
        target="_blank"
        rel="noreferrer"
        className={clsx(classes.content)}
      >
        <div className={clsx(classes.iconContainer)}>
          <LinkedInIcon />
        </div>
        {isDesktop && (
          <Typography variant="span" className={clsx(classes.text)}>
            Insights e análises para uma carreira mais saudável e produtiva
          </Typography>
        )}
      </a>
    </Button>
  );
}

export default HeroLinkedIn;
