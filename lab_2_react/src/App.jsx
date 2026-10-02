import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header name="Князик Анастасія" role="Cybersecurity Intern" />
      <main>
        <section>
          <h2>Про мене</h2>
          <p>
            Студентка, яка вивчає кібербезпеку, інформаційну безпеку, кібергігієну та сучасні методи захисту даних.
          </p>
        </section>
        <Experience />
        <Education />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;