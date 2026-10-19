import React, { useState } from 'react'

const POKEMON_LIST = [
  { id: '001', name: 'Bulbasaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' },
  { id: '004', name: 'Charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png' },
  { id: '007', name: 'Squirtle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png' },
  { id: '010', name: 'Caterpie', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png' },
  { id: '013', name: 'Weedle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png' },
  { id: '016', name: 'Pidgey', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png' },
  { id: '019', name: 'Rattata', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png' },
  { id: '021', name: 'Spearow', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png' },
  { id: '023', name: 'Ekans', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png' },
]

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPokemon = POKEMON_LIST.filter((pokemon) => {
    const cleanQuery = searchTerm.toLowerCase().trim().replace(/^#/, '')
    if (!cleanQuery) return true

    // Match by name
    const matchesName = pokemon.name.toLowerCase().includes(cleanQuery)

    // Match by ID (exact padded "001", exact raw number "1", or formatted "#001")
    const rawNumber = parseInt(pokemon.id, 10).toString()
    const matchesId = pokemon.id === cleanQuery || rawNumber === cleanQuery

    return matchesName || matchesId
  })

  return (
    <div className="pokedex-app">
      <div className="pokedex-container">
        {/* Header Section */}
        <header className="pokedex-header">
          <div className="title-row">
            <svg className="pokeball-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4.06189 11H8.17071C8.58254 9.29127 10.1422 8 12 8C13.8578 8 15.4175 9.29127 15.8293 11H19.9381C19.446 6.94632 16.0826 3.8 12 3.8C7.9174 3.8 4.55404 6.94632 4.06189 11ZM12 16C10.1422 16 8.58254 14.7087 8.17071 13H4.06189C4.55404 17.0537 7.9174 20.2 12 20.2C16.0826 20.2 19.446 17.0537 19.9381 13H15.8293C15.4175 14.7087 13.8578 16 12 16ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 10 10C10 10.8954 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="white"/>
            </svg>
            <h1 className="pokedex-title">Pokédex</h1>
          </div>

          <div className="search-row">
            <div className="search-bar">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="#DC0A2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="sort-button" type="button" aria-label="Sort">
              <span className="hashtag">#</span>
            </button>
          </div>
        </header>

        {/* Main Body Grid */}
        <main className="pokedex-body">
          {filteredPokemon.length > 0 ? (
            <div className="pokemon-grid">
              {filteredPokemon.map((pokemon) => (
                <div className="pokemon-card" key={pokemon.id}>
                  <span className="pokemon-number">#{pokemon.id}</span>
                  <div className="card-image-wrapper">
                    <div className="card-bg-shade"></div>
                    <img
                      src={pokemon.image}
                      alt={pokemon.name}
                      className="pokemon-image"
                      loading="lazy"
                    />
                  </div>
                  <h2 className="pokemon-name">{pokemon.name}</h2>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No se encontraron Pokémon</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
