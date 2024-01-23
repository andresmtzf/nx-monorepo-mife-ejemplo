import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <div
      style={{
        padding: '2rem',
        textAlign: 'center',
        placeItems: 'center',
        minWidth: '32px',
        minHeight: '50dvh',
      }}>
      <h2>Home</h2>
      <div>
        <NavLink to={'/private-remote'}>
          <button>Ir a componente remoto</button>
        </NavLink>
      </div>
    </div>
  )
}
