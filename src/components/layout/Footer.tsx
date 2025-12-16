import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  border-top: 1px solid #222;
  margin-top: auto;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterText = styled.p`
  color: #808080;
  font-size: 0.9rem;
`;

const FooterLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  color: #d0d0d0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  &:hover {
    color: #e50914;
  }

  &:focus-visible {
    outline: 2px solid #e50914;
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper role="contentinfo" aria-label="Rodapé do site BotFlix">
      <FooterContent>
        <FooterText>BotFlix - Seu assistente pessoal para encontrar o filme perfeito</FooterText>
        <FooterLinks>
          <FooterLink href="#" aria-label="Saiba mais sobre BotFlix">Sobre</FooterLink>
          <FooterLink href="#" aria-label="Entre em contato com BotFlix">Contato</FooterLink>
          <FooterLink href="#" aria-label="Leia nossos termos de uso">Termos de Uso</FooterLink>
          <FooterLink href="#" aria-label="Política de privacidade">Privacidade</FooterLink>
        </FooterLinks>
        <FooterText>© {new Date().getFullYear()} BotFlix. Todos os direitos reservados.</FooterText>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;