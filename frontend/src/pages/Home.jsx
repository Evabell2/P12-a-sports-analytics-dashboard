import '../style/style.css'

function Home() {
    return (
      <div id='home'>
        <h1>Utilisateurs de SportSee</h1>
        <div>
          <button><a href="http://localhost:3001/user/18">Cecilia</a></button>
          <button><a href="http://localhost:3001/user/12">Karl</a></button>
        </div>
      </div>
    )
}
    
export default Home