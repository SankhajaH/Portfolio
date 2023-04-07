import Container from '../components/container';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
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
