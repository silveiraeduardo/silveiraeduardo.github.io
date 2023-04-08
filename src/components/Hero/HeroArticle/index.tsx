import clsx from 'clsx';
import Box from '~@system/Box';
import Typography from '~@system/Typography';
import { article } from './HeroArticle.css';
import { tokens } from '~@styles';

const HeroArticle = () => (
  <Box as="article" className={clsx(article)}>
    <Typography
      variant="p"
      style={{
        marginBottom: '24px',
      }}
    >
      👋 UX designer, que vive criando jornadas, guides, interfaces e fazendo café (e fica bom).
    </Typography>
    <Typography
      variant="p"
      style={{
        marginBottom: '24px',
      }}
    >
      Já estou nesse caminho há alguns anos trabalhando com ecommerce, apps e marketplace, passando por integracommerce,
      luizalabs, magalu e riachuelo. sempre fazendo o melhor possível, estudando e agregando conhecimentos.
    </Typography>
    <Typography variant="p" aria-label="conheça meu portfólio ou acesse meu linkedin.">
      conheça meu{' '}
      <a
        style={{
          color: tokens.colors.primary,
        }}
        href="https://www.behance.net/_eduardosilveira"
        target="_blank"
        rel="noreferrer noopenner"
      >
        portfólio
      </a>{' '}
      ou acesse meu{' '}
      <a
        style={{
          color: tokens.colors.primary,
        }}
        href="https://www.linkedin.com/in/silveiraeduardo"
        target="_blank"
        rel="noreferrer noopenner"
      >
        linkedin
      </a>
      .
    </Typography>
  </Box>
);

export default HeroArticle;
