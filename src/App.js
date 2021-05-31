import React from 'react';
import './App.css';
import Button from "./Button";
import Product from "./Product";
import Tile from "./Tile";

import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import our_story from "./assets/our_story.png";


function App() {
    return (
      <>
          <div className={"App"}>
        <h1>Handbags & Purses</h1>
        <nav>
            <Button value= "to the collection"
                    disabled={false}/>

            <Button value= "to the collection"
                    disabled={false}/>

            <Button value= "to the collection"
                    disabled={true}/>


        </nav>
          </div>

          <main>
              <Product
                  span={"Best seller"}
                  title={"The handy bag"}
                  price={"400"}
                  image={bag_1}
              />

              <Product
              span={"Best seller"}
              title={"The stylish bag"}
              price={"250"}
              image={bag_2}
              />

              <Product
              span={"New collection"}
              title={"The simple bag"}
              price={"300"}
              image={bag_3}
              />

              <Product
              span={"New collection"}
              title={"The trendy bag"}
              price={"150"}
              image={bag_4}
              />

          </main>

          <footer>
              <Tile
                  title={"THE BRAND"}
                  text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad dolore dolorem dolorum eos explicabo harum id incidunt maiores nisi numquam odio odit officia possimus, quibusdam temporibus unde veniam, veritatis."}
                  text1={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae, corporis cum debitis distinctio dolorum ducimus earum, enim ex in natus repellat sed soluta. Accusamus asperiores dolorum laboriosam perferendis rerum."}
                  image={""}
                  />

              <Tile
                  title={""}
                  text={""}
                  image={brand}
              />

              <Tile
                  title={""}
                  text={""}
                  image={our_story}
              />

              <Tile
                  title={"OUR STORY"}
                  text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci autem deleniti ex laborum pariatur placeat repellendus! Autem dolorum facere in inventore magnam magni modi odio recusandae sapiente, tempora tempore?"}
                  image={""}
              />
          </footer>
      </>
    );
}

export default App;





