import React from 'react'

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>The Brutal Martian Landscape</h2>
        <div>
          <p>Description</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam officia id eos dolores sequi quia, a sapiente odit natus dolor reprehenderit quos quisquam incidunt, nulla nostrum sint velit, ipsa voluptate?</p>
        </div>
        <button><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  )
}
