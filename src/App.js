

import CardList from './components/card-list/cardList';
import SearchBox from './components/search-box/SearchBox';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [searchField, setSearchField] = useState()
  const [title,setTitle]=useState()
  const [monsters, setMonsters] = useState([])
 
  const [filteredMonsters,setFilteredMonsters]=useState(monsters)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then((users) => setMonsters(users))
  },[])

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters)
    
  },[monsters,searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }
  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setTitle(searchFieldString)
  }
 
  
  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>
      <SearchBox className='monster-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters' />
        <SearchBox className='title-search-box'
        onChangeHandler={onTitleChange}
        placeholder='set title' />

     

      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;
