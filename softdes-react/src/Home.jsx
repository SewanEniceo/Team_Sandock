import React, { useState } from 'react';
import { Category } from './assets/Category';

export default function Dashboard() {
const [search, setSearch] = useState('')


  return (
    <div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
        <h1>Categories</h1>
        <div className="search-box">
          <input onChange={(ev) => setSearch(ev.target.value)} type="text" placeholder="Search Book" />
        </div>
      </div>
      <div className="categories">
      {Category.filter((categ) => {
        return search === '' ? categ : categ.category.toLowerCase().includes(search);
      }).map((categ, index) => (
        <div className="category" key="index">
          <div className="category-icon">{categ.category}</div>
        </div>
        ))}
      </div>
    </div>
  );
}
