import React from 'react';
import styled from 'styled-components';
import { Mic, CheckCircle, DollarSign, Users, Gamepad2 } from 'lucide-react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #111827;
  color: #f3f4f6;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  height: 3.5rem;
  border-bottom: 1px solid #374151;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-weight: bold;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  color: #f3f4f6;
  &:hover {
    color: #10b981;
  }
`;

const Main = styled.main`
  flex: 1;
`;

const Section = styled.section`
  width: 100%;
  padding: 3rem 1rem;
  @media (min-width: 768px) {
    padding: 6rem 1.5rem;
  }
`;

const HeroSection = styled(Section)`
  background-color: #1f2937;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  color: #10b981;
  margin-bottom: 1rem;
  @media (min-width: 640px) {
    font-size: 3rem;
  }
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #9ca3af;
  max-width: 700px;
  margin: 0 auto 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
`;

const PrimaryButton = styled(Button)`
  background-color: #10b981;
  color: white;
  &:hover {
    background-color: #059669;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #10b981;
  color: #10b981;
  &:hover {
    background-color: #10b981;
    color: #111827;
  }
`;

const FeatureSection = styled(Section)`
  background-color: #111827;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  color: #10b981;
  text-align: center;
  margin-bottom: 3rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  gap: 2.5rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background-color: #1f2937;
  border-radius: 0.5rem;
`;

const FeatureIcon = styled.div`
  margin-bottom: 0.5rem;
  color: #10b981;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #10b981;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;
`;

const TaskSection = styled(Section)`
  background-color: #1f2937;
`;

const TaskGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TaskCard = styled.div`
  padding: 1.5rem;
  background-color: #111827;
  border: 1px solid #374151;
  border-radius: 0.5rem;
`;

const TaskTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #10b981;
  margin-bottom: 0.5rem;
`;

const TaskDescription = styled.p`
  color: #9ca3af;
`;

const CTASection = styled(Section)`
  background-color: #111827;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  max-width: 24rem;
  margin: 0 auto;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #374151;
  border-radius: 0.375rem 0 0 0.375rem;
  background-color: #1f2937;
  color: #f3f4f6;
`;

const SubmitButton = styled(PrimaryButton)`
  border-radius: 0 0.375rem 0.375rem 0;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem 1rem;
  border-top: 1px solid #374151;
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.75rem;
  color: #9ca3af;
`;

const FooterNav = styled(Nav)`
  @media (min-width: 640px) {
    margin-left: auto;
  }
`;

const FooterLink = styled(NavLink)`
  font-size: 0.75rem;
`;

const MainPage = () => {
    return (
        <Container>
            <Header>
                <Logo href="#">
                    <Gamepad2 size={24} />
                    <span style={{ marginLeft: '0.5rem' }}>CrowdSource Audio</span>
                </Logo>
                <Nav>
                    <NavLink href="#">Features</NavLink>
                    <NavLink href="#">Pricing</NavLink>
                    <NavLink href="#">About</NavLink>
                    <NavLink href="#">Contact</NavLink>
                </Nav>
            </Header>
            <Main>
                <HeroSection>
                    <Title>Level Up Your Contributions</Title>
                    <Subtitle>
                        Contribute to AI advancement through simple tasks and audio recordings. Earn rewards for your participation.
                    </Subtitle>
                    <ButtonGroup>
                        <PrimaryButton>Start Mission</PrimaryButton>
                        <SecondaryButton>Learn More</SecondaryButton>
                    </ButtonGroup>
                </HeroSection>
                <FeatureSection>
                    <SectionTitle>Platform Features</SectionTitle>
                    <FeatureGrid>
                        <FeatureCard>
                            <FeatureIcon>
                                <Mic size={32} />
                            </FeatureIcon>
                            <FeatureTitle>Audio Collection</FeatureTitle>
                            <FeatureDescription>
                                Record voice samples for various AI training purposes.
                            </FeatureDescription>
                        </FeatureCard>
                        <FeatureCard>
                            <FeatureIcon>
                                <CheckCircle size={32} />
                            </FeatureIcon>
                            <FeatureTitle>Microtasks</FeatureTitle>
                            <FeatureDescription>
                                Complete quick, simple tasks to help improve AI algorithms.
                            </FeatureDescription>
                        </FeatureCard>
                        <FeatureCard>
                            <FeatureIcon>
                                <DollarSign size={32} />
                            </FeatureIcon>
                            <FeatureTitle>Rewards</FeatureTitle>
                            <FeatureDescription>
                                Earn points or cash for your contributions to the platform.
                            </FeatureDescription>
                        </FeatureCard>
                    </FeatureGrid>
                </FeatureSection>
                <TaskSection>
                    <SectionTitle>Audio Collection Quests</SectionTitle>
                    <TaskGrid>
                        <TaskCard>
                            <TaskTitle>Voice Commands</TaskTitle>
                            <TaskDescription>
                                Record common voice commands to improve voice assistants.
                            </TaskDescription>
                        </TaskCard>
                        <TaskCard>
                            <TaskTitle>Accent Samples</TaskTitle>
                            <TaskDescription>
                                Provide accent samples to enhance speech recognition systems.
                            </TaskDescription>
                        </TaskCard>
                        <TaskCard>
                            <TaskTitle>Emotion in Speech</TaskTitle>
                            <TaskDescription>
                                Record emotional speech samples for sentiment analysis training.
                            </TaskDescription>
                        </TaskCard>
                    </TaskGrid>
                </TaskSection>
                <CTASection>
                    <SectionTitle>Join Our Guild</SectionTitle>
                    <Subtitle>
                        Be part of the AI revolution. Start contributing today and earn rewards for your efforts.
                    </Subtitle>
                    <Form>
                        <Input type="email" placeholder="Enter your email" />
                        <SubmitButton type="submit">Sign Up</SubmitButton>
                    </Form>
                </CTASection>
            </Main>
            <Footer>
                <Copyright>© 2024 CrowdSource Audio. All rights reserved.</Copyright>
                <FooterNav>
                    <FooterLink href="#">Terms of Service</FooterLink>
                    <FooterLink href="#">Privacy</FooterLink>
                </FooterNav>
            </Footer>
        </Container>
    );
};

export default MainPage;