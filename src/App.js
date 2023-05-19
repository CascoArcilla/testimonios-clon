import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <div className='contenedor-principal'>
        <Testimonio
            nombre='Shawn Wang'
            pais='Singapur'
            imagen='shawn'
            cargo='Ingeniero de software'
            empresa='Amazon'
            testimonio='Da miedo cambiar de carrera. Solo gané la congianza de que podia programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentero de un año tuve un trabajo de seis sifras como ingeniero de software. freeCodeCamp cambió mi vida.' />
        <Testimonio 
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniera en Software'
          empresa='ChatDesk'
          testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estruturado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa factible.' />
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera en Software'
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para apreneder JavaScript. He tenido muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, asi como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza para conseguir el trabajo de mis sueños como ingeniera de software en Spotify.' />
      </div>      
    </div>
  );
}

export default App;
