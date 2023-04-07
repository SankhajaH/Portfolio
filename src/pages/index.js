import Container from '../components/Container/container';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import {Layout} from '../layout/Layout';

const Home = () => {
    return (
        <Layout title='Sankhaja Hapukotuwa'>
            <Container>
                <section id='home'>
                    <Hero />
                    <Projects />
                    <Technologies />
                </section>
            </Container>
        </Layout>
    );
};

export default Home;
